import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { AREAS } from '../../data/areas'

export { AREAS }

export default function AreaLanding({ area }) {
  const { t } = useTranslation()
  const a = AREAS[area]
  const name = t(`areas.${area}.name`)
  const short = t(`areas.${area}.short`)
  const time = t('common.minutes', { range: a.driveTime })
  const others = Object.keys(AREAS).filter((slug) => slug !== area)

  // Suburb names stay in English: they are what people type into the address box.
  const faqs = t('area.faqs', { name, time, suburbs: a.suburbs.slice(0, 4).join(', ') })
  const points = t(`areas.${area}.points`).map((p) => ({ ...p, icon: Check }))

  return (
    <div className="bg-white">
      <PageMeta title={t(`areas.${area}.seoTitle`)} description={t(`areas.${area}.seoDesc`)} />

      <PageHero eyebrow={t('area.eyebrow', { time })} icon={Clock} title={t('area.title', { name })} accent={t('area.accent', { name })}>
        {t(`areas.${area}.intro`)}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('area.whyEyebrow', { short })} title={t('area.whyTitle', { name })} />
          <FeatureGrid items={points} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-4xl">
          <SectionHeading eyebrow={t('area.suburbsEyebrow')} title={t('area.suburbsTitle', { name })}>
            {t('area.suburbsText')}
          </SectionHeading>
          <ul className="flex flex-wrap justify-center gap-3">
            {a.suburbs.map((s) => (
              <li key={s} className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-brand" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('area.faqTitle', { name })} />
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('area.otherEyebrow')} title={t('area.otherTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {others.map((slug) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group flex items-center justify-between gap-3 bg-white rounded-2xl border border-slate-200 px-5 py-4 hover:border-brand transition-colors"
              >
                <span className="font-semibold text-ink">{t(`areas.${slug}.name`)}</span>
                <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t('area.ctaTitle', { name })} />
    </div>
  )
}
