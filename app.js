const timeDisplay = document.querySelector("#timeDisplay");
const statusText = document.querySelector("#statusText");
const progressFill = document.querySelector("#progressFill");
const startPauseButton = document.querySelector("#startPauseButton");
const resetButton = document.querySelector("#resetButton");
const durationForm = document.querySelector("#durationForm");
const durationInput = document.querySelector("#durationInput");
const soundToggle = document.querySelector("#soundToggle");
const finishPanel = document.querySelector("#finishPanel");
const doneButton = document.querySelector("#doneButton");
const restartButton = document.querySelector("#restartButton");

const minute = 60;
const minMinutes = 1;
const maxMinutes = 999;
let selectedSeconds = 30 * minute;
let remainingSeconds = selectedSeconds;
let timerId = null;
let targetTime = null;
let soundEnabled = true;
let wakeLock = null;
let audioContext = null;
let alarmTimerId = null;

document.body.dataset.state = "ready";
document.body.dataset.sound = "on";
document.body.dataset.alarm = "off";

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, Math.ceil(totalSeconds));
  const minutes = Math.floor(safeSeconds / minute);
  const seconds = safeSeconds % minute;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
  timeDisplay.setAttribute("aria-label", `${formatTime(remainingSeconds)} remaining`);

  const progress = selectedSeconds === 0 ? 0 : (remainingSeconds / selectedSeconds) * 100;
  progressFill.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function setStatus(text) {
  statusText.textContent = text;
}

function setState(state) {
  document.body.dataset.state = state;
}

function clampMinutes(minutes) {
  const wholeMinutes = Math.floor(Number(minutes));

  if (!Number.isFinite(wholeMinutes)) {
    return minMinutes;
  }

  return Math.max(minMinutes, Math.min(maxMinutes, wholeMinutes));
}

function cleanMinuteText(value) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  const minutes = Number(digits);

  if (!Number.isFinite(minutes)) {
    return "";
  }

  if (minutes > maxMinutes) {
    return String(maxMinutes);
  }

  return String(minutes);
}

function readMinuteInput() {
  const cleaned = cleanMinuteText(durationInput.value);

  if (durationInput.value !== cleaned) {
    durationInput.value = cleaned;
  }

  if (!cleaned || Number(cleaned) < minMinutes) {
    return null;
  }

  return clampMinutes(cleaned);
}

function setStartEnabled(enabled) {
  startPauseButton.disabled = !enabled;
}

function setDuration(minutes) {
  const safeMinutes = clampMinutes(minutes);
  stopTimer();
  selectedSeconds = safeMinutes * minute;
  remainingSeconds = selectedSeconds;
  durationInput.value = String(safeMinutes);
  finishPanel.hidden = true;
  setStartEnabled(true);
  setState("ready");
  setStatus("Ready");
  updateDisplay();
}

function handleDurationInput() {
  const minutes = readMinuteInput();

  if (minutes === null) {
    setStartEnabled(false);
    setStatus("Enter minutes");
    return;
  }

  setDuration(minutes);
}

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) {
    return;
  }

  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch {
    wakeLock = null;
  }
}

async function releaseWakeLock() {
  if (!wakeLock) {
    return;
  }

  try {
    await wakeLock.release();
  } catch {
    // The browser may already have released it.
  } finally {
    wakeLock = null;
  }
}

function updateSoundButton() {
  const label = soundEnabled ? "Sound On" : "Sound Off";
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.setAttribute("aria-label", label);
  soundToggle.setAttribute("title", label);
  soundToggle.classList.toggle("sound-on", soundEnabled);
  soundToggle.classList.toggle("sound-off", !soundEnabled);
  soundToggle.querySelector("span").textContent = label;
  document.body.dataset.sound = soundEnabled ? "on" : "off";
}

async function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  return audioContext;
}

async function unlockAudio() {
  if (!soundEnabled) {
    return false;
  }

  try {
    const context = await getAudioContext();
    return context?.state === "running";
  } catch {
    return false;
  }
}

