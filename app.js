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


const ALL_ITEMS = [...DIAMOND_PACKAGES, ...ID_OFFERS_PACKAGES, ...SPECIAL_PACKAGES];

// حماية من حقن HTML في النصوص القادمة من المستخدمين / لوحة التحكم
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

// دمج تعديلات الأسعار (من لوحة التحكم) فوق البيانات الأصلية
function applyCatalog(overrides) {
  const eff = buildEffectiveCatalog(overrides);
  DIAMOND_PACKAGES.splice(0, DIAMOND_PACKAGES.length, ...eff.diamonds);
  ID_OFFERS_PACKAGES.splice(0, ID_OFFERS_PACKAGES.length, ...eff.id);
  SPECIAL_PACKAGES.splice(0, SPECIAL_PACKAGES.length, ...eff.special);
  ALL_ITEMS.splice(0, ALL_ITEMS.length, ...DIAMOND_PACKAGES, ...ID_OFFERS_PACKAGES, ...SPECIAL_PACKAGES);
  populatePackageSelect();
  renderDiamonds();
  renderIdOffers();
  renderPackages();
}

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

  diamondsGrid.innerHTML = filtered.map((item) => ticketCard(item, "")).join("");
}

// Ticket-style price card (shared by all price sections)
function ticketCard(item, extraClass) {
  return `
      <article class="price-card ticket-card ${extraClass} ${item.popular ? "popular" : ""}">
        <div class="ticket-main">
          ${item.tag ? `<span class="ticket-tag">${esc(item.tag)}</span>` : ""}
          <h3 class="card-title">${esc(item.icon)} ${esc(item.title)}</h3>
          <p class="card-sub">${esc(item.subtitle)}</p>
        </div>
        <div class="ticket-stub">
          <span class="ticket-price">${formatPrice(item.price)}</span>
          <span class="ticket-cur">ج.م</span>
          <button class="card-btn ticket-btn" data-id="${esc(item.id)}">اطلب ←</button>
        </div>
      </article>
    `;
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

  idOffersGrid.innerHTML = filtered.map((item) => ticketCard(item, "id-card")).join("");
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
      return ticketCard(item, isBulk ? "bulk-card" : "pkg-card");
    })
    .join("");
}

