import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_DOOR_INT = "https://cdn.poehali.dev/projects/39ebc026-5c23-4b15-9713-225c2f601db0/files/b6af4704-5f01-4556-ba17-1bc8d87a4698.jpg";
const IMG_DOOR_ENT = "https://cdn.poehali.dev/projects/39ebc026-5c23-4b15-9713-225c2f601db0/files/6177d1c7-7b4b-4b14-8c85-361eaa1e2bbc.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "brands", label: "Производители" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О компании" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_ITEMS = [
  {
    id: 1, name: "Входная стальная «Берлин»", category: "Входные", material: "Сталь 2 мм + МДФ",
    price: 14900, oldPrice: 18500, badge: "Хит", image: IMG_DOOR_ENT,
    desc: "Два контура уплотнения, замок 3-го класса, терморазрыв, отделка венге",
  },
  {
    id: 2, name: "Входная «Гарда Премиум»", category: "Входные", material: "Сталь 2,5 мм",
    price: 24900, oldPrice: null, badge: "Новинка", image: IMG_DOOR_ENT,
    desc: "Три контура уплотнения, замки Kale, шумоизоляция, зеркало внутри",
  },
  {
    id: 3, name: "Входная «Оптима Эко»", category: "Входные", material: "Сталь 1,8 мм",
    price: 8900, oldPrice: null, badge: null, image: IMG_DOOR_ENT,
    desc: "Бюджетная модель с надёжным замком и хорошей теплоизоляцией",
  },
  {
    id: 4, name: "Межкомнатная «Прима»", category: "Межкомнатные", material: "МДФ эмаль",
    price: 4900, oldPrice: 6200, badge: "Акция", image: IMG_DOOR_INT,
    desc: "Гладкая поверхность под покраску или эмаль, скрытые петли",
  },
  {
    id: 5, name: "Межкомнатная «Шпон Дуб»", category: "Межкомнатные", material: "Шпон натурального дуба",
    price: 9800, oldPrice: null, badge: null, image: IMG_DOOR_INT,
    desc: "Натуральный шпон дуба, ламинированная коробка, доводчик в комплекте",
  },
  {
    id: 6, name: "Раздвижная «Лофт»", category: "Раздвижные", material: "МДФ + стекло",
    price: 7500, oldPrice: null, badge: null, image: IMG_DOOR_INT,
    desc: "Раздвижная система на рельсе, вставка из матового стекла",
  },
  {
    id: 7, name: "Входная «Форт Нокс»", category: "Входные", material: "Сталь 3 мм",
    price: 49900, oldPrice: null, badge: "Премиум", image: IMG_DOOR_ENT,
    desc: "Максимальная защита: броненакладки, секретный замок, антивандальное покрытие",
  },
  {
    id: 8, name: "Межкомнатная «Стекло Сатин»", category: "Межкомнатные", material: "Алюминий + стекло",
    price: 12400, oldPrice: null, badge: null, image: IMG_DOOR_INT,
    desc: "Алюминиевая рама с сатинированным стеклом — для офиса и дома",
  },
];

const BRANDS = [
  { name: "Стальная Линия", desc: "Российский производитель входных дверей премиум-класса", type: "Входные" },
  { name: "Torex", desc: "Широкий модельный ряд по доступным ценам", type: "Входные" },
  { name: "Дверная Линия", desc: "Входные двери с уникальным дизайном", type: "Входные" },
  { name: "Волховец", desc: "Межкомнатные двери из натурального дерева", type: "Межкомнатные" },
  { name: "ProfilDoors", desc: "Современные межкомнатные двери в стиле минимализм", type: "Межкомнатные" },
  { name: "Albero", desc: "Итальянский стиль по российским ценам", type: "Межкомнатные" },
];

