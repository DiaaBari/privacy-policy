# موقع «أكتب مع ألفي» — صفحات الدعم والخصوصية والشروط

موقع ثابت (HTML/CSS) بهوية التطبيق، جاهز للنشر على **GitHub Pages** أو أي استضافة ثابتة.

## الصفحات
| الملف | الغرض |
|------|------|
| `index.html` | الصفحة الرئيسية + أزرار تحميل (Google Play / App Store) |
| `support.html` | الدعم + أسئلة شائعة + تواصل |
| `privacy.html` | سياسة الخصوصية (مناسبة لتطبيق أطفال) |
| `terms.html` | شروط الاستخدام |
| `style.css` | الأنماط المشتركة |

## ⚠️ متغيّرات يجب تعبئتها قبل النشر
1. **بريد الدعم**: `diaa.themaster@gmail.com` (مضبوط ✓).
2. **رابط App Store** في `index.html` (زر «قريباً») — ضع الرابط الحقيقي بعد نشر نسخة iOS، واحذف صنف `soon`.
3. **بلد القانون الحاكم** في `terms.html` (البند 7) — حدّده إن رغبت.
4. رابط Google Play جاهز: `com.dow.LetsLearn` (النسخة المنشورة).

## النشر على GitHub Pages
1. أنشئ مستودعاً على GitHub (مثلاً `tech4app/privacy-policy`) وارفع هذه الملفات.
2. Settings ← Pages ← Source: `main` / `(root)` ← Save.
3. ستصبح الروابط:
   - الرئيسية: `https://diaabari.github.io/privacy-policy/alfywrite/`
   - الخصوصية: `.../privacy.html`
   - الشروط: `.../terms.html`
   - الدعم: `.../support.html`

## بعد النشر — حدِّث روابط التطبيق
في مشروع Lets-Learn، استبدل الـ placeholders بالروابط الحقيقية:
- `LockedLevelPopupController.cs` → `TermsUrl` و`PrivacyUrl`.
- (اختياري) رابط الدعم في الإعدادات.

أعطني الروابط النهائية بعد النشر وأحدّثها في الكود تلقائياً.

© 2026 tech4app
