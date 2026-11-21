(() => {
  const root = document.documentElement;
  const preferenceKey = 'islamic-third-grade-language';

  const applyLanguage = (language) => {
    const english = language === 'en';
    root.dataset.lang = english ? 'en' : 'ar';
    root.lang = root.dataset.lang;
    root.dir = english ? 'ltr' : 'rtl';
    document.title = (english ? root.dataset.titleEn : root.dataset.title) || document.title;
  };

  try {
    applyLanguage(localStorage.getItem(preferenceKey));
  } catch {
    applyLanguage('ar');
  }

  document.querySelector('.language-switch').addEventListener('click', () => {
    applyLanguage(root.lang === 'ar' ? 'en' : 'ar');
    try {
      localStorage.setItem(preferenceKey, root.lang);
    } catch {
      // The switch still works when the browser blocks local storage.
    }
  });

  root.classList.add('language-ready');
})();
