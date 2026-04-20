'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  TreePine,
  Sun,
  Palette,
  Dumbbell,
  Tent,
  Music,
  Star,
  Shield,
  Heart,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Flame,
  Mountain,
  Compass,
  BookOpen,
} from 'lucide-react'

/* ──────────────────────────── data ──────────────────────────── */

const navLinks = [
  { label: 'О лагере', href: '#about' },
  { label: 'Программы', href: '#programs' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Стоимость', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
]

const programs = [
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: 'Спортивная программа',
    description:
      'Плавание в чистом озере, спортивные игры, соревнования по волейболу и футболу, утренняя зарядка на свежем воздухе, беговые тропы и полоса препятствий. Профессиональные тренеры обеспечат безопасность и увлекательный процесс для детей любого уровня подготовки.',
    image: '/camp-sport.png',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Творческая мастерская',
    description:
      'Рисование, лепка, создание поделок из природных материалов, театральные постановки и музыкальные занятия. Каждый ребёнок сможет раскрыть свой творческий потенциал и представить свои работы на итоговой выставке перед родителями.',
    image: '/camp-creative.png',
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: 'Приключения и экспедиции',
    description:
      'Походы по лесным тропам, ориентирование на местности, установка палаточного лагеря, приготовление пищи на костре, изучение флоры и фауны. Дети научатся работать в команде и ценить красоту природы.',
    image: '/camp-hero.png',
  },
  {
    icon: <Flame className="h-8 w-8" />,
    title: 'Вечерние мероприятия',
    description:
      'Костры с песнями под гитару, квесты, дискотеки, кино под звёздным небом, шоу талантов и тематические вечеринки. Каждый вечер — это новое приключение и повод для незабываемых эмоций.',
    image: '/camp-evening.png',
  },
]

const advantages = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Безопасность',
    description:
      'Круглосуточная охрана territory, медпункт с опытным врачом, все вожатые прошли проверку и сертификацию. Территория огорожена и оснащена камерами видеонаблюдения.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Профессиональная команда',
    description:
      'Педагоги с опытом работы более 10 лет, психологи, тренеры и аниматоры. Соотношение взрослых и детей — 1 к 5, что гарантирует индивидуальный подход к каждому ребёнку.',
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: 'Экологичная территория',
    description:
      'Лагерь расположен в сосновом лесу на берегу чистого озера. Прозрачный воздух, отсутствие промышленных объектов поблизости и собственная территория площадью более 10 гектаров.',
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Образовательная программа',
    description:
      'Занятия английским языком в игровой форме, курсы по робототехнике, экологические проекты и тренинги по развитию лидерских качеств. Обучение в игровой форме, которая не даёт скучать.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Домашний комфорт',
    description:
      'Тёплые деревянные домики с комфортными комнатами, пятиразовое домашнее питание, прачечная и гладильная комната. Всё для того, чтобы ребёнок чувствовал себя как дома.',
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: '15 лет опыта',
    description:
      'С 2011 года мы создаём незабываемый отдых для детей. Более 15 000 довольных родителей и бесконечное количество счастливых детских улыбок — лучшая рекомендация нашего лагеря.',
  },
]

