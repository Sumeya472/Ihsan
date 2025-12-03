const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const getStartedBtn = document.getElementById("get-started-btn");
const exploreFeaturesBtn = document.getElementById("explore-features-btn");
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileNavLinks = document.getElementById("nav-links");
const scrollTopBtn = document.getElementById("scroll-top-btn");
const quickTasbihBtn = document.getElementById("quick-tasbih-btn");
const langSwitcher = document.getElementById("lang-switcher");
const themeBtn = document.getElementById("theme-btn");
const helpBtn = document.getElementById("help-btn");
const settingsBtn = document.getElementById("settings-btn");
const reminderBtn = document.getElementById("reminder-btn");
const shareBtn = document.getElementById("share-btn");
const themeModal = document.getElementById("theme-modal");
const helpModal = document.getElementById("help-modal");
const settingsModal = document.getElementById("settings-modal");
const reminderModal = document.getElementById("reminder-modal");
const shareModal = document.getElementById("share-modal");
const deleteModal = document.getElementById("delete-modal");
const editModal = document.getElementById("edit-modal");
const reminderNotification = document.getElementById("reminder-notification");
const goodDeedModal = document.getElementById("good-deed-modal");
const quickTasbihModal = document.getElementById("quick-tasbih-modal");
const closeThemeModal = document.getElementById("close-theme-modal");
const closeHelpModal = document.getElementById("close-help-modal");
const closeSettingsModal = document.getElementById("close-settings-modal");
const closeReminderModal = document.getElementById("close-reminder-modal");
const closeShareModal = document.getElementById("close-share-modal");
const closeDeleteModal = document.getElementById("close-delete-modal");
const closeEditModal = document.getElementById("close-edit-modal");
const closeReminderNotification = document.getElementById(
  "close-reminder-notification"
);
const closeGoodDeedModal = document.getElementById("close-good-deed-modal");
const closeQuickTasbih = document.getElementById("close-quick-tasbih");
const notificationsSwitch = document.getElementById("notifications-switch");
const animationsSwitch = document.getElementById("animations-switch");
const refreshSwitch = document.getElementById("refresh-switch");
const countdownForm = document.getElementById("countdown-form");
const reminderForm = document.getElementById("reminder-form");
const editForm = document.getElementById("edit-form");
const countdownList = document.getElementById("countdown-list");
const activeTitle = document.getElementById("active-title");
const totalCountEl = document.getElementById("total-count");
const activeCountEl = document.getElementById("active-count");
const completedCountEl = document.getElementById("completed-count");
const cancelDeleteBtn = document.getElementById("cancel-delete");
const confirmDeleteBtn = document.getElementById("confirm-delete");
const okReminderBtn = document.getElementById("ok-reminder-btn");
const okGoodDeedBtn = document.getElementById("ok-good-deed-btn");
const expiredMessage = document.getElementById("expired-message");
const countdownDisplay = document.getElementById("countdown-display");
const reminderNotificationText = document.getElementById(
  "reminder-notification-text"
);
const goodDeedText = document.getElementById("good-deed-text");
const prayerTimesGrid = document.getElementById("prayer-times-grid");
const languageSelect = document.getElementById("language-select");
const quickCountBtn = document.getElementById("quick-count-btn");
const quickResetBtn = document.getElementById("quick-reset-btn");
const quickTasbihCountEl = document.getElementById("quick-tasbih-count");

const tasbihCountEl = document.getElementById("tasbih-count");
const subhanallahBtn = document.getElementById("subhanallah-btn");
const alhamdulillahBtn = document.getElementById("alhamdulillah-btn");
const allahuakbarBtn = document.getElementById("allahuakbar-btn");
const astaghfirullahBtn = document.getElementById("astaghfirullah-btn");
const resetTasbihBtn = document.getElementById("reset-tasbih");
const streakCountEl = document.getElementById("streak-count");
const streakInfoEl = document.getElementById("streak-info");
const logReadingBtn = document.getElementById("log-reading");
const hijriDateEl = document.getElementById("hijri-date");
const gregorianDateEl = document.getElementById("gregorian-date");
const islamicMonthEl = document.getElementById("islamic-month");
const specialDaysEl = document.getElementById("special-days");
const compassNeedle = document.getElementById("compass-needle");
const qiblaAngleEl = document.getElementById("qibla-angle");
const calibrateQiblaBtn = document.getElementById("calibrate-qibla");
const duaArabicEl = document.getElementById("dua-arabic");
const duaTranslationEl = document.getElementById("dua-translation");
const duaReferenceEl = document.getElementById("dua-reference");
const prevDuaBtn = document.getElementById("prev-dua");
const nextDuaBtn = document.getElementById("next-dua");
const zakatFormEl = document.getElementById("zakat-form");
const zakatResultEl = document.getElementById("zakat-result");
const zakatAmountEl = document.getElementById("zakat-amount");

