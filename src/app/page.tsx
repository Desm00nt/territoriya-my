'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Trophy,
  Calendar,
  Users,
  Shield,
  Star,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  Menu,
  X,
  FileText,
  UserCheck,
  CreditCard,
  ExternalLink,
  Quote,
  TreePine,
  Heart,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

/* ───────────── данные из VK ───────────── */

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedF5KEbMkQxju4yk68gHhRRvksn5KsOkLr-RGUsa9dLUVrRw/viewform'

const shifts = [
  {
    num: 1,
    dates: '20 июня — 7 июля',
    name: 'КвесТТеРРа: Эпоха Просвещения',
    type: 'Игровая ролевая смена',
    price: '69 800',
    description:
      'Удивительное погружение в захватывающие сюжеты мировых шедевров XVIII века! Иммерсивное путешествие с квестами, сюжетно-ролевыми играми, мистериями, приключениями и испытаниями.',
    image: '/shift-1.jpg',
  },
  {
    num: 2,
    dates: '9 — 26 июля',
    name: 'Эти Тонкие МирЫ',
    type: 'Психологическая гендерная смена',
    price: '74 500',
    description:
      'Этика и психология отношений. Только в мужском кругу мальчик обретает уверенность и ответственность. Только в женском кругу девочка учится создавать уют, заботиться и понимать.',
    image: '/shift-2.jpg',
  },
  {
    num: 3,
    dates: '28 июля — 14 августа',
    name: 'ПрофТерра',
    type: 'Профориентационная смена',
    price: '72 700',
    priceNote: 'English Camp Family — 76 300 ₽',
    description:
      'Путь к самореализации и успешному будущему! English Camp Family, Бизнес-школа, Международные отношения, Театральное искусство, Игротехнологии, КВН и стендап, Психология общения.',
    image: '/shift-3.jpg',
  },
  {
    num: 4,
    dates: '16 — 22 августа',
    name: 'ТМ-фест «Вселенная игр»',
    type: 'Фестиваль игр',
    price: '32 200',
    description:
      'Большой фестиваль игр всех форматов: спортивные, настольные, командные, стратегические, ролевые, игровые чемпионаты! Игра поможет развить коммуникации и лидерские качества.',
    image: '/shift-4.jpg',
  },
]

const advantages = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: '1-е место в рейтинге лагерей РТ',
    description: 'Лучший республиканский лагерь Татарстана по оценкам экспертов и родителей.',
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: '27 лет опыта',
    description: 'С 1999 года создаём уникальные программы и помогаем детям стать личностью.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Авторские программы',
    description: 'Квесты, ролевые игры, тренинги, профориентация, мастер-классы, театр.',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Педагогическая команда',
    description: 'Профессиональные педагоги, психологи, аниматоры и наставники.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Безопасность и комфорт',
    description: '3-4-местные номера с душем, 5-разовое питание, медкабинет, охрана.',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: '4 возрастные программы',
    description: 'Супердетская (1-3 кл.), детская (4-5 кл.), подростковая (6-7 кл.), молодёжная (8-11 кл.).',
  },
]

const testimonials = [
  {
    name: 'Настя Мирная',
    role: 'Участница лагеря',
    text: 'Лагерь ЛУЧШИЙ!!! Все вожатые добрые и милые, помогут в любой ситуации. Каждый день что-то новое и интересное, советую всем!!!',
    rating: 5,
  },
  {
    name: 'Дмитрий, папа',
    role: 'Родитель',
    text: 'Однажды побывав, дочь из года в год возвращается в лагерь. Это место, где она стала увереннее в себе, нашла настоящих друзей. Прекрасная атмосфера доверия и принятия!',
    rating: 5,
  },
  {
    name: 'Гульназ, мама',
    role: 'Родитель',
    text: 'Креативные, безумно интересные и уникальные программы. Профессиональный педагогический состав, комфортные условия проживания, невероятная атмосфера доброты и уважения к каждому ребёнку.',
    rating: 5,
  },
]

