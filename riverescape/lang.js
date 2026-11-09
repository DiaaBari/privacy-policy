/* Language toggle (Arabic <-> English) with persistence + direction flip. */
(function () {
  function apply(l) {
    var h = document.documentElement;
    h.setAttribute('data-lang', l);
    h.setAttribute('lang', l);
    h.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
    try { localStorage.setItem('site-lang', l); } catch (e) {}
  }
  window.toggleLang = function () {
    var cur = document.documentElement.getAttribute('data-lang') || 'ar';
    apply(cur === 'ar' ? 'en' : 'ar');
  };
  var saved = null;
  try { saved = localStorage.getItem('site-lang'); } catch (e) {}
  apply(saved === 'en' ? 'en' : 'ar');
})();