const translations = {
  en: {
    "logo-text": "Ihsan",
    "theme-text": "Themes",
    "help-text": "Help",
    "settings-text": "Settings",
    "nav-home": "Home",
    "nav-countdowns": "Countdowns",
    "nav-prayer": "Prayer Times",
    "nav-features": "Islamic Features",
    "home-description":
      "Your spiritual companion for tracking Islamic events and daily practices<br>with precision, devotion, and beautiful reminders",
    "get-started-text": "Get Started",
    "explore-features-text": "Explore Features",
    "stat-countdowns": "Countdowns",
    "stat-prayer": "Prayer Times",
    "stat-features": "Islamic Tools",
    "scroll-text": "Scroll to explore",
    "active-countdown-title": "Active Countdown",
    "days-label": "Days",
    "hours-label": "Hours",
    "minutes-label": "Minutes",
    "seconds-label": "Seconds",
    "add-countdown-title": "Add New Countdown",
    "event-title-label": "Event Title",
    "event-date-label": "Event Date",
    "category-label": "Category",
    "add-countdown-btn": "Add Countdown",
    "my-countdowns-title": "My Countdowns",
    "statistics-title": "Statistics",
    "total-label": "Total",
    "active-label": "Active",
    "completed-label": "Completed",
    "quick-actions-title": "Quick Actions",
    "set-reminder-btn": "Set Reminder",
    "share-countdown-btn": "Share Countdown",
    "prayer-times-title": "Prayer Times (Addis Ababa)",
    "islamic-features-title": "Islamic Features",
    "tasbih-counter-title": "Tasbih Counter",
    "reset-counter-btn": "Reset Counter",
    "quran-streak-title": "Qur'an Streak",
    "log-reading-btn": "I Read Qur'an Today",
    "islamic-calendar-title": "Islamic Calendar",
    "qibla-finder-title": "Qibla Finder",
    "calibrate-qibla-btn": "Calibrate Qibla",
    "daily-dua-title": "Daily Dua",
    "zakat-calculator-title": "Zakat Calculator",
    "calculate-zakat-btn": "Calculate Zakat",
    "footer-text":
      "© 2025 Ihsan Islamic Countdown App | Track your most important moments with precision and spirituality.",
    "choose-theme-title": "Choose Theme",
    "theme-description":
      "Select a theme to change the appearance of your countdown manager:",
    "help-center-title": "Help Center",
    "getting-started-title": "Getting Started",
    "getting-started-desc":
      "Welcome to Ihsan - Islamic Countdown Manager! This app helps you track important events with beautiful countdown timers and Islamic features.",
    "creating-countdowns-title": "Creating Countdowns",
    "managing-countdowns-title": "Managing Countdowns",
    "prayer-times-help-title": "Prayer Times",
    "advanced-features-title": "Advanced Features",
    "islamic-features-help-title": "Islamic Features",
    "settings-modal-title": "Settings",
    "notification-reminders-label": "Notification Reminders",
    "animations-label": "Animations",
    "auto-refresh-label": "Auto-refresh",
    "language-label": "Language",
    "set-reminder-modal-title": "Set Reminder",
    "reminder-title-label": "Reminder Title",
    "remind-me-label": "Remind Me",
    "set-reminder-modal-btn": "Set Reminder",
    "share-countdown-modal-title": "Share Countdown",
    "share-countdown-desc": "Share this countdown with your friends:",
    "delete-countdown-title": "Delete Countdown",
    "delete-confirmation-text":
      "Are you sure you want to delete this countdown? This action cannot be undone.",
    "cancel-btn-text": "Cancel",
    "delete-btn-text": "Delete",
    "edit-countdown-title": "Edit Countdown",
    "edit-event-title-label": "Event Title",
    "edit-event-date-label": "Event Date",
    "edit-category-label": "Category",
    "save-changes-btn": "Save Changes",
    "reminder-set-title": "Reminder Set",
    "ok-btn-text": "OK",
    "good-deed-title": "Good Deed Reminder",
    "ok-good-deed-btn-text": "OK",
  },
  ar: {
    "logo-text": "إحسان",
    "theme-text": "السمات",
    "help-text": "مساعدة",
    "settings-text": "الإعدادات",
    "nav-home": "الرئيسية",
    "nav-countdowns": "العد التنازلي",
    "nav-prayer": "أوقات الصلاة",
    "nav-features": "الميزات الإسلامية",
    "home-description":
      "رفيقك الروحي لتتبع الأحداث الإسلامية والممارسات اليومية<br>بدقة وتفان وتذكيرات جميلة",
    "get-started-text": "ابدأ الآن",
    "explore-features-text": "استكشاف الميزات",
    "stat-countdowns": "العدادات",
    "stat-prayer": "أوقات الصلاة",
    "stat-features": "الأدوات الإسلامية",
    "scroll-text": "انتقل للاستكشاف",
    "active-countdown-title": "العد التنازلي النشط",
    "days-label": "أيام",
    "hours-label": "ساعات",
    "minutes-label": "دقائق",
    "seconds-label": "ثواني",
    "add-countdown-title": "إضافة عد تنازلي جديد",
    "event-title-label": "عنوان الحدث",
    "event-date-label": "تاريخ الحدث",
    "category-label": "الفئة",
    "add-countdown-btn": "إضافة العد التنازلي",
    "my-countdowns-title": "العدادات التنازلية الخاصة بي",
    "statistics-title": "الإحصائيات",
    "total-label": "الإجمالي",
    "active-label": "نشط",
    "completed-label": "مكتمل",
    "quick-actions-title": "إجراءات سريعة",
    "set-reminder-btn": "تعيين تذكير",
    "share-countdown-btn": "مشاركة العد التنازلي",
    "prayer-times-title": "أوقات الصلاة (أديس أبابا)",
    "islamic-features-title": "الميزات الإسلامية",
    "tasbih-counter-title": "عداد التسبيح",
    "reset-counter-btn": "إعادة تعيين العداد",
    "quran-streak-title": "سلسلة القرآن",
    "log-reading-btn": "لقد قرأت القرآن اليوم",
    "islamic-calendar-title": "التقويم الهجري",
    "qibla-finder-title": "الباحث عن القبلة",
    "calibrate-qibla-btn": "معايرة القبلة",
    "daily-dua-title": "الدعاء اليومي",
    "zakat-calculator-title": "حاسبة الزكاة",
    "calculate-zakat-btn": "حساب الزكاة",
    "footer-text":
      "إحسان - مدير العد التنازلي الإسلامي 2025 | تتبع لحظاتك الأكثر أهمية بدقة وروحانية",
    "choose-theme-title": "اختر السمة",
    "theme-description": "حدد سمة لتغيير مظهر مدير العد التنازلي الخاص بك:",
    "help-center-title": "مركز المساعدة",
    "getting-started-title": "بدء الاستخدام",
    "getting-started-desc":
      "مرحبًا بك في إحسان - مدير العد التنازلي الإسلامي! يساعدك هذا التطبيق في تتبع الأحداث المهمة مع مؤقتات العد التنازلي الجميلة والميزات الإسلامية.",
    "creating-countdowns-title": "إنشاء العدادات التنازلية",
    "managing-countdowns-title": "إدارة العدادات التنازلية",
    "prayer-times-help-title": "أوقات الصلاة",
    "advanced-features-title": "الميزات المتقدمة",
    "islamic-features-help-title": "الميزات الإسلامية",
    "settings-modal-title": "الإعدادات",
    "notification-reminders-label": "تذكيرات الإشعارات",
    "animations-label": "الرسوم المتحركة",
    "auto-refresh-label": "التحديث التلقائي",
    "language-label": "اللغة",
    "set-reminder-modal-title": "تعيين تذكير",
    "reminder-title-label": "عنوان التذكير",
    "remind-me-label": "ذكرني",
    "set-reminder-modal-btn": "تعيين التذكير",
    "share-countdown-modal-title": "مشاركة العد التنازلي",
    "share-countdown-desc": "شارك هذا العد التنازلي مع أصدقائك:",
    "delete-countdown-title": "حذف العد التنازلي",
    "delete-confirmation-text":
      "هل أنت متأكد أنك تريد حذف هذا العد التنازلي؟ لا يمكن التراجع عن هذا الإجراء.",
    "cancel-btn-text": "إلغاء",
    "delete-btn-text": "حذف",
    "edit-countdown-title": "تحرير العد التنازلي",
    "edit-event-title-label": "عنوان الحدث",
    "edit-event-date-label": "تاريخ الحدث",
    "edit-category-label": "الفئة",
    "save-changes-btn": "حفظ التغييرات",
    "reminder-set-title": "تم تعيين التذكير",
    "ok-btn-text": "موافق",
    "good-deed-title": "تذكير بالعمل الصالح",
    "ok-good-deed-btn-text": "موافق",
  },
};