const SERVICES_LIST = [
  {
    icon: "Ruler", title: "Бесплатный замер", price: "0 ₽",
    desc: "Выезд замерщика в день обращения в удобное для вас время. Точные замеры — залог идеальной установки.",
    highlight: true,
  },
  {
    icon: "Hammer", title: "Установка входной двери", price: "от 2 500 ₽",
    desc: "Установка за 2–4 часа. Мастер привезёт всё необходимое, уберёт строительный мусор.",
    highlight: false,
  },
  {
    icon: "Settings", title: "Установка межкомнатной", price: "от 1 800 ₽",
    desc: "Монтаж под ключ: коробка, наличники, петли, ручки. Работаем в выходные.",
    highlight: false,
  },
  {
    icon: "Wrench", title: "Регулировка и ремонт", price: "от 900 ₽",
    desc: "Регулировка петель, замена уплотнителей, ремонт замков. Выезд в день заявки.",
    highlight: false,
  },
  {
    icon: "Truck", title: "Доставка по СПб", price: "от 500 ₽",
    desc: "Бережная доставка по Санкт-Петербургу и Ленинградской области в течение 1–2 дней.",
    highlight: false,
  },
  {
    icon: "Shield", title: "Гарантия 3 года", price: "Включено",
    desc: "Гарантия на все двери и работы по установке. Бесплатное гарантийное обслуживание.",
    highlight: false,
  },
];

const REVIEWS = [
  {
    name: "Алексей М.", date: "14 апреля 2026", rating: 5,
    text: "Установили входную дверь «Берлин» — очень доволен. Мастер приехал вовремя, работал аккуратно, всё убрал за собой. Дверь стоит ровно, уплотнители хорошие, замок работает мягко.",
  },
  {
    name: "Светлана К.", date: "2 апреля 2026", rating: 5,
    text: "Заказывала 5 межкомнатных дверей. Замерщик приехал на следующий день, установщики — через 4 дня после заказа. Всё сделали быстро и качественно. Цены адекватные.",
  },
  {
    name: "Игорь Т.", date: "18 марта 2026", rating: 4,
    text: "Хорошая компания. Брал входную дверь Torex — стоит хорошо, шума с улицы почти не слышно. Единственное — пришлось подождать с доставкой на день дольше обещанного.",
  },
  {
    name: "Марина Д.", date: "5 марта 2026", rating: 5,
    text: "Отличный магазин! Помогли с выбором, подобрали дверь под интерьер. Установщики — профессионалы, объяснили как регулировать петли. Рекомендую!",
  },
];

const SHOPS = [
  { name: "Шоу-рум на Ленинском", address: "пр. Ленинский, д. 168, лит. А", metro: "Ленинский пр.", hours: "Пн–Вс: 10:00–20:00" },
  { name: "Шоу-рум на Бухарестской", address: "ул. Бухарестская, д. 89", metro: "Международная", hours: "Пн–Вс: 10:00–20:00" },
  { name: "Шоу-рум на Комендантском", address: "пр. Комендантский, д. 53", metro: "Комендантский пр.", hours: "Пн–Вс: 10:00–20:00" },
];

