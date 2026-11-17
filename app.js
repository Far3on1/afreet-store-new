// ==========================================
// إعدادات متجر عفريت (عدّل رقم الواتساب هنا)
// ==========================================
const STORE_CONFIG = {
  storeName: "عفريت ستور",
  // رقم الطلبات والشحن بصيغة دولية بدون +
  whatsappNumber: "201158620386",
  // رقم الشكاوى والدعم الفني
  complaintsNumber: "201273778131",
};

// ==========================================
// بيانات أسعار فري فاير (جواهر أكونت)
// ==========================================
const DIAMOND_PACKAGES = [
  { id: "ff-100", title: "100 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 50, icon: "💎", tag: "بداية سريعة" },
  { id: "ff-200", title: "200 جوهرة", subtitle: "شحن مباشر بالأكونت", price: 100, icon: "💎", tag: "" },
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

const ALL_ITEMS = [...DIAMOND_PACKAGES, ...ID_OFFERS_PACKAGES, ...SPECIAL_PACKAGES];

// ==========================================
// DOM Elements
// ==========================================
const diamondsGrid = document.getElementById("diamondsGrid");
const idOffersGrid = document.getElementById("idOffersGrid");
const packagesGrid = document.getElementById("packagesGrid");
const searchInput = document.getElementById("priceSearch");
const packageTabs = document.getElementById("packageTabs");

const orderModal = document.getElementById("orderModal");
const closeModalBtn = document.getElementById("closeModal");
const packageSelect = document.getElementById("packageSelect");
const modalItemName = document.getElementById("modalItemName");
const modalItemPrice = document.getElementById("modalItemPrice");
const modalCategory = document.getElementById("modalCategory");
const orderForm = document.getElementById("orderForm");
const copyOrderBtn = document.getElementById("copyOrderBtn");
const toastMsg = document.getElementById("toastMsg");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

let activeFilter = "all";
let currentSearch = "";

// Format number with commas
const formatPrice = (num) => num.toLocaleString("en-US");

// Render Diamond Cards
function renderDiamonds() {
  const filtered = DIAMOND_PACKAGES.filter((item) =>
    item.title.includes(currentSearch) || String(item.price).includes(currentSearch)
  );

  if (filtered.length === 0) {
    diamondsGrid.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1;">لا توجد باقات جواهر مطابقة للبحث.</p>`;
    return;
  }

  diamondsGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="price-card ${item.popular ? "popular" : ""}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-sub">${item.subtitle}</p>
          </div>
          ${item.tag ? `<span class="card-ribbon">${item.tag}</span>` : ""}
        </div>
        <div class="card-price-row">
          <div>
            <span class="price-amount">${formatPrice(item.price)}</span>
            <span class="price-currency">ج.م</span>
          </div>
          <span class="price-tag">متاح الآن</span>
        </div>
        <button class="card-btn" data-id="${item.id}">اطلب الآن</button>
      </article>
    `
    )
    .join("");
}

// Render ID Offers Cards
function renderIdOffers() {
  const filtered = ID_OFFERS_PACKAGES.filter(
    (item) =>
      !currentSearch ||
      item.title.includes(currentSearch) ||
      item.subtitle.includes(currentSearch) ||
      String(item.price).includes(currentSearch)
  );

  if (filtered.length === 0) {
    idOffersGrid.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1;">لا توجد عروض ID مطابقة للبحث.</p>`;
    return;
  }

  idOffersGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="price-card id-card ${item.popular ? "popular" : ""}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-sub">${item.subtitle}</p>
          </div>
          ${item.tag ? `<span class="card-ribbon">${item.tag}</span>` : ""}
        </div>
        <div class="card-price-row">
          <div>
            <span class="price-amount">${formatPrice(item.price)}</span>
            <span class="price-currency">ج.م</span>
          </div>
          <span class="price-tag">شحن بالـ ID</span>
        </div>
        <button class="card-btn" data-id="${item.id}">اطلب الآن</button>
      </article>
    `
    )
    .join("");
}

// Render Package Cards
function renderPackages() {
  const filtered = SPECIAL_PACKAGES.filter((item) => {
    const matchesTab = activeFilter === "all" || item.category === activeFilter;
    const matchesSearch =
      !currentSearch ||
      item.title.includes(currentSearch) ||
      item.subtitle.includes(currentSearch) ||
      String(item.price).includes(currentSearch);
    return matchesTab && matchesSearch;
  });

  if (filtered.length === 0) {
    packagesGrid.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1;">لا توجد باقات مطابقة لخيار البحث الحالي.</p>`;
    return;
  }

  packagesGrid.innerHTML = filtered
    .map((item) => {
      const isBulk = item.category === "weekly-bulk" || item.category === "monthly-bulk";
      return `
      <article class="price-card ${isBulk ? "bulk-card" : "pkg-card"} ${item.popular ? "popular" : ""}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-sub">${item.subtitle}</p>
          </div>
          ${item.tag ? `<span class="card-ribbon">${item.tag}</span>` : ""}
        </div>
        <div class="card-price-row">
          <div>
            <span class="price-amount">${formatPrice(item.price)}</span>
            <span class="price-currency">ج.م</span>
          </div>
        </div>
        <button class="card-btn" data-id="${item.id}">اطلب الآن</button>
      </article>
    `;
    })
    .join("");
}