let countdowns = [
  {
    id: "1",
    title: "Ramadan 2026",
    date: "2026-02-17",
    category: "islamic",
  },
  {
    id: "2",
    title: "Eid al-Fitr 2026",
    date: "2026-03-19",
    category: "islamic",
  },
  {
    id: "3",
    title: "Hajj 2025",
    date: "2025-06-14",
    category: "islamic",
  },
];

let activeCountdownId =
  localStorage.getItem("activeCountdownId") ||
  countdowns[countdowns.length - 1].id;
let reminders = [];
let selectedTheme = "islamic-dark";
let countdownToDelete = null;
let countdownToEdit = null;
let currentLanguage = localStorage.getItem("language") || "en";

let tasbihCount = 0;
let quickTasbihCount = 0;
let quranStreak = 0;
let lastQuranDate = null;
let goodDeedInterval = null;
let laylatulQadrReminderActive = false;
let currentDuaIndex = 0;
let qiblaDirection = 0;
let compassCalibrated = false;
let deviceOrientationSupported = false;

const duas = [
  {
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    translation:
      "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    reference: "Quran 2:201",
  },
  {
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    translation:
      "My Lord, expand for me my breast [with assurance] And ease for me my task And untie the knot from my tongue That they may understand my speech.",
    reference: "Quran 20:25-28",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيَّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, goodly provision and acceptable deeds.",
    reference: "Sunan Ibn Majah",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    translation:
      "O Allah, I seek refuge in You from grief and sadness, from weakness and from laziness, from miserliness and from cowardice, from being overcome by debt and from being overpowered by men.",
    reference: "Sahih al-Bukhari",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    translation:
      "O Allah, I ask You for guidance, piety, chastity and self-sufficiency.",
    reference: "Sahih Muslim",
  },
];

const islamicMonths = [
  "Muharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qi'dah",
  "Dhu al-Hijjah",
];

const monthDescriptions = [
  "Sacred Month",
  "",
  "Birth of Prophet Muhammad (PBUH)",
  "",
  "",
  "",
  "Sacred Month",
  "Month of preparation for Ramadan",
  "Month of Fasting",
  "Month of Eid al-Fitr",
  "Sacred Month",
  "Month of Hajj and Eid al-Adha",
];

const specialDays = {
  "1-10": "Ashura",
  "12-10": "Eid al-Adha",
  "1-9": "Day of Arafah",
  "27-9": "Laylat al-Qadr (estimated)",
  "1-10-10": "Eid al-Fitr",
};

let prayerTimes = [];
let currentPrayerIndex = -1;
let nextPrayerIndex = -1;

const categoryColors = {
  personal: "#4895ef",
  work: "#4cc9f0",
  holiday: "#ff9e00",
  education: "#9d4edd",
  islamic: "#0a7e3c",
  other: "#f72585",
};

const goodDeeds = [
  "Say SubhanAllah 33 times",
  "Say Alhamdulillah 33 times",
  "Say Allahu Akbar 33 times",
  "Read one ayah from the Qur'an",
  "Make du'a for someone in need",
  "Send blessings upon the Prophet (PBUH)",
  "Give charity, even a smile",
  "Help someone with their work",
  "Forgive someone who wronged you",
  "Visit a sick person or call a relative",
];

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  const langSpan = langSwitcher.querySelector("span");
  langSpan.textContent = lang === "ar" ? "AR" : "EN";

  updateAllTranslations(lang);

  if (languageSelect) {
    languageSelect.value = lang;
  }

  updateNavigationLayout(lang);

  renderCountdownList();
}

function updateAllTranslations(lang) {
  Object.keys(translations[lang]).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      if (key === "home-description") {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  if (prayerTimesGrid.innerHTML) {
    renderPrayerTimes();
  }
}

function updateNavigationLayout(lang) {
  const navContainer = document.querySelector(".nav-container");
  const navActions = document.querySelector(".nav-actions");

  if (lang === "ar") {
    navContainer.style.flexDirection = "row-reverse";
    navActions.style.flexDirection = "row-reverse";

    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.style.flexDirection = "row-reverse";
    });

    document.querySelectorAll(".cta-btn").forEach((btn) => {
      btn.style.flexDirection = "row-reverse";
    });
  } else {
    navContainer.style.flexDirection = "row";
    navActions.style.flexDirection = "row";

    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.style.flexDirection = "row";
    });

    document.querySelectorAll(".cta-btn").forEach((btn) => {
      btn.style.flexDirection = "row";
    });
  }
}

