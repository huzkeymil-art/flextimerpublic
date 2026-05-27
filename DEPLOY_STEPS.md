# Deploy FlexTimer Permanently

## 1. Create the GitHub repo

Go to:

```text
https://github.com/new
```

Use:

```text
Repository name: flextimer
```

Leave it public or private. Do not worry about advanced settings.

## 2. Upload these files

Upload only:

```text
index.html
styles.css
app.js
README.md
```

Do not upload screenshots, Chrome profile folders, cloudflared.exe, or log files.

## 3. Import into Vercel

Go to:

```text
https://vercel.com/new
```

Choose the `flextimer` GitHub repo.

Use these settings:

```text
Framework Preset: Other
Build Command: leave blank
Output Directory: .
Install Command: leave blank
```

Click Deploy.

## 4. Result

Vercel will give you a permanent URL like:

```text
https://flextimer-____.vercel.app
```
