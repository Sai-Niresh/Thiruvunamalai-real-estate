const translations = {
  en: {
    title: "Tiruvannamalai Real Estate",
    welcome: "Welcome to Our Real Estate Business",
    desc: "Find your dream property in Tiruvannamalai.",
    contact: "📞 Contact Us",
    address: "Address: Tiruvannamalai, Tamil Nadu",
    phone: "Phone: +91 9876543210"
  },
  ta: {
    title: "திருவண்ணாமலை ரியல் எஸ்டேட்",
    welcome: "எங்கள் ரியல் எஸ்டேட் வணிகத்திற்கு வரவேற்கிறோம்",
    desc: "திருவண்ணாமலையில் உங்கள் கனவு சொத்தை கண்டுபிடிக்கவும்.",
    contact: "📞 தொடர்புக்கு",
    address: "முகவரி: திருவண்ணாமலை, தமிழ்நாடு",
    phone: "தொலைபேசி: +91 9876543210"
  },
  te: {
    title: "తిరువణ్ణామలై రియల్ ఎస్టేట్",
    welcome: "మా రియల్ ఎస్టేట్ వ్యాపారానికి స్వాగతం",
    desc: "తిరువణ్ణామలైలో మీ కలల ఇల్లు కనుగొనండి.",
    contact: "📞 సంప్రదించండి",
    address: "చిరునామా: తిరువణ్ణామలై, తమిళనాడు",
    phone: "ఫోన్: +91 9876543210"
  },
  hi: {
    title: "तिरुवण्णामलाई रियल एस्टेट",
    welcome: "हमारे रियल एस्टेट व्यवसाय में आपका स्वागत है",
    desc: "तिरुवण्णामलाई में अपनी सपनों की संपत्ति खोजें।",
    contact: "📞 संपर्क करें",
    address: "पता: तिरुवण्णामलाई, तमिलनाडु",
    phone: "फ़ोन: +91 9876543210"
  },
  kn: {
    title: "ತಿರುವಣ್ಣಾಮಲೈ ರಿಯಲ್ ಎಸ್ಟೇಟ್",
    welcome: "ನಮ್ಮ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ವ್ಯವಹಾರಕ್ಕೆ ಸುಸ್ವಾಗತ",
    desc: "ತಿರುವಣ್ಣಾಮಲೈಯಲ್ಲಿ ನಿಮ್ಮ ಕನಸಿನ ಮನೆ ಹುಡುಕಿ.",
    contact: "📞 ಸಂಪರ್ಕಿಸಿ",
    address: "ವಿಳಾಸ: ತಿರುವಣ್ಣಾಮಲೈ, ತಮಿಳುನಾಡು",
    phone: "ಫೋನ್: +91 9876543210"
  }
};

function changeLang() {
  const lang = document.getElementById("lang").value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("welcome").innerText = translations[lang].welcome;
  document.getElementById("desc").innerText = translations[lang].desc;
  document.getElementById("contact").innerText = translations[lang].contact;
  document.getElementById("address").innerText = translations[lang].address;
  document.getElementById("phone").innerText = translations[lang].phone;
}