function setActiveSection(sectionId) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
  document
    .querySelector(`.nav-link[data-section="${sectionId}"]`)
    .classList.add("active");
  window.location.hash = sectionId;

  if (sectionId === "home") {
    document.body.style.overflow = "hidden";
    scrollTopBtn.style.display = "none";
  } else {
    document.body.style.overflow = "auto";
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = "flex";
    }
  }
}

function initMobileMenu() {
  hamburgerMenu.addEventListener("click", function () {
    mobileNavLinks.classList.toggle("active");
    this.classList.toggle("active");

    if (currentLanguage === "ar") {
      mobileNavLinks.style.textAlign = "right";
    } else {
      mobileNavLinks.style.textAlign = "left";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !hamburgerMenu.contains(event.target) &&
      !mobileNavLinks.contains(event.target)
    ) {
      mobileNavLinks.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      mobileNavLinks.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    });
  });
}

function initLanguageSwitcher() {
  langSwitcher.addEventListener("click", function () {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    setLanguage(newLang);

    showReminderNotification(
      newLang === "ar"
        ? "تم تغيير اللغة إلى العربية"
        : "Language changed to English"
    );
  });
}

function initExploreFeatures() {
  if (exploreFeaturesBtn) {
    exploreFeaturesBtn.addEventListener("click", function () {
      setActiveSection("countdowns");
      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById("countdowns").offsetTop - 80,
          behavior: "smooth",
        });
      }, 100);
    });
  }
}

function initScrollTopButton() {
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }

    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      if (window.pageYOffset > 100) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.visibility = "hidden";
      } else {
        scrollIndicator.style.opacity = "1";
        scrollIndicator.style.visibility = "visible";
      }
    }
  });
}

function initQuickTasbih() {
  quickTasbihBtn.addEventListener("click", function () {
    quickTasbihModal.classList.add("active");
  });

  quickCountBtn.addEventListener("click", function () {
    quickTasbihCount++;
    quickTasbihCountEl.textContent = quickTasbihCount;
  });

  quickResetBtn.addEventListener("click", function () {
    quickTasbihCount = 0;
    quickTasbihCountEl.textContent = quickTasbihCount;
  });
}

function initModals() {
  themeBtn.addEventListener("click", () => themeModal.classList.add("active"));
  closeThemeModal.addEventListener("click", () =>
    themeModal.classList.remove("active")
  );

  helpBtn.addEventListener("click", () => helpModal.classList.add("active"));
  closeHelpModal.addEventListener("click", () =>
    helpModal.classList.remove("active")
  );

  settingsBtn.addEventListener("click", () =>
    settingsModal.classList.add("active")
  );
  closeSettingsModal.addEventListener("click", () =>
    settingsModal.classList.remove("active")
  );

  reminderBtn.addEventListener("click", () => {
    if (!activeCountdownId) {
      showReminderNotification(
        currentLanguage === "ar"
          ? "الرجاء تحديد عد تنازلي أولاً"
          : "Please select a countdown first"
      );
      return;
    }
    reminderModal.classList.add("active");
  });
  closeReminderModal.addEventListener("click", () =>
    reminderModal.classList.remove("active")
  );

  shareBtn.addEventListener("click", () => {
    if (!activeCountdownId) {
      showReminderNotification(
        currentLanguage === "ar"
          ? "الرجاء تحديد عد تنازلي أولاً"
          : "Please select a countdown first"
      );
      return;
    }
    shareModal.classList.add("active");
  });
  closeShareModal.addEventListener("click", () =>
    shareModal.classList.remove("active")
  );

  closeDeleteModal.addEventListener("click", () =>
    deleteModal.classList.remove("active")
  );
  cancelDeleteBtn.addEventListener("click", () =>
    deleteModal.classList.remove("active")
  );
  confirmDeleteBtn.addEventListener("click", () => {
    if (countdownToDelete) {
      deleteCountdown(countdownToDelete);
      countdownToDelete = null;
      deleteModal.classList.remove("active");
    }
  });

  closeEditModal.addEventListener("click", () =>
    editModal.classList.remove("active")
  );

  closeReminderNotification.addEventListener("click", () =>
    reminderNotification.classList.remove("active")
  );
  okReminderBtn.addEventListener("click", () =>
    reminderNotification.classList.remove("active")
  );
  closeGoodDeedModal.addEventListener("click", () =>
    goodDeedModal.classList.remove("active")
  );
  okGoodDeedBtn.addEventListener("click", () =>
    goodDeedModal.classList.remove("active")
  );

  closeQuickTasbih.addEventListener("click", () =>
    quickTasbihModal.classList.remove("active")
  );

  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", () => {
      selectedTheme = option.dataset.theme;
      document.body.className = `theme-${selectedTheme}`;

      document.querySelectorAll(".theme-option").forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");
    });
  });

  document.querySelectorAll(".reminder-option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".reminder-option").forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");
    });
  });

  document.querySelectorAll(".share-option").forEach((option) => {
    option.addEventListener("click", () => {
      shareCountdown(option.dataset.platform);
    });
  });

  languageSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  notificationsSwitch.addEventListener("change", () => {});
  animationsSwitch.addEventListener("change", () => {
    if (!animationsSwitch.checked) {
      document.body.classList.add("no-animations");
    } else {
      document.body.classList.remove("no-animations");
    }
  });
  refreshSwitch.addEventListener("change", () => {});
}

function showReminderNotification(message) {
  reminderNotificationText.textContent = message;
  reminderNotification.classList.add("active");
}

