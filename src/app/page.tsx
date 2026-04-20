'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  ChevronUp,
  Menu,
  X,
  Gamepad2,
  Brain,
  Briefcase,
  Dice5,
  GraduationCap,
  FileText,
  UserCheck,
  CreditCard,
  ExternalLink,
} from 'lucide-react'

/* ───────────── данные из VK ───────────── */

const GOOGLE_FORM_URL = 'https://forms.google.com' // заменить на реальную ссылку

const shifts = [
  {
    num: 1,
    dates: '20 июня — 7 июля',
    name: 'КвесТТеРРа: Эпоха Просвещения',
    type: 'Игровая ролевая смена',
    price: '69 800',
    description:
      'Удивительное погружение в захватывающие сюжеты мировых шедевров XVIII века! Иммерсивное путешествие с квестами, сюжетно-ролевыми играми, мистериями, приключениями и испытаниями. Каждый участник примерит на себя образы исторических персонажей.',
    color: 'from-amber-500/80 to-orange-600/80',
    icon: <Gamepad2 className="h-10 w-10 text-white/90" />,
    popular: false,
  },
  {
    num: 2,
    dates: '9 — 26 июля',
    name: 'Эти Тонкие МирЫ',
    type: 'Психологическая гендерная смена',
    price: '74 500',
    description:
      'Этика и психология отношений. Только в мужском кругу мальчик обретает уверенность, ответственность и целеустремлённость. Только в женском кругу девочка учится создавать уют, заботиться, слушать и понимать. Про дружбу, доверие и уважение.',
    color: 'from-rose-500/80 to-pink-600/80',
    icon: <Brain className="h-10 w-10 text-white/90" />,
    popular: true,
  },
  {
    num: 3,
    dates: '28 июля — 14 августа',
    name: 'ПрофТерра',
    type: 'Профориентационная смена',
    price: '72 700',
    priceNote: 'English Camp Family — 76 300 ₽',
    description:
      'Путь к самореализации и успешному будущему! Множество профилей на выбор: English Camp Family, Бизнес-школа, Школа международных отношений, Театральное искусство, Игротехнологии, КВН и стендап, Психология общения.',
    color: 'from-sky-500/80 to-blue-600/80',
    icon: <Briefcase className="h-10 w-10 text-white/90" />,
    popular: false,
  },
  {
    num: 4,
    dates: '16 — 22 августа',
    name: 'ТМ-фест «Вселенная игр»',
    type: 'Фестиваль игр',
    price: '32 200',
    description:
      'Большой фестиваль игр всех форматов: спортивные, настольные, командные, стратегические, виртуальные, ролевые, игровые чемпионаты и игры-испытания! Игра поможет развить коммуникации, лидерские качества и умение достигать целей.',
    color: 'from-violet-500/80 to-purple-600/80',
    icon: <Dice5 className="h-10 w-10 text-white/90" />,
    popular: false,
  },
]

const advantages = [
  {
    icon: <Trophy className="h-7 w-7" />,
    title: '1-е место в рейтинге лагерей РТ',
    description:
      'Лучший республиканский лагерь Татарстана по оценкам экспертов и родителей. Тщательный отбор вожатых, высокий уровень организации, многолетние традиции.',
  },
  {
    icon: <Calendar className="h-7 w-7" />,
    title: '27 лет опыта',
    description:
      'С 1999 года мы создаём уникальные программы и помогаем детям стать личностью. Каждый год школьники возвращаются к нам снова и снова.',
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: 'Эксклюзивные авторские программы',
    description:
      'Квесты, ролевые игры, психологические тренинги, профориентация, мастер-классы, театр, вечеринки. Новые фишки каждую смену.',
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: 'Опытная педагогическая команда',
    description:
      'Профессиональные педагоги, психологи, аниматоры и наставники. Атмосфера доверия и принятия, в которой каждый ребёнок чувствует себя значимым.',
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: 'Безопасность и комфорт',
    description:
      '3-4-местные номера с душем, качественное питание, медкабинет, охрана, круглосуточная вахта. ГК «Регина», г. Мамадыш.',
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: '4 возрастные программы',
    description:
      'Супердетская (1-3 кл.), детская (4-5 кл.), подростковая (6-7 кл.), молодёжная (8-11 кл.). Адаптация под каждый возраст.',
  },
]

const testimonials = [
  {
    name: 'Настя Мирная',
    text: 'Лагерь ЛУЧШИЙ!!! Все вожатые добрые и милые, помогут в любой ситуации. Каждый день что-то новое и интересное, советую всем!!!',
    rating: 5,
  },
  {
    name: 'Дмитрий, папа',
    text: 'Однажды побывав, дочь из года в год возвращается в лагерь. Это место, где она стала увереннее в себе, нашла настоящих друзей. Прекрасная атмосфера доверия и принятия!',
    rating: 5,
  },
  {
    name: 'Гульназ, мама',
    text: 'Креативные, безумно интересные и уникальные программы. Профессиональный педагогический состав, комфортные условия проживания, невероятная атмосфера доброты и уважения к каждому ребёнку.',
    rating: 5,
  },
]

