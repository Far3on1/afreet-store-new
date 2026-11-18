// ==========================================
// بيانات أسعار فري فاير (جواهر أكونت)
// ==========================================
const DIAMOND_PACKAGES = [
  { id: "ff-100", title: "100 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 50, icon: "💎", tag: "بداية سريعة" },
  { id: "ff-200", title: "200 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 100, icon: "💎", tag: "اختيار ذكي" },
  { id: "ff-300", title: "300 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 140, icon: "💎", tag: "توفير" },
  { id: "ff-520", title: "520 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 210, icon: "💎", tag: "الأكثر طلباً", popular: true },
  { id: "ff-1060", title: "1060 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 370, icon: "💎", tag: "عرض مميز", popular: true },
  { id: "ff-2180", title: "2180 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 750, icon: "💎", tag: "قيمة عالية" },
  { id: "ff-5600", title: "5600 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 1800, icon: "💎", tag: "باقة المحترفين" },
  { id: "ff-11200", title: "11200 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 3600, icon: "💎", tag: "باقة VIP" },
  { id: "ff-22400", title: "22400 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 7000, icon: "💎", tag: "أقصى توفير", popular: true },
];

// ==========================================
// بيانات الباقات والعضويات والدروبات
// ==========================================
const SPECIAL_PACKAGES = [
  // العضويات الفردية
  { id: "mem-lite", title: "عضوية مخففة", subtitle: "عضوية فري فاير", price: 45, category: "membership", icon: "👑", tag: "اقتصادية" },
  { id: "mem-weekly", title: "عضوية أسبوعية", subtitle: "عضوية فري فاير", price: 85, category: "membership", icon: "👑", tag: "شائعة", popular: true },
  { id: "mem-monthly", title: "عضوية شهرية", subtitle: "عضوية فري فاير", price: 370, category: "membership", icon: "👑", tag: "الأفضل قيمة", popular: true },

  // الدروبات
  { id: "drop-16", title: "دروب 16.99", subtitle: "دروب خاص فري فاير", price: 45, category: "drop", icon: "📦", tag: "عرض خاص" },
  { id: "drop-49", title: "دروب 49", subtitle: "دروب خاص فري فاير", price: 50, category: "drop", icon: "📦", tag: "" },
  { id: "drop-99", title: "دروب 99", subtitle: "دروب خاص فري فاير", price: 90, category: "drop", icon: "📦", tag: "ممتاز" },

  // باقات العضويات الأسبوعية (جملة)
  { id: "wk-5", title: "5 عضويات أسبوعية", subtitle: "باقة توفير أسبوعية", price: 400, category: "weekly-bulk", icon: "🔥", tag: "جملة" },
  { id: "wk-10", title: "10 عضويات أسبوعية", subtitle: "باقة توفير أسبوعية", price: 770, category: "weekly-bulk", icon: "🔥", tag: "جملة" },
  { id: "wk-20", title: "20 عضوية أسبوعية", subtitle: "باقة توفير أسبوعية", price: 1520, category: "weekly-bulk", icon: "🔥", tag: "جملة" },
  { id: "wk-50", title: "50 عضوية أسبوعية", subtitle: "باقة تجار وكميات", price: 3750, category: "weekly-bulk", icon: "🔥", tag: "توفير كبير" },
  { id: "wk-100", title: "100 عضوية أسبوعية", subtitle: "باقة تجار وكميات", price: 7250, category: "weekly-bulk", icon: "🔥", tag: "سعر الجملة", popular: true },

  // باقات العضويات الشهرية (جملة)
  { id: "mo-5", title: "5 عضويات شهرية", subtitle: "باقة توفير شهرية", price: 1850, category: "monthly-bulk", icon: "⚡", tag: "جملة" },
  { id: "mo-10", title: "10 عضويات شهرية", subtitle: "باقة توفير شهرية", price: 3550, category: "monthly-bulk", icon: "⚡", tag: "جملة" },
  { id: "mo-50", title: "50 عضوية شهرية", subtitle: "باقة تجار وكميات", price: 17250, category: "monthly-bulk", icon: "⚡", tag: "توفير كبير" },
  { id: "mo-100", title: "100 عضوية شهرية", subtitle: "باقة تجار وكميات", price: 33500, category: "monthly-bulk", icon: "⚡", tag: "سعر الجملة", popular: true },
];

// ==========================================
// بيانات عروض فري فاير (شحن عن طريق الـ ID)
// ==========================================
const ID_OFFERS_PACKAGES = [
  { id: "id-110", title: "110 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 55, icon: "🆔", tag: "سريع" },
  { id: "id-220", title: "220 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 110, icon: "🆔", tag: "" },
  { id: "id-341", title: "341 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 170, icon: "🆔", tag: "عرض مميز" },
  { id: "id-520", title: "520 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 280, icon: "🆔", tag: "الأكثر طلباً", popular: true },
  { id: "id-1060", title: "1060 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 490, icon: "🆔", tag: "ممتاز", popular: true },
  { id: "id-2120", title: "2120 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 980, icon: "🆔", tag: "قيمة عالية" },
  { id: "id-5300", title: "5300 جوهرة (ID)", subtitle: "شحن مباشر بالـ ID فقط", price: 2350, icon: "🆔", tag: "باقة VIP" },
  { id: "id-weekly", title: "عضوية أسبوعية (ID)", subtitle: "تفعيل بالـ ID فقط", price: 120, icon: "👑", tag: "شحن بالـ ID" },
  { id: "id-monthly", title: "عضوية شهرية (ID)", subtitle: "تفعيل بالـ ID فقط", price: 540, icon: "👑", tag: "شحن بالـ ID", popular: true },
];

// ==========================================
// نسخة أصلية + دمج تعديلات لوحة التحكم (Firestore)
// ==========================================
const BASE_CATALOG = {
  diamonds: DIAMOND_PACKAGES.map((o) => ({ ...o })),
  id: ID_OFFERS_PACKAGES.map((o) => ({ ...o })),
  special: SPECIAL_PACKAGES.map((o) => ({ ...o })),
};

const CATEGORY_ICONS = { membership: "👑", drop: "📦", "weekly-bulk": "🔥", "monthly-bulk": "⚡" };

function buildEffectiveCatalog(c) {
  c = c || {};
  const prices = c.prices || {};
  const tags = c.tags || {};
  const hidden = c.hidden || {};
  const custom = Array.isArray(c.custom) ? c.custom : [];

  const patch = (base) =>
    base
      .filter((i) => !hidden[i.id])
      .map((i) => ({
        ...i,
        price: typeof prices[i.id] === "number" ? prices[i.id] : i.price,
        tag: typeof tags[i.id] === "string" ? tags[i.id] : i.tag,
      }));

  const customFor = (section, defaultIcon) =>
    custom
      .filter((x) => x && x.section === section && !hidden[x.id])
      .map((x) => ({
        id: x.id,
        title: String(x.title || ""),
        subtitle: String(x.subtitle || ""),
        price: Number(x.price) || 0,
        icon: x.icon || (section === "special" ? CATEGORY_ICONS[x.category] || "📦" : defaultIcon),
        category: x.category,
        tag: String(x.tag || ""),
      }));

  return {
    diamonds: [...patch(BASE_CATALOG.diamonds), ...customFor("diamonds", "💎")],
    id: [...patch(BASE_CATALOG.id), ...customFor("id", "🆔")],
    special: [...patch(BASE_CATALOG.special), ...customFor("special", "📦")],
  };
}