function updateCountdown() {
  if (!activeCountdownId) {
    activeTitle.textContent =
      currentLanguage === "ar" ? "حدد عد تنازلي" : "Select a countdown";
    document.getElementById("days").textContent = "--";
    document.getElementById("hours").textContent = "--";
    document.getElementById("minutes").textContent = "--";
    document.getElementById("seconds").textContent = "--";
    document.getElementById("progress-bar").style.width = "0%";
    document.getElementById("progress-text").textContent =
      currentLanguage === "ar" ? "0% من الوقت مضى" : "0% of time passed";
    return;
  }

  const countdown = countdowns.find((c) => c.id === activeCountdownId);
  if (!countdown) return;

  const now = new Date();
  const eventDate = new Date(countdown.date);
  const totalTime = eventDate - new Date(countdown.date.split("-")[0], 0, 1);
  const timePassed = now - new Date(countdown.date.split("-")[0], 0, 1);
  const progressPercentage = Math.min(
    100,
    Math.max(0, (timePassed / totalTime) * 100)
  );

  if (eventDate < now) {
    countdownDisplay.style.display = "none";
    expiredMessage.style.display = "block";
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("progress-text").textContent =
      currentLanguage === "ar"
        ? "100% من الوقت مضى - انتهى الحدث!"
        : "100% of time passed - Event has passed!";
  } else {
    countdownDisplay.style.display = "flex";
    expiredMessage.style.display = "none";

    const timeRemaining = eventDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
    document.getElementById(
      "progress-bar"
    ).style.width = `${progressPercentage}%`;
    document.getElementById("progress-text").textContent =
      currentLanguage === "ar"
        ? `${progressPercentage.toFixed(1)}% من الوقت مضى`
        : `${progressPercentage.toFixed(1)}% of time passed`;
  }
}

function setActiveCountdown(id) {
  activeCountdownId = id;
  localStorage.setItem("activeCountdownId", id);

  document.querySelectorAll(".countdown-item").forEach((item) => {
    item.classList.remove("active");
  });

  const countdown = countdowns.find((c) => c.id === id);
  if (countdown) {
    const item = document.querySelector(`.countdown-item[data-id="${id}"]`);
    if (item) item.classList.add("active");
    activeTitle.textContent = countdown.title;
    updateStats();
    updateCountdown();
  }
}

function editCountdown(id) {
  const countdown = countdowns.find((c) => c.id === id);
  if (countdown) {
    countdownToEdit = countdown;
    document.getElementById("edit-title").value = countdown.title;
    document.getElementById("edit-date").value = countdown.date;
    document.getElementById("edit-category").value = countdown.category;
    editModal.classList.add("active");
  }
}

function saveEditedCountdown(e) {
  e.preventDefault();
  if (!countdownToEdit) return;

  const title = document.getElementById("edit-title").value;
  const date = document.getElementById("edit-date").value;
  const category = document.getElementById("edit-category").value;

  if (!title || !date) return;

  countdownToEdit.title = title;
  countdownToEdit.date = date;
  countdownToEdit.category = category;

  renderCountdownList();
  if (countdownToEdit.id === activeCountdownId) {
    activeTitle.textContent = countdownToEdit.title;
    updateCountdown();
  }

  updateStats();
  editModal.classList.remove("active");
  countdownToEdit = null;
}

function deleteCountdown(id) {
  countdowns = countdowns.filter((c) => c.id !== id);

  if (activeCountdownId === id) {
    localStorage.removeItem("activeCountdownId");
    activeCountdownId = countdowns[0]?.id || null;

    if (activeCountdownId) {
      setActiveCountdown(activeCountdownId);
    } else {
      activeTitle.textContent =
        currentLanguage === "ar"
          ? "لا يوجد عد تنازلي نشط"
          : "No active countdown";
      updateCountdown();
    }
  }

  renderCountdownList();
  updateStats();
}

function showDeleteConfirmation(id) {
  countdownToDelete = id;
  deleteModal.classList.add("active");
}

function addCountdown(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  if (!title || !date) return;

  const newCountdown = {
    id: Date.now().toString(),
    title,
    date,
    category,
  };

  countdowns.unshift(newCountdown);
  countdownForm.reset();
  renderCountdownList();
  setActiveCountdown(newCountdown.id);
  updateStats();
}

function addReminder(e) {
  e.preventDefault();

  const title = document.getElementById("reminder-title").value;
  const selectedOption = document.querySelector(".reminder-option.active");

  if (!title || !selectedOption) {
    showReminderNotification(
      currentLanguage === "ar"
        ? "الرجاء ملء جميع الحقول"
        : "Please fill all fields"
    );
    return;
  }

  const daysBefore = parseInt(selectedOption.dataset.days);
  const countdown = countdowns.find((c) => c.id === activeCountdownId);

  if (!countdown) return;

  const reminder = {
    id: Date.now().toString(),
    title,
    countdownId: activeCountdownId,
    countdownTitle: countdown.title,
    daysBefore,
    date: calculateReminderDate(countdown.date, daysBefore),
  };

  reminders.push(reminder);
  showReminderNotification(
    currentLanguage === "ar"
      ? `تم تعيين التذكير قبل ${daysBefore} يوم/أيام من الحدث "${countdown.title}"!`
      : `Reminder set for ${daysBefore} day(s) before the event "${countdown.title}"!`
  );
  reminderForm.reset();
  reminderModal.classList.remove("active");
}

function calculateReminderDate(eventDate, daysBefore) {
  const date = new Date(eventDate);
  date.setDate(date.getDate() - daysBefore);
  return date.toISOString().split("T")[0];
}

function shareCountdown(platform) {
  if (!activeCountdownId) return;

  const countdown = countdowns.find((c) => c.id === activeCountdownId);
  if (!countdown) return;

  const shareText =
    currentLanguage === "ar"
      ? `العد التنازلي لـ ${countdown.title} في ${formatDate(
          countdown.date
        )} - تحقق منه!`
      : `Countdown to ${countdown.title} on ${formatDate(
          countdown.date
        )} - Check it out!`;
  const shareUrl = window.location.href;

  switch (platform) {
    case "facebook":
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareText)}`,
        "_blank"
      );
      break;
    case "whatsapp":
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
        "_blank"
      );
      break;
    case "instagram":
      copyToClipboard(shareText + "\n" + shareUrl);
      showReminderNotification(
        currentLanguage === "ar"
          ? "مشاركة إنستغرام غير مدعومة مباشرة. تم نسخ معلومات العد التنازلي إلى الحافظة بدلاً من ذلك."
          : "Instagram sharing is not directly supported. The countdown info has been copied to your clipboard instead."
      );
      break;
    case "telegram":
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareText)}`,
        "_blank"
      );
      break;
    case "email":
      window.open(
        `mailto:?subject=${encodeURIComponent(
          (currentLanguage === "ar" ? "العد التنازلي لـ " : "Countdown to ") +
            countdown.title
        )}&body=${encodeURIComponent(shareText + "\n" + shareUrl)}`,
        "_blank"
      );
      break;
    default:
      copyToClipboard(shareText + "\n" + shareUrl);
      showReminderNotification(
        currentLanguage === "ar"
          ? "تم نسخ معلومات العد التنازلي إلى الحافظة!"
          : "Countdown info copied to clipboard!"
      );
  }

  shareModal.classList.remove("active");
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(
    currentLanguage === "ar" ? "ar-SA" : "en-US",
    options
  );
}

