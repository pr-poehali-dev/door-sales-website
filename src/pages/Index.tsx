import { useState } from "react";
import Icon from "@/components/ui/icon";

const DOOR_IMAGE = "https://cdn.poehali.dev/projects/39ebc026-5c23-4b15-9713-225c2f601db0/files/b6af4704-5f01-4556-ba17-1bc8d87a4698.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О компании" },
  { id: "services", label: "Услуги" },
  { id: "portfolio", label: "Портфолио" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_ITEMS = [
  {
    id: 1,
    name: "Венеция Гранд",
    category: "Межкомнатные",
    material: "Массив дуба",
    price: 48500,
    badge: "Хит продаж",
    image: DOOR_IMAGE,
    desc: "Классическая панельная дверь из массива дуба с латунной фурнитурой",
  },
  {
    id: 2,
    name: "Модерн Слим",
    category: "Входные",
    material: "Сталь + МДФ",
    price: 67200,
    badge: "Новинка",
    image: DOOR_IMAGE,
    desc: "Стальная дверь с шумоизоляцией 52 дБ и скрытыми петлями",
  },
  {
    id: 3,
    name: "Альпийский лес",
    category: "Межкомнатные",
    material: "Шпон ореха",
    price: 38900,
    badge: null,
    image: DOOR_IMAGE,
    desc: "Лёгкая деревянная дверь со скрытым коробом и плавным доводчиком",
  },
  {
    id: 4,
    name: "Стеклянная линия",
    category: "Межкомнатные",
    material: "Стекло + алюминий",
    price: 55700,
    badge: "Эксклюзив",
    image: DOOR_IMAGE,
    desc: "Прозрачная перегородка-дверь для зонирования пространства",
  },
  {
    id: 5,
    name: "Эбеновый замок",
    category: "Входные",
    material: "Массив эбена",
    price: 124000,
    badge: "Премиум",
    image: DOOR_IMAGE,
    desc: "Представительская входная дверь с биометрическим замком",
  },
  {
    id: 6,
    name: "Белый лофт",
    category: "Раздвижные",
    material: "МДФ эмаль",
    price: 29800,
    badge: null,
    image: DOOR_IMAGE,
    desc: "Раздвижная дверь в стиле лофт на открытом рельсе",
  },
];

const SERVICES = [
  {
    icon: "Ruler",
    title: "Замер и консультация",
    desc: "Бесплатный выезд замерщика в день обращения. Подбор оптимального решения под ваш проект.",
    price: "Бесплатно",
  },
  {
    icon: "Settings",
    title: "Профессиональный монтаж",
    desc: "Установка за 1 день без строительного мусора. Гарантия 5 лет на все работы.",
    price: "от 4 500 ₽",
  },
  {
    icon: "Shield",
    title: "Доставка и хранение",
    desc: "Доставка по городу в течение 24 часов. Бережная упаковка и хранение до 30 дней.",
    price: "от 1 200 ₽",
  },
  {
    icon: "Wrench",
    title: "Гарантийный сервис",
    desc: "Регулировка, замена фурнитуры, устранение дефектов в течение всего гарантийного срока.",
    price: "По договору",
  },
];

const PORTFOLIO = [
  {
    id: 1,
    title: "Квартира на Арбате",
    category: "Жилой интерьер",
    year: "2024",
    desc: "7 межкомнатных дверей из шпона ореха с латунными ручками",
    image: DOOR_IMAGE,
  },
  {
    id: 2,
    title: "Офис «Меридиан»",
    category: "Коммерческий объект",
    year: "2024",
    desc: "Стеклянные перегородки и 23 офисные двери в едином стиле",
    image: DOOR_IMAGE,
  },
  {
    id: 3,
    title: "Коттедж в Подмосковье",
    category: "Загородный дом",
    year: "2023",
    desc: "Входная группа + 12 внутренних дверей из массива дуба",
    image: DOOR_IMAGE,
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    category: "Выбор дверей",
    title: "Как выбрать дверь для гостиной: 7 главных критериев",
    date: "28 апр 2026",
    readTime: "5 мин",
    excerpt: "Разбираем материалы, фурнитуру, звукоизоляцию и стилевое соответствие...",
  },
  {
    id: 2,
    category: "Уход",
    title: "Уход за деревянными дверями: полное руководство",
    date: "20 апр 2026",
    readTime: "4 мин",
    excerpt: "Как сохранить красоту и продлить жизнь деревянным дверям на долгие годы...",
  },
  {
    id: 3,
    category: "Тренды",
    title: "Тренды дверного дизайна 2026: что актуально сегодня",
    date: "12 апр 2026",
    readTime: "6 мин",
    excerpt: "Скрытые короба, матовые поверхности, биометрия — что выбирают дизайнеры в этом году...",
  },
];

const MATERIALS = [
  { id: "mdf", label: "МДФ", multiplier: 1.0 },
  { id: "veneer", label: "Шпон", multiplier: 1.6 },
  { id: "solid", label: "Массив дуба", multiplier: 2.4 },
  { id: "ebony", label: "Массив эбена", multiplier: 4.2 },
];

const HARDWARE = [
  { id: "standard", label: "Стандарт", price: 2800 },
  { id: "premium", label: "Премиум", price: 7500 },
  { id: "lux", label: "Люкс (золото)", price: 18000 },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("Все");
  const [cartOpen, setCartOpen] = useState(false);

  const [calcWidth, setCalcWidth] = useState(900);
  const [calcHeight, setCalcHeight] = useState(2100);
  const [calcMaterial, setCalcMaterial] = useState("veneer");
  const [calcHardware, setCalcHardware] = useState("premium");
  const [calcInstall, setCalcInstall] = useState(true);

  const BASE_PRICE = 22000;
  const mat = MATERIALS.find((m) => m.id === calcMaterial)!;
  const hw = HARDWARE.find((h) => h.id === calcHardware)!;
  const sizeMultiplier = (calcWidth * calcHeight) / (900 * 2100);
  const doorPrice = Math.round(BASE_PRICE * mat.multiplier * sizeMultiplier);
  const installPrice = calcInstall ? 4500 : 0;
  const totalPrice = doorPrice + hw.price + installPrice;

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems((prev) => [...prev, item]);
    setCartCount((c) => c + 1);
  };

  const removeFromCart = (idx: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
    setCartCount((c) => Math.max(0, c - 1));
  };

  const cartTotal = cartItems.reduce((s, i) => s + i.price, 0);
  const categories = ["Все", "Межкомнатные", "Входные", "Раздвижные"];
  const filteredCatalog =
    filterCategory === "Все"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((d) => d.category === filterCategory);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-dark text-cream relative overflow-x-hidden">
      <div className="noise-overlay" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-dark/90 backdrop-blur-md border-b border-gold-dark/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold flex items-center justify-center">
              <div className="w-4 h-4 bg-gold" />
            </div>
            <span className="font-display text-xl tracking-widest text-cream group-hover:text-gold transition-colors">
              ДВЕРИ ЛЮКС
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link font-body text-sm tracking-wide ${
                  activeSection === item.id ? "text-gold active" : "text-cream/70 hover:text-cream"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
            >
              <Icon name="ShoppingBag" size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <a
              href="tel:+74951234567"
              className="hidden md:flex items-center gap-2 text-gold text-sm font-medium"
            >
              <Icon name="Phone" size={15} />
              +7 (495) 123-45-67
            </a>
            <button
              className="lg:hidden text-cream/70 hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-72 bg-dark-2 border-l border-gold/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-gold/20">
              <span className="font-display text-lg text-gold">Меню</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <Icon name="X" size={22} />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-cream/80 hover:text-gold hover:bg-dark-3 transition-all rounded text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="p-6 border-t border-gold/20">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-gold">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CART SIDEBAR */}
      {cartOpen && (
        <div className="mobile-menu-overlay" onClick={() => setCartOpen(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-80 md:w-96 bg-dark-2 border-l border-gold/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-gold/20">
              <span className="font-display text-lg text-gold">Корзина ({cartCount})</span>
              <button onClick={() => setCartOpen(false)} className="text-cream/70 hover:text-gold transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-cream/40">
                <Icon name="ShoppingBag" size={48} />
                <p className="text-sm">Корзина пуста</p>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    scrollTo("catalog");
                  }}
                  className="btn-outline-gold px-6 py-2 text-sm"
                >
                  В каталог
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  {cartItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-dark-3 border border-gold/10 p-4 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-medium text-sm text-cream">{item.name}</p>
                        <p className="text-gold text-sm mt-0.5">{item.price.toLocaleString("ru")} ₽</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-cream/30 hover:text-red-400 transition-colors"
                      >
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-gold/20 flex flex-col gap-4">
                  <div className="flex justify-between text-cream">
                    <span className="font-body text-sm text-cream/60">Итого</span>
                    <span className="font-display text-2xl text-gold">{cartTotal.toLocaleString("ru")} ₽</span>
                  </div>
                  <button className="btn-gold w-full py-3 text-sm uppercase tracking-widest rounded-sm">
                    Оформить заказ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={DOOR_IMAGE}
            alt="Premium door"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gold/5" />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gold/5" />
          <div className="absolute left-0 right-0 top-1/3 h-px bg-gold/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <div
              className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in delay-100"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">
                Премиальные двери
              </span>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 opacity-0 animate-fade-in-up delay-200"
              style={{ animationFillMode: "forwards" }}
            >
              Двери, которые
              <br />
              <span className="gold-shimmer italic">говорят о вас</span>
            </h1>

            <p
              className="font-body text-cream/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-in delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              Более 500 моделей входных и межкомнатных дверей. Профессиональный монтаж и гарантия 5
              лет.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in delay-600"
              style={{ animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("catalog")}
                className="btn-gold px-8 py-4 text-sm uppercase tracking-widest rounded-sm"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("calculator")}
                className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest rounded-sm"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 right-8 hidden lg:flex flex-col gap-6">
            {[
              { val: "500+", label: "Моделей" },
              { val: "12 лет", label: "На рынке" },
              { val: "3 200", label: "Объектов" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-right opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.7 + i * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="font-display text-3xl text-gold">{s.val}</div>
                <div className="text-xs text-cream/40 tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="section-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Наши двери</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream">Каталог</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all rounded-sm ${
                    filterCategory === cat
                      ? "bg-gold text-dark font-semibold"
                      : "border border-gold/30 text-cream/60 hover:border-gold hover:text-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCatalog.map((door) => (
              <div
                key={door.id}
                className="card-hover bg-dark-3 border border-gold/10 hover:border-gold/30 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-70" />
                  {door.badge && (
                    <div className="absolute top-4 left-4 bg-gold text-dark text-xs font-bold px-3 py-1 tracking-wider uppercase">
                      {door.badge}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-dark/60 backdrop-blur text-cream/60 text-xs px-2 py-1">
                    {door.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl text-cream mb-1">{door.name}</h3>
                  <p className="text-xs text-gold/70 mb-2 tracking-wide">{door.material}</p>
                  <p className="text-sm text-cream/50 leading-relaxed mb-4">{door.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-gold">
                      {door.price.toLocaleString("ru")} ₽
                    </span>
                    <button
                      onClick={() => addToCart({ id: door.id, name: door.name, price: door.price })}
                      className="btn-gold px-4 py-2 text-xs uppercase tracking-widest rounded-sm flex items-center gap-2"
                    >
                      <Icon name="ShoppingBag" size={13} />В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-outline-gold px-10 py-4 text-sm uppercase tracking-widest rounded-sm">
              Показать все 500+ моделей
            </button>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="section-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Узнайте цену за 1 минуту</span>
              <span className="section-line" style={{ marginRight: 0, marginLeft: 12 }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Калькулятор стоимости
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-dark-3 border border-gold/15 p-8 flex flex-col gap-8">
              {/* Size */}
              <div>
                <h3 className="font-body text-cream/80 text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Icon name="Move" size={15} className="text-gold" />
                  Размеры двери
                </h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-cream/50 uppercase tracking-wider">Ширина</span>
                      <span className="text-gold text-sm font-medium">{calcWidth} мм</span>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="1200"
                      step="50"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(Number(e.target.value))}
                      className="range-gold w-full"
                    />
                    <div className="flex justify-between text-xs text-cream/25 mt-1">
                      <span>600</span>
                      <span>900</span>
                      <span>1200</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-cream/50 uppercase tracking-wider">Высота</span>
                      <span className="text-gold text-sm font-medium">{calcHeight} мм</span>
                    </div>
                    <input
                      type="range"
                      min="1900"
                      max="2400"
                      step="50"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(Number(e.target.value))}
                      className="range-gold w-full"
                    />
                    <div className="flex justify-between text-xs text-cream/25 mt-1">
                      <span>1900</span>
                      <span>2150</span>
                      <span>2400</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-body text-cream/80 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Icon name="Layers" size={15} className="text-gold" />
                  Материал
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {MATERIALS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setCalcMaterial(m.id)}
                      className={`py-3 px-4 text-sm text-left transition-all rounded-sm ${
                        calcMaterial === m.id
                          ? "bg-gold text-dark font-semibold"
                          : "bg-dark-4 text-cream/70 hover:text-cream border border-gold/10 hover:border-gold/30"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware */}
              <div>
                <h3 className="font-body text-cream/80 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Icon name="Key" size={15} className="text-gold" />
                  Фурнитура
                </h3>
                <div className="flex flex-col gap-2">
                  {HARDWARE.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setCalcHardware(h.id)}
                      className={`flex items-center justify-between py-3 px-4 text-sm transition-all rounded-sm ${
                        calcHardware === h.id
                          ? "bg-gold text-dark font-semibold"
                          : "bg-dark-4 text-cream/70 hover:text-cream border border-gold/10 hover:border-gold/30"
                      }`}
                    >
                      <span>{h.label}</span>
                      <span className={calcHardware === h.id ? "text-dark/70" : "text-gold/70"}>
                        {h.price.toLocaleString("ru")} ₽
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Installation */}
              <div>
                <h3 className="font-body text-cream/80 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Icon name="Wrench" size={15} className="text-gold" />
                  Монтаж
                </h3>
                <button
                  onClick={() => setCalcInstall(!calcInstall)}
                  className={`flex items-center gap-3 py-3 px-4 w-full text-sm transition-all rounded-sm ${
                    calcInstall
                      ? "bg-gold text-dark font-semibold"
                      : "bg-dark-4 text-cream/70 border border-gold/10 hover:border-gold/30"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
                      calcInstall ? "border-dark bg-dark" : "border-gold/40"
                    }`}
                  >
                    {calcInstall && <Icon name="Check" size={12} className="text-gold" />}
                  </div>
                  <span>Профессиональная установка</span>
                  <span className={`ml-auto ${calcInstall ? "text-dark/70" : "text-gold/70"}`}>
                    4 500 ₽
                  </span>
                </button>
              </div>
            </div>

            {/* Result */}
            <div className="bg-dark-3 border border-gold/15 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="section-line" style={{ width: 30 }} />
                  <span className="text-gold text-xs tracking-widest uppercase">Ваш расчёт</span>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { label: "Дверь", val: doorPrice },
                    { label: `Фурнитура (${hw.label})`, val: hw.price },
                    { label: "Монтаж", val: installPrice },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-gold/10"
                    >
                      <span className="text-cream/50 text-sm">{row.label}</span>
                      <span
                        className={`font-body text-sm ${
                          row.val === 0 ? "text-cream/25 line-through" : "text-cream"
                        }`}
                      >
                        {row.val === 0 ? "не выбрано" : `${row.val.toLocaleString("ru")} ₽`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-dark-4 border border-gold/20 p-6 mb-8">
                  <div className="text-xs text-gold/70 uppercase tracking-widest mb-2">
                    Итоговая стоимость
                  </div>
                  <div className="font-display text-5xl text-gold">
                    {totalPrice.toLocaleString("ru")} ₽
                  </div>
                  <div className="text-xs text-cream/40 mt-2">
                    Размер: {calcWidth} × {calcHeight} мм
                  </div>
                </div>

                <div className="bg-dark-4/50 border border-gold/10 p-4 rounded-sm">
                  <p className="text-xs text-cream/40 leading-relaxed">
                    Расчёт является ориентировочным. Точная стоимость определяется после бесплатного
                    замера на объекте.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <button className="btn-gold py-4 text-sm uppercase tracking-widest rounded-sm w-full flex items-center justify-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Получить точный расчёт
                </button>
                <button
                  onClick={() =>
                    addToCart({
                      id: 99,
                      name: `Дверь на заказ ${calcWidth}×${calcHeight}`,
                      price: totalPrice,
                    })
                  }
                  className="btn-outline-gold py-4 text-sm uppercase tracking-widest rounded-sm w-full flex items-center justify-center gap-2"
                >
                  <Icon name="ShoppingBag" size={16} />
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md">
                <img src={DOOR_IMAGE} alt="About" className="w-full h-full object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-dark-3 border border-gold/20 p-6 w-40">
                  <div className="font-display text-4xl text-gold">12</div>
                  <div className="text-xs text-cream/50 uppercase tracking-wider">лет опыта</div>
                </div>
                <div className="absolute top-8 -left-6 bg-gold text-dark p-4 text-center">
                  <div className="font-display text-3xl font-bold">3200</div>
                  <div className="text-xs uppercase tracking-wider font-semibold">объектов</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">О нас</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6 leading-tight">
                Мы создаём двери,
                <br />
                <em className="text-gold">а не просто продаём</em>
              </h2>
              <p className="text-cream/60 leading-relaxed mb-6">
                С 2012 года компания «Двери Люкс» специализируется на поставке и монтаже дверей
                премиум-класса для жилых и коммерческих объектов. Мы работаем напрямую с ведущими
                европейскими и отечественными производителями.
              </p>
              <p className="text-cream/60 leading-relaxed mb-8">
                Каждый проект — от выбора модели до финальной регулировки — ведёт персональный
                менеджер. Мы дорожим репутацией и работаем только с проверенными материалами.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Award", text: "Сертификаты качества ISO" },
                  { icon: "Truck", text: "Доставка за 24 часа" },
                  { icon: "Shield", text: "Гарантия 5 лет" },
                  { icon: "Users", text: "Команда 45 специалистов" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-dark-3 border border-gold/10"
                  >
                    <Icon name={f.icon} size={16} className="text-gold flex-shrink-0" />
                    <span className="text-cream/70 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contacts")}
                className="btn-gold px-8 py-4 text-sm uppercase tracking-widest rounded-sm"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="section-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Что мы делаем</span>
              <span className="section-line" style={{ marginRight: 0, marginLeft: 12 }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="card-hover bg-dark-3 border border-gold/10 hover:border-gold/30 p-6 group"
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <Icon name={s.icon} size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-cream mb-3">{s.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-gold font-semibold text-sm">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="section-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Наши работы</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream">Портфолио</h2>
            </div>
            <p className="text-cream/50 text-sm max-w-sm">
              Реализованные объекты — от квартир до торговых центров
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div
                key={p.id}
                className={`card-hover group relative overflow-hidden ${i === 0 ? "lg:row-span-2" : ""}`}
              >
                <div
                  className={`w-full overflow-hidden ${
                    i === 0 ? "h-96 lg:h-full min-h-80" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gold/70 uppercase tracking-widest">
                      {p.category}
                    </span>
                    <span className="text-cream/30">•</span>
                    <span className="text-xs text-cream/40">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-cream mb-1">{p.title}</h3>
                  <p className="text-cream/50 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-outline-gold px-10 py-4 text-sm uppercase tracking-widest rounded-sm">
              Смотреть все работы
            </button>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="section-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Советы экспертов</span>
              <span className="section-line" style={{ marginRight: 0, marginLeft: 12 }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">Блог</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="card-hover bg-dark-3 border border-gold/10 hover:border-gold/30 group cursor-pointer overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-gold/15 text-gold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-cream/30">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl text-cream mb-3 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                    <span className="text-xs text-cream/30">{post.date}</span>
                    <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Читать <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Свяжитесь с нами</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
                Готовы обсудить
                <br />
                <em className="text-gold">ваш проект?</em>
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", val: "info@dveri-lux.ru" },
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, ул. Дверная, д. 1" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Сб 9:00–20:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-cream/40 uppercase tracking-widest mb-0.5">
                        {c.label}
                      </div>
                      <div className="text-cream">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-3 border border-gold/15 p-8">
              <h3 className="font-display text-2xl text-cream mb-6">Оставить заявку</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-cream/50 uppercase tracking-wider">Имя</label>
                    <input
                      type="text"
                      placeholder="Александр"
                      className="bg-dark-4 border border-gold/20 focus:border-gold text-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-cream/25"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-cream/50 uppercase tracking-wider">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="bg-dark-4 border border-gold/20 focus:border-gold text-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-cream/25"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-cream/50 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="bg-dark-4 border border-gold/20 focus:border-gold text-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-cream/25"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-cream/50 uppercase tracking-wider">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="bg-dark-4 border border-gold/20 focus:border-gold text-cream px-4 py-3 text-sm outline-none transition-colors resize-none placeholder:text-cream/25"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold py-4 text-sm uppercase tracking-widest rounded-sm mt-2 flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={15} />
                  Отправить заявку
                </button>
                <p className="text-xs text-cream/30 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark border-t border-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 border border-gold flex items-center justify-center">
                  <div className="w-3 h-3 bg-gold" />
                </div>
                <span className="font-display text-lg tracking-widest text-cream">ДВЕРИ ЛЮКС</span>
              </div>
              <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
                Премиальные двери для жилых и коммерческих объектов. Профессиональная установка с
                гарантией.
              </p>
            </div>

            <div>
              <h4 className="text-xs text-gold/70 uppercase tracking-widest mb-4">Навигация</h4>
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-cream/40 hover:text-cream text-sm text-left transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-gold/70 uppercase tracking-widest mb-4">Контакты</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+74951234567"
                  className="text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
                <a
                  href="mailto:info@dveri-lux.ru"
                  className="text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  info@dveri-lux.ru
                </a>
                <div className="flex gap-3 mt-2">
                  {["Youtube", "Instagram", "MessageCircle"].map((icon) => (
                    <button
                      key={icon}
                      className="w-8 h-8 border border-gold/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold transition-all"
                    >
                      <Icon name={icon} size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-cream/25 text-xs">© 2026 Двери Люкс. Все права защищены.</p>
            <p className="text-cream/25 text-xs">
              Политика конфиденциальности · Условия использования
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}