import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', nativeName: 'English', flag: '🇬🇧' },
  { code: 'zh', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', nativeName: 'Français', flag: '🇫🇷' },
]

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', airport: 'Airport Shuttle', services: 'Services', cruise: 'Cruise', about: 'About', contact: 'Contact', bookRide: 'Book a Shuttle', call: 'Call' },
      hero: {
        badge: 'Auckland Airport & Private Shuttles',
        title1: 'Auckland Shuttles,',
        title2: 'Door to Door',
        subtitle: 'Your own shuttle to or from Auckland Airport — no shared stops, one fixed price, any hour of the day.',
        bookYourRide: 'Get an Instant Price',
        viewServices: 'View Services',
        chipInsured: 'Fully Insured',
        chip247: '24/7 Service',
        chipFixed: 'Fixed Prices — No Surge',
        chipFlight: 'Flight Tracking Included',
      },
      stats: { hours: 'Every Day of the Year', bookTime: 'To Book Online', seats: 'Passengers per Vehicle', price: 'Price, Shown Upfront' },
      statValues: { price: 'Fixed' },
      sticky: 'Get Instant Price — Book in 60s',
    },
  },
  zh: {
    translation: {
      nav: { home: '首页', airport: '机场接送', services: '服务', cruise: '邮轮接送', about: '关于我们', contact: '联系我们', bookRide: '立即预订', call: '致电' },
      hero: {
        badge: '奥克兰机场接送与包车服务',
        title1: '奥克兰接送专车，',
        title2: '门到门服务',
        subtitle: '往返奥克兰机场的专属接送车 — 不拼车、不绕路，一口价，全天候服务。',
        bookYourRide: '获取即时报价',
        viewServices: '查看服务',
        chipInsured: '全面保险',
        chip247: '24/7全天候服务',
        chipFixed: '固定价格 · 无溢价',
        chipFlight: '含航班追踪',
      },
      stats: { hours: '全年无休', bookTime: '在线预订用时', seats: '每车最多乘客数', price: '价格预先显示' },
      statValues: { price: '一口价' },
      sticky: '获取即时报价 — 60秒完成预订',
    },
  },
  ja: {
    translation: {
      nav: { home: 'ホーム', airport: '空港シャトル', services: 'サービス', cruise: 'クルーズ送迎', about: '会社概要', contact: 'お問い合わせ', bookRide: '今すぐ予約', call: '電話' },
      hero: {
        badge: 'オークランド空港・貸切シャトル',
        title1: 'オークランドのシャトル、',
        title2: 'ドア・ツー・ドア',
        subtitle: 'オークランド空港への専用シャトル。相乗りなし、固定料金、24時間いつでもご利用いただけます。',
        bookYourRide: '料金を確認',
        viewServices: 'サービスを見る',
        chipInsured: '全車保険完備',
        chip247: '24時間365日対応',
        chipFixed: '固定料金・追加料金なし',
        chipFlight: 'フライト追跡付き',
      },
      stats: { hours: '年中無休', bookTime: 'オンライン予約時間', seats: '1台あたりの乗客数', price: '料金は事前に表示' },
      statValues: { price: '固定' },
      sticky: '料金を確認 — 60秒で予約',
    },
  },
  ko: {
    translation: {
      nav: { home: '홈', airport: '공항 셔틀', services: '서비스', cruise: '크루즈 픽업', about: '소개', contact: '문의하기', bookRide: '지금 예약', call: '전화' },
      hero: {
        badge: '오클랜드 공항 · 전용 셔틀',
        title1: '오클랜드 셔틀,',
        title2: '도어 투 도어',
        subtitle: '오클랜드 공항을 오가는 전용 셔틀 — 합승 없이, 고정 요금으로, 24시간 운행합니다.',
        bookYourRide: '즉시 요금 확인',
        viewServices: '서비스 보기',
        chipInsured: '완전 보험 가입',
        chip247: '연중무휴 24시간',
        chipFixed: '고정 요금 · 할증 없음',
        chipFlight: '항공편 추적 포함',
      },
      stats: { hours: '연중무휴', bookTime: '온라인 예약 시간', seats: '차량당 최대 승객', price: '요금 사전 안내' },
      statValues: { price: '고정' },
      sticky: '즉시 요금 확인 — 60초 예약',
    },
  },
  es: {
    translation: {
      nav: { home: 'Inicio', airport: 'Shuttle al aeropuerto', services: 'Servicios', cruise: 'Cruceros', about: 'Nosotros', contact: 'Contacto', bookRide: 'Reservar', call: 'Llamar' },
      hero: {
        badge: 'Shuttles privados y al aeropuerto de Auckland',
        title1: 'Shuttles en Auckland,',
        title2: 'puerta a puerta',
        subtitle: 'Su propio shuttle hacia o desde el aeropuerto de Auckland: sin paradas compartidas, precio fijo, a cualquier hora.',
        bookYourRide: 'Ver precio al instante',
        viewServices: 'Ver servicios',
        chipInsured: 'Totalmente asegurado',
        chip247: 'Servicio 24/7',
        chipFixed: 'Precios fijos, sin recargos',
        chipFlight: 'Seguimiento de vuelo incluido',
      },
      stats: { hours: 'Todos los días del año', bookTime: 'Para reservar en línea', seats: 'Pasajeros por vehículo', price: 'Precio visible por adelantado' },
      statValues: { price: 'Fijo' },
      sticky: 'Precio al instante — reserve en 60 s',
    },
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', airport: 'Navette aéroport', services: 'Services', cruise: 'Croisières', about: 'À propos', contact: 'Contact', bookRide: 'Réserver', call: 'Appeler' },
      hero: {
        badge: "Navettes privées et aéroport d'Auckland",
        title1: 'Navettes à Auckland,',
        title2: 'de porte à porte',
        subtitle: "Votre propre navette vers ou depuis l'aéroport d'Auckland : aucun arrêt partagé, prix fixe, à toute heure.",
        bookYourRide: 'Obtenir un prix immédiat',
        viewServices: 'Voir les services',
        chipInsured: 'Entièrement assuré',
        chip247: 'Service 24h/24, 7j/7',
        chipFixed: 'Prix fixes, sans majoration',
        chipFlight: 'Suivi de vol inclus',
      },
      stats: { hours: "Tous les jours de l'année", bookTime: 'Pour réserver en ligne', seats: 'Passagers par véhicule', price: "Prix affiché à l'avance" },
      statValues: { price: 'Fixe' },
      sticky: 'Prix immédiat — réservez en 60 s',
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

export default i18n
