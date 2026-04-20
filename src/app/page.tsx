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
  Heart,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Gamepad2,
  Brain,
  Briefcase,
  Dice5,
  Music,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

/* ───────────── real data from VK ───────────── */

const shifts = [
  {
    num: 1,
    dates: '20 июня — 7 июля',
    name: 'КвесТТеРРа: Эпоха Просвещения',
    type: 'Игровая ролевая смена',
    price: '69 800',
    description:
      'Удивительное погружение в захватывающие сюжеты мировых шедевров XVIII века! Иммерсивное путешествие с квестами, сюжетно-ролевыми играми, мистериями, приключениями и испытаниями. Каждый участник примерит на себя образы исторических персонажей и окажется в центре запутанной и увлекательной истории!',
    image: '/tm-quest.png',
    icon: <Gamepad2 className="h-6 w-6" />,
    popular: false,
  },
  {
    num: 2,
    dates: '9 — 26 июля',
    name: 'Эти Тонкие МирЫ',
    type: 'Психологическая гендерная смена',
    price: '74 500',
    description:
      'Этика и психология отношений. Только в мужском кругу мальчик обретает уверенность, ответственность и целеустремлённость. Только в женском кругу девочка учится создавать уют и атмосферу, заботиться, умению слушать и понимать. Про мужественность и женственность, про дружбу, доверие и уважение.',
    image: '/tm-psychology.png',
    icon: <Brain className="h-6 w-6" />,
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
      'Путь к самореализации и успешному будущему! Множество профилей на выбор: English Camp Family, Бизнес-школа, Школа международных отношений, Театральное искусство, Игротехнологии, КВН и стендап, Психология общения. Каждый профиль помогает проявить себя на все 103%!',
    image: '/tm-prof.png',
    icon: <Briefcase className="h-6 w-6" />,
    popular: false,
  },
  {
    num: 4,
    dates: '16 — 22 августа',
    name: 'ТМ-фест «Вселенная игр»',
    type: 'Фестиваль игр',
    price: '32 200',
    description:
      'Большой фестиваль игр всех форматов: спортивные, настольные, командные, стратегические, виртуальные, ролевые, игровые чемпионаты и игры-испытания! Место, где ты максимально сможешь показать, чего ты стоишь. Игра поможет развить коммуникации, лидерские качества и умение достигать целей.',
    image: '/tm-games.png',
    icon: <Dice5 className="h-6 w-6" />,
    popular: false,
  },
]

const advantages = [
  {
    icon: <Trophy className="h-8 w-8" />,
    title: '1-е место в рейтинге лагерей РТ',
    description:
      'Лучший республиканский лагерь Татарстана по оценкам экспертов и родителей. Бренд, который широко известен по всему Татарстану и за его пределами. Тщательный отбор и подготовка вожатых, высокий уровень организации, многолетние традиции.',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: '27 лет опыта',
    description:
      'С 1999 года мы создаём уникальные программы и помогаем детям стать личностью. Более двух десятилетий авторских методик, проверенных практикой. Каждый год тысячи школьников возвращаются к нам снова и снова.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Эксклюзивные авторские программы',
    description:
      'Каждая смена — уникальный проект с глубоким смыслом. Квесты, ролевые игры, психологические тренинги, профориентация, мастер-классы, вечеринки, театральные постановки и задушевные традиции. Новые фишки и события каждую смену.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Опытная педагогическая команда',
    description:
      'Профессиональные педагоги, психологи, аниматоры и наставники с многолетним стажем работы. Атмосфера доверия и принятия, в которой каждый ребёнок чувствует себя значимым и любимым.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Безопасность и комфорт',
    description:
      'Комфортабельное размещение в 3-4-местных номерах с туалетом и душем в каждом номере. Качественное улучшенное питание, медицинский кабинет, пост охраны и круглосуточная вахта. Живописная природа ГК «Регина» в г. Мамадыш.',
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: '4 возрастные программы',
    description:
      'Супердетская (1-3 классы), детская (4-5 классы), подростковая (6-7 классы) и молодёжная (8-11 классы) программы. Каждая адаптирована под возрастные особенности и интересы участников.',
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
    question: 'Как проходит день в лагере «Территория МЫ»?',
    answer:
      'Один из главных принципов лагеря — насыщенность и разнообразие. Каждая смена уникальна по содержанию. Типичный день включает: утренние сборы и зарядку, профильные занятия по выбранному направлению (английский язык, психология, бизнес, театр и др.), квесты и командные игры, творческие мастерские, спортивные активности, вечерние мероприятия (дискотеки, костры, театральные постановки, шоу талантов). Распорядок дня адаптирован для каждой возрастной группы.',
  },
  {
    question: 'Какие условия проживания?',
    answer:
      'Лагерь проходит на базе ГК «Регина» в городе Мамадыш. Комфортабельное размещение в 3-4-местных номерах с туалетом и душем в каждом номере. Качественное улучшенное пятиразовое питание. На территории работают медицинский кабинет, организован пост охраны и круглосуточная дежурная вахта. Территория окружена живописной природой.',
  },
  {
    question: 'Какого возраста дети принимаются?',
    answer:
      'Лагерь принимает детей и подростков с 1 по 11 класс. Участники распределяются по четырём возрастным программам: супердетская (1-3 классы), детская (4-5 классы), подростковая (6-7 классы) и молодёжная (8-11 классы). Каждая программа адаптирована под возрастные особенности, интересы и потребности участников.',
  },
  {
    question: 'Как оформить путёвку?',
    answer:
      'Собеседования (оформление необходимых документов и путёвок) проводятся каждый вторник с 18:30 до 20:00. Адрес офиса: г. Казань, ул. Спартаковская, 2 (ТОК «Караван»), оф. 224. Вы можете забронировать путёвку по телефону: +7(927)039-4222 (Владислав Лазбинев) или +7(927)04-777-40 (Елена Борисовна Юсупова, директор лагеря).',
  },
]