// Populate Select Dropdown inside Modal
function populatePackageSelect() {
  packageSelect.innerHTML = ALL_ITEMS.map(
    (item) => `<option value="${item.id}">${item.title} — ${formatPrice(item.price)} ج.م</option>`
  ).join("");
}

// Open Order Modal
// ==========================================
// نظام تسجيل الدخول الحقيقي (Firebase Auth)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyCvmCSH2322rtLVIJ_KkTtChU52ExSH-Vg",
  authDomain: "afreet-store.firebaseapp.com",
  projectId: "afreet-store",
  storageBucket: "afreet-store.firebasestorage.app",
  messagingSenderId: "334257538872",
  appId: "1:334257538872:web:e5792d4924d70fa15f63cd",
  measurementId: "G-BFDR1YVR2L",
};

firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const authNavArea = document.getElementById("authNavArea");
const authModal = document.getElementById("authModal");
const closeAuthModalBtn = document.getElementById("closeAuthModal");
const authNotice = document.getElementById("authNotice");
const authTabs = document.querySelectorAll(".auth-tab");
const googleSignInBtn = document.getElementById("googleSignInBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

let currentUser = null;
let pendingItemId = null;

function mapFirebaseError(err) {
  const code = err?.code || "";
  if (code === "auth/email-already-in-use") return "❌ هذا الإيميل مسجل بالفعل، قم بتسجيل الدخول";
  if (code === "auth/invalid-email") return "❌ صيغة الإيميل غير صحيحة";
  if (code === "auth/weak-password") return "❌ كلمة المرور ضعيفة (6 أحرف على الأقل)";
  if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
    return "❌ الإيميل أو كلمة المرور غير صحيحة";
  }
  if (code === "auth/popup-closed-by-user") return "❌ تم إغلاق نافذة جوجل قبل إكمال الدخول";
  if (code === "auth/unauthorized-domain") return "❌ النطاق الحالي غير مضاف في Firebase Authorized Domains";
  return `❌ ${err?.message || "حدث خطأ أثناء المصادقة"}`;
}

function getSavedPhone(uid) {
  return localStorage.getItem(`afreet_phone_${uid}`) || "";
}

fbAuth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = {
      uid: user.uid,
      name: user.displayName || (user.email ? user.email.split("@")[0] : "عميل عفريت"),
      email: user.email || "",
      phone: getSavedPhone(user.uid),
    };
  } else {
    currentUser = null;
  }
  renderAuthNav();
});

function renderAuthNav() {
  if (currentUser) {
    authNavArea.innerHTML = `
      <div class="user-pill">
        <span class="user-pill-name">👤 ${currentUser.name}</span>
        <button type="button" class="logout-btn" id="logoutBtn">خروج</button>
      </div>
    `;
    document.getElementById("logoutBtn").addEventListener("click", async () => {
      await fbAuth.signOut();
    });
  } else {
    authNavArea.innerHTML = `<button class="btn btn-primary btn-sm" id="openAuthBtn">تسجيل الدخول</button>`;
    document.getElementById("openAuthBtn").addEventListener("click", () => {
      pendingItemId = null;
      openAuthModal(false);
    });
  }
}

function openAuthModal(requireOrderNotice = false) {
  loginError.textContent = "";
  registerError.textContent = "";
  authNotice.style.display = requireOrderNotice ? "block" : "none";
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuthModal() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
}

function handleAuthSuccess() {
  closeAuthModal();
  if (pendingItemId) {
    const id = pendingItemId;
    pendingItemId = null;
    openOrderModal(id);
  }
}

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    authTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.authTab;
    loginForm.style.display = target === "login" ? "flex" : "none";
    registerForm.style.display = target === "register" ? "flex" : "none";
    loginError.textContent = "";
    registerError.textContent = "";
  });
});