// Populate Select Dropdown inside Modal
function populatePackageSelect() {
  packageSelect.innerHTML = ALL_ITEMS.map(
    (item) => `<option value="${esc(item.id)}">${esc(item.title)} — ${formatPrice(item.price)} ج.م</option>`
  ).join("");
  const pkgDdMenu = document.getElementById("pkgDdMenu");
  if (pkgDdMenu) {
    pkgDdMenu.innerHTML = ALL_ITEMS.map(
      (item) => `
      <button type="button" class="pkg-dd-item" data-pkg-pick="${esc(item.id)}">
        <span>${esc(item.icon)} ${esc(item.title)}</span>
        <span class="pkg-dd-price">${formatPrice(item.price)} ج.م</span>
      </button>`
    ).join("");
  }
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
const fsdb = firebase.firestore();

const authNavArea = document.getElementById("authNavArea");
const authModal = document.getElementById("authModal");
const closeAuthModalBtn = document.getElementById("closeAuthModal");
const authNotice = document.getElementById("authNotice");
const authTabs = document.querySelectorAll(".auth-tab");
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

function getSavedAvatar(uid, fallbackUrl) {
  return localStorage.getItem(`afreet_avatar_${uid}`) || fallbackUrl || "assets/afreet-logo.jpg";
}

let registeringNow = false;

fbAuth.onAuthStateChanged(async (user) => {
  if (!user) {
    currentUser = null;
    renderAuthNav();
    return;
  }

  const isGoogle = user.providerData?.some((p) => p.providerId === "google.com");
  const base = {
    uid: user.uid,
    name: user.displayName || (user.email ? user.email.split("@")[0] : "عميل عفريت"),
    email: user.email || "",
    phone: getSavedPhone(user.uid),
    avatar: getSavedAvatar(user.uid, user.photoURL),
    isGoogle,
  };
  currentUser = base;
  renderAuthNav();

  // أثناء إنشاء حساب جديد يتم حفظ البيانات من دالة التسجيل نفسها
  if (registeringNow) return;

  // تحميل بيانات الحساب من قاعدة البيانات (تظهر على أي جهاز)
  try {
    const ref = fsdb.collection("users").doc(user.uid);
    const snap = await ref.get();
    if (snap.exists) {
      const d = snap.data();
      currentUser = {
        ...base,
        name: d.name || base.name,
        phone: d.phone ?? base.phone,
        avatar: d.avatar || base.avatar,
      };
    } else {
      // أول مرة: ننقل أي بيانات محفوظة على الجهاز لقاعدة البيانات
      await ref.set({
        name: base.name,
        email: base.email,
        phone: base.phone || "",
        avatar: localStorage.getItem(`afreet_avatar_${user.uid}`) || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    renderAuthNav();
  } catch (err) {
    // قاعدة البيانات غير مفعلة بعد: نكمل ببيانات الجهاز
    console.warn("Firestore users sync skipped:", err?.code || err);
  }
});

function renderAuthNav() {
  if (currentUser) {
    const isAdmin = isAdminEmail(currentUser.email);
    if (isAdmin) localStorage.setItem("afreet_is_admin", "1");
    else localStorage.removeItem("afreet_is_admin");
    const adminLink = isAdmin
      ? `<a href="admin.html" class="admin-nav-btn" title="فتح صفحة الأدمن">⚙️ الإدارة</a>`
      : "";
    authNavArea.innerHTML = `
      <div class="auth-nav-group">
        ${adminLink}
        <div class="user-pill">
          <button type="button" class="user-pill-trigger" id="openProfileBtn" title="فتح الملف الشخصي">
            <img class="user-pill-avatar" src="${esc(currentUser.avatar)}" alt="${esc(currentUser.name)}" />
            <span class="user-pill-name">${esc(currentUser.name)}</span>
            <span class="verified-badge" title="حساب موثق">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#0095F6"/>
                <path d="M8.5 12.5L10.8 14.8L15.8 9.8" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <button type="button" class="logout-btn" id="logoutBtn">خروج</button>
        </div>
      </div>
    `;
    document.getElementById("openProfileBtn").addEventListener("click", openProfileModal);
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

function syncModalScrollLock() {
  const hasOpenModal = Boolean(document.querySelector(".modal-backdrop.open"));
  document.documentElement.classList.toggle("modal-open", hasOpenModal);
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function openAuthModal(requireOrderNotice = false) {
  loginError.textContent = "";
  registerError.textContent = "";
  authNotice.style.display = requireOrderNotice ? "block" : "none";
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  syncModalScrollLock();
}

function closeAuthModal() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
  syncModalScrollLock();
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

document.querySelectorAll(".toggle-pass-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  });
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

  registeringNow = true;
  try {
    const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name });
    if (phone) {
      localStorage.setItem(`afreet_phone_${cred.user.uid}`, phone);
    }
    currentUser = {
      uid: cred.user.uid,
      name,
      email,
      phone,
      avatar: "assets/afreet-logo.jpg",
      isGoogle: false,
    };
    renderAuthNav();
    handleAuthSuccess();
    // حفظ بيانات الحساب في قاعدة البيانات
    try {
      await fsdb.collection("users").doc(cred.user.uid).set(
        {
          name,
          email,
          phone,
          avatar: "",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } catch (dbErr) {
      console.warn("Firestore user save skipped:", dbErr?.code || dbErr);
    }
  } catch (err) {
    registerError.textContent = mapFirebaseError(err);
  } finally {
    registeringNow = false;
  }
});

// ==========================================
// الملف الشخصي (Profile Modal)
// ==========================================
const profileModal = document.getElementById("profileModal");
const closeProfileModalBtn = document.getElementById("closeProfileModal");
const profileAvatarImg = document.getElementById("profileAvatarImg");
const avatarUpload = document.getElementById("avatarUpload");
const profileModalTitle = document.getElementById("profileModalTitle");
const profileEmailText = document.getElementById("profileEmailText");
const profileProviderBadge = document.getElementById("profileProviderBadge");
const profileTabs = document.querySelectorAll(".profile-tab");
const profileInfoForm = document.getElementById("profileInfoForm");
const profilePasswordForm = document.getElementById("profilePasswordForm");
const profileInfoMsg = document.getElementById("profileInfoMsg");
const profilePassMsg = document.getElementById("profilePassMsg");
const googlePassNote = document.getElementById("googlePassNote");
const passwordFieldsWrap = document.getElementById("passwordFieldsWrap");
const profileOrdersPanel = document.getElementById("profileOrdersPanel");
const profileOrdersList = document.getElementById("profileOrdersList");

function openProfileModal() {
  if (!currentUser) return;
  profileAvatarImg.src = currentUser.avatar;
  profileModalTitle.textContent = currentUser.name;
  profileEmailText.textContent = currentUser.email || "حساب عفريت";
  const isAdmin = isAdminEmail(currentUser.email);
  profileProviderBadge.textContent = isAdmin
    ? "👑 مدير المتجر (أدمن)"
    : currentUser.isGoogle
    ? "مسجل بحساب جوجل (Gmail)"
    : "مسجل بالإيميل";
  const profileAdminBtn = document.getElementById("profileAdminBtn");
  if (profileAdminBtn) {
    profileAdminBtn.style.display = isAdmin ? "inline-flex" : "none";
  }

  // الرجوع لتبويب البيانات الشخصية عند كل فتح
  profileTabs.forEach((t) => t.classList.toggle("active", t.dataset.profileTab === "info"));
  profileInfoForm.style.display = "flex";
  profilePasswordForm.style.display = "none";
  profileOrdersPanel.style.display = "none";

  document.getElementById("profName").value = currentUser.name;
  document.getElementById("profPhone").value = currentUser.phone || "";
  profileInfoMsg.textContent = "";
  profilePassMsg.textContent = "";
  document.getElementById("profNewPass").value = "";
  document.getElementById("profConfirmPass").value = "";

  if (currentUser.isGoogle) {
    googlePassNote.style.display = "block";
    passwordFieldsWrap.style.display = "none";
  } else {
    googlePassNote.style.display = "none";
    passwordFieldsWrap.style.display = "block";
  }

  profileModal.classList.add("open");
  profileModal.setAttribute("aria-hidden", "false");
  syncModalScrollLock();
}

function closeProfileModal() {
  profileModal.classList.remove("open");
  profileModal.setAttribute("aria-hidden", "true");
  syncModalScrollLock();
}

closeProfileModalBtn.addEventListener("click", closeProfileModal);
profileModal.addEventListener("click", (e) => {
  if (e.target === profileModal) closeProfileModal();
});

profileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    profileTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.profileTab;
    profileInfoForm.style.display = target === "info" ? "flex" : "none";
    profilePasswordForm.style.display = target === "security" ? "flex" : "none";
    profileOrdersPanel.style.display = target === "orders" ? "block" : "none";
    profileInfoMsg.textContent = "";
    profilePassMsg.textContent = "";
    if (target === "orders") loadMyOrders();
  });
});

// ---------- طلباتي ----------
const ORDER_STATUS = {
  pending: { label: "⏳ قيد التنفيذ", cls: "st-pending" },
  done: { label: "✅ تم الشحن", cls: "st-done" },
  cancelled: { label: "❌ ملغي", cls: "st-cancelled" },
};

function formatOrderDate(ts) {
  const d = ts && typeof ts.toDate === "function" ? ts.toDate() : null;
  if (!d) return "الآن";
  return d.toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" });
}

async function loadMyOrders() {
  if (!currentUser) return;
  profileOrdersList.innerHTML = `<p class="orders-empty">جاري تحميل طلباتك...</p>`;
  try {
    const snap = await fsdb.collection("orders").where("uid", "==", currentUser.uid).get();
    const orders = snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));

    if (orders.length === 0) {
      profileOrdersList.innerHTML = `<p class="orders-empty">📭 لسه معملتش أي طلب. اختار باقتك واطلب دلوقتي!</p>`;
      return;
    }

    profileOrdersList.innerHTML = orders
      .map((o) => {
        const st = ORDER_STATUS[o.status] || ORDER_STATUS.pending;
        return `
        <div class="order-item">
          <div class="order-item-top">
            <strong>${esc(o.title)}</strong>
            <span class="order-status ${st.cls}">${st.label}</span>
          </div>
          <div class="order-item-meta">
            <span>🔖 #${esc(o.code || "")}</span>
            <span>💰 ${formatPrice(Number(o.price) || 0)} ج.م</span>
            <span>🕒 ${esc(formatOrderDate(o.createdAt))}</span>
          </div>
        </div>`;
      })
      .join("");
  } catch (err) {
    profileOrdersList.innerHTML = `<p class="orders-empty">⚠️ تعذر تحميل الطلبات حالياً.</p>`;
  }
}

