'use client'

import { motion } from 'framer-motion'

const values = [
  {
    label: 'Rich simplicity',
    body: 'We believe complicated B2B truths can be said simply, without losing what makes them true. That takes more work, not less — but it is the whole job, and we are unusually good at it.',
  },
  {
    label: 'One team, start to finish',
    body: 'The strategists who find your positioning are the writers, designers and producers who ship it. There is no hand-off. There is no version of the brief that gets misread on the way to execution.',
  },
  {
    label: 'Only B2B launches',
    body: 'We do not have a consumer practice. We do not pitch brand campaigns for beer. Every hire, every tool, every habit at Keys & Kites is calibrated for the particular difficulty of launching a new B2B idea.',
  },
  {
    label: 'Honesty first',
    body: 'We will tell you when the brief is wrong, when the timeline is unrealistic, and when the product is not ready for the story you want to tell. That is not the way to win every project. It is the way to do good work.',
  },
]

export default function AboutBody() {
  return (
    <>
      {/* Founders section */}
      <section className="py-20 lg:py-28 bg-kk-sand">
        <div className="container-kk">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <p className="eyebrow mb-6">
                <span className="w-6 h-px bg-kk-clay" />
                The Partners
              </p>
              <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-kk-ink mb-6">
                Tim Cook <span className="text-kk-faint">&amp;</span><br />Tom Barg
              </h2>
              <p className="text-kk-graphite text-base leading-relaxed">
                Tim and Tom founded Keys &amp; Kites around a shared conviction: that most B2B marketing
                fails not from a lack of effort, but from a failure to make the complicated thing clear.
                Together they have led strategy and creative for some of the most demanding B2B launches
                in industrial, healthcare, automotive and enterprise software — including GE, Siemens,
                Chevron, Abbott, Cox Automotive, Optum, Rockwell Automation and Zekelman Industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col gap-8 pt-2"
            >
              <div className="bg-kk-bg rounded-2xl p-8 border border-kk-line">
                <p className="font-display text-kk-ink text-xl lg:text-2xl font-medium leading-[1.4] tracking-[-0.01em]">
                  &ldquo;The world does not need more B2B advertising. It needs more B2B truth — said in a
                  way people can actually use.&rdquo;
                </p>
                <p className="text-kk-muted text-sm mt-5">
                  The founding principle behind Keys &amp; Kites, and the reason we call our philosophy{' '}
                  <span className="text-kk-ink font-medium">rich simplicity</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '8+', label: 'Fortune-class B2B brands launched' },
                  { num: '3', label: 'Disciplines under one roof' },
                ].map((s) => (
                  <div key={s.label} className="bg-kk-bg rounded-xl p-6 border border-kk-line">
                    <p className="font-display text-kk-clay text-4xl font-bold mb-2">{s.num}</p>
                    <p className="text-kk-graphite text-sm leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-kk-bg">
        <div className="container-kk">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-10"
          >
            <span className="w-8 h-px bg-kk-clay" />
            How We Work
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-kk-line bg-kk-sand p-8"
              >
                <h3 className="font-display text-kk-ink text-xl font-semibold mb-4">{v.label}</h3>
                <p className="text-kk-graphite text-sm lg:text-base leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-kk-sand border-t border-kk-line">
        <div className="container-kk">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">
                <span className="w-6 h-px bg-kk-clay" />
                Where We Are
              </p>
              <h3 className="font-display text-kk-ink text-2xl font-semibold mb-2">
                Printer&apos;s Row, Chicago
              </h3>
              <address className="not-italic text-kk-graphite text-sm leading-relaxed">
                727 S Dearborn St, Suite 211<br />
                Chicago, Illinois 60605
              </address>
            </div>
            <div className="lg:border-l lg:border-kk-line lg:pl-16">
              <p className="text-kk-graphite text-sm lg:text-base leading-relaxed max-w-md">
                We are based in the historic Printer&apos;s Row neighbourhood in downtown Chicago — a
                fitting home for an agency whose whole job is putting words to work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