closeAuthModalBtn.addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (e) => {
  if (e.target === authModal) closeAuthModal();
});

// Google (Gmail) Sign-In
googleSignInBtn.addEventListener("click", async () => {
  loginError.textContent = "";
  registerError.textContent = "";
  try {
    await fbAuth.signInWithPopup(googleProvider);
    handleAuthSuccess();
  } catch (err) {
    loginError.textContent = mapFirebaseError(err);
    registerError.textContent = mapFirebaseError(err);
  }
});

// Email Sign-In
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";
  const email = document.getElementById("loginIdentifier").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    await fbAuth.signInWithEmailAndPassword(email, password);
    handleAuthSuccess();
  } catch (err) {
    loginError.textContent = mapFirebaseError(err);
  }
});

// Email Registration
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerError.textContent = "";
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const password = document.getElementById("regPassword").value;

  try {
    const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name });
    if (phone) {
      localStorage.setItem(`afreet_phone_${cred.user.uid}`, phone);
    }
    currentUser = { uid: cred.user.uid, name, email, phone };
    renderAuthNav();
    handleAuthSuccess();
  } catch (err) {
    registerError.textContent = mapFirebaseError(err);
  }
});

// Open Order Modal (Protected by Firebase Login)
function openOrderModal(itemId) {
  if (!currentUser) {
    pendingItemId = itemId;
    openAuthModal(true);
    return;
  }
  const selected = ALL_ITEMS.find((i) => i.id === itemId) || ALL_ITEMS[0];
  packageSelect.value = selected.id;
  updateModalSummary(selected);
  toastMsg.textContent = "";
  orderModal.classList.add("open");
  orderModal.setAttribute("aria-hidden", "false");
}

function updateModalSummary(item) {
  modalItemName.textContent = `${item.icon} ${item.title}`;
  modalItemPrice.textContent = `${formatPrice(item.price)} ج.م`;
  modalCategory.textContent = item.subtitle;
}

function closeOrderModal() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
}

function buildOrderMessage() {
  const selected = ALL_ITEMS.find((i) => i.id === packageSelect.value) || ALL_ITEMS[0];
  const account = document.getElementById("playerAccount").value.trim() || "غير محدد";
  const payment = document.getElementById("paymentMethod").value;
  const notes = document.getElementById("orderNotes").value.trim();

  let msg = `🔥 طلب جديد من متجر ${STORE_CONFIG.storeName}\n`;
  if (currentUser) {
    const contact = currentUser.phone || currentUser.email;
    msg += `👤 العميل: ${currentUser.name} (${contact})\n`;
  }
  msg += `🎮 اللعبة: فري فاير (Free Fire)\n`;
  msg += `📦 الباقة: ${selected.title}\n`;
  msg += `💰 السعر: ${formatPrice(selected.price)} ج.م\n`;
  msg += `🆔 بيانات الحساب / ID: ${account}\n`;
  msg += `💳 وسيلة الدفع: ${payment}`;
  if (notes) msg += `\n📝 ملاحظات: ${notes}`;
  return msg;
}

// ==========================================
// Event Listeners
// ==========================================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-btn[data-id]");
  if (btn) {
    openOrderModal(btn.dataset.id);
  }
});

packageTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab-btn");
  if (!tab) return;
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  tab.classList.add("active");
  activeFilter = tab.dataset.filter;
  renderPackages();
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.trim();
  renderDiamonds();
  renderIdOffers();
  renderPackages();
});

closeModalBtn.addEventListener("click", closeOrderModal);
orderModal.addEventListener("click", (e) => {
  if (e.target === orderModal) closeOrderModal();
});

packageSelect.addEventListener("change", () => {
  const item = ALL_ITEMS.find((i) => i.id === packageSelect.value);
  if (item) updateModalSummary(item);
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentUser) {
    closeOrderModal();
    openAuthModal(true);
    return;
  }
  const text = encodeURIComponent(buildOrderMessage());
  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

copyOrderBtn.addEventListener("click", async () => {
  const msg = buildOrderMessage();
  try {
    await navigator.clipboard.writeText(msg);
    toastMsg.textContent = "✅ تم نسخ تفاصيل الطلب بنجاح!";
  } catch {
    toastMsg.textContent = "تعذر النسخ التلقائي، يمكنك إرسال الطلب عبر واتساب.";
  }
});

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Init
document.getElementById("yearNow").textContent = new Date().getFullYear();
renderAuthNav();
populatePackageSelect();
renderDiamonds();
renderIdOffers();
renderPackages();
