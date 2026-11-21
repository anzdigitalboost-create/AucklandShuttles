import { useTranslation } from 'react-i18next'
import { Mountain, Clock, Users, CalendarCheck, DoorOpen, Route } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand, withIcons } from '../Sections'

const FEATURE_ICONS = [DoorOpen, Clock, Users, Route, CalendarCheck, Mountain]

export default function HobbitonTransfers() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <PageMeta title={t('meta.hobbiton.title')} description={t('meta.hobbiton.desc')} />

      <PageHero eyebrow={t('hobbiton.eyebrow')} icon={Mountain} title={t('hobbiton.title')} accent={t('hobbiton.accent')}>
        {t('hobbiton.lead')}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('hobbiton.featEyebrow')} title={t('hobbiton.featTitle')} />
          <FeatureGrid items={withIcons(t('hobbiton.features'), FEATURE_ICONS)} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('hobbiton.faqTitle')} />
          <Faq items={t('hobbiton.faqs')} />
        </div>
      </section>

      <CtaBand title={t('hobbiton.ctaTitle')} />
    </div>
  )
}