const faqItems = [
  {
    id: 'faq-1',
    question: 'Как проходит день в лагере?',
    answer:
      'Один из главных принципов лагеря — насыщенность и разнообразие. Типичный день включает: утренние сборы, профильные занятия по выбранному направлению, квесты и командные игры, творческие мастерские, спорт, вечерние мероприятия (дискотеки, костры, театральные постановки, шоу талантов). Распорядок адаптирован для каждой возрастной группы.',
  },
  {
    id: 'faq-2',
    question: 'Какие условия проживания?',
    answer:
      'ГК «Регина», г. Мамадыш. Комфортабельное размещение в 3-4-местных номерах с туалетом и душем в каждом номере. Качественное улучшенное пятиразовое питание. Медицинский кабинет, пост охраны, круглосуточная дежурная вахта.',
  },
  {
    id: 'faq-3',
    question: 'Какого возраста дети принимаются?',
    answer:
      'С 1 по 11 класс. Четыре возрастные программы: супердетская (1-3 кл.), детская (4-5 кл.), подростковая (6-7 кл.), молодёжная (8-11 кл.). Каждая программа адаптирована под возрастные особенности.',
  },
  {
    id: 'faq-4',
    question: 'Что такое собеседование и зачем оно нужно?',
    answer:
      'Собеседование — это уникальная форма приобретения путёвки в наш лагерь. Это не просто оформление документов, а начало отдыха. С теми, кто впервые едет в лагерь, мы проводим короткую беседу-интервью, чтобы подобрать идеальный отряд и вожатых, которые раскроют потенциал ребёнка. На собеседовании вы узнаете подробную информацию о смене, заполните документы и сможете оплатить путёвку.',
  },
  {
    id: 'faq-5',
    question: 'Можно ли сэкономить при раннем бронировании?',
    answer:
      'Да! Покупая путёвку заранее, можно сэкономить до 10%. Также доступна оплата по частям — мы делим стоимость путёвки пополам. Обращайтесь по телефонам или приходите на собеседование, чтобы узнать актуальные условия.',
  },
]

/*
 * ГАЛЕРЕЯ «ЧЕМ МЫ ЗАНИМАЕМСЯ»
 *
 * Чтобы заменить фото:
 *   1. Положите фото в папку public/
 *   2. Впишите путь к файлу в поле image (например '/my-photo.jpg')
 *   3. Оставьте gradient/icon как запасной вариант
 *
 * Если photo=null — показывается градиентная заглушка с иконкой.
 */
const galleryItems = [
  {
    label: 'Квесты и приключения',
    photo: null,               // TODO: заменить на реальное фото, например '/gallery-quests.jpg'
    gradient: 'from-gray-700 to-gray-900',
    icon: <Sparkles className="h-8 w-8 text-white/60" />,
  },
  {
    label: 'Настольные и командные игры',
    photo: '/gallery-games.jpg',
    gradient: 'from-gray-800 to-black',
    icon: <Trophy className="h-8 w-8 text-white/60" />,
  },
  {
    label: 'Вечерние мероприятия',
    photo: '/gallery-evening.jpg',
    gradient: 'from-gray-600 to-gray-800',
    icon: <Star className="h-8 w-8 text-white/60" />,
  },
  {
    label: 'Творческие мастерские',
    photo: '/gallery-creative.jpg',
    gradient: 'from-gray-700 to-gray-900',
    icon: <Heart className="h-8 w-8 text-white/60" />,
  },
  {
    label: 'Природа и прогулки',
    photo: '/gallery-nature.jpg',
    gradient: 'from-gray-800 to-black',
    icon: <TreePine className="h-8 w-8 text-white/60" />,
  },
  {
    label: 'Дружба и общение',
    photo: null,               // TODO: заменить на реальное фото, например '/gallery-friends.jpg'
    gradient: 'from-gray-600 to-gray-800',
    icon: <Users className="h-8 w-8 text-white/60" />,
  },
]