function playTone(context, startOffset, frequency, duration, volume = 0.42, type = "sine") {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const start = context.currentTime + startOffset;
  const end = start + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.92, end);
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, end);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(end + 0.03);
}

function playAlarmBurst() {
  if (!audioContext || !soundEnabled) {
    return;
  }

  playTone(audioContext, 0, 1240, 0.18, 0.75, "square");
  playTone(audioContext, 0.2, 620, 0.18, 0.7, "sawtooth");
  playTone(audioContext, 0.4, 1240, 0.18, 0.75, "square");
  playTone(audioContext, 0.6, 520, 0.24, 0.72, "sawtooth");
}

async function startAlarm() {
  if (!(await unlockAudio()) || !audioContext) {
    return;
  }

  stopAlarm();
  document.body.dataset.alarm = "on";
  playAlarmBurst();
  alarmTimerId = window.setInterval(playAlarmBurst, 950);
}

function stopAlarm() {
  window.clearInterval(alarmTimerId);
  alarmTimerId = null;
  document.body.dataset.alarm = "off";
}

async function playSoundPreview() {
  if (!(await unlockAudio()) || !audioContext) {
    return;
  }

  playTone(audioContext, 0, 760, 0.13, 0.25, "triangle");
}

function vibrate() {
  if ("vibrate" in navigator) {
    navigator.vibrate([500, 150, 500, 150, 700]);
  }
}

function stopTimer() {
  window.clearInterval(timerId);
  timerId = null;
  targetTime = null;
  startPauseButton.textContent = "Start";
  startPauseButton.classList.remove("pause");
  releaseWakeLock();
}

function finishTimer() {
  remainingSeconds = 0;
  stopTimer();
  setState("finished");
  setStatus("Finished");
  updateDisplay();
  finishPanel.hidden = false;
  startAlarm();
  vibrate();
  restartButton.focus();
}

function tick() {
  const secondsLeft = (targetTime - Date.now()) / 1000;
  remainingSeconds = Math.max(0, secondsLeft);

  if (remainingSeconds <= 0) {
    finishTimer();
    return;
  }

  updateDisplay();
}

function startTimer() {
  const minutes = readMinuteInput();

  if (minutes === null) {
    setDuration(minMinutes);
  }

  if (remainingSeconds <= 0) {
    remainingSeconds = selectedSeconds;
  }

  targetTime = Date.now() + remainingSeconds * 1000;
  timerId = window.setInterval(tick, 250);
  startPauseButton.textContent = "Pause";
  startPauseButton.classList.add("pause");
  setState("running");
  setStatus("Walking");
  unlockAudio();
  requestWakeLock();
  tick();
}

function pauseTimer() {
  tick();
  stopTimer();
  setState("paused");
  setStatus("Paused");
  updateDisplay();
}

function resetTimer() {
  stopAlarm();
  stopTimer();
  remainingSeconds = selectedSeconds;
  finishPanel.hidden = true;
  setState("ready");
  setStatus("Ready");
  updateDisplay();
}

function restartTimer() {
  stopAlarm();
  stopTimer();
  remainingSeconds = selectedSeconds;
  finishPanel.hidden = true;
  updateDisplay();
  startTimer();
}

startPauseButton.addEventListener("click", () => {
  if (timerId) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetButton.addEventListener("click", resetTimer);
doneButton.addEventListener("click", resetTimer);
restartButton.addEventListener("click", restartTimer);

durationInput.addEventListener("input", handleDurationInput);

durationInput.addEventListener("blur", () => {
  if (readMinuteInput() === null) {
    setDuration(minMinutes);
  }
});

durationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setDuration(readMinuteInput() ?? minMinutes);
  durationInput.blur();
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  updateSoundButton();

  if (soundEnabled) {
    if (document.body.dataset.state === "finished" && !finishPanel.hidden) {
      startAlarm();
    } else {
      playSoundPreview();
    }
  } else {
    stopAlarm();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && timerId) {
    requestWakeLock();
    tick();
  }
});

updateDisplay();
updateSoundButton();
