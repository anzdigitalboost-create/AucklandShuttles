import { useTranslation } from 'react-i18next'
import { Shield, Clock, Heart, CreditCard, Info } from 'lucide-react'
import PageMeta from '../PageMeta'
import GoogleReviews from '../GoogleReviews'
import { PageHero, SectionHeading, FeatureGrid, CtaBand, withIcons } from '../Sections'

const VALUE_ICONS = [Shield, Clock, CreditCard, Heart]

export default function About() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <PageMeta title={t('meta.about.title')} description={t('meta.about.desc')} />

      <PageHero eyebrow={t('about.eyebrow')} icon={Info} title={t('about.title')} accent={t('about.accent')}>
        {t('about.lead')}
      </PageHero>

      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <span className="eyebrow">{t('about.storyEyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-5 tracking-tight">{t('about.storyTitle')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">{t('about.p1')}</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">{t('about.p2')}</p>
            <p className="text-slate-600 text-lg leading-relaxed">{t('about.p3')}</p>
          </div>
          <img
            src="/images/fleet-van.webp"
            alt={t('about.imgAlt')}
            className="rounded-3xl shadow-xl w-full h-[440px] object-cover"
            width="840" height="1120" loading="lazy" decoding="async"
          />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} />
          <FeatureGrid items={withIcons(t('about.values'), VALUE_ICONS)} cols={4} />
        </div>
      </section>

      <GoogleReviews />

      <CtaBand />
    </div>
  )
}