// Upload & Resize Avatar Image
avatarUpload.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (!file || !currentUser) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;
      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      localStorage.setItem(`afreet_avatar_${currentUser.uid}`, dataUrl);
      currentUser.avatar = dataUrl;
      profileAvatarImg.src = dataUrl;
      renderAuthNav();
      profileInfoMsg.style.color = "#4ade80";
      profileInfoMsg.textContent = "✅ تم تحديث صورة الحساب!";
      fsdb
        .collection("users")
        .doc(currentUser.uid)
        .set({ avatar: dataUrl }, { merge: true })
        .catch(() => {
          profileInfoMsg.style.color = "#fbbf24";
          profileInfoMsg.textContent = "⚠️ الصورة اتحفظت على جهازك بس، مش على الحساب.";
        });
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

// Save Profile Info (Name & Phone)
profileInfoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentUser || !fbAuth.currentUser) return;
  const newName = document.getElementById("profName").value.trim();
  const newPhone = document.getElementById("profPhone").value.trim();

  try {
    await fbAuth.currentUser.updateProfile({ displayName: newName });
    if (newPhone) {
      localStorage.setItem(`afreet_phone_${currentUser.uid}`, newPhone);
    } else {
      localStorage.removeItem(`afreet_phone_${currentUser.uid}`);
    }
    currentUser.name = newName;
    currentUser.phone = newPhone;
    profileModalTitle.textContent = newName;
    renderAuthNav();
    profileInfoMsg.style.color = "#4ade80";
    profileInfoMsg.textContent = "✅ تم حفظ بياناتك بنجاح!";
    try {
      await fsdb.collection("users").doc(currentUser.uid).set({ name: newName, phone: newPhone }, { merge: true });
    } catch (dbErr) {
      profileInfoMsg.style.color = "#fbbf24";
      profileInfoMsg.textContent = "⚠️ البيانات اتحفظت على جهازك بس، مش على الحساب.";
    }
  } catch (err) {
    profileInfoMsg.style.color = "#ff6b6b";
    profileInfoMsg.textContent = mapFirebaseError(err);
  }
});