function updateStats() {
  totalCountEl.textContent = countdowns.length;
  activeCountEl.textContent = activeCountdownId ? 1 : 0;
  const now = new Date();
  const completed = countdowns.filter((c) => new Date(c.date) < now).length;
  completedCountEl.textContent = completed;
}

function renderCountdownList() {
  if (countdowns.length === 0) {
    countdownList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-hourglass-start"></i>
                <h3>${
                  currentLanguage === "ar"
                    ? "لا توجد عدادات تنازلية بعد"
                    : "No Countdowns Yet"
                }</h3>
                <p>${
                  currentLanguage === "ar"
                    ? "أضف أول عد تنازلي لتبدأ!"
                    : "Add your first countdown to get started!"
                }</p>
            </div>
        `;
    return;
  }

  countdownList.innerHTML = countdowns
    .map((countdown) => {
      const categoryColor =
        categoryColors[countdown.category] || categoryColors.other;
      const isActive = countdown.id === activeCountdownId;
      const now = new Date();
      const eventDate = new Date(countdown.date);
      const isExpired = eventDate < now;

      return `
            <div class="countdown-item ${isActive ? "active" : ""} ${
        isExpired ? "expired" : ""
      }" 
                data-id="${countdown.id}" 
                style="--category-color: ${categoryColor}">
                <div class="item-info" onclick="setActiveCountdown('${
                  countdown.id
                }')">
                    <div class="item-title">
                        <span>${countdown.title}</span>
                        <span class="item-category">${
                          countdown.category.charAt(0).toUpperCase() +
                          countdown.category.slice(1)
                        }</span>
                    </div>
                    <div class="item-date">
                        <i class="far fa-calendar"></i>
                        ${formatDate(countdown.date)}
                        ${
                          isExpired
                            ? `<span class="item-expired">(${
                                currentLanguage === "ar" ? "منتهي" : "Expired"
                              })</span>`
                            : ""
                        }
                    </div>
                </div>
                <div class="item-actions">
                    <button class="action-btn edit-btn" onclick="editCountdown('${
                      countdown.id
                    }')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="showDeleteConfirmation('${
                      countdown.id
                    }')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    })
    .join("");
}

function initTasbihCounter() {
  const savedTasbih = localStorage.getItem("tasbihCount");
  if (savedTasbih) {
    tasbihCount = parseInt(savedTasbih);
    tasbihCountEl.textContent = tasbihCount;
  }

  subhanallahBtn.addEventListener("click", () => {
    tasbihCount++;
    updateTasbihDisplay();
  });

  alhamdulillahBtn.addEventListener("click", () => {
    tasbihCount++;
    updateTasbihDisplay();
  });

  allahuakbarBtn.addEventListener("click", () => {
    tasbihCount++;
    updateTasbihDisplay();
  });

  astaghfirullahBtn.addEventListener("click", () => {
    tasbihCount++;
    updateTasbihDisplay();
  });

  resetTasbihBtn.addEventListener("click", () => {
    tasbihCount = 0;
    updateTasbihDisplay();
  });
}

function updateTasbihDisplay() {
  tasbihCountEl.textContent = tasbihCount;
  localStorage.setItem("tasbihCount", tasbihCount);
}

function initQuranStreak() {
  const savedStreak = localStorage.getItem("quranStreak");
  const savedLastDate = localStorage.getItem("lastQuranDate");

  if (savedStreak) {
    quranStreak = parseInt(savedStreak);
    lastQuranDate = savedLastDate;

    if (lastQuranDate) {
      const lastDate = new Date(lastQuranDate);
      const today = new Date();
      const diffTime = Math.abs(today - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 1) {
        quranStreak = 0;
        localStorage.setItem("quranStreak", 0);
      }
    }

    streakCountEl.textContent = quranStreak;
    updateStreakInfo();
  }

  logReadingBtn.addEventListener("click", () => {
    const today = new Date().toISOString().split("T")[0];

    if (lastQuranDate === today) {
      showReminderNotification(
        currentLanguage === "ar"
          ? "لقد سجلت قراءة القرآن لهذا اليوم بالفعل!"
          : "You've already logged your Qur'an reading for today!"
      );
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastQuranDate === yesterdayStr) {
      quranStreak++;
    } else if (!lastQuranDate || lastQuranDate < yesterdayStr) {
      quranStreak = 1;
    }

    lastQuranDate = today;
    localStorage.setItem("quranStreak", quranStreak);
    localStorage.setItem("lastQuranDate", lastQuranDate);

    streakCountEl.textContent = quranStreak;
    updateStreakInfo();

    showReminderNotification(
      currentLanguage === "ar"
        ? `تم تسجيل قراءة القرآن! سلسلتك الآن ${quranStreak} يوم.`
        : "Qur'an reading logged! Your streak is now " + quranStreak + " days."
    );
  });
}

function updateStreakInfo() {
  if (quranStreak === 0) {
    streakInfoEl.textContent =
      currentLanguage === "ar"
        ? "ابدأ سلسلة قراءة القرآن اليوم!"
        : "Start your Qur'an reading streak today!";
  } else if (quranStreak === 1) {
    streakInfoEl.textContent =
      currentLanguage === "ar"
        ? "بداية رائعة! استمر غدًا!"
        : "Great start! Keep going tomorrow!";
  } else if (quranStreak < 7) {
    streakInfoEl.textContent =
      currentLanguage === "ar"
        ? `مذهل! ${quranStreak} أيام متتالية!`
        : `Amazing! ${quranStreak} days in a row!`;
  } else if (quranStreak < 30) {
    streakInfoEl.textContent =
      currentLanguage === "ar"
        ? `سبحان الله! سلسلة ${quranStreak} يوم!`
        : `SubhanAllah! ${quranStreak} days streak!`;
  } else {
    streakInfoEl.textContent =
      currentLanguage === "ar"
        ? `ما شاء الله! ${quranStreak} يومًا من قراءة القرآن!`
        : `MashaAllah! ${quranStreak} days of Qur'an reading!`;
  }
}