const testimonials = [
  {
    name: 'Елена Петрова',
    role: 'Мама двоих детей',
    text: 'Дети возвращались из лагеря совершенно другими — более самостоятельными, общительными и счастливыми! Младший сын, который обычно скучал без гаджетов, ни разу не вспомнил о планшете за две недели. Это просто чудо!',
    rating: 5,
  },
  {
    name: 'Алексей Козлов',
    role: 'Папа',
    text: 'Сначала переживал, как дочь будет вдали от дома. Но ежедневные фотоотчёты и звонки от вожатых успокоили. А когда она вернулась и два часа рассказывала о походах и новых друзьях — понял, что выбор был правильным на все 100%.',
    rating: 5,
  },
  {
    name: 'Марина Сидорова',
    role: 'Мама и педагог',
    text: 'Как педагог, я оценила образовательную программу лагеря. Дети занимаются в игровой форме, но при этом реально узнают много нового. Английский, робототехника, экология — и всё это в лесу, на свежем воздухе!',
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: 'Классика',
    duration: '14 дней',
    price: '45 000',
    features: [
      'Проживание в уютном домике',
      'Пятиразовое питание',
      'Спортивная программа',
      'Творческие мастерские',
      'Вечерние мероприятия',
      'Базовый английский',
    ],
    popular: false,
  },
  {
    name: 'Премиум',
    duration: '21 день',
    price: '62 000',
    features: [
      'Всё из тарифа «Классика»',
      'Экспедиции и походы',
      'Продвинутый английский',
      'Робототехника',
      'Индивидуальный проект',
      'Фотокнига воспоминаний',
    ],
    popular: true,
  },
  {
    name: 'VIP',
    duration: '28 дней',
    price: '78 000',
    features: [
      'Всё из тарифа «Премиум»',
      'Личный наставник',
      'Спортивные секции на выбор',
      'Подготовка к олимпиадам',
      'Конная езда',
      'Видео-фильм о смене',
    ],
    popular: false,
  },
]

const faqItems = [
  {
    question: 'Какой возраст детей принимает лагерь?',
    answer:
      'Наш лагерь принимает детей от 7 до 15 лет. Дети распределяются по отрядам согласно возрасту: 7-9 лет, 10-12 лет и 13-15 лет. Каждая возрастная группа имеет свою адаптированную программу с учётом особенностей развития и интересов.',
  },
  {
    question: 'Как обеспечить безопасность моего ребёнка?',
    answer:
      'Безопасность — наш главный приоритет. Территория лагеря круглосуточно охраняется и огорожена. На территории работает медпункт с дежурным врачом и медсестрой. Все вожатые прошли проверку службой безопасности и имеют сертификаты первой помощи. Кроме того, мы ежедневно отправляем родителям фото- и видеоотчёты о жизни детей.',
  },
  {
    question: 'Какое питание организовано в лагере?',
    answer:
      'Пятиразовое сбалансированное питание, разработанное совместно с детским диетологом. В меню — свежие овощи, фрукты, молочные продукты, мясо и рыба. Мы учитываем индивидуальные особенности: аллергии, диетические предпочтения и религиозные ограничения. Кухня работает на собственной территории с полным соблюдением санитарных норм.',
  },
  {
    question: 'Можно ли приехать на экскурсию перед записью?',
    answer:
      'Конечно! Мы проводим экскурсии по территории лагеря каждые выходные с мая по июнь. Вы сможете осмотреть домики, познакомиться с командой, увидеть территорию и задать все вопросы лично. Для записи на экскурсию свяжитесь с нами по телефону или через форму обратной связи на сайте.',
  },
]

/* ──────────────────────────── components ──────────────────────────── */

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
        <span className="font-semibold text-lg text-card-foreground">{question}</span>
        {open ? <ChevronUp className="h-5 w-5 shrink-0 text-primary" /> : <ChevronDown className="h-5 w-5 shrink-0 text-primary" />}
      </div>
      {open && <p className="mt-3 text-muted-foreground leading-relaxed">{answer}</p>}
    </button>
  )
}

