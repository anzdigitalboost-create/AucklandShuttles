import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Plane, PlaneLanding, PlaneTakeoff, Clock, Users, Baby, Luggage, CreditCard, Check, ArrowRight, MapPin } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand, withIcons } from '../Sections'
import { AREAS } from '../../data/areas'

const INCLUDED_ICONS = [Users, Plane, Clock, Baby, Luggage, CreditCard]

export default function AirportShuttle() {
  const { t } = useTranslation()
  const directions = [
    { icon: PlaneTakeoff, ...t('airport.to') },
    { icon: PlaneLanding, ...t('airport.from') },
  ]

  return (
    <div className="bg-white">
      <PageMeta title={t('meta.airport.title')} description={t('meta.airport.desc')} />

      <PageHero eyebrow={t('airport.eyebrow')} icon={Plane} title={t('airport.title')} accent={t('airport.accent')}>
        {t('airport.lead')}
      </PageHero>

      {/* ── TO / FROM ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-6">
          {directions.map(({ icon: Icon, title, text, points }) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-8 sm:p-10">
              <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-ink mb-3">{title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{text}</p>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-slate-700">
                    <Check className="w-5 h-5 text-brand shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('airport.includedEyebrow')} title={t('airport.includedTitle')} />
          <FeatureGrid items={withIcons(t('airport.included'), INCLUDED_ICONS)} cols={3} />
        </div>
      </section>

      {/* ── AREAS ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('airport.areasEyebrow')} title={t('airport.areasTitle')}>
            {t('airport.areasText')}
          </SectionHeading>
          <div className="max-w-3xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {Object.entries(AREAS).map(([slug, a]) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group flex items-center justify-between gap-4 px-6 py-5 hover:bg-brand-50/60 transition-colors"
              >
                <span className="flex items-center gap-3 font-semibold text-ink">
                  <MapPin className="w-5 h-5 text-brand" /> {t(`areas.${slug}.name`)}
                </span>
                <span className="flex items-center gap-4 text-slate-600 text-sm">
                  {t('common.minutes', { range: a.driveTime })}
                  <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('airport.faqTitle')} />
          <Faq items={t('airport.faqs')} />
        </div>
      </section>

      <CtaBand title={t('airport.ctaTitle')} />
    </div>
  )
}