function initIslamicCalendar() {
  updateIslamicDate();
  setInterval(updateIslamicDate, 86400000);
}

function updateIslamicDate() {
  const today = new Date();
  const gregorianDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const baseHijri = { year: 1446, month: 0, day: 1 };
  const baseGregorian = new Date(2024, 5, 27);

  const diffTime = Math.abs(today - baseGregorian);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let hijriDays = baseHijri.day + diffDays;
  let hijriMonth = baseHijri.month;
  let hijriYear = baseHijri.year;

  while (hijriDays > 29) {
    hijriDays -= 29;
    hijriMonth++;
    if (hijriMonth >= 12) {
      hijriMonth = 0;
      hijriYear++;
    }
  }

  const hijriDate = `${hijriDays} ${islamicMonths[hijriMonth]} ${hijriYear}`;
  const monthInfo = `${islamicMonths[hijriMonth]} - ${monthDescriptions[hijriMonth]}`;

  hijriDateEl.textContent = hijriDate;
  gregorianDateEl.textContent = gregorianDate;
  islamicMonthEl.textContent = monthInfo;

  const specialDayKey = `${hijriDays}-${hijriMonth + 1}`;
  if (specialDays[specialDayKey]) {
    specialDaysEl.innerHTML = `<p>${specialDays[specialDayKey]}</p>`;
  } else {
    if (hijriMonth === 8) {
      specialDaysEl.innerHTML = `<p>Fasting Day ${hijriDays} of 30</p>`;
    } else {
      specialDaysEl.innerHTML = "";
    }
  }
}

function initQiblaFinder() {
  if (window.DeviceOrientationEvent) {
    deviceOrientationSupported = true;
    window.addEventListener("deviceorientation", handleDeviceOrientation);
  } else {
    qiblaAngleEl.textContent =
      currentLanguage === "ar"
        ? "اتجاه القبلة: غير متوفر على هذا الجهاز"
        : "Qibla Direction: Not available on this device";
  }

  calibrateQiblaBtn.addEventListener("click", calibrateCompass);
  qiblaDirection = Math.floor(Math.random() * 360);
  updateCompassDisplay();
}

function handleDeviceOrientation(event) {
  if (!compassCalibrated) return;

  let direction = 0;
  if (event.webkitCompassHeading) {
    direction = event.webkitCompassHeading;
  } else if (event.alpha) {
    direction = event.alpha;
  }

  const angleToQibla = (360 - direction + qiblaDirection) % 360;
  compassNeedle.style.transform = `translateX(-50%) rotate(${angleToQibla}deg)`;

  qiblaAngleEl.textContent =
    currentLanguage === "ar"
      ? `اتجاه القبلة: ${Math.round(angleToQibla)}°`
      : `Qibla Direction: ${Math.round(angleToQibla)}°`;
}

function calibrateCompass() {
  compassCalibrated = true;

  if (!deviceOrientationSupported) {
    const simulatedAngle = Math.floor(Math.random() * 360);
    compassNeedle.style.transform = `translateX(-50%) rotate(${simulatedAngle}deg)`;
    qiblaAngleEl.textContent =
      currentLanguage === "ar"
        ? `اتجاه القبلة: ${simulatedAngle}° (محاكاة)`
        : `Qibla Direction: ${simulatedAngle}° (simulated)`;
  }

  showReminderNotification(
    currentLanguage === "ar"
      ? "تم معايرة البوصلة بنجاح!"
      : "Compass calibrated successfully!"
  );
}

function updateCompassDisplay() {
  if (!compassCalibrated) {
    compassNeedle.style.transform = `translateX(-50%) rotate(0deg)`;
    qiblaAngleEl.textContent =
      currentLanguage === "ar"
        ? "اتجاه القبلة: يرجى المعايرة"
        : "Qibla Direction: Please calibrate";
  }
}

function initDailyDua() {
  const savedDuaIndex = localStorage.getItem("currentDuaIndex");
  if (savedDuaIndex) {
    currentDuaIndex = parseInt(savedDuaIndex);
  }

  displayDua(currentDuaIndex);

  prevDuaBtn.addEventListener("click", function () {
    currentDuaIndex = (currentDuaIndex - 1 + duas.length) % duas.length;
    displayDua(currentDuaIndex);
    localStorage.setItem("currentDuaIndex", currentDuaIndex);
  });

  nextDuaBtn.addEventListener("click", function () {
    currentDuaIndex = (currentDuaIndex + 1) % duas.length;
    displayDua(currentDuaIndex);
    localStorage.setItem("currentDuaIndex", currentDuaIndex);
  });
}

function displayDua(index) {
  const dua = duas[index];
  duaArabicEl.textContent = dua.arabic;
  duaTranslationEl.textContent = dua.translation;
  duaReferenceEl.textContent = dua.reference;
}

function initZakatCalculator() {
  zakatFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    calculateZakat();
  });
}

function calculateZakat() {
  const cashAssets =
    parseFloat(document.getElementById("cash-assets").value) || 0;
  const goldValue =
    parseFloat(document.getElementById("gold-value").value) || 0;
  const silverValue =
    parseFloat(document.getElementById("silver-value").value) || 0;
  const businessAssets =
    parseFloat(document.getElementById("business-assets").value) || 0;

  const totalAssets = cashAssets + goldValue + silverValue + businessAssets;
  const nisab = 4000;

  if (totalAssets < nisab) {
    showReminderNotification(
      currentLanguage === "ar"
        ? "أصولك لا تصل إلى النصاب. لا زكاة واجبة."
        : "Your assets do not meet the nisab threshold. No Zakat is due."
    );
    zakatResultEl.style.display = "none";
    return;
  }

  const zakatAmount = totalAssets * 0.025;
  zakatAmountEl.textContent = `$${zakatAmount.toFixed(2)}`;
  zakatResultEl.style.display = "block";
}