// Change Password
profilePasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentUser || !fbAuth.currentUser) return;
  const newPass = document.getElementById("profNewPass").value;
  const confirmPass = document.getElementById("profConfirmPass").value;

  if (newPass !== confirmPass) {
    profilePassMsg.style.color = "#ff6b6b";
    profilePassMsg.textContent = "❌ كلمتا المرور غير متطابقتين";
    return;
  }

  try {
    await fbAuth.currentUser.updatePassword(newPass);
    document.getElementById("profNewPass").value = "";
    document.getElementById("profConfirmPass").value = "";
    profilePassMsg.style.color = "#4ade80";
    profilePassMsg.textContent = "✅ تم تغيير كلمة المرور بنجاح!";
  } catch (err) {
    profilePassMsg.style.color = "#ff6b6b";
    if (err?.code === "auth/requires-recent-login") {
      profilePassMsg.textContent = "❌ لأمان حسابك، يرجى تسجيل الخروج والدخول مرة أخرى ثم إعادة المحاولة";
    } else {
      profilePassMsg.textContent = mapFirebaseError(err);
    }
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
  syncModalScrollLock();
}

function updateModalSummary(item) {
  modalItemName.textContent = `${item.icon} ${item.title}`;
  modalItemPrice.textContent = `${formatPrice(item.price)} ج.م`;
  modalCategory.textContent = item.subtitle;
  const pkgDdLabel = document.getElementById("pkgDdLabel");
  if (pkgDdLabel) {
    pkgDdLabel.textContent = `${item.icon} ${item.title} — ${formatPrice(item.price)} ج.م`;
  }
  document.querySelectorAll(".pkg-dd-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.pkgPick === item.id);
  });
}