/* ──────────────────────────── page ──────────────────────────── */

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
          <a href="#" className="flex items-center gap-2">
            <img src="/camp-logo.png" alt="Лесная Тропа" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-primary hidden sm:inline">Лесная Тропа</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
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
            Записаться
          </Button>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
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
              Записаться
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1.5 rounded-full">
                <Sun className="h-4 w-4 mr-1 text-amber-500" />
                Лето 2026 — наборы открыты!
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Детский лагерь{' '}
                <span className="text-primary">«Лесная Тропа»</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Незабываемое лето в сосновом лесу у чистого озера. Спорт, творчество, приключения и новые друзья — всё, что нужно для лучшего отдыха вашего ребёнка.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="text-base px-8" onClick={() => scrollTo('#contacts')}>
                  Забронировать место
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" onClick={() => scrollTo('#programs')}>
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> Более 15 000 довольных родителей</span>
                <span className="flex items-center gap-1.5"><Mountain className="h-4 w-4 text-primary" /> 10 га соснового леса</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> 15 лет опыта</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/camp-hero.png"
                alt="Детский лагерь Лесная Тропа"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg text-sm font-medium hidden md:block">
                <Tent className="h-5 w-5 mb-1" />
                3 смены летом
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary/40 to-transparent pointer-events-none" />
        </section>

        {/* ─── Programs ─── */}
        <section id="programs" className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Наши программы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Четыре направления для каждого</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Каждая смена включает разнообразные активности, которые помогут вашему ребёнку открыть новые таланты и найти друзей
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <Card key={program.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-lg p-2">{program.icon}</div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-5">
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Advantages ─── */}
        <section id="advantages" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Почему мы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Мы создали пространство, где каждый ребёнок чувствует себя в безопасности, раскрывает таланты и находит настоящих друзей
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv) => (
                <Card key={adv.title} className="hover:shadow-lg transition-shadow duration-300 border-border p-6">
                  <div className="bg-primary/10 text-primary rounded-xl p-3 w-fit mb-4">
                    {adv.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{adv.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Gallery ─── */}
        <section id="gallery" className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Галерея</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Жизнь в лагере</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Каждое мгновение в нашем лагере — это радость, открытие и веселье
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img src="/camp-hero.png" alt="Лагерь" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/camp-sport.png" alt="Спорт" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/camp-creative.png" alt="Творчество" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/camp-evening.png" alt="Вечерние мероприятия" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-primary flex items-center justify-center p-6 text-center">
                <div className="text-primary-foreground">
                  <Music className="h-10 w-10 mx-auto mb-3" />
                  <p className="font-bold text-lg">И ещё 50+ активностей</p>
                  <p className="text-sm opacity-80 mt-1">каждую смену</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section id="testimonials" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Отзывы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят родители</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Доверие родителей — наша главная награда и мотивация становиться лучше
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="p-6 hover:shadow-lg transition-shadow duration-300 border-border">
                  <StarRating count={t.rating} />
                  <p className="mt-4 text-muted-foreground leading-relaxed italic">«{t.text}»</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section id="pricing" className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">Стоимость</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий тариф</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Прозрачные цены без скрытых платежей. В стоимость уже включены проживание, питание и все мероприятия
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative p-0 overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
                    plan.popular ? 'border-primary border-2 shadow-lg' : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold">
                      Популярный выбор
                    </div>
                  )}
                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.duration}</CardDescription>
                    <div className="mt-2">
                      <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">руб.</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-primary shrink-0 mt-0.5 fill-primary/20" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-6 pt-0">
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => scrollTo('#contacts')}
                    >
                      Забронировать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3">FAQ</Badge>
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
              <h2 className="text-3xl md:text-4xl font-bold">Запишите ребёнка прямо сейчас!</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение часа. Мы расскажем обо всех деталях, поможем выбрать подходящую смену и ответим на все вопросы.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="text-lg">+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="text-lg">info@lesnaya-tropa.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span className="text-lg">Московская область, посёлок Сосновый Бор</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span className="text-lg">Ежедневно с 9:00 до 20:00</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-foreground p-6 md:p-8 shadow-2xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Заполните форму, и мы вам перезвоним</CardDescription>
              </CardHeader>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
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
                  <label htmlFor="childName" className="text-sm font-medium">Имя ребёнка</label>
                  <Input id="childName" placeholder="Как зовут вашего ребёнка?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="childAge" className="text-sm font-medium">Возраст ребёнка</label>
                  <Input id="childAge" type="number" placeholder="Например, 10" min={7} max={15} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Комментарий</label>
                  <Textarea id="message" placeholder="Есть вопросы или пожелания? Напишите здесь..." rows={3} />
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
                <img src="/camp-logo.png" alt="Лесная Тропа" className="h-8 w-8 rounded-full object-cover" />
                <span className="font-bold text-lg text-primary">Лесная Тропа</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Детский летний лагерь в сосновом лесу. Незабываемые впечатления, новые друзья и открытие талантов с 2011 года.
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
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +7 (800) 123-45-67</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@lesnaya-tropa.ru</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Московская обл., пос. Сосновый Бор</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Лесная Тропа. Все права защищены. Лицензия на образовательную деятельность.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