const navLinks = [
  { label: 'О лагере', href: '#about' },
  { label: 'Смены 2026', href: '#shifts' },
  { label: 'Собеседование', href: '#interview' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

/* ───────────── компоненты ───────────── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

function FAQItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div id={id} className="rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left rounded-xl transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GraduationCap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

/* ───────────── страница ───────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openBookingForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          <button onClick={() => scrollTo('#about')} className="flex items-center gap-3 group">
            <img
              src="/territoriya-my/logo.png"
              alt="Территория МЫ"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="text-[15px] font-bold text-gray-900 leading-none">Территория МЫ</span>
              <span className="block text-[10px] text-gray-400 leading-none mt-0.5 tracking-wide">РИПЛ</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={openBookingForm}
              size="sm"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            >
              Забронировать путёвку
            </Button>
            <button
              className="lg:hidden p-2 -mr-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white px-5 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-600 hover:text-gray-900 py-2.5 text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => { setMobileMenuOpen(false); openBookingForm() }}
              size="sm"
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Забронировать путёвку
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section id="about" className="relative overflow-hidden bg-black">
          {/* Фоновое фото */}
          <div className="absolute inset-0">
            <img
              src="/territoriya-my/hero.jpg"
              alt="Дети в лагере Территория МЫ"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Мобильный: сверху-вниз затемнение. Десктоп: слева-направо */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/30 md:bg-gradient-to-t md:from-black/80 md:via-black/60 md:to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 md:from-black/50" />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-36 lg:py-44">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 md:mb-8">
                <Trophy className="h-3.5 w-3.5" />
                1-е место в рейтинге лагерей РТ
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-4 md:mb-6 tracking-tight">
                Республиканский лагерь
                <br />
                <span className="text-blue-400">«Территория МЫ»</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10 max-w-lg">
                Интеллектуально-психологический лагерь с 27-летней историей. Авторские программы, квесты,
                ролевые игры, профориентация и атмосфера доверия.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 md:mb-10">
                <Button
                  size="lg"
                  onClick={openBookingForm}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 w-full sm:w-auto"
                >
                  Забронировать путёвку
                  <ExternalLink className="h-4 w-4 ml-1.5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo('#interview')}
                  className="border-white/25 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
                >
                  Записаться на собеседование
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> 27 лет вместе
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> 4 смены летом 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" /> С 1 по 11 класс
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Смены (горизонтальные полосы) ─── */}
        <section id="shifts" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Лето 2026</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Летние смены</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Четыре уникальные смены с авторскими программами на выбор
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              {shifts.map((shift, index) => (
                <div
                  key={shift.num}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Фото смены */}
                    <div className="relative md:w-80 lg:w-96 shrink-0 h-44 sm:h-52 md:h-auto overflow-hidden">
                      <img
                        src={`/territoriya-my${shift.image}`}
                        alt={shift.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        Смена {shift.num}
                      </div>
                    </div>

                    {/* Информация */}
                    <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                        <span className="text-xs font-medium text-blue-600">{shift.type}</span>
                        <span className="text-gray-300 hidden sm:inline">·</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {shift.dates}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-2">{shift.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">{shift.description}</p>
                      {shift.priceNote && (
                        <p className="text-xs text-gray-400 italic mb-3">{shift.priceNote}</p>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xl md:text-2xl font-bold">{shift.price}</span>
                          <span className="text-sm text-gray-400 ml-1.5">руб.</span>
                        </div>
                        <Button
                          size="sm"
                          onClick={openBookingForm}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm"
                        >
                          Забронировать
                          <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Преимущества ─── */}
        <section id="advantages" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Преимущества</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Почему «Территория МЫ»</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Однажды побывав, школьники из года в год возвращаются снова и снова
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="group p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-100 transition-colors">
                    {adv.icon}
                  </div>
                  <h3 className="font-semibold text-[15px] mb-1">{adv.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Галерея (заглушки) ─── */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Жизнь в лагере</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Чем мы занимаемся</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Каждый день в лагере — это новые впечатления, открытия и друзья
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className={`group relative rounded-xl md:rounded-2xl overflow-hidden ${
                    i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className={`${i === 0 ? 'h-40 sm:h-52 md:h-full' : 'h-32 sm:h-40 md:h-48'} relative`}>
                    {/* Фото или градиентная заглушка */}
                    {item.photo ? (
                      <img
                        src={`/territoriya-my${item.photo}`}
                        alt={item.label}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                        <div className="opacity-40 group-hover:opacity-60 transition-opacity">
                          {i === 0 ? (
                            <Sparkles className="h-12 w-12 text-white md:h-20 md:w-20" />
                          ) : (
                            item.icon
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
                    <p className="text-white text-xs sm:text-sm font-medium">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Отзывы ─── */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Отзывы</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Что говорят о нас</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Мнения участников и их родителей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <Quote className="h-8 w-8 text-blue-200 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    «{t.text}»
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                    <StarRating count={t.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Собеседование ─── */}
        <section id="interview" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Собеседование</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Как попасть в лагерь</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Это не просто покупка путёвки — это начало незабываемого отдыха
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-5">
                  Мы заботимся о том, чтобы каждый ребёнок чувствовал себя комфортно. И уверены, что
                  комфорт во время смены начинается уже в городе. Вот почему мы проводим собеседование —
                  короткую беседу с ребёнком и родителями перед заездом.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Собеседование помогает нам подобрать идеальный отряд и вожатых, которые раскроют
                  потенциал каждого ребёнка. На нём вы узнаете подробную информацию о смене, заполните
                  документы и сможете оплатить путёвку. Для тех, кто уже ездил к нам — процедура
                  максимально быстрая.
                </p>

                <div className="grid sm:grid-cols-3 gap-5 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="font-semibold text-sm mb-0.5">Знакомство</p>
                    <p className="text-xs text-gray-500">Беседа с ребёнком и родителями</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="font-semibold text-sm mb-0.5">Документы</p>
                    <p className="text-xs text-gray-500">Заполнение и подписание</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="font-semibold text-sm mb-0.5">Оплата</p>
                    <p className="text-xs text-gray-500">Оформление путёвки</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="font-semibold text-sm mb-3">Что взять с собой на собеседование:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Свидетельство о рождении / паспорт участника
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      СНИЛС ребёнка
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Паспорт одного из родителей
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Дипломы и грамоты за последние 5 лет (2-3 шт., можно копии)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Расписание */}
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Когда</p>
                    <p className="text-sm text-gray-500">Каждый вторник с 18:30 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Где</p>
                    <p className="text-sm text-gray-500">
                      Казань, ул. Спартаковская, 2<br />ТОК «Караван», 2 этаж, оф. 224-225
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Вопросы</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Частые вопросы</h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <FAQItem key={item.id} id={item.id} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Контакты / Заявка ─── */}
        <section id="contacts" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide uppercase">Контакты</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Записаться на собеседование</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Оставьте заявку — мы перезвоним и поможем записаться на удобный вторник
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {/* Контакты */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Телефоны</p>
                  <div className="space-y-3">
                    <div>
                      <a href="tel:+79270394222" className="flex items-center gap-2.5 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        <Phone className="h-4 w-4 text-gray-400" />
                        +7 (927) 039-42-22
                      </a>
                      <p className="text-xs text-gray-400 mt-0.5 ml-6.5">Владислав Лазбинев, зам. руководителя</p>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <a href="tel:+79270477740" className="flex items-center gap-2.5 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        <Phone className="h-4 w-4 text-gray-400" />
                        +7 (927) 04-777-40
                      </a>
                      <p className="text-xs text-gray-400 mt-0.5 ml-6.5">Елена Борисовна Юсупова, директор</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Адрес офиса</p>
                  <div className="flex items-start gap-2.5 text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>Казань, ул. Спартаковская, 2<br />ТОК «Караван», оф. 224-225</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Лагерь</p>
                  <div className="flex items-start gap-2.5 text-sm text-gray-700">
                    <TreePine className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>ГК «Регина», г. Мамадыш<br />Республика Татарстан</span>
                  </div>
                </div>
              </div>

              {/* Форма заявки */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="h-7 w-7 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Заявка отправлена!</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Мы перезвоним вам в ближайшее время для подтверждения даты собеседования.
                      </p>
                      <p className="text-sm text-gray-400">
                        Также можно позвонить напрямую:{' '}
                        <a href="tel:+79270394222" className="text-blue-600 font-medium">+7 (927) 039-42-22</a>
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg mb-5">Заявка на собеседование</h3>
                      <form
                        className="space-y-4"
                        onSubmit={(e) => {
                          e.preventDefault()
                          setFormSubmitted(true)
                        }}
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Ваше имя *
                            </label>
                            <Input id="parentName" placeholder="Иван Иванов" required />
                          </div>
                          <div>
                            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Телефон *
                            </label>
                            <Input id="parentPhone" type="tel" placeholder="+7 (___) ___-__-__" required />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Имя ребёнка *
                            </label>
                            <Input id="childName" placeholder="Алиса" required />
                          </div>
                          <div>
                            <label htmlFor="childClass" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Класс *
                            </label>
                            <select
                              id="childClass"
                              required
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Выберите</option>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((c) => (
                                <option key={c} value={c}>{c} класс</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="childShift" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Интересующая смена
                          </label>
                          <select
                            id="childShift"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Выберите смену</option>
                            <option value="1">Смена 1: КвесТТеРРа (20 июня — 7 июля)</option>
                            <option value="2">Смена 2: Эти Тонкие МирЫ (9 — 26 июля)</option>
                            <option value="3">Смена 3: ПрофТерра (28 июля — 14 августа)</option>
                            <option value="4">Смена 4: ТМ-фест (16 — 22 августа)</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Комментарий
                          </label>
                          <Textarea
                            id="comment"
                            placeholder="Вопросы или пожелания..."
                            rows={3}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                          Отправить заявку на собеседование
                        </Button>
                        <p className="text-xs text-gray-400 text-center">
                          После отправки мы перезвоним для подтверждения даты собеседования
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/territoriya-my/logo.png"
                alt="Территория МЫ"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div>
                <span className="text-sm font-bold">Территория МЫ</span>
                <span className="block text-[10px] text-gray-500 mt-0.5">Республиканский интеллектуально-психологический лагерь</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <a href="tel:+79270394222" className="hover:text-white transition-colors">
                +7 (927) 039-42-22
              </a>
              <span className="text-gray-700">|</span>
              <span>Казань, ул. Спартаковская, 2</span>
              <span className="text-gray-700">|</span>
              <a
                href="https://vk.com/territorymy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ВКонтакте
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>ГК «Регина», г. Мамадыш, Республика Татарстан · С 1999 года</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