const STATS = [
  { val: "60 000+", label: "Установленных дверей" },
  { val: "8 лет", label: "На рынке СПб" },
  { val: "3 шоу-рума", label: "В Санкт-Петербурге" },
  { val: "3 года", label: "Гарантия на все двери" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("Все");
  const [cartOpen, setCartOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  const categories = ["Все", "Входные", "Межкомнатные", "Раздвижные"];
  const filteredCatalog =
    filterCategory === "Все" ? CATALOG_ITEMS : CATALOG_ITEMS.filter((d) => d.category === filterCategory);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems((prev) => [...prev, item]);
    setCartCount((c) => c + 1);
  };
  const removeFromCart = (idx: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
    setCartCount((c) => Math.max(0, c - 1));
  };
  const cartTotal = cartItems.reduce((s, i) => s + i.price, 0);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* CALLBACK MODAL */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setCallbackOpen(false)}>
          <div className="bg-white w-full max-w-md mx-4 p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Заказать обратный звонок</h3>
              <button onClick={() => setCallbackOpen(false)} className="text-gray-400 hover:text-gray-700">
                <Icon name="X" size={22} />
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-5">Перезвоним в течение 15 минут в рабочее время</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ваше имя" className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors" />
              <input type="tel" placeholder="+7 (___) ___-__-__" className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors" />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-3 text-sm font-semibold uppercase tracking-wide transition-colors">
                Перезвоните мне
              </button>
              <p className="text-xs text-gray-400 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          </div>
        </div>
      )}

      {/* CART SIDEBAR */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 flex" onClick={() => setCartOpen(false)}>
          <div className="flex-1 bg-black/40" />
          <div className="w-80 md:w-96 bg-white flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="h-14 flex items-center justify-between px-5 border-b border-gray-100">
              <span className="font-bold text-gray-900">Корзина ({cartCount})</span>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-700">
                <Icon name="X" size={20} />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-gray-400">
                <Icon name="ShoppingCart" size={44} />
                <p className="text-sm">Корзина пуста</p>
                <button onClick={() => { setCartOpen(false); scrollTo("catalog"); }} className="border border-red-500 text-red-600 px-6 py-2 text-sm hover:bg-red-50 transition-colors">
                  В каталог
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="border border-gray-100 p-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-red-600 text-sm font-bold mt-0.5">{item.price.toLocaleString("ru")} ₽</p>
                      </div>
                      <button onClick={() => removeFromCart(idx)} className="text-gray-300 hover:text-red-400 transition-colors">
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-5 border-t border-gray-100 flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Итого</span>
                    <span className="font-bold text-xl text-gray-900">{cartTotal.toLocaleString("ru")} ₽</span>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white py-3 text-sm font-semibold uppercase tracking-wide transition-colors">
                    Оформить заказ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="text-gray-400">Санкт-Петербург и Ленинградская область</span>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Пн–Вс: 10:00–20:00</span>
            <a href="tel:88127038826" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              8 (812) 703-88-26
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            <div className="flex items-center">
              <span className="text-red-600 font-black text-2xl tracking-tight leading-none">ЭКОНОМ</span>
              <span className="text-gray-900 font-black text-2xl tracking-tight leading-none">ДОРС</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCallbackOpen(true)}
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold transition-colors"
            >
              Заказать звонок
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Icon name="ShoppingCart" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(true)}>
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-72 bg-white flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="h-14 flex items-center justify-between px-5 border-b">
              <span className="font-bold text-gray-900">Меню</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400"><Icon name="X" size={20} /></button>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all text-sm">
                  {item.label}
                </button>
              ))}
            </div>
            <div className="p-5 border-t">
              <a href="tel:88127038826" className="flex items-center gap-2 text-red-600 font-bold">
                <Icon name="Phone" size={16} />8 (812) 703-88-26
              </a>
            </div>
          </div>
          <div className="flex-1 bg-black/40" />
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_DOOR_ENT} alt="Двери" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
              Санкт-Петербург и ЛО
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Входные и межкомнатные{" "}
              <span className="text-red-500">двери</span> по низким ценам
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Более 500 моделей в наличии. Бесплатный замер, профессиональная установка за 1 день.
              Гарантия 3 года на все двери и работы.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button onClick={() => scrollTo("catalog")} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-colors">
                Смотреть каталог
              </button>
              <button onClick={() => setCallbackOpen(true)} className="border border-white/40 hover:border-white text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-colors hover:bg-white/10">
                Заказать звонок
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: "Check", text: "Бесплатный замер" },
                { icon: "Check", text: "Установка за 1 день" },
                { icon: "Check", text: "Гарантия 3 года" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={11} className="text-white" />
                  </div>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur border border-white/20 p-8">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Акция месяца</p>
              <h3 className="text-2xl font-bold text-white mb-3">Бесплатная установка</h3>
              <p className="text-gray-300 text-sm mb-5">
                При покупке входной двери от 12 000 ₽ — установка в подарок. Действует до конца мая 2026.
              </p>
              <div className="bg-red-600 text-white text-center py-3 font-bold text-lg mb-3">
                Экономия до 2 500 ₽
              </div>
              <button onClick={() => setCallbackOpen(true)} className="w-full border border-white/30 text-white py-3 text-sm hover:bg-white/10 transition-colors font-semibold">
                Узнать подробнее
              </button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-red-400">{s.val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Большой выбор</p>
              <h2 className="text-3xl font-black text-gray-900">Каталог дверей</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 text-sm font-semibold transition-all ${
                    filterCategory === cat
                      ? "bg-red-600 text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCatalog.map((door) => (
              <div key={door.id} className="bg-white border border-gray-100 hover:border-red-300 hover:shadow-lg transition-all group overflow-hidden">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img src={door.image} alt={door.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {door.badge && (
                    <div className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 uppercase tracking-wide ${
                      door.badge === "Акция" ? "bg-orange-500" : door.badge === "Премиум" ? "bg-gray-900" : "bg-red-600"
                    }`}>
                      {door.badge}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-600 text-xs px-2 py-1">
                    {door.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{door.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{door.material}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{door.desc}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-black text-red-600">{door.price.toLocaleString("ru")} ₽</span>
                    {door.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{door.oldPrice.toLocaleString("ru")} ₽</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart({ id: door.id, name: door.name, price: door.price })}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-1"
                    >
                      <Icon name="ShoppingCart" size={13} />В корзину
                    </button>
                    <button onClick={() => setCallbackOpen(true)} className="border border-gray-200 hover:border-red-400 p-2 transition-colors" title="Узнать цену">
                      <Icon name="Phone" size={14} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-3 font-bold text-sm uppercase tracking-wide transition-all">
              Смотреть все двери
            </button>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-10 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={22} className="text-white" />
            </div>
            <div>
              <p className="font-black text-xl">Не можете выбрать дверь?</p>
              <p className="text-red-100 text-sm">Позвоните нам — поможем подобрать за 5 минут</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:88127038826" className="text-2xl font-black hover:text-red-200 transition-colors">
              8 (812) 703-88-26
            </a>
            <button onClick={() => setCallbackOpen(true)} className="bg-white text-red-600 hover:bg-red-50 px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
              Перезвоним бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Официальные дилеры</p>
            <h2 className="text-3xl font-black text-gray-900">Производители</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANDS.map((b, i) => (
              <div key={i} className="border border-gray-100 hover:border-red-300 hover:shadow-md p-6 transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Icon name="Building2" size={18} className="text-red-600" />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{b.type}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{b.name}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Под ключ</p>
            <h2 className="text-3xl font-black text-gray-900">Наши услуги</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_LIST.map((s, i) => (
              <div
                key={i}
                className={`p-6 border transition-all hover:shadow-md group ${
                  s.highlight
                    ? "bg-red-600 border-red-600 text-white"
                    : "bg-white border-gray-100 hover:border-red-300"
                }`}
              >
                <div className={`w-12 h-12 rounded flex items-center justify-center mb-4 ${
                  s.highlight ? "bg-white/20" : "bg-red-50 group-hover:bg-red-100 transition-colors"
                }`}>
                  <Icon name={s.icon} size={20} className={s.highlight ? "text-white" : "text-red-600"} />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${s.highlight ? "text-white" : "text-gray-900"}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-3 ${s.highlight ? "text-red-100" : "text-gray-500"}`}>{s.desc}</p>
                <div className={`text-lg font-black ${s.highlight ? "text-white" : "text-red-600"}`}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">О нас</p>
              <h2 className="text-3xl font-black text-gray-900 mb-5 leading-tight">
                ЭкономДорс — магазин дверей в Санкт-Петербурге
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Входные и межкомнатные двери, их продажа и установка — это то, чем уже более 8 лет занимается магазин ЭкономДорс. Мы работаем с ведущими российскими и зарубежными производителями и предлагаем широкий выбор дверей на любой вкус и бюджет.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Наши специалисты помогут подобрать подходящую модель, произведут замер и профессионально установят дверь. Работаем по всему Санкт-Петербургу и Ленинградской области.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Низкие цены без скрытых доплат",
                  "Опытные монтажники со стажем от 5 лет",
                  "Гарантия 3 года на все виды работ",
                  "3 шоу-рума в Санкт-Петербурге",
                  "Официальные дилеры производителей",
                  "Работаем без выходных 10:00–20:00",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <button onClick={() => setCallbackOpen(true)} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                Получить консультацию
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className={`p-6 flex flex-col items-center text-center ${i === 0 ? "bg-red-600 text-white" : "bg-gray-50 border border-gray-100"}`}>
                  <div className={`text-4xl font-black mb-1 ${i === 0 ? "text-white" : "text-red-600"}`}>{s.val}</div>
                  <div className={`text-xs uppercase tracking-wider ${i === 0 ? "text-red-100" : "text-gray-500"}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Нам доверяют</p>
            <h2 className="text-3xl font-black text-gray-900">Отзывы покупателей</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 hover:border-red-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Icon key={s} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - r.rating }).map((_, s) => (
                    <Icon key={s} name="Star" size={14} className="text-gray-200" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-gray-900">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Мы рядом</p>
            <h2 className="text-3xl font-black text-gray-900">Контакты и шоу-румы</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {SHOPS.map((shop, i) => (
              <div key={i} className="border border-gray-100 hover:border-red-300 hover:shadow-md p-6 transition-all">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{shop.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{shop.address}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                  <Icon name="Train" size={11} />
                  <span>м. {shop.metro}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Icon name="Clock" size={11} />
                  <span>{shop.hours}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8">
              <h3 className="font-black text-xl text-gray-900 mb-5">Свяжитесь с нами</h3>
              <div className="flex flex-col gap-4 mb-6">
                {[
                  { icon: "Phone", label: "Единый номер", val: "8 (812) 703-88-26" },
                  { icon: "MessageCircle", label: "WhatsApp", val: "+7 (931) 000-00-00" },
                  { icon: "Mail", label: "Email", val: "info@econom-doors.ru" },
                  { icon: "Clock", label: "Режим работы", val: "Ежедневно 10:00–20:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-red-50 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={15} className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{c.label}</p>
                      <p className="font-semibold text-gray-900 text-sm">{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setCallbackOpen(true)} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                Заказать обратный звонок
              </button>
            </div>

            {/* Форма */}
            <div className="bg-gray-50 border border-gray-100 p-8">
              <h3 className="font-black text-xl text-gray-900 mb-5">Оставить заявку</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Имя" className="border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors" />
                <input type="tel" placeholder="+7 (___) ___-__-__" className="border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors" />
                <select className="border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 text-gray-700">
                  <option>Нужна консультация</option>
                  <option>Замер двери</option>
                  <option>Установка входной двери</option>
                  <option>Установка межкомнатных дверей</option>
                  <option>Ремонт и регулировка</option>
                </select>
                <textarea rows={3} placeholder="Комментарий (необязательно)" className="border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors resize-none" />
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-400 text-center">Перезвоним в течение 15 минут</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-red-500 font-black text-2xl tracking-tight">ЭКОНОМ</span>
                <span className="text-white font-black text-2xl tracking-tight">ДОРС</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
                Магазин входных и межкомнатных дверей в Санкт-Петербурге. Продажа, доставка и установка.
              </p>
              <a href="tel:88127038826" className="text-yellow-400 font-black text-xl hover:text-yellow-300 transition-colors">
                8 (812) 703-88-26
              </a>
            </div>

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Каталог</h4>
              <div className="flex flex-col gap-2">
                {["Входные двери", "Межкомнатные двери", "Раздвижные двери", "Фурнитура", "Пороги"].map((item) => (
                  <button key={item} onClick={() => scrollTo("catalog")} className="text-gray-400 hover:text-white text-sm text-left transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Компания</h4>
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} className="text-gray-400 hover:text-white text-sm text-left transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 text-xs">© 2026 ЭкономДорс. Все права защищены.</p>
            <p className="text-gray-600 text-xs">Политика конфиденциальности · Условия использования</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