function closeOrderModal() {
  const customPkgDd = document.getElementById("customPkgDd");
  if (customPkgDd) customPkgDd.classList.remove("open");
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
  syncModalScrollLock();
}

function buildOrderMessage(orderCode = "") {
  const selected = ALL_ITEMS.find((i) => i.id === packageSelect.value) || ALL_ITEMS[0];
  const account = document.getElementById("playerAccount").value.trim() || "غير محدد";
  const payment = document.getElementById("paymentMethod").value;
  const notes = document.getElementById("orderNotes").value.trim();

  let msg = `🔥 طلب جديد من متجر ${STORE_CONFIG.storeName}\n`;
  if (orderCode) msg += `🔖 رقم الطلب: #${orderCode}\n`;
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

const customPkgDd = document.getElementById("customPkgDd");
const pkgDdTrigger = document.getElementById("pkgDdTrigger");
const pkgDdMenu = document.getElementById("pkgDdMenu");
const payCardsGrid = document.getElementById("payCardsGrid");

if (pkgDdTrigger && customPkgDd) {
  pkgDdTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    customPkgDd.classList.toggle("open");
  });
}

if (pkgDdMenu && customPkgDd) {
  pkgDdMenu.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-pkg-pick]");
    if (!btn) return;
    const item = ALL_ITEMS.find((i) => i.id === btn.dataset.pkgPick);
    if (item) {
      packageSelect.value = item.id;
      updateModalSummary(item);
    }
    customPkgDd.classList.remove("open");
  });
}