const faqItems = [
  {
    id: 'faq-1',
    question: 'Как проходит день в лагере?',
    answer:
      'Один из главных принципов лагеря — насыщенность и разнообразие. Каждая смена уникальна. Типичный день включает: утренние сборы, профильные занятия по выбранному направлению (английский, психология, бизнес, театр), квесты и командные игры, творческие мастерские, спорт, вечерние мероприятия (дискотеки, костры, театральные постановки, шоу талантов). Распорядок адаптирован для каждой возрастной группы.',
  },
  {
    id: 'faq-2',
    question: 'Какие условия проживания?',
    answer:
      'ГК «Регина», г. Мамадыш. Комфортабельное размещение в 3-4-местных номерах с туалетом и душем в каждом номере. Качественное улучшенное пятиразовое питание. Медицинский кабинет, пост охраны, круглосуточная дежурная вахта. Живописная природа.',
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
          className={`h-4 w-4 ${i < count ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

function FAQItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div id={id} className="rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 rounded-lg transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="shrink-0 text-gray-400">
          {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
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
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => scrollTo('#about')} className="flex items-center gap-2.5">
            {/* Текстовый логотип вместо картинки */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm leading-none">ТМ</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold text-gray-900 leading-none">Территория МЫ</span>
              <span className="block text-[10px] text-gray-500 leading-none mt-0.5">РИПЛ</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={openBookingForm}
              size="sm"
              className="hidden md:inline-flex bg-violet-600 hover:bg-violet-700 text-white"
            >
              Забронировать путёвку
            </Button>
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-600 hover:text-gray-900 py-2 text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => { setMobileMenuOpen(false); openBookingForm() }}
              size="sm"
              className="mt-2 bg-violet-600 hover:bg-violet-700 text-white"
            >
              Забронировать путёвку
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section id="about" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
                <Trophy className="h-3.5 w-3.5" />
                1-е место в рейтинге лагерей Республики Татарстан
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Республиканский лагерь
                <br />
                <span className="text-violet-700">«Территория МЫ»</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Интеллектуально-психологический лагерь с 27-летней историей. Авторские программы, квесты,
                ролевые игры, профориентация и атмосфера доверия, в которой становятся личностью.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  size="lg"
                  onClick={openBookingForm}
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Забронировать путёвку
                  <ExternalLink className="h-4 w-4 ml-1.5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo('#interview')}>
                  Записаться на собеседование
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> 27 лет вместе
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> 4 смены летом
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" /> С 1 по 11 класс
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Смены ─── */}
        <section id="shifts" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Летние смены 2026</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Четыре уникальные смены с авторскими программами
              </p>
            </div>

            <div className="space-y-5">
              {shifts.map((shift) => (
                <Card
                  key={shift.num}
                  className={`overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow ${
                    shift.popular ? 'ring-2 ring-violet-500' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Заглушка вместо фото */}
                    <div
                      className={`md:w-56 shrink-0 bg-gradient-to-br ${shift.color} flex items-center justify-center p-8 min-h-[160px]`}
                    >
                      {shift.icon}
                    </div>

                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Смена {shift.num}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{shift.type}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{shift.dates}</span>
                        {shift.popular && (
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px]">
                            Хит сезона
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{shift.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{shift.description}</p>
                      {shift.priceNote && (
                        <p className="text-xs text-gray-400 italic mb-3">{shift.priceNote}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">
                          {shift.price} <span className="text-sm font-normal text-gray-400">руб.</span>
                        </span>
                        <Button size="sm" variant="outline" onClick={openBookingForm}>
                          Забронировать
                          <ExternalLink className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Преимущества ─── */}
        <section id="advantages" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Почему «Территория МЫ»</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Однажды побывав, школьники из года в год возвращаются снова и снова
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {advantages.map((adv) => (
                <div key={adv.title} className="p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="text-violet-600 mb-3">{adv.icon}</div>
                  <h3 className="font-semibold mb-1.5">{adv.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Отзывы ─── */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Отзывы</h2>
              <p className="text-gray-500">Что говорят участники и их родители</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl border border-gray-100 p-5"
                >
                  <StarRating count={t.rating} />
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed italic">
                    &laquo;{t.text}&raquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Собеседование ─── */}
        <section id="interview" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Собеседование</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Это не просто покупка путёвки — это начало незабываемого отдыха
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Мы заботимся о том, чтобы каждый ребёнок чувствовал себя комфортно. И уверены, что
                  комфорт во время смены начинается уже в городе. Вот почему мы проводим собеседование.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  С теми, кто впервые отправляется в лагерь, мы проводим короткую беседу-интервью. Это
                  помогает нам подобрать идеальный отряд и вожатых, которые раскроют потенциал каждого
                  ребёнка и подарят ему максимум радости.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                      <UserCheck className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Знакомство</p>
                      <p className="text-xs text-gray-500">Беседа с ребёнком и родителями</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                      <FileText className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Документы</p>
                      <p className="text-xs text-gray-500">Заполнение и подписание</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                      <CreditCard className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Оплата</p>
                      <p className="text-xs text-gray-500">Оформление путёвки</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-violet-100">
                  <p className="text-sm font-semibold mb-2">Что взять с собой на собеседование:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">—</span>
                      Свидетельство о рождении / паспорт участника
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">—</span>
                      СНИЛС ребёнка
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">—</span>
                      Паспорт одного из родителей
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">—</span>
                      Дипломы и грамоты за последние 5 лет (2-3 шт., можно копии)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Расписание */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-5 rounded-xl border border-gray-200 bg-gray-50 mb-8">
                <div>
                  <p className="font-semibold">Когда:</p>
                  <p className="text-sm text-gray-500">Каждый вторник с 18:30 до 20:00</p>
                </div>
                <div>
                  <p className="font-semibold">Где:</p>
                  <p className="text-sm text-gray-500">
                    Казань, ул. Спартаковская, 2 (ТОК «Караван»), 2 этаж, оф. 224-225
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
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
        <section id="contacts" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Записаться на собеседование</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Оставьте заявку — мы перезвоним и поможем записаться на удобный вторник
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {/* Контакты */}
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Телефоны</p>
                  <div className="space-y-2">
                    <a href="tel:+79270394222" className="flex items-center gap-2 text-sm text-gray-700 hover:text-violet-700">
                      <Phone className="h-4 w-4 text-gray-400" />
                      +7 (927) 039-42-22
                    </a>
                    <p className="text-xs text-gray-400 pl-6">Владислав Лазбинев, зам. руководителя</p>
                    <a href="tel:+79270477740" className="flex items-center gap-2 text-sm text-gray-700 hover:text-violet-700 mt-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      +7 (927) 04-777-40
                    </a>
                    <p className="text-xs text-gray-400 pl-6">Елена Борисовна Юсупова, директор</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Адрес</p>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>Казань, ул. Спартаковская, 2<br />ТОК «Караван», оф. 224-225</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Время</p>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>Каждый вторник<br />18:30 — 20:00</span>
                  </div>
                </div>
              </div>

              {/* Форма заявки на собеседование */}
              <div className="lg:col-span-3">
                <div className="rounded-xl border border-gray-200 p-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Заявка отправлена!</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Мы перезвоним вам в ближайшее время для подтверждения даты собеседования.
                      </p>
                      <p className="text-sm text-gray-400">
                        Также вы можете позвонить напрямую:{' '}
                        <a href="tel:+79270394222" className="text-violet-700">+7 (927) 039-42-22</a>
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg mb-4">Заявка на собеседование</h3>
                      <form
                        className="space-y-4"
                        onSubmit={(e) => {
                          e.preventDefault()
                          setFormSubmitted(true)
                        }}
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                              Ваше имя *
                            </label>
                            <Input id="parentName" placeholder="Иван Иванов" required />
                          </div>
                          <div>
                            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">
                              Телефон *
                            </label>
                            <Input id="parentPhone" type="tel" placeholder="+7 (___) ___-__-__" required />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                              Имя ребёнка *
                            </label>
                            <Input id="childName" placeholder="Алиса" required />
                          </div>
                          <div>
                            <label htmlFor="childClass" className="block text-sm font-medium text-gray-700 mb-1">
                              Класс *
                            </label>
                            <select
                              id="childClass"
                              required
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            >
                              <option value="">Выберите</option>
                              {[1,2,3,4,5,6,7,8,9,10,11].map(c => (
                                <option key={c} value={c}>{c} класс</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="childShift" className="block text-sm font-medium text-gray-700 mb-1">
                            Интересующая смена
                          </label>
                          <select
                            id="childShift"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          >
                            <option value="">Выберите смену</option>
                            <option value="1">Смена 1: КвесТТеРРа (20 июня — 7 июля)</option>
                            <option value="2">Смена 2: Эти Тонкие МирЫ (9 — 26 июля)</option>
                            <option value="3">Смена 3: ПрофТерра (28 июля — 14 августа)</option>
                            <option value="4">Смена 4: ТМ-фест (16 — 22 августа)</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                            Комментарий
                          </label>
                          <Textarea
                            id="comment"
                            placeholder="Вопросы или пожелания..."
                            rows={2}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-violet-600 hover:bg-violet-700 text-white"
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
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center">
                <span className="text-white font-bold text-[10px] leading-none">ТМ</span>
              </div>
              <span className="text-sm font-bold text-gray-700">Территория МЫ</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="tel:+79270394222" className="hover:text-gray-700">
                +7 (927) 039-42-22
              </a>
              <span className="text-gray-300">|</span>
              <span>Казань, ул. Спартаковская, 2</span>
              <span className="text-gray-300">|</span>
              <a
                href="https://vk.com/territorymy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                ВКонтакте
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-400">
            <p>ГК «Регина», г. Мамадыш, Республика Татарстан</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
