// This script checks if the page language is a right-to-left language (like Arabic or Hebrew)
// and sets the document direction to RTL if needed. It runs every second to catch changes from tools like Google Translate.

function checkAndSetRTL() {
  // List of common RTL language codes
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];
  // Get the current language from the <html> tag
  const lang = document.documentElement.lang || '';
  // If the language is RTL, set dir="rtl", otherwise set dir="ltr"
  if (rtlLangs.includes(lang.substring(0,2).toLowerCase())) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

// Run the check every second to detect language changes
setInterval(checkAndSetRTL, 1000);

// Run once on page load
checkAndSetRTL();
