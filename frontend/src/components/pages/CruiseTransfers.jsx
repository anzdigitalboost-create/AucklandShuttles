import { useTranslation } from 'react-i18next'
import { Ship, Plane, Hotel, Clock, Luggage, Users } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand, withIcons } from '../Sections'

const ROUTE_ICONS = [Plane, Ship, Hotel]
const FEATURE_ICONS = [Luggage, Clock, Users]

export default function CruiseTransfers() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <PageMeta title={t('meta.cruise.title')} description={t('meta.cruise.desc')} />

      <PageHero eyebrow={t('cruise.eyebrow')} icon={Ship} title={t('cruise.title')} accent={t('cruise.accent')}>
        {t('cruise.lead')}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('cruise.routesEyebrow')} title={t('cruise.routesTitle')} />
          <FeatureGrid items={withIcons(t('cruise.routes'), ROUTE_ICONS)} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('cruise.featEyebrow')} title={t('cruise.featTitle')} />
          <FeatureGrid items={withIcons(t('cruise.features'), FEATURE_ICONS)} cols={3} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('cruise.faqTitle')} />
          <Faq items={t('cruise.faqs')} />
        </div>
      </section>

      <CtaBand title={t('cruise.ctaTitle')} />
    </div>
  )
}