const navLinks = [
  { label: 'О лагере', href: '#about' },
  { label: 'Смены 2026', href: '#shifts' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

/* ───────────── components ───────────── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
        />
      ))}
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-base text-card-foreground">{question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-primary" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
        )}
      </div>
      {open && <p className="mt-3 text-muted-foreground leading-relaxed">{answer}</p>}
    </button>
  )
}

/* ───────────── page ───────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/tm-logo.png" alt="Территория МЫ" className="h-9 w-9 rounded-full object-cover" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary leading-none">Территория МЫ</span>
              <span className="block text-[10px] text-muted-foreground leading-none mt-0.5">
                РИПЛ, 1-е место в РТ
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button onClick={() => scrollTo('#contacts')} className="hidden lg:inline-flex">
            Забронировать путёвку
          </Button>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('#contacts')} className="mt-2">
              Забронировать путёвку
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section id="about" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-2 gap-10 items-center relative">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-sm px-4 py-1.5 rounded-full">
                <Trophy className="h-4 w-4 mr-1.5 text-amber-600" />
                1-е место в рейтинге лагерей Республики Татарстан
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Республиканский лагерь{' '}
                <span className="text-primary">«Территория МЫ»</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Интеллектуально-психологический лагерь с 27-летней историей. Эксклюзивные авторские программы,
                квесты, ролевые игры, профориентация и атмосфера доверия, в которой становятся личностью.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="text-base px-8" onClick={() => scrollTo('#shifts')}>
                  Смены лета 2026
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" onClick={() => scrollTo('#contacts')}>
                  Записаться
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" /> 27 лет вместе
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" /> 4 смены летом
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-primary" /> С 1 по 11 класс
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/tm-hero.png"
                alt="Лагерь Территория МЫ"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-3 -left-3 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg text-sm font-medium hidden md:flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Лето 2026 — наборы открыты!</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Shifts ─── */}
        <section id="shifts" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Лето 2026</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Летние смены</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Четыре уникальные смены с эксклюзивными авторскими программами. Выбери то, что по душе!
              </p>
            </div>

            <div className="space-y-8">
              {shifts.map((shift) => (
                <Card
                  key={shift.num}
                  className={`overflow-hidden group hover:shadow-xl transition-shadow duration-300 ${
                    shift.popular ? 'border-primary border-2 ring-1 ring-primary/20' : 'border-border'
                  }`}
                >
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                      <img
                        src={shift.image}
                        alt={shift.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary text-primary-foreground text-xs font-bold">
                          Смена {shift.num}
                        </Badge>
                      </div>
                      {shift.popular && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-amber-500 text-white text-xs font-bold">
                            Хит сезона
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-3 p-6 flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div className="flex items-center gap-2 text-primary">
                          {shift.icon}
                          <span className="text-xs font-semibold uppercase tracking-wide">{shift.type}</span>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{shift.dates}</span>
                      </div>
                      <h3 className="text-xl font-bold mt-2 mb-3">{shift.name}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">{shift.description}</p>
                      {shift.priceNote && (
                        <p className="text-xs text-muted-foreground mt-2 italic">{shift.priceNote}</p>
                      )}
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-extrabold text-foreground">{shift.price}</span>
                          <span className="text-muted-foreground ml-1">руб.</span>
                        </div>
                        <Button size="sm" onClick={() => scrollTo('#contacts')}>
                          Забронировать
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Advantages ─── */}
        <section id="advantages" className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Почему мы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Лагерь, где становятся личностью. Однажды побывав, школьники из года в год возвращаются снова и снова
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv) => (
                <Card key={adv.title} className="hover:shadow-lg transition-shadow duration-300 border-border p-6">
                  <div className="bg-primary/10 text-primary rounded-xl p-3 w-fit mb-4">{adv.icon}</div>
                  <h3 className="text-base font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{adv.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section id="testimonials" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Отзывы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят участники и родители</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Нам доверяют тысячи семей Татарстана и за его пределами
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="p-6 hover:shadow-lg transition-shadow duration-300 border-border">
                  <StarRating count={t.rating} />
                  <p className="mt-4 text-muted-foreground leading-relaxed italic">
                    &laquo;{t.text}&raquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <p className="font-semibold text-sm">{t.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Вопросы и ответы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contacts / CTA ─── */}
        <section id="contacts" className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Запишитесь на лето 2026!</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Оставьте заявку или позвоните нам напрямую. Мы расскажем обо всех деталях, поможем выбрать подходящую
                смену и ответим на все вопросы.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium">+7 (927) 039-42-22</p>
                    <p className="text-sm text-primary-foreground/70">Владислав Лазбинев, зам. руководителя</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium">+7 (927) 04-777-40</p>
                    <p className="text-sm text-primary-foreground/70">Елена Борисовна Юсупова, директор</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium">Казань, ул. Спартаковская, 2</p>
                    <p className="text-sm text-primary-foreground/70">ТОК &laquo;Караван&raquo;, оф. 224</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium">ГК &laquo;Регина&raquo;, г. Мамадыш</p>
                    <p className="text-sm text-primary-foreground/70">Место проведения лагеря</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium">Каждый вторник, 18:30 — 20:00</p>
                    <p className="text-sm text-primary-foreground/70">Собеседования и оформление путёвок</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-foreground p-6 md:p-8 shadow-2xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
              </CardHeader>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert(
                    'Спасибо за заявку! Мы свяжемся с вами в ближайшее время. Также вы можете позвонить напрямую: +7(927)039-4222'
                  )
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="childName" className="text-sm font-medium">Имя и класс ребёнка</label>
                  <Input id="childName" placeholder="Например: Алиса, 5 класс" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="shift" className="text-sm font-medium">Интересующая смена</label>
                  <select
                    id="shift"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Выберите смену</option>
                    <option value="1">Смена 1: КвесТТеРРа (20 июня — 7 июля)</option>
                    <option value="2">Смена 2: Эти Тонкие МирЫ (9 — 26 июля)</option>
                    <option value="3">Смена 3: ПрофТерра (28 июля — 14 августа)</option>
                    <option value="4">Смена 4: ТМ-фест (16 — 22 августа)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Комментарий</label>
                  <Textarea id="message" placeholder="Вопросы или пожелания..." rows={3} />
                </div>
                <Button type="submit" className="w-full text-base py-5">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src="/tm-logo.png" alt="Территория МЫ" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <span className="font-bold text-lg text-primary">Территория МЫ</span>
                  <span className="block text-xs text-muted-foreground">Республиканский ИПЛ</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Республиканский интеллектуально-психологический лагерь. 27 лет опыта, 1-е место в рейтинге лагерей
                Республики Татарстан. Место, где становятся личностью.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Навигация</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +7 (927) 039-42-22
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +7 (927) 04-777-40
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Казань, ул. Спартаковская, 2
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> vk.com/territorymy
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Республиканский интеллектуально-психологический лагерь &laquo;Территория МЫ&raquo;</p>
            <p className="mt-1">ГК &laquo;Регина&raquo;, г. Мамадыш, Республика Татарстан</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