function calculatePrayerTimes() {
  const today = new Date();
  const fajr = "05:30";
  const sunrise = "06:45";
  const dhuhr = "12:45";
  const asr = "15:30";
  const maghrib = "18:30";
  const isha = "19:45";

  return [
    { name: "Fajr", time: fajr },
    { name: "Sunrise", time: sunrise },
    { name: "Dhuhr", time: dhuhr },
    { name: "Asr", time: asr },
    { name: "Maghrib", time: maghrib },
    { name: "Isha", time: isha },
  ];
}

function updatePrayerTimes() {
  prayerTimes = calculatePrayerTimes();
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  currentPrayerIndex = -1;
  nextPrayerIndex = -1;

  for (let i = 0; i < prayerTimes.length; i++) {
    const [hours, minutes] = prayerTimes[i].time.split(":").map(Number);
    const prayerTime = hours * 60 + minutes;

    if (prayerTime <= currentTime) {
      currentPrayerIndex = i;
    } else if (nextPrayerIndex === -1) {
      nextPrayerIndex = i;
    }
  }

  if (nextPrayerIndex === -1) {
    nextPrayerIndex = 0;
  }

  renderPrayerTimes();
}

function renderPrayerTimes() {
  prayerTimesGrid.innerHTML = "";

  prayerTimes.forEach((prayer, index) => {
    const isActive = index === currentPrayerIndex;
    const prayerCard = document.createElement("div");
    prayerCard.className = `prayer-time-card ${isActive ? "active" : ""}`;

    const [hours, minutes] = prayer.time.split(":");
    const formattedTime = `${hours}:${minutes}`;

    let remainingTime = "";
    if (index === nextPrayerIndex) {
      const now = new Date();
      const [nextHours, nextMinutes] = prayer.time.split(":").map(Number);
      const nextPrayerTime = new Date();
      nextPrayerTime.setHours(nextHours, nextMinutes, 0, 0);

      if (nextPrayerTime < now) {
        nextPrayerTime.setDate(nextPrayerTime.getDate() + 1);
      }

      const diffMs = nextPrayerTime - now;
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      remainingTime =
        currentLanguage === "ar"
          ? `بعد ${diffHrs}س ${diffMins}د`
          : `in ${diffHrs}h ${diffMins}m`;
    }

    prayerCard.innerHTML = `
            <div class="prayer-name">${prayer.name}</div>
            <div class="prayer-time">${formattedTime}</div>
            ${
              remainingTime
                ? `<div class="prayer-remaining">${remainingTime}</div>`
                : ""
            }
        `;

    prayerTimesGrid.appendChild(prayerCard);
  });
}

function startGoodDeedReminders() {
  setTimeout(showRandomGoodDeed, 60000);
  goodDeedInterval = setInterval(showRandomGoodDeed, 600000);
}

function showRandomGoodDeed() {
  const randomDeed = goodDeeds[Math.floor(Math.random() * goodDeeds.length)];
  goodDeedText.textContent = randomDeed;
  goodDeedModal.classList.add("active");
}

function checkLaylatulQadrReminder() {
  const today = new Date();
  const ramadanStart = new Date(today.getFullYear(), 2, 22);
  const ramadanEnd = new Date(today.getFullYear(), 3, 20);

  if (today >= ramadanStart && today <= ramadanEnd) {
    const daysLeft = Math.ceil((ramadanEnd - today) / (1000 * 60 * 60 * 24));

    if (daysLeft <= 10 && !laylatulQadrReminderActive) {
      laylatulQadrReminderActive = true;
      showReminderNotification(
        currentLanguage === "ar"
          ? "نحن في العشر الأواخر من رمضان! التمسوا ليلة القدر في الليالي الوترية."
          : "We are in the last 10 nights of Ramadan! Seek Laylatul Qadr in the odd nights."
      );
    }
  }
}

function initRippleEffects() {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mousedown", function (e) {
      if (
        this.classList.contains("action-btn") ||
        this.classList.contains("close-btn") ||
        this.classList.contains("floating-btn") ||
        this.classList.contains("hamburger-menu") ||
        this.classList.contains("lang-switcher")
      )
        return;

      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

function initPreloader() {
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".loading-spinner");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  });
}

function init() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      setActiveSection(sectionId);
    });
  });

  getStartedBtn.addEventListener("click", function () {
    setActiveSection("countdowns");
  });

  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    if (document.getElementById(sectionId)) {
      setActiveSection(sectionId);
    }
  }

  initMobileMenu();
  initLanguageSwitcher();
  initExploreFeatures();
  initScrollTopButton();
  initQuickTasbih();
  initModals();
  initRippleEffects();
  initSmoothScrolling();
  initPreloader();

  setLanguage(currentLanguage);

  initTasbihCounter();
  initQuranStreak();
  initIslamicCalendar();
  initQiblaFinder();
  initDailyDua();
  initZakatCalculator();

  renderCountdownList();
  updateStats();
  updatePrayerTimes();
  setInterval(updatePrayerTimes, 60000);

  const savedActiveId = localStorage.getItem("activeCountdownId");
  const savedCountdownExists = countdowns.some((c) => c.id === savedActiveId);

  if (savedActiveId && savedCountdownExists) {
    setActiveCountdown(savedActiveId);
  } else if (countdowns.length > 0) {
    setActiveCountdown(countdowns[0].id);
  }

  startGoodDeedReminders();
  checkLaylatulQadrReminder();

  countdownForm.addEventListener("submit", addCountdown);
  reminderForm.addEventListener("submit", addReminder);
  editForm.addEventListener("submit", saveEditedCountdown);

  document
    .querySelector('.reminder-option[data-days="1"]')
    .classList.add("active");

  setInterval(updateCountdown, 1000);

  if (document.getElementById("home").classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", init);