if (payCardsGrid) {
  payCardsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".pay-method-card[data-pay]");
    if (!card) return;
    payCardsGrid.querySelectorAll(".pay-method-card").forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    document.getElementById("paymentMethod").value = card.dataset.pay;
  });
}

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentUser) {
    closeOrderModal();
    openAuthModal(true);
    return;
  }

  const submitBtn = orderForm.querySelector('button[type="submit"]');
  const selected = ALL_ITEMS.find((i) => i.id === packageSelect.value) || ALL_ITEMS[0];
  const account = document.getElementById("playerAccount").value.trim();
  const payment = document.getElementById("paymentMethod").value;
  const notes = document.getElementById("orderNotes").value.trim();

  // نفتح نافذة الواتساب فوراً (داخل ضغطة المستخدم) عشان المتصفح ما يمنعها
  const popup = window.open("about:blank", "_blank");

  submitBtn.disabled = true;
  toastMsg.style.color = "#a5b4fc";
  toastMsg.textContent = "⏳ جاري تسجيل طلبك...";

  let orderCode = "";
  try {
    const ref = fsdb.collection("orders").doc();
    const code = ref.id.slice(0, 6).toUpperCase();
    const save = ref.set({
      uid: currentUser.uid,
      code,
      userName: currentUser.name,
      userEmail: currentUser.email || "",
      userPhone: currentUser.phone || "",
      itemId: selected.id,
      title: selected.title,
      price: selected.price,
      playerAccount: account,
      paymentMethod: payment,
      notes,
      status: "pending",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 1500));
    await Promise.race([save, timeout]);
    orderCode = code;
    toastMsg.style.color = "#4ade80";
    toastMsg.textContent = `✅ تم تسجيل طلبك رقم #${code}`;
  } catch (err) {
    // حتى لو التسجيل فشل نكمل الإرسال على الواتساب
    console.warn("Order save failed:", err?.code || err?.message || err);
    toastMsg.style.color = "#fbbf24";
    toastMsg.textContent = "⚠️ هنكمل الطلب على واتساب.";
  }

  const text = encodeURIComponent(buildOrderMessage(orderCode));
  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`;
  if (popup) {
    popup.location.href = url;
  } else {
    window.location.href = url;
  }
  submitBtn.disabled = false;
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

const navBackdrop = document.getElementById("navBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
let lastDrawerClose = 0;

function openMobileDrawer() {
  if (Date.now() - lastDrawerClose < 350) return;
  navLinks.classList.add("open");
  navBackdrop.classList.add("open");
  document.documentElement.classList.add("drawer-open");
  document.body.classList.add("drawer-open");
}

function closeMobileDrawer() {
  lastDrawerClose = Date.now();
  navLinks.classList.remove("open");
  navBackdrop.classList.remove("open");
  document.documentElement.classList.remove("drawer-open");
  document.body.classList.remove("drawer-open");
}

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (navLinks.classList.contains("open")) {
    closeMobileDrawer();
  } else {
    openMobileDrawer();
  }
});

navBackdrop.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  closeMobileDrawer();
});

closeDrawerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  closeMobileDrawer();
});

navBackdrop.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileDrawer);
});

// ==========================================
// صوت "صلِّ على محمد" عند دخول الموقع (تشغيل / إيقاف)
// ==========================================
const salatBtn = document.getElementById("salatBtn");
const salatIcon = salatBtn ? salatBtn.querySelector(".salat-icon") : null;
const salatAudio = new Audio("assets/ssstik.io_1794955071393.mp3");
salatAudio.preload = "auto";
let salatPlayedOnVisit = false;
let salatAttempting = false;

function updateSalatIcon(isPlaying) {
  if (!salatIcon) return;
  salatIcon.textContent = isPlaying ? "⏸️" : "🔊";
}

salatAudio.addEventListener("play", () => updateSalatIcon(true));
salatAudio.addEventListener("pause", () => updateSalatIcon(false));
salatAudio.addEventListener("ended", () => updateSalatIcon(false));

function removeAudioUnlockListeners() {
  document.removeEventListener("pointerdown", unlockAudioOnFirstTouch);
  document.removeEventListener("touchstart", unlockAudioOnFirstTouch);
  document.removeEventListener("keydown", unlockAudioOnFirstTouch);
}

function playSalatAudio(force = false) {
  if (!force && (salatPlayedOnVisit || salatAttempting)) return;
  salatAttempting = true;
  try {
    if (force && salatAudio.ended) {
      salatAudio.currentTime = 0;
    } else if (!force) {
      salatAudio.currentTime = 0;
    }
    const playPromise = salatAudio.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          salatPlayedOnVisit = true;
          salatAttempting = false;
          removeAudioUnlockListeners();
        })
        .catch(() => {
          salatAttempting = false;
        });
    } else {
      salatPlayedOnVisit = true;
      salatAttempting = false;
      removeAudioUnlockListeners();
    }
  } catch {
    salatAttempting = false;
  }
}

if (salatBtn) {
  salatBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    salatPlayedOnVisit = true;
    removeAudioUnlockListeners();
    if (!salatAudio.paused && !salatAudio.ended) {
      salatAudio.pause();
    } else {
      if (salatAudio.ended) salatAudio.currentTime = 0;
      playSalatAudio(true);
    }
  });
}

// تشغيل مرة واحدة فقط عند الدخول (أو مع أول لمسة لو المتصفح منع التشغيل التلقائي)
window.addEventListener("load", () => {
  playSalatAudio(false);
});

function unlockAudioOnFirstTouch() {
  if (!salatPlayedOnVisit) {
    playSalatAudio(false);
  }
}
document.addEventListener("pointerdown", unlockAudioOnFirstTouch);
document.addEventListener("touchstart", unlockAudioOnFirstTouch, { passive: true });
document.addEventListener("keydown", unlockAudioOnFirstTouch);

// Init
document.getElementById("yearNow").textContent = new Date().getFullYear();
renderAuthNav();
try {
  const cachedCatalog = JSON.parse(localStorage.getItem("afreet_catalog_cache") || "null");
  if (cachedCatalog && typeof cachedCatalog === "object") {
    applyCatalog(cachedCatalog);
  } else {
    populatePackageSelect();
    renderDiamonds();
    renderIdOffers();
    renderPackages();
  }
} catch {
  populatePackageSelect();
  renderDiamonds();
  renderIdOffers();
  renderPackages();
}

// مزامنة الأسعار والباقات مباشرة من لوحة التحكم (Firestore)
try {
  fsdb
    .collection("settings")
    .doc("catalog")
    .onSnapshot(
      (doc) => {
        if (doc.exists) {
          const data = doc.data();
          localStorage.setItem("afreet_catalog_cache", JSON.stringify(data));
          applyCatalog(data);
        }
      },
      (err) => {
        console.warn("Catalog live sync skipped:", err?.code || err);
      }
    );
} catch (err) {
  console.warn("Catalog init skipped:", err);
}