<<<<<<< HEAD
/*=========================================================
   SAHASETU COOPERATIVE SERVICES
   CUSTOMER DASHBOARD DEMO
========================================================= */

const services = [
  ['🔧','Plumbing','Leaks, taps & pipes'],
  ['⚡','Electrical','Fans, lights & wiring'],
  ['✨','Home cleaning','Regular & deep cleaning'],
  ['🧰','Appliance repair','AC, fridge & washing machine'],
  ['🪚','Carpentry','Furniture & fittings'],
  ['🎨','Painting','Walls & touch-ups'],
  ['📚','Tutor / babysitting','Trusted home support'],
  ['🪳','Pest control','Insects & termites'],
  ['🌿','Gardening','Plants & lawn care'],
  ['🍲','Cooks / maid','Home-help services'],
  ['♥','Elderly care','Attendant & support'],
  ['🏘','Community services','Events, waste & security']
];


/* =========================================================
   WORKERS
========================================================= */

const workers = [
  {
    id:1,
    name:'Ananya Sharma',
    skill:'Electrical',
    rating:4.8,
    reviews:126,
    experience:5,
    distance:'1.2 km',
    arrival:'25 minutes',
    photo:'👩🏽‍🔧',
    price:'₹350–₹600',
    type:'Cooperative',
    cooperativeName:'SahaSetu Electrical Cooperative',
    trusted:true
  },
  {
    id:2,
    name:'Rahul Kumar',
    skill:'Plumbing',
    rating:4.7,
    reviews:98,
    experience:6,
    distance:'1.8 km',
    arrival:'30 minutes',
    photo:'👨🏽‍🔧',
    price:'₹300–₹550',
    type:'Cooperative',
    cooperativeName:'SahaSetu Plumbing Cooperative',
    trusted:true
  },
  {
    id:3,
    name:'Priya Nair',
    skill:'Home cleaning',
    rating:4.9,
    reviews:154,
    experience:4,
    distance:'2.1 km',
    arrival:'35 minutes',
    photo:'👩🏻‍🔧',
    price:'₹400–₹700',
    type:'Cooperative',
    cooperativeName:'SahaSetu Home Care Cooperative',
    trusted:true
  },
  {
    id:4,
    name:'Vikram Singh',
    skill:'Carpentry',
    rating:4.6,
    reviews:87,
    experience:7,
    distance:'2.7 km',
    arrival:'40 minutes',
    photo:'👨🏽‍🔧',
    price:'₹450–₹800',
    type:'Individual',
    cooperativeName:'',
    trusted:true
  },
  {
    id:5,
    name:'Meena Devi',
    skill:'Appliance repair',
    rating:4.8,
    reviews:112,
    experience:5,
    distance:'3.0 km',
    arrival:'45 minutes',
    photo:'👩🏽‍🔧',
    price:'₹400–₹750',
    type:'Cooperative',
    cooperativeName:'SahaSetu Appliance Workers Cooperative',
    trusted:true
  }
];


/* =========================================================
   STATE
========================================================= */

let selectedService = '';
let selectedWorker = null;
let currentBooking = null;
let currentUser = null;

const $ = id => document.getElementById(id);


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getAccounts(){

  return JSON.parse(
    localStorage.getItem('sahAccounts') || '[]'
  );

}

function saveAccounts(accounts){

  localStorage.setItem(
    'sahAccounts',
    JSON.stringify(accounts)
  );

}

function saveCurrentUser(){

  if(!currentUser) return;

  localStorage.setItem(
    'sahCurrentUser',
    JSON.stringify(currentUser)
  );

}

function getCurrentUser(){

  return JSON.parse(
    localStorage.getItem('sahCurrentUser') || 'null'
  );
=======
/* =====================================================
   SAHASETU WORKER DASHBOARD
===================================================== */


/* =====================================================
   CONSTANTS
===================================================== */

const DEMO_OTP = "1234";

const USERS_KEY = "sahaSetuUsers";
const CURRENT_USER_KEY = "sahaSetuCurrentUser";
const LOGIN_KEY = "sahaSetuLoggedIn";


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    en: {
        dashboard: "Dashboard",
        jobRequests: "Job Requests",
        activeJobs: "Active Jobs",
        earnings: "Earnings",
        myProfile: "My Profile",
        voiceAssistant: "Voice Assistant",
        switchAccount: "Switch Account",
        availability: "Availability",
        emergency: "Emergency / SOS",
        newRequests: "New Requests",
        todayEarnings: "Today's Earnings",
        rating: "Rating",
        newJobRequests: "New Job Requests",
        nearbyCustomers: "Nearby customers looking for your services.",
        viewAll: "View All →",
        futureFeatures: "Space reserved for future SahaSetu features",
        blankSpace: "This area is intentionally blank for now.",
        reviewRequests: "Review and respond to customer requests.",
        manageServices: "Manage your accepted customer services.",
        myEarnings: "My Earnings",
        trackIncome: "Track your income from SahaSetu.",
        today: "Today",
        thisWeek: "This Week",
        thisMonth: "This Month",
        totalEarnings: "Total Earnings",
        updatedNow: "Updated just now",
        completedJobs: "Completed Jobs",
        averageJob: "Average / Job",
        basedCompleted: "Based on completed jobs",
        manageInformation: "Manage your worker information.",
        workerId: "Worker ID:",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        primarySkill: "Primary Skill",
        workType: "Work Type",
        cooperativeSociety: "Cooperative Society",
        kycStatus: "KYC Status",
        verified: "Verified",
        preferredLanguage: "Preferred Language",
        saveLanguage: "Save Language",
        notifications: "Notifications",
        newJob: "New Job Request",
        newJobMessage: "You have a new nearby service request.",
        paymentReceived: "Payment Received",
        paymentMessage: "Your recent service payment was recorded.",
        customerVerification: "Customer Verification",
        askCustomerOtp: "Ask the customer for their 4-digit OTP.",
        verifyOtp: "Verify OTP",
        emergencyReport: "Emergency / Report",
        tellWhatHappened: "Tell SahaSetu what happened.",
        submitReport: "Submit Report",
        handsFree: "Your hands-free worker assistant",
        trySaying: "Try saying:",
        goodMorning: "Good morning 👋",
        goodAfternoon: "Good afternoon 👋",
        goodEvening: "Good evening 👋",
        overview: "Here is your SahaSetu work overview.",
        available: "You are Available",
        unavailable: "You are Unavailable"
    },

    te: {
        dashboard: "డాష్‌బోర్డ్",
        jobRequests: "పని అభ్యర్థనలు",
        activeJobs: "ప్రస్తుత పనులు",
        earnings: "ఆదాయం",
        myProfile: "నా ప్రొఫైల్",
        voiceAssistant: "వాయిస్ అసిస్టెంట్",
        switchAccount: "ఖాతా మార్చండి",
        availability: "అందుబాటు",
        emergency: "అత్యవసరం / SOS",
        newRequests: "కొత్త అభ్యర్థనలు",
        todayEarnings: "ఈ రోజు ఆదాయం",
        rating: "రేటింగ్",
        newJobRequests: "కొత్త పని అభ్యర్థనలు",
        nearbyCustomers: "మీ సేవల కోసం సమీపంలోని కస్టమర్లు చూస్తున్నారు.",
        viewAll: "అన్నీ చూడండి →",
        futureFeatures: "భవిష్యత్ SahaSetu ఫీచర్ల కోసం స్థలం",
        blankSpace: "ఈ ప్రాంతం ప్రస్తుతం ఖాళీగా ఉంచబడింది.",
        reviewRequests: "కస్టమర్ అభ్యర్థనలను పరిశీలించి స్పందించండి.",
        manageServices: "మీరు అంగీకరించిన కస్టమర్ సేవలను నిర్వహించండి.",
        myEarnings: "నా ఆదాయం",
        trackIncome: "SahaSetu ద్వారా మీ ఆదాయాన్ని ట్రాక్ చేయండి.",
        today: "ఈ రోజు",
        thisWeek: "ఈ వారం",
        thisMonth: "ఈ నెల",
        totalEarnings: "మొత్తం ఆదాయం",
        updatedNow: "ఇప్పుడే నవీకరించబడింది",
        completedJobs: "పూర్తయిన పనులు",
        averageJob: "పని సగటు",
        basedCompleted: "పూర్తయిన పనుల ఆధారంగా",
        manageInformation: "మీ కార్మిక సమాచారాన్ని నిర్వహించండి.",
        workerId: "వర్కర్ ID:",
        fullName: "పూర్తి పేరు",
        phoneNumber: "ఫోన్ నంబర్",
        primarySkill: "ప్రధాన నైపుణ్యం",
        workType: "పని రకం",
        cooperativeSociety: "సహకార సంఘం",
        kycStatus: "KYC స్థితి",
        verified: "ధృవీకరించబడింది",
        preferredLanguage: "ఇష్టమైన భాష",
        saveLanguage: "భాషను సేవ్ చేయండి",
        notifications: "నోటిఫికేషన్లు",
        newJob: "కొత్త పని అభ్యర్థన",
        newJobMessage: "మీకు సమీపంలోని కొత్త సేవా అభ్యర్థన వచ్చింది.",
        paymentReceived: "చెల్లింపు అందింది",
        paymentMessage: "మీ ఇటీవలి సేవా చెల్లింపు నమోదు చేయబడింది.",
        customerVerification: "కస్టమర్ ధృవీకరణ",
        askCustomerOtp: "కస్టమర్ 4 అంకెల OTP అడగండి.",
        verifyOtp: "OTP ధృవీకరించండి",
        emergencyReport: "అత్యవసరం / నివేదిక",
        tellWhatHappened: "ఏం జరిగిందో SahaSetu కి తెలియజేయండి.",
        submitReport: "నివేదిక పంపండి",
        handsFree: "మీ హ్యాండ్స్-ఫ్రీ వర్కర్ అసిస్టెంట్",
        trySaying: "ఇలా చెప్పండి:",
        goodMorning: "శుభోదయం 👋",
        goodAfternoon: "శుభ మధ్యాహ్నం 👋",
        goodEvening: "శుభ సాయంత్రం 👋",
        overview: "ఇది మీ SahaSetu పని వివరాలు.",
        available: "మీరు అందుబాటులో ఉన్నారు",
        unavailable: "మీరు అందుబాటులో లేరు"
    },

    hi: {
        dashboard: "डैशबोर्ड",
        jobRequests: "काम के अनुरोध",
        activeJobs: "सक्रिय काम",
        earnings: "कमाई",
        myProfile: "मेरी प्रोफ़ाइल",
        voiceAssistant: "वॉइस असिस्टेंट",
        switchAccount: "खाता बदलें",
        availability: "उपलब्धता",
        emergency: "आपातकाल / SOS",
        newRequests: "नए अनुरोध",
        todayEarnings: "आज की कमाई",
        rating: "रेटिंग",
        newJobRequests: "नए काम के अनुरोध",
        nearbyCustomers: "आपकी सेवाओं के लिए आसपास के ग्राहक खोज रहे हैं।",
        viewAll: "सभी देखें →",
        futureFeatures: "भविष्य के SahaSetu फीचर्स के लिए स्थान",
        blankSpace: "यह क्षेत्र अभी खाली रखा गया है।",
        reviewRequests: "ग्राहक अनुरोधों की समीक्षा करें और जवाब दें।",
        manageServices: "अपने स्वीकार किए गए ग्राहक कार्यों को प्रबंधित करें।",
        myEarnings: "मेरी कमाई",
        trackIncome: "SahaSetu से अपनी कमाई ट्रैक करें।",
        today: "आज",
        thisWeek: "इस सप्ताह",
        thisMonth: "इस महीने",
        totalEarnings: "कुल कमाई",
        updatedNow: "अभी अपडेट किया गया",
        completedJobs: "पूरे किए गए काम",
        averageJob: "प्रति काम औसत",
        basedCompleted: "पूरे किए गए काम के आधार पर",
        manageInformation: "अपने कार्यकर्ता की जानकारी प्रबंधित करें।",
        workerId: "वर्कर ID:",
        fullName: "पूरा नाम",
        phoneNumber: "फोन नंबर",
        primarySkill: "मुख्य कौशल",
        workType: "काम का प्रकार",
        cooperativeSociety: "सहकारी संस्था",
        kycStatus: "KYC स्थिति",
        verified: "सत्यापित",
        preferredLanguage: "पसंदीदा भाषा",
        saveLanguage: "भाषा सेव करें",
        notifications: "सूचनाएं",
        newJob: "नया काम अनुरोध",
        newJobMessage: "आपको पास के क्षेत्र से नया सेवा अनुरोध मिला है।",
        paymentReceived: "भुगतान प्राप्त हुआ",
        paymentMessage: "आपका हाल का सेवा भुगतान दर्ज किया गया है।",
        customerVerification: "ग्राहक सत्यापन",
        askCustomerOtp: "ग्राहक से 4 अंकों का OTP पूछें।",
        verifyOtp: "OTP सत्यापित करें",
        emergencyReport: "आपातकाल / रिपोर्ट",
        tellWhatHappened: "SahaSetu को बताएं कि क्या हुआ।",
        submitReport: "रिपोर्ट भेजें",
        handsFree: "आपका हैंड्स-फ्री वर्कर असिस्टेंट",
        trySaying: "ऐसा बोलें:",
        goodMorning: "सुप्रभात 👋",
        goodAfternoon: "नमस्कार 👋",
        goodEvening: "शुभ संध्या 👋",
        overview: "यह आपका SahaSetu कार्य विवरण है।",
        available: "आप उपलब्ध हैं",
        unavailable: "आप उपलब्ध नहीं हैं"
    },

    ta: {
        dashboard: "டாஷ்போர்டு",
        jobRequests: "வேலை கோரிக்கைகள்",
        activeJobs: "செயலில் உள்ள வேலைகள்",
        earnings: "வருமானம்",
        myProfile: "என் சுயவிவரம்",
        voiceAssistant: "குரல் உதவியாளர்",
        switchAccount: "கணக்கை மாற்று",
        availability: "கிடைக்கும் நிலை",
        emergency: "அவசரம் / SOS",
        newRequests: "புதிய கோரிக்கைகள்",
        todayEarnings: "இன்றைய வருமானம்",
        rating: "மதிப்பீடு",
        newJobRequests: "புதிய வேலை கோரிக்கைகள்",
        nearbyCustomers: "உங்கள் சேவைகளைத் தேடும் அருகிலுள்ள வாடிக்கையாளர்கள்.",
        viewAll: "அனைத்தையும் காண்க →",
        futureFeatures: "எதிர்கால SahaSetu அம்சங்களுக்கான இடம்",
        blankSpace: "இந்த பகுதி தற்போது காலியாக வைக்கப்பட்டுள்ளது.",
        reviewRequests: "வாடிக்கையாளர் கோரிக்கைகளைப் பார்த்து பதிலளிக்கவும்.",
        manageServices: "நீங்கள் ஏற்றுக்கொண்ட வாடிக்கையாளர் சேவைகளை நிர்வகிக்கவும்.",
        myEarnings: "என் வருமானம்",
        trackIncome: "SahaSetu மூலம் உங்கள் வருமானத்தை கண்காணிக்கவும்.",
        today: "இன்று",
        thisWeek: "இந்த வாரம்",
        thisMonth: "இந்த மாதம்",
        totalEarnings: "மொத்த வருமானம்",
        updatedNow: "இப்போது புதுப்பிக்கப்பட்டது",
        completedJobs: "முடிக்கப்பட்ட வேலைகள்",
        averageJob: "ஒரு வேலை சராசரி",
        basedCompleted: "முடிக்கப்பட்ட வேலைகளின் அடிப்படையில்",
        manageInformation: "உங்கள் பணியாளர் தகவலை நிர்வகிக்கவும்.",
        workerId: "பணியாளர் ID:",
        fullName: "முழு பெயர்",
        phoneNumber: "தொலைபேசி எண்",
        primarySkill: "முக்கிய திறன்",
        workType: "வேலை வகை",
        cooperativeSociety: "கூட்டுறவு சங்கம்",
        kycStatus: "KYC நிலை",
        verified: "சரிபார்க்கப்பட்டது",
        preferredLanguage: "விருப்ப மொழி",
        saveLanguage: "மொழியை சேமிக்கவும்",
        notifications: "அறிவிப்புகள்",
        newJob: "புதிய வேலை கோரிக்கை",
        newJobMessage: "அருகிலுள்ள புதிய சேவை கோரிக்கை உங்களுக்கு வந்துள்ளது.",
        paymentReceived: "பணம் பெறப்பட்டது",
        paymentMessage: "உங்கள் சமீபத்திய சேவை பணம் பதிவு செய்யப்பட்டது.",
        customerVerification: "வாடிக்கையாளர் சரிபார்ப்பு",
        askCustomerOtp: "வாடிக்கையாளரிடம் 4 இலக்க OTP கேட்கவும்.",
        verifyOtp: "OTP சரிபார்க்கவும்",
        emergencyReport: "அவசரம் / அறிக்கை",
        tellWhatHappened: "என்ன நடந்தது என்பதை SahaSetu-க்கு தெரிவிக்கவும்.",
        submitReport: "அறிக்கையை சமர்ப்பிக்கவும்",
        handsFree: "உங்கள் ஹேண்ட்ஸ்-ஃப்ரீ பணியாளர் உதவியாளர்",
        trySaying: "இதைச் சொல்லிப் பாருங்கள்:",
        goodMorning: "காலை வணக்கம் 👋",
        goodAfternoon: "மதிய வணக்கம் 👋",
        goodEvening: "மாலை வணக்கம் 👋",
        overview: "இது உங்கள் SahaSetu வேலை விவரம்.",
        available: "நீங்கள் கிடைக்கிறீர்கள்",
        unavailable: "நீங்கள் கிடைக்கவில்லை"
    },

    ml: {
        dashboard: "ഡാഷ്ബോർഡ്",
        jobRequests: "ജോലി അഭ്യർത്ഥനകൾ",
        activeJobs: "സജീവ ജോലികൾ",
        earnings: "വരുമാനം",
        myProfile: "എന്റെ പ്രൊഫൈൽ",
        voiceAssistant: "വോയ്സ് അസിസ്റ്റന്റ്",
        switchAccount: "അക്കൗണ്ട് മാറ്റുക",
        availability: "ലഭ്യത",
        emergency: "അടിയന്തരം / SOS",
        newRequests: "പുതിയ അഭ്യർത്ഥനകൾ",
        todayEarnings: "ഇന്നത്തെ വരുമാനം",
        rating: "റേറ്റിംഗ്",
        newJobRequests: "പുതിയ ജോലി അഭ്യർത്ഥനകൾ",
        nearbyCustomers: "നിങ്ങളുടെ സേവനങ്ങൾ തേടുന്ന സമീപത്തെ ഉപഭോക്താക്കൾ.",
        viewAll: "എല്ലാം കാണുക →",
        futureFeatures: "ഭാവിയിലെ SahaSetu സവിശേഷതകൾക്കുള്ള സ്ഥലം",
        blankSpace: "ഈ സ്ഥലം ഇപ്പോൾ ശൂന്യമായി വച്ചിരിക്കുന്നു.",
        reviewRequests: "ഉപഭോക്തൃ അഭ്യർത്ഥനകൾ പരിശോധിച്ച് പ്രതികരിക്കുക.",
        manageServices: "നിങ്ങൾ സ്വീകരിച്ച ഉപഭോക്തൃ സേവനങ്ങൾ നിയന്ത്രിക്കുക.",
        myEarnings: "എന്റെ വരുമാനം",
        trackIncome: "SahaSetu വഴിയുള്ള നിങ്ങളുടെ വരുമാനം ട്രാക്ക് ചെയ്യുക.",
        today: "ഇന്ന്",
        thisWeek: "ഈ ആഴ്ച",
        thisMonth: "ഈ മാസം",
        totalEarnings: "മൊത്തം വരുമാനം",
        updatedNow: "ഇപ്പോൾ അപ്ഡേറ്റ് ചെയ്തു",
        completedJobs: "പൂർത്തിയാക്കിയ ജോലികൾ",
        averageJob: "ഒരു ജോലിയുടെ ശരാശരി",
        basedCompleted: "പൂർത്തിയാക്കിയ ജോലികളുടെ അടിസ്ഥാനത്തിൽ",
        manageInformation: "നിങ്ങളുടെ തൊഴിലാളി വിവരങ്ങൾ നിയന്ത്രിക്കുക.",
        workerId: "വർക്കർ ID:",
        fullName: "പൂർണ്ണ പേര്",
        phoneNumber: "ഫോൺ നമ്പർ",
        primarySkill: "പ്രധാന കഴിവ്",
        workType: "ജോലി തരം",
        cooperativeSociety: "സഹകരണ സംഘം",
        kycStatus: "KYC നില",
        verified: "പരിശോധിച്ചു",
        preferredLanguage: "ഇഷ്ടപ്പെട്ട ഭാഷ",
        saveLanguage: "ഭാഷ സംരക്ഷിക്കുക",
        notifications: "അറിയിപ്പുകൾ",
        newJob: "പുതിയ ജോലി അഭ്യർത്ഥന",
        newJobMessage: "നിങ്ങൾക്ക് സമീപത്തുള്ള പുതിയ സേവന അഭ്യർത്ഥന ലഭിച്ചു.",
        paymentReceived: "പേയ്മെന്റ് ലഭിച്ചു",
        paymentMessage: "നിങ്ങളുടെ സമീപകാല സേവന പേയ്മെന്റ് രേഖപ്പെടുത്തി.",
        customerVerification: "ഉപഭോക്തൃ പരിശോധന",
        askCustomerOtp: "ഉപഭോക്താവിനോട് 4 അക്ക OTP ചോദിക്കുക.",
        verifyOtp: "OTP പരിശോധിക്കുക",
        emergencyReport: "അടിയന്തരം / റിപ്പോർട്ട്",
        tellWhatHappened: "എന്താണ് സംഭവിച്ചതെന്ന് SahaSetu-നെ അറിയിക്കുക.",
        submitReport: "റിപ്പോർട്ട് സമർപ്പിക്കുക",
        handsFree: "നിങ്ങളുടെ ഹാൻഡ്സ്-ഫ്രീ തൊഴിലാളി അസിസ്റ്റന്റ്",
        trySaying: "ഇങ്ങനെ പറയാൻ ശ്രമിക്കുക:",
        goodMorning: "സുപ്രഭാതം 👋",
        goodAfternoon: "ശുഭ ഉച്ചതിരിഞ്ഞ് 👋",
        goodEvening: "ശുഭ സായാഹ്നം 👋",
        overview: "ഇതാണ് നിങ്ങളുടെ SahaSetu ജോലി വിശദാംശങ്ങൾ.",
        available: "നിങ്ങൾ ലഭ്യമാണ്",
        unavailable: "നിങ്ങൾ ലഭ്യമല്ല"
    }

};


/* =====================================================
   LANGUAGE VOICE CODES
===================================================== */

const voiceLanguages = {
    en: "en-IN",
    te: "te-IN",
    hi: "hi-IN",
    ta: "ta-IN",
    ml: "ml-IN"
};


/* =====================================================
   SAMPLE JOBS
===================================================== */

let jobs = [

    {
        id: 1,
        customer: "Priya Sharma",
        service: "Electrical Repair",
        location: "Banjara Hills",
        time: "10:30 AM",
        price: 450,
        description: "Switchboard is not working.",
        status: "requested"
    },

    {
        id: 2,
        customer: "Arjun Reddy",
        service: "Switchboard Repair",
        location: "Madhapur",
        time: "12:00 PM",
        price: 350,
        description: "Need switchboard repair.",
        status: "requested"
    },

    {
        id: 3,
        customer: "Meena Kumar",
        service: "Wiring Inspection",
        location: "Kondapur",
        time: "3:30 PM",
        price: 600,
        description: "House wiring needs inspection.",
        status: "requested"
    }

];


/* =====================================================
   STATE
===================================================== */

let selectedWorkType = "individual";
let loginPhoneNumber = "";
let currentUser = null;

let recognition = null;
let isListening = false;


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeApp();

});


/* =====================================================
   INITIALIZE
===================================================== */

function initializeApp() {

    setupAuthentication();
    setupNavigation();
    setupWorkType();
    setupAvailability();
    setupNotifications();
    setupEarnings();
    setupProfileLanguage();
    setupSOS();
    setupVoiceAssistant();
    setupSwitchAccount();

    checkExistingLogin();
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   LOGIN
========================================================= */

$('sendOtp').addEventListener('click',()=>{

  const phone = $('phone').value.trim();

  if(!/^\d{10}$/.test(phone)){

    return toast(
      'Please enter a valid 10-digit mobile number.'
    );

  }

  $('otpArea').classList.remove('hidden');

  toast('OTP sent! Demo OTP is 1234.');

});


$('verifyOtp').addEventListener('click',()=>{

  const phone = $('phone').value.trim();

  if($('otpInput').value !== '1234'){

    return toast('Incorrect OTP. Use 1234.');

  }

  let accounts = getAccounts();

  let user = accounts.find(
    account => account.phone === phone
  );

  if(!user){

    user = {
      id:Date.now(),
      name:'Customer',
      phone:phone,
      email:'',
      address:'',
      language:'English',
      aadhaarVerified:false,
      history:[],
      booking:null
    };

    accounts.push(user);
    saveAccounts(accounts);

  }

  currentUser = user;

  saveCurrentUser();

  openApp();

  toast(
    `Welcome ${currentUser.name}!`
  );

});


/* =========================================================
   REGISTRATION
========================================================= */

$('newAccount').addEventListener('click',()=>{

  $('loginForm').classList.add('hidden');

  $('registrationForm').classList.remove('hidden');

  $('loginTitle').textContent =
    'Create your SahaSetu account';

});


$('backLogin').addEventListener('click',()=>{

  $('registrationForm').classList.add('hidden');

  $('loginForm').classList.remove('hidden');

  $('loginTitle').innerHTML =
    'Trusted help,<br>right at your door.';

});


/* DEMO AADHAAR */

$('aadhaarVerify').addEventListener('click',()=>{

  $('aadhaarStatus').textContent =
    '✓ Demo identity verified';

  $('aadhaarStatus').classList.add('verified');

  $('aadhaarVerify').textContent =
    'Verified';

});


/* CREATE ACCOUNT */

$('registerBtn').addEventListener('click',()=>{

  const name = $('regName').value.trim();
  const phone = $('regPhone').value.trim();
  const email = $('regEmail').value.trim();
  const address = $('regAddress').value.trim();
  const language = $('regLanguage').value;

  if(!name){

    return toast('Please enter your name.');

  }

  if(!/^\d{10}$/.test(phone)){

    return toast(
      'Please enter a valid 10-digit phone number.'
    );

  }

  if(!email){

    return toast('Please enter your email.');

  }

  if(!address){

    return toast('Please enter your address.');

  }


  let accounts = getAccounts();

  if(accounts.some(account => account.phone === phone)){

    return toast(
      'An account with this phone number already exists.'
    );

  }


  const newUser = {

    id:Date.now(),

    name,

    phone,

    email,

    address,

    language,

    aadhaarVerified:
      $('aadhaarStatus').textContent.includes('verified'),

    history:[],

    booking:null

  };


  accounts.push(newUser);

  saveAccounts(accounts);

  currentUser = newUser;

  saveCurrentUser();

  openApp();

  toast(
    `Account created successfully. Welcome ${name}!`
  );

});


/* =========================================================
   APP OPEN
========================================================= */

function openApp(){

  $('loginScreen').classList.add('hidden');

  $('app').classList.remove('hidden');

  updateProfile();

  renderServices();

  renderHistory();

  if(currentUser && currentUser.booking){

    currentBooking = currentUser.booking;

    renderBooking();

  }
=======
/* =====================================================
   STORAGE
===================================================== */

function getUsers() {

    try {

        return JSON.parse(
            localStorage.getItem(USERS_KEY)
        ) || [];

    } catch (error) {

        return [];

    }
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   PROFILE
========================================================= */

function updateProfile(){

  if(!currentUser) return;

  const firstName =
    currentUser.name.split(' ')[0];

  $('pageTitle').textContent =
    `Hello, ${firstName} 👋`;

  $('profileAvatar').textContent =
    firstName.charAt(0).toUpperCase();
=======
function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   LOGOUT
========================================================= */

$('logout').addEventListener('click',()=>{

  currentBooking = null;

  currentUser = null;

  localStorage.removeItem('sahCurrentUser');

  $('app').classList.add('hidden');

  $('loginScreen').classList.remove('hidden');

  $('loginForm').classList.remove('hidden');

  $('registrationForm').classList.add('hidden');

  $('otpArea').classList.add('hidden');

  $('phone').value = '';

  $('otpInput').value = '';

  toast('You have been logged out.');

});


/* =========================================================
   SWITCH ACCOUNT
========================================================= */

$('switchAccount').addEventListener('click',()=>{

  const accounts = getAccounts();

  if(accounts.length < 2){

    return toast(
      'Create another account first to switch accounts.'
    );

  }

  const buttons = accounts.map(account => `

    <button
      class="secondary full switch-user"
      data-phone="${account.phone}"
    >
      ${escapeHtml(account.name)}
      <br>
      <small>+91 ${account.phone}</small>
    </button>

  `).join('');

  modal(`

    <h2>Switch account</h2>

    <p>
      Select the customer account you want to use.
    </p>

    ${buttons}

  `);

});


document.addEventListener('click',e=>{

  if(!e.target.classList.contains('switch-user'))
    return;

  const phone =
    e.target.dataset.phone;

  const accounts = getAccounts();

  const user =
    accounts.find(account =>
      account.phone === phone
    );

  if(!user) return;

  currentUser = user;

  saveCurrentUser();

  currentBooking =
    currentUser.booking || null;

  closeModal();

  updateProfile();

  renderHistory();

  if(currentBooking){

    renderBooking();

  }else{

    resetActiveBooking();

  }

  toast(
    `Switched to ${currentUser.name}`
  );

});


/* =========================================================
   NAVIGATION
========================================================= */

function showPage(page){

  document.querySelectorAll('.page')
    .forEach(p =>
      p.classList.toggle(
        'active',
        p.id === page
      )
    );

  document.querySelectorAll('.nav-link')
    .forEach(p =>
      p.classList.toggle(
        'active',
        p.dataset.page === page
      )
    );


  const titles = {

    home:
      `Hello, ${
        currentUser
        ? currentUser.name.split(' ')[0]
        : 'Customer'
      } 👋`,

    book:'Book a service',

    bookings:'My bookings',

    history:'History & invoices',

    support:'Help & support'

  };


  $('pageTitle').textContent =
    titles[page];

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

}


document.querySelectorAll('.nav-link')
.forEach(link=>{

  link.addEventListener(
    'click',
    ()=>showPage(link.dataset.page)
  );

});


document.querySelectorAll('.go-book')
.forEach(button=>{

  button.addEventListener(
    'click',
    ()=>showPage('book')
  );

});


/* =========================================================
   SERVICES
========================================================= */

function renderServices(){

  $('serviceGrid').innerHTML =
    services.map(
      ([icon,name,detail]) => `

        <button
          class="service-card"
          data-service="${name}"
        >

          <span class="icon">${icon}</span>

          <strong>${name}</strong>

          <small>${detail}</small>

        </button>

      `
    ).join('');


  $('bookingServices').innerHTML =
    services.map(
      ([icon,name]) => `

        <button
          type="button"
          data-service="${name}"
        >
          ${icon} ${name}
        </button>

      `
    ).join('');


  document.querySelectorAll('[data-service]')
  .forEach(button=>{

    button.addEventListener(
      'click',
      ()=>{
        selectService(
          button.dataset.service,
          true
        );
      }
    );

  });
=======
function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(CURRENT_USER_KEY)
        );

    } catch (error) {

        return null;

    }
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
function selectService(name,moveToBook=true){

  selectedService = name;

  document.querySelectorAll('[data-service]')
  .forEach(el=>{

    el.classList.toggle(
      'selected',
      el.dataset.service === name
    );

  });


  renderWorkers();


  if(moveToBook)
    showPage('book');

}


/* =========================================================
   WORKERS
========================================================= */

function getWorkersForService(service){

  const matches =
    workers.filter(worker =>
      worker.skill === service
    );

  if(matches.length)
    return matches;

  return workers.slice(0,3);
=======
function saveCurrentUser(user) {

    currentUser = user;

    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );

}


/* =====================================================
   DEFAULT EARNINGS
===================================================== */

function ensureUserData(user) {

    if (!user.earnings) {

        user.earnings = {
            today: 850,
            week: 3250,
            month: 12700
        };

    }

    if (!user.completedJobs) {

        user.completedJobs = {
            today: 2,
            week: 7,
            month: 12
        };

    }

    if (!user.rating) {

        user.rating = 4.8;

    }

    if (!user.language) {

        user.language = "en";

    }

    if (!user.workerId) {

        user.workerId =
            "SAH-W-" +
            Math.floor(
                10000 + Math.random() * 89999
            );

    }

    return user;
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
function renderWorkers(){

  if(!selectedService){

    $('workerList').innerHTML = `

      <p class="muted">
        Select a service to see nearby workers.
      </p>

    `;

    return;

  }


  const list =
    getWorkersForService(selectedService);


  $('workerList').innerHTML =
    list.map(worker=>`

      <div
        class="worker-option ${
          selectedWorker &&
          selectedWorker.id === worker.id
          ? 'selected'
          : ''
        }"
        data-worker="${worker.id}"
      >

        <div class="worker-info">

          <div class="worker-photo">
            ${worker.photo}
          </div>

          <div>

            <strong>
              ${escapeHtml(worker.name)}
              <span class="green">
                ✓ Verified
              </span>
            </strong>

            <p>
              ${escapeHtml(worker.skill)}
              · ${worker.experience} years experience
            </p>

            <p>
              <span class="rating">
                ★ ${worker.rating}
              </span>
              (${worker.reviews} reviews)
              · ${escapeHtml(worker.distance)}
            </p>

            <p>
              ${
                worker.type === 'Cooperative'
                ? '🏘 Cooperative worker'
                : '👤 Individual worker'
              }

              ·

              ${
                worker.trusted
                ? '<span class="green">✓ Trusted</span>'
                : 'Not yet trusted'
              }
            </p>

            <p>
              Estimated service:
              ${escapeHtml(worker.price)}
            </p>

          </div>

        </div>

        <button
          class="secondary select-worker"
          data-worker="${worker.id}"
        >
          ${
            selectedWorker &&
            selectedWorker.id === worker.id
            ? 'Selected ✓'
            : 'Select worker'
          }
        </button>

      </div>

    `).join('');
=======
/* =====================================================
   AUTHENTICATION
===================================================== */

function setupAuthentication() {

    const showRegister =
        document.getElementById("showRegister");

    const showLogin =
        document.getElementById("showLogin");

    const sendLoginOtp =
        document.getElementById("sendLoginOtp");

    const verifyLoginOtp =
        document.getElementById("verifyLoginOtp");

    const backToLogin =
        document.getElementById("backToLogin");

    const registerBtn =
        document.getElementById("registerBtn");


    showRegister.addEventListener(
        "click",
        showRegistration
    );


    showLogin.addEventListener(
        "click",
        showLoginForm
    );


    sendLoginOtp.addEventListener(
        "click",
        sendOTP
    );


    verifyLoginOtp.addEventListener(
        "click",
        verifyOTPLogin
    );


    backToLogin.addEventListener(
        "click",
        showLoginForm
    );


    registerBtn.addEventListener(
        "click",
        registerUser
    );
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   WORKER DETAILS
========================================================= */

function showWorkerDetails(worker){

  modal(`

    <h2>
      ${escapeHtml(worker.name)}
    </h2>

    <div
      class="worker"
      style="margin-top:15px"
    >

      <div class="worker-photo">
        ${worker.photo}
      </div>

      <div>

        <strong>
          ${escapeHtml(worker.name)}

          <span class="green">
            ✓ Verified
          </span>
        </strong>

        <p>
          ★ ${worker.rating}
          (${worker.reviews} reviews)
        </p>

      </div>

    </div>


    <div class="summary">

      <p>
        <strong>Service:</strong>
        ${escapeHtml(worker.skill)}
      </p>

      <p>
        <strong>Worker type:</strong>
        ${escapeHtml(worker.type)}
      </p>

      ${
        worker.type === 'Cooperative'
        && worker.cooperativeName
        ? `
          <p>
            <strong>Cooperative:</strong>
            ${escapeHtml(worker.cooperativeName)}
          </p>
        `
        : ''
      }

      <p>
        <strong>Trust status:</strong>

        <span
          class="${worker.trusted ? 'green' : ''}"
        >
          ${
            worker.trusted
            ? '✓ Trusted worker'
            : 'Not yet trusted'
          }
        </span>

      </p>

      <p>
        <strong>Experience:</strong>
        ${worker.experience} years
      </p>

      <p>
        <strong>Distance:</strong>
        ${escapeHtml(worker.distance)}
      </p>

      <p>
        <strong>Estimated arrival:</strong>
        ${escapeHtml(worker.arrival)}
      </p>

      <p>
        <strong>Estimated service:</strong>
        ${escapeHtml(worker.price)}
      </p>

    </div>


    <button
      class="primary full"
      id="selectWorkerFromDetails"
      data-worker="${worker.id}"
    >
      Select worker
    </button>

  `);
=======
function showRegistration() {

    document
        .getElementById("loginStep")
        .classList.add("hidden");

    document
        .getElementById("loginOtpStep")
        .classList.add("hidden");

    document
        .getElementById("registerStep")
        .classList.remove("hidden");
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   WORKER SELECTION
========================================================= */

document.addEventListener('click',e=>{

  const selectBtn =
    e.target.closest('.select-worker');

  if(selectBtn){

    const id =
      Number(selectBtn.dataset.worker);

    selectedWorker =
      workers.find(worker =>
        worker.id === id
      );

    renderWorkers();

    toast(
      `${selectedWorker.name} selected.`
    );

    return;

  }


  const workerCard =
    e.target.closest('.worker-option');

  if(workerCard){

    const id =
      Number(workerCard.dataset.worker);

    const worker =
      workers.find(w =>
        w.id === id
      );

    if(worker)
      showWorkerDetails(worker);

  }

});


document.addEventListener('click',e=>{

  if(e.target.id !== 'selectWorkerFromDetails')
    return;

  const id =
    Number(e.target.dataset.worker);

  selectedWorker =
    workers.find(worker =>
      worker.id === id
    );

  closeModal();

  renderWorkers();

  toast(
    `${selectedWorker.name} selected.`
  );

});


/* =========================================================
   SEARCH
========================================================= */

$('searchProblem').addEventListener('click',()=>{

  const problem =
    $('problemSearch').value
      .trim()
      .toLowerCase();


  if(!problem){

    return toast(
      'Please describe your problem.'
    );

  }


  let service = '';


  if(
    problem.includes('fan') ||
    problem.includes('light') ||
    problem.includes('wire') ||
    problem.includes('switch') ||
    problem.includes('electric')
  ){

    service = 'Electrical';

  }

  else if(
    problem.includes('tap') ||
    problem.includes('pipe') ||
    problem.includes('leak') ||
    problem.includes('water')
  ){

    service = 'Plumbing';

  }

  else if(
    problem.includes('ac') ||
    problem.includes('fridge') ||
    problem.includes('washing machine')
  ){

    service = 'Appliance repair';

  }

  else if(
    problem.includes('clean') ||
    problem.includes('dust')
  ){

    service = 'Home cleaning';

  }

  else if(
    problem.includes('wood') ||
    problem.includes('door') ||
    problem.includes('furniture')
  ){

    service = 'Carpentry';

  }

  else if(
    problem.includes('paint') ||
    problem.includes('wall')
  ){

    service = 'Painting';

  }


  if(service){

    selectService(service,true);

    $('need').value =
      $('problemSearch').value;

    toast(
      `We identified this as ${service}.`
    );

  }else{

    showPage('book');

    $('need').value =
      $('problemSearch').value;

    toast(
      'Please select the most suitable service category.'
    );

  }

});


/* =========================================================
   VOICE LANGUAGE
========================================================= */

function getSpeechLanguage(selectId){

  const value =
    $(selectId)?.value || 'English';

  const languages = {

    English:'en-IN',

    Hindi:'hi-IN',

    Telugu:'te-IN',

    Tamil:'ta-IN',

    'हिंदी':'hi-IN',

    'తెలుగు':'te-IN'

  };

  return languages[value] || 'en-IN';
=======
function showLoginForm() {

    document
        .getElementById("registerStep")
        .classList.add("hidden");

    document
        .getElementById("loginOtpStep")
        .classList.add("hidden");

    document
        .getElementById("loginStep")
        .classList.remove("hidden");
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   VOICE INPUT
========================================================= */

function startVoiceInput(
  targetId,
  languageSelectId='bookingLanguage'
){

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


  if(!SpeechRecognition){

    return toast(
      'Voice input is not supported in this browser.'
    );

  }


  const recognition =
    new SpeechRecognition();


  recognition.lang =
    getSpeechLanguage(languageSelectId);

  recognition.interimResults =
    false;

  recognition.maxAlternatives =
    1;


  recognition.start();

  toast('Listening...');


  recognition.onresult =
    event=>{

      const text =
        event.results[0][0].transcript;

      $(targetId).value =
        text;

      toast(
        'Voice input captured.'
      );

    };


  recognition.onerror =
    ()=>{

      toast(
        'Voice input could not be completed.'
      );

    };

}


/* EXISTING VOICE SEARCH */

$('voiceSearch').addEventListener('click',()=>{

  startVoiceInput(
    'problemSearch',
    'language'
  );

});


/* VOICE INPUT FOR JOB DESCRIPTION */

$('voiceNeed').addEventListener('click',()=>{

  startVoiceInput(
    'need',
    'bookingLanguage'
  );

});


/* =========================================================
   BOOKING
========================================================= */

$('verifyLocation').addEventListener(
  'click',
  ()=>{
    toast(
      'Location verified for this demo.'
    );
  }
);


$('bookingForm').addEventListener(
  'submit',
  event=>{

    event.preventDefault();


    if(!selectedService){

      return toast(
        'Please select a service category first.'
      );
=======
/* =====================================================
   LOGIN OTP
===================================================== */

function sendOTP() {

    const phone =
        document
            .getElementById("loginPhone")
            .value
            .trim();

    if (!isValidPhone(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

    }


<<<<<<< HEAD
    if(!selectedWorker){

      return toast(
        'Please select a nearby worker.'
      );
=======
    const users = getUsers();

    const existingUser =
        users.find(
            user => user.phone === phone
        );


    if (!existingUser) {

        alert(
            "No worker account found with this number. Please create an account first."
        );

        return;
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

    }


<<<<<<< HEAD
    const booking = {

      id:
        'SAH' +
        Math.floor(
          1000 + Math.random()*9000
        ),

      service:selectedService,

      need:$('need').value,

      workerId:selectedWorker.id,

      worker:selectedWorker.name,

      address:
        `${$('house').value}, ${
          $('street').value
        }, ${
          $('city').value
        } – ${
          $('pincode').value
        }`,

      date:$('date').value,

      time:$('time').value,

      urgent:$('urgent').checked,

      payment:$('payment').value,

      status:'Requested',

      extraWork:null,

      extraApproved:false,

      paymentCompleted:false,

      rating:0,

      review:'',

      createdAt:new Date().toLocaleString()
=======
    loginPhoneNumber = phone;


    document
        .getElementById("loginPhonePreview")
        .textContent =
        "+91 " + phone;


    document
        .getElementById("loginStep")
        .classList.add("hidden");

    document
        .getElementById("loginOtpStep")
        .classList.remove("hidden");


    document
        .getElementById("loginOtp")
        .focus();


    alert(
        "Prototype OTP sent. Use 1234."
    );

}


function verifyOTPLogin() {

    const otp =
        document
            .getElementById("loginOtp")
            .value
            .trim();


    if (otp !== DEMO_OTP) {

        alert("Incorrect OTP. Use 1234.");

        return;

    }


    const users = getUsers();

    let user =
        users.find(
            item =>
                item.phone === loginPhoneNumber
        );


    if (!user) {

        alert("Account not found.");

        return;

    }


    user = ensureUserData(user);

    saveCurrentUser(user);

    saveUsers(users);

    sessionStorage.setItem(
        LOGIN_KEY,
        "true"
    );


    openApplication();

}


/* =====================================================
   REGISTRATION
===================================================== */

function registerUser() {

    const name =
        document
            .getElementById("regName")
            .value
            .trim();

    const phone =
        document
            .getElementById("regPhone")
            .value
            .trim();

    const skill =
        document
            .getElementById("regSkill")
            .value;

    const language =
        document
            .getElementById("regLanguage")
            .value;

    const coopName =
        document
            .getElementById("coopName")
            .value
            .trim();

    const coopRole =
        document
            .getElementById("coopRole")
            .value;


    if (!name) {

        alert("Please enter your full name.");

        return;

    }


    if (!isValidPhone(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    if (!skill) {

        alert("Please select your primary skill.");

        return;

    }


    if (
        selectedWorkType === "cooperative" &&
        (!coopName || !coopRole)
    ) {

        alert(
            "Please enter your cooperative society name and role."
        );

        return;

    }


    const users = getUsers();


    if (
        users.some(
            user => user.phone === phone
        )
    ) {

        alert(
            "An account with this mobile number already exists."
        );

        return;

    }


    const newUser = {

        id:
            Date.now(),

        workerId:
            "SAH-W-" +
            Math.floor(
                10000 + Math.random() * 89999
            ),

        name:
            name,

        phone:
            phone,

        skill:
            skill,

        workType:
            selectedWorkType,

        cooperativeName:
            selectedWorkType === "cooperative"
                ? coopName
                : "",

        cooperativeRole:
            selectedWorkType === "cooperative"
                ? coopRole
                : "",

        language:
            language || "en",

        rating:
            4.8,

        experience:
            0,

        earnings: {

            today: 850,

            week: 3250,

            month: 12700

        },

        completedJobs: {

            today: 2,

            week: 7,

            month: 12

        },

        createdAt:
            new Date().toISOString()
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

    };


<<<<<<< HEAD
    modal(`

      <h2>Confirm your booking</h2>

      <p>
        Please check your request before
        sending it to the cooperative worker.
      </p>

      <div class="summary">

        <p>
          <strong>${booking.service}</strong>
          ${
            booking.urgent
            ? ' <span class="status">Urgent</span>'
            : ''
          }
        </p>

        <p>
          ${escapeHtml(booking.need)}
        </p>

        <p>
          👷 ${escapeHtml(selectedWorker.name)}
          · ★ ${selectedWorker.rating}
        </p>

        <p>
          📍 ${escapeHtml(booking.address)}
        </p>

        <p>
          🕒 ${booking.date}
          · ${booking.time}
        </p>

        <p>
          💳 ${escapeHtml(booking.payment)}
        </p>

      </div>

      <button
        id="confirmBooking"
        class="primary full"
      >
        Confirm booking
      </button>

    `);


    $('confirmBooking')
    .addEventListener(
      'click',
      ()=>{

        currentBooking = booking;

        saveBooking();

        closeModal();

        modal(`

          <h2>Booking OTP verification</h2>

          <p>
            Your booking request has been created.
            Demo booking OTP:
            <strong>2468</strong>
          </p>

          <input
            id="bookingOtp"
            maxlength="4"
            placeholder="Enter booking OTP"
          >

          <button
            id="verifyBookingOtp"
            class="primary full"
          >
            Verify booking
          </button>

        `);


        $('verifyBookingOtp')
        .addEventListener(
          'click',
          ()=>{

            if(
              $('bookingOtp').value !== '2468'
            ){

              return toast(
                'Incorrect OTP. Use 2468.'
              );
=======
    users.push(newUser);

    saveUsers(users);

    saveCurrentUser(newUser);


    alert(
        "Worker account created successfully!"
    );


    loginPhoneNumber = phone;


    sessionStorage.setItem(
        LOGIN_KEY,
        "true"
    );


    openApplication();

}


/* =====================================================
   PHONE VALIDATION
===================================================== */

function isValidPhone(phone) {

    return /^[6-9]\d{9}$/.test(phone);

}


/* =====================================================
   CHECK EXISTING SESSION
===================================================== */

function checkExistingLogin() {

    const loggedIn =
        sessionStorage.getItem(LOGIN_KEY);

    const user =
        getCurrentUser();


    if (loggedIn === "true" && user) {

        currentUser =
            ensureUserData(user);

        openApplication();

    } else {

        document
            .getElementById("authScreen")
            .style.display = "flex";

        document
            .getElementById("app")
            .style.display = "none";

    }

}


/* =====================================================
   OPEN APPLICATION
===================================================== */

function openApplication() {

    document
        .getElementById("authScreen")
        .style.display = "none";

    document
        .getElementById("app")
        .style.display = "flex";


    currentUser =
        ensureUserData(
            getCurrentUser()
        );


    saveCurrentUser(currentUser);


    updateWorkerUI();

    applyLanguage(
        currentUser.language || "en"
    );

    renderAllJobs();

    renderActiveJobs();

    updateEarnings();

}


/* =====================================================
   WORKER UI
===================================================== */

function updateWorkerUI() {

    if (!currentUser) {
        return;
    }


    const initials =
        getInitials(currentUser.name);


    document
        .getElementById("headerAvatar")
        .textContent =
        initials;


    document
        .getElementById("profileAvatar")
        .textContent =
        initials;


    document
        .getElementById("headerName")
        .textContent =
        currentUser.name;


    document
        .getElementById("headerSkill")
        .textContent =
        currentUser.skill;


    document
        .getElementById("profileName")
        .textContent =
        currentUser.name;


    document
        .getElementById("profileSkill")
        .textContent =
        currentUser.skill;


    document
        .getElementById("workerId")
        .textContent =
        currentUser.workerId;


    document
        .getElementById("detailName")
        .textContent =
        currentUser.name;


    document
        .getElementById("detailPhone")
        .textContent =
        "+91 " +
        currentUser.phone;


    document
        .getElementById("detailSkill")
        .textContent =
        currentUser.skill;


    document
        .getElementById("detailWorkType")
        .textContent =
        currentUser.workType === "cooperative"
            ? "Cooperative"
            : "Individual";


    document
        .getElementById("detailCoop")
        .textContent =
        currentUser.workType === "cooperative"
            ? currentUser.cooperativeName
            : "Not applicable";


    document
        .getElementById("profileLanguage")
        .value =
        currentUser.language || "en";


    document
        .getElementById("dashboardRating")
        .textContent =
        currentUser.rating || 4.8;


    updateRequestCounts();

}


/* =====================================================
   INITIALS
===================================================== */

function getInitials(name) {

    if (!name) {
        return "W";
    }


    return name
        .split(" ")
        .slice(0, 2)
        .map(
            word =>
                word.charAt(0).toUpperCase()
        )
        .join("");

}


/* =====================================================
   WORK TYPE
===================================================== */

function setupWorkType() {

    const buttons =
        document.querySelectorAll(
            ".work-choice-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                this.classList.add("active");


                selectedWorkType =
                    this.dataset.workType;


                const cooperativeFields =
                    document.getElementById(
                        "cooperativeFields"
                    );


                if (
                    selectedWorkType ===
                    "cooperative"
                ) {

                    cooperativeFields
                        .classList
                        .remove("hidden");

                } else {

                    cooperativeFields
                        .classList
                        .add("hidden");

                }

            }
        );

    });

}


/* =====================================================
   NAVIGATION
===================================================== */

function setupNavigation() {

    const navItems =
        document.querySelectorAll(
            ".nav-item[data-page]"
        );


    navItems.forEach(item => {

        item.addEventListener(
            "click",
            function () {

                goToPage(
                    this.dataset.page
                );

            }
        );

    });


    document
        .querySelectorAll(
            "[data-page]:not(.nav-item)"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    goToPage(
                        this.dataset.page
                    );

                }
            );

        });

}


function goToPage(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });


    const page =
        document.getElementById(pageName);


    if (page) {

        page.classList.add(
            "active-page"
        );

    }


    document
        .querySelectorAll(
            ".nav-item[data-page]"
        )
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === pageName
            );

        });


    updatePageHeader(pageName);

}


/* =====================================================
   PAGE HEADER
===================================================== */

function updatePageHeader(pageName) {

    const title =
        document.getElementById(
            "pageTitle"
        );

    const subtitle =
        document.getElementById(
            "pageSubtitle"
        );


    const lang =
        currentUser?.language || "en";


    const t =
        translations[lang];


    if (pageName === "dashboard") {

        title.textContent =
            getGreeting(lang);

        subtitle.textContent =
            t.overview;

    }


    else if (pageName === "requests") {

        title.textContent =
            t.jobRequests;

        subtitle.textContent =
            t.reviewRequests;

    }


    else if (pageName === "active") {

        title.textContent =
            t.activeJobs;

        subtitle.textContent =
            t.manageServices;

    }


    else if (pageName === "earnings") {

        title.textContent =
            t.myEarnings;

        subtitle.textContent =
            t.trackIncome;

    }


    else if (pageName === "profile") {

        title.textContent =
            t.myProfile;

        subtitle.textContent =
            t.manageInformation;

    }

}


/* =====================================================
   GREETING
===================================================== */

function getGreeting(lang) {

    const hour =
        new Date().getHours();


    const t =
        translations[lang];


    if (hour < 12) {

        return t.goodMorning;

    }


    if (hour < 17) {

        return t.goodAfternoon;

    }


    return t.goodEvening;

}


/* =====================================================
   LANGUAGE
===================================================== */

function applyLanguage(language) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    document.documentElement.lang =
        language;


    const dictionary =
        translations[language];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                dictionary[key] !== undefined
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    updatePageHeader(
        getCurrentPage()
    );


    updateAvailabilityText();

    updateEarnings();


    if (
        recognition
    ) {

        recognition.lang =
            voiceLanguages[language];

    }


    const languageSelect =
        document.getElementById(
            "profileLanguage"
        );


    if (languageSelect) {

        languageSelect.value =
            language;

    }

}


function getCurrentPage() {

    const active =
        document.querySelector(
            ".page.active-page"
        );


    return active
        ? active.id
        : "dashboard";

}


/* =====================================================
   PROFILE LANGUAGE CHANGE
===================================================== */

function setupProfileLanguage() {

    const saveButton =
        document.getElementById(
            "saveLanguageBtn"
        );


    saveButton.addEventListener(
        "click",
        function () {

            if (!currentUser) {
                return;
            }


            const language =
                document.getElementById(
                    "profileLanguage"
                ).value;


            currentUser.language =
                language;


            saveCurrentUser(
                currentUser
            );


            const users =
                getUsers();


            const index =
                users.findIndex(
                    user =>
                        user.id ===
                        currentUser.id
                );


            if (index !== -1) {

                users[index] =
                    currentUser;

                saveUsers(users);
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

            }


<<<<<<< HEAD
            currentBooking.status =
              'Accepted';

            saveBooking();

            closeModal();

            renderBooking();

            showPage('bookings');

            toast(
              'Booking verified successfully!'
            );

          }
        );

      }
    );

  }
);


/* =========================================================
   SAVE BOOKING
========================================================= */

function saveBooking(){

  if(!currentUser) return;

  currentUser.booking =
    currentBooking;

  const accounts =
    getAccounts();

  const index =
    accounts.findIndex(
      account =>
        account.id === currentUser.id
    );

  if(index !== -1){

    accounts[index] =
      currentUser;

    saveAccounts(accounts);

  }

  saveCurrentUser();

}


/* =========================================================
   ACTIVE BOOKING
========================================================= */

function renderBooking(){

  if(!currentBooking){

    resetActiveBooking();

    return;

  }


  const worker =
    workers.find(
      w => w.id === currentBooking.workerId
    ) || selectedWorker || workers[0];


  let progress = {

    Requested:
      currentBooking.status !== 'Requested',

    Accepted:
      [
        'Accepted',
        'On the way',
        'Arrived',
        'In service',
        'Completed',
        'Awaiting payment'
      ].includes(
        currentBooking.status
      ),

    'On the way':
      [
        'On the way',
        'Arrived',
        'In service',
        'Completed',
        'Awaiting payment'
      ].includes(
        currentBooking.status
      ),

    Completed:
      currentBooking.status === 'Completed'

  };


  $('activeBooking').outerHTML = `

    <div
      id="activeBooking"
      class="active-card"
    >

      <div
        style="
          display:flex;
          justify-content:space-between;
          gap:12px;
        "
      >

        <div>

          <p
            class="eyebrow"
            style="margin-top:0"
          >
            BOOKING #${currentBooking.id}
          </p>

          <h3 style="margin:0">
            ${escapeHtml(currentBooking.service)}
          </h3>

          <p class="muted">
            ${escapeHtml(currentBooking.need)}
          </p>

        </div>

        <span class="status">
          ${escapeHtml(currentBooking.status)}
        </span>

      </div>


      <div class="progress">

        <span class="${
          progress.Requested
          ? 'done'
          : ''
        }">
          Requested
        </span>

        <span class="${
          progress.Accepted
          ? 'done'
          : ''
        }">
          Accepted
        </span>

        <span class="${
          progress['On the way']
          ? 'done'
          : ''
        }">
          On the way
        </span>

        <span class="${
          progress.Completed
          ? 'done'
          : ''
        }">
          Completed
        </span>

      </div>


      <div class="worker">

        <div class="worker-photo">
          ${worker.photo}
        </div>

        <div>

          <strong>
            ${escapeHtml(worker.name)}

            <span class="green">
              ✓ Verified
            </span>
          </strong>

          <p>
            ★ ${worker.rating}
            (${worker.reviews} reviews)
            · ${worker.experience} years experience
          </p>

          <p>
            📍 ${escapeHtml(worker.distance)} away
          </p>

          <p>
            ${
              worker.type === 'Cooperative'
              ? '🏘 ' + escapeHtml(worker.cooperativeName)
              : '👤 Individual worker'
            }
          </p>

          <p class="green">
            ${
              worker.trusted
              ? '✓ Trusted worker'
              : 'Not yet trusted'
            }
          </p>

          <p>
            Visit charge ₹99
            · Estimated service ${escapeHtml(worker.price)}
          </p>

          <p>
            <strong>
              Estimated arrival:
              ${escapeHtml(worker.arrival)}
            </strong>
          </p>

        </div>

      </div>


      ${
        currentBooking.status === 'On the way'
        || currentBooking.status === 'Accepted'
        ? `

        <div class="summary">

          <strong>📍 Worker tracking</strong>

          <p>
            ${escapeHtml(worker.name)} is travelling
            towards your location.
          </p>

          <p>
            Current demo status:
            <strong>${escapeHtml(currentBooking.status)}</strong>
          </p>

          <button
            class="secondary"
            id="simulateArrival"
          >
            Simulate worker arrival
          </button>

        </div>

        `
        : ''
      }


      ${
        currentBooking.extraWork
        ? `

        <div class="extra-work">

          <h4>
            ➕ Additional work requested
          </h4>

          <p>
            <strong>
              ${escapeHtml(
                currentBooking.extraWork.description
              )}
            </strong>
          </p>

          <p>
            Additional estimated cost:
            <strong>
              ₹${currentBooking.extraWork.cost}
            </strong>
          </p>

          ${
            currentBooking.extraApproved
            ? `

              <p class="green">
                ✓ Approved by customer
              </p>

            `
            : `

              <p>
                Please approve this additional
                work before the worker starts it.
              </p>

              <div class="extra-buttons">

                <button
                  class="primary"
                  id="approveExtra"
                >
                  Approve
                </button>

                <button
                  class="secondary danger-outline"
                  id="rejectExtra"
                >
                  Reject
                </button>

              </div>

            `
          }

        </div>

        `
        : ''
      }


      ${
        currentBooking.status === 'In service'
        && !currentBooking.extraWork
        ? `

          <div class="extra-work">

            <h4>
              Demo worker inspection
            </h4>

            <p>
              The worker inspected the problem.
              An additional issue was found.
            </p>

            <button
              class="secondary"
              id="showExtraWork"
            >
              View additional work
            </button>

          </div>

        `
        : ''
      }


      ${
        currentBooking.status === 'Awaiting payment'
        ? `

          <div class="payment-box">

            <h3>
              💳 Payment required
            </h3>

            <p>
              Final service amount:
              <strong>
                ₹${calculateFinalAmount()}
              </strong>
            </p>

            <button
              class="primary"
              id="payNow"
            >
              Pay now
            </button>

          </div>

        `
        : ''
      }


      ${
        currentBooking.status === 'Completed'
        && !currentBooking.rating
        ? `

          <div class="summary">

            <h3>
              ⭐ Rate your experience
            </h3>

            <p>
              Your feedback helps maintain
              service quality.
            </p>

            <button
              class="primary"
              id="rateWorker"
            >
              Give rating & review
            </button>

          </div>

        `
        : ''
      }


      <p
        style="
          font-size:12px;
          color:var(--muted)
        "
      >
        🔒 Your full address and contact
        details are shared only with your
        assigned worker.
      </p>


      <div class="booking-actions">

        ${
          currentBooking.status === 'Accepted'
          ? `

            <button
              class="primary"
              id="startTravel"
            >
              Worker is on the way
            </button>

          `
          : ''
        }


        ${
          [
            'Accepted',
            'On the way'
          ].includes(
            currentBooking.status
          )
          ? `

            <button
              class="secondary"
              id="arrivalOtp"
            >
              Worker arrived / start OTP
            </button>

          `
          : ''
        }


        ${
          currentBooking.status !== 'Completed'
          && currentBooking.status !== 'Awaiting payment'
          ? `

            <button
              class="secondary"
              id="privateChat"
            >
              Private chat
            </button>

            <button
              class="secondary danger-outline"
              id="cancelBooking"
            >
              Cancel / reschedule
            </button>

          `
          : ''
        }

      </div>

    </div>

  `;


  attachBookingActions();

}


/* =========================================================
   BOOKING ACTIONS
========================================================= */

function attachBookingActions(){

  const startTravel =
    $('startTravel');

  if(startTravel){

    startTravel.onclick = ()=>{

      currentBooking.status =
        'On the way';

      saveBooking();

      renderBooking();

      toast(
        'Worker is now on the way.'
      );

    };

  }


  const simulateArrival =
    $('simulateArrival');

  if(simulateArrival){

    simulateArrival.onclick = ()=>{

      currentBooking.status =
        'Arrived';

      saveBooking();

      renderBooking();

      toast(
        'Worker has arrived.'
      );

    };

  }


  const arrivalOtp =
    $('arrivalOtp');

  if(arrivalOtp){

    arrivalOtp.onclick = ()=>{

      modal(`

        <h2>Verify worker arrival</h2>

        <p>
          Ask the worker for their
          job-start OTP.
        </p>

        <p>
          Demo OTP:
          <strong>5678</strong>
        </p>

        <input
          id="startOtp"
          maxlength="4"
          placeholder="Enter OTP"
        >

        <button
          id="startJob"
          class="primary full"
        >
          Start service
        </button>

      `);

    };

  }


  const privateChat =
    $('privateChat');

  if(privateChat){

    privateChat.onclick = ()=>{

      modal(`

        <h2>Private chat</h2>

        <p>
          Your personal mobile number
          stays hidden.
        </p>

        <div class="summary">

          <p>
            <strong>
              ${escapeHtml(currentBooking.worker)}:
            </strong>
            I am reaching your location.
          </p>

        </div>

        <input
          id="chatMessage"
          placeholder="Type a message"
          style="
            width:100%;
            padding:12px;
            border:1px solid #e7e1ef;
            border-radius:8px
          "
        >

        <button
          id="sendChat"
          class="primary full"
        >
          Send
        </button>

      `);

    };

  }


  const cancelBooking =
    $('cancelBooking');

  if(cancelBooking){

    cancelBooking.onclick = ()=>{

      modal(`

        <h2>
          Cancel or reschedule?
        </h2>

        <p>
          Please choose an option.
        </p>

        <button
          class="secondary full"
          id="reschedule"
        >
          Reschedule
        </button>

        <button
          class="secondary danger-outline full"
          id="cancelNow"
        >
          Cancel booking
        </button>

      `);

    };

  }


  const showExtraWork =
    $('showExtraWork');

  if(showExtraWork){

    showExtraWork.onclick = ()=>{

      currentBooking.extraWork = {

        description:
          'The wall switch also needs replacement.',

        cost:150

      };

      saveBooking();

      renderBooking();

      toast(
        'Additional work requires your approval.'
      );

    };

  }


  const approveExtra =
    $('approveExtra');

  if(approveExtra){

    approveExtra.onclick = ()=>{

      currentBooking.extraApproved =
        true;

      saveBooking();

      renderBooking();

      toast(
        'Additional work approved.'
      );

    };

  }


  const rejectExtra =
    $('rejectExtra');

  if(rejectExtra){

    rejectExtra.onclick = ()=>{

      currentBooking.extraWork = null;

      saveBooking();

      renderBooking();

      toast(
        'Additional work rejected.'
      );

    };

  }


  const payNow =
    $('payNow');

  if(payNow){

    payNow.onclick = ()=>{

      modal(`

        <h2>Payment</h2>

        <p>
          Choose your demo payment method.
        </p>

        <div class="summary">

          <p>
            Service:
            ${escapeHtml(currentBooking.service)}
          </p>

          <p>
            Final amount:
            <strong>
              ₹${calculateFinalAmount()}
            </strong>
          </p>

        </div>

        <button
          class="primary full"
          id="confirmPayment"
        >
          Confirm payment
        </button>

      `);

    };

  }


  const rateWorker =
    $('rateWorker');

  if(rateWorker){

    rateWorker.onclick = ()=>{

      modal(`

        <h2>Rate your worker</h2>

        <p>
          How was your experience?
        </p>

        <select
          id="ratingValue"
          style="
            width:100%;
            padding:12px;
            border:1px solid #e7e1ef;
            border-radius:8px
          "
        >

          <option value="5">★★★★★ Excellent</option>
          <option value="4">★★★★ Very good</option>
          <option value="3">★★★ Good</option>
          <option value="2">★★ Needs improvement</option>
          <option value="1">★ Poor</option>

        </select>

        <textarea
          id="reviewText"
          placeholder="Write your review"
          style="
            width:100%;
            margin-top:12px;
            min-height:100px;
            padding:12px;
            border:1px solid #e7e1ef;
            border-radius:8px
          "
        ></textarea>

        <button
          class="primary full"
          id="submitReview"
        >
          Submit review
        </button>

      `);

    };

  }

}


/* =========================================================
   GLOBAL BOOKING ACTIONS
========================================================= */

document.addEventListener('click',e=>{

  if(e.target.id === 'startJob'){

    if($('startOtp').value !== '5678'){

      return toast(
        'Incorrect OTP. Use 5678.'
      );

    }

    currentBooking.status =
      'In service';

    saveBooking();

    closeModal();

    renderBooking();

    toast(
      'Service started successfully.'
    );

  }


  if(e.target.id === 'reschedule'){

    currentBooking.status =
      'Requested';

    saveBooking();

    closeModal();

    renderBooking();

    toast(
      'Reschedule request recorded.'
    );

  }


  if(e.target.id === 'cancelNow'){

    currentBooking = null;

    if(currentUser){

      currentUser.booking = null;

      saveBooking();

    }

    closeModal();

    resetActiveBooking();

    toast(
      'Cancellation recorded.'
    );

  }


  if(e.target.id === 'sendChat'){

    const message =
      $('chatMessage').value.trim();

    if(!message)
      return toast(
        'Please type a message.'
      );

    toast('Message sent securely.');

    closeModal();

  }


  if(e.target.id === 'confirmPayment'){

    currentBooking.paymentCompleted =
      true;

    currentBooking.status =
      'Completed';

    saveBooking();

    closeModal();

    renderBooking();

    toast(
      'Payment successful!'
    );

    setTimeout(
      renderBooking,
      100
    );

  }


  if(e.target.id === 'submitReview'){

    const rating =
      Number($('ratingValue').value);

    const review =
      $('reviewText').value.trim();


    currentBooking.rating =
      rating;

    currentBooking.review =
      review || 'No written review.';


    if(currentUser){

      currentUser.history =
        currentUser.history || [];

      currentUser.history.unshift(
        {
          ...currentBooking,
          completedAt:
            new Date().toLocaleString()
        }
      );

      currentUser.booking =
        null;

      const accounts =
        getAccounts();

      const index =
        accounts.findIndex(
          account =>
            account.id === currentUser.id
        );

      if(index !== -1){

        accounts[index] =
          currentUser;

        saveAccounts(accounts);

      }

      saveCurrentUser();
=======
            applyLanguage(language);


            alert(
                "Language changed successfully."
            );

        }
    );

}


/* =====================================================
   EARNINGS
===================================================== */

function setupEarnings() {

    const selector =
        document.getElementById(
            "earningPeriod"
        );


    selector.addEventListener(
        "change",
        updateEarnings
    );

}


function updateEarnings() {

    if (!currentUser) {
        return;
    }


    currentUser =
        ensureUserData(
            currentUser
        );


    const period =
        document.getElementById(
            "earningPeriod"
        )?.value || "today";


    const earnings =
        currentUser.earnings[period];


    const jobsCompleted =
        currentUser.completedJobs[period];


    const average =
        jobsCompleted > 0
            ? Math.round(
                earnings / jobsCompleted
            )
            : 0;


    const earningValue =
        document.getElementById(
            "earningValue"
        );


    const completedValue =
        document.getElementById(
            "completedJobsValue"
        );


    const averageValue =
        document.getElementById(
            "averageJobValue"
        );


    if (earningValue) {

        earningValue.textContent =
            formatCurrency(earnings);

    }


    if (completedValue) {

        completedValue.textContent =
            jobsCompleted;

    }


    if (averageValue) {

        averageValue.textContent =
            formatCurrency(average);

    }


    const periodLabel =
        document.getElementById(
            "completedJobsPeriod"
        );


    if (periodLabel) {

        const lang =
            currentUser.language || "en";

        const t =
            translations[lang];


        if (period === "today") {

            periodLabel.textContent =
                t.today;

        }

        else if (period === "week") {

            periodLabel.textContent =
                t.thisWeek;

        }

        else {

            periodLabel.textContent =
                t.thisMonth;

        }

    }


    const dashboardToday =
        document.getElementById(
            "dashboardTodayEarnings"
        );


    if (dashboardToday) {

        dashboardToday.textContent =
            formatCurrency(
                currentUser.earnings.today
            );

    }

}


function formatCurrency(amount) {

    return (
        "₹" +
        Number(amount).toLocaleString("en-IN")
    );

}


/* =====================================================
   COMPLETE JOB EARNINGS
===================================================== */

function addCompletedJobEarnings(amount) {

    currentUser =
        ensureUserData(
            currentUser
        );


    currentUser.earnings.today += amount;

    currentUser.earnings.week += amount;

    currentUser.earnings.month += amount;


    currentUser.completedJobs.today += 1;

    currentUser.completedJobs.week += 1;

    currentUser.completedJobs.month += 1;


    saveCurrentUser(
        currentUser
    );


    const users =
        getUsers();


    const index =
        users.findIndex(
            user =>
                user.id ===
                currentUser.id
        );


    if (index !== -1) {

        users[index] =
            currentUser;

        saveUsers(users);

    }


    updateEarnings();

}


/* =====================================================
   JOB RENDERING
===================================================== */

function renderAllJobs() {

    const dashboard =
        document.getElementById(
            "dashboardRequests"
        );

    const allRequests =
        document.getElementById(
            "allRequests"
        );


    if (!dashboard || !allRequests) {
        return;
    }


    const requestedJobs =
        jobs.filter(
            job =>
                job.status === "requested"
        );


    dashboard.innerHTML =
        requestedJobs
            .slice(0, 3)
            .map(
                job =>
                    createJobCard(
                        job,
                        true
                    )
            )
            .join("");


    allRequests.innerHTML =
        requestedJobs.length
            ? requestedJobs
                .map(
                    job =>
                        createJobCard(
                            job,
                            true
                        )
                )
                .join("")
            : emptyJobsMessage();


    updateRequestCounts();

}


function createJobCard(
    job,
    showActions = true
) {

    const initials =
        getInitials(
            job.customer
        );


    return `

        <div class="job-card">

            <div class="job-top">

                <div class="job-customer">

                    <div class="customer-avatar">
                        ${initials}
                    </div>

                    <div>

                        <h3>
                            ${job.customer}
                        </h3>

                        <small>
                            ${job.service}
                        </small>

                    </div>

                </div>

                <div class="job-price">
                    ${formatCurrency(job.price)}
                </div>

            </div>


            <div class="job-info">

                <span>
                    📍 ${job.location}
                </span>

                <span>
                    🕒 ${job.time}
                </span>

                <span>
                    🛠️ ${job.description}
                </span>

            </div>


            ${
                showActions
                    ? `

                    <div class="job-actions">

                        <button
                            class="accept-btn"
                            onclick="acceptJob(${job.id})"
                        >
                            Accept Job
                        </button>

                        <button
                            class="decline-btn"
                            onclick="declineJob(${job.id})"
                        >
                            Decline
                        </button>

                    </div>

                    `
                    : ""
            }

        </div>

    `;

}


/* =====================================================
   ACCEPT JOB
===================================================== */

function acceptJob(jobId) {

    const job =
        jobs.find(
            item =>
                item.id === jobId
        );


    if (!job) {
        return;
    }


    job.status =
        "active";


    renderAllJobs();

    renderActiveJobs();

    updateRequestCounts();


    alert(
        "Job accepted successfully."
    );


    goToPage("active");

}


/* =====================================================
   DECLINE JOB
===================================================== */

function declineJob(jobId) {

    const jobIndex =
        jobs.findIndex(
            item =>
                item.id === jobId
        );


    if (jobIndex === -1) {
        return;
    }


    jobs.splice(
        jobIndex,
        1
    );


    renderAllJobs();

    renderActiveJobs();

    updateRequestCounts();

}


/* =====================================================
   ACTIVE JOBS
===================================================== */

function renderActiveJobs() {

    const container =
        document.getElementById(
            "activeJobs"
        );


    if (!container) {
        return;
    }


    const activeJobs =
        jobs.filter(
            job =>
                job.status === "active"
        );


    if (!activeJobs.length) {

        container.innerHTML = `

            <div class="reserved-space">

                <div class="reserved-plus">
                    ✓
                </div>

                <h3>
                    No active jobs
                </h3>

                <p>
                    Accepted jobs will appear here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        activeJobs
            .map(
                job => `

                    <div class="job-card">

                        <div class="job-top">

                            <div class="job-customer">

                                <div class="customer-avatar">
                                    ${getInitials(job.customer)}
                                </div>

                                <div>

                                    <h3>
                                        ${job.customer}
                                    </h3>

                                    <small>
                                        ${job.service}
                                    </small>

                                </div>

                            </div>

                            <div class="job-price">
                                ${formatCurrency(job.price)}
                            </div>

                        </div>


                        <div class="job-info">

                            <span>
                                📍 ${job.location}
                            </span>

                            <span>
                                📞 Customer number available after verification
                            </span>

                        </div>


                        <div class="job-actions">

                            <button
                                class="accept-btn"
                                onclick="openOTP(${job.id})"
                            >
                                Verify Customer
                            </button>

                        </div>

                    </div>

                `
            )
            .join("");


    updateRequestCounts();

}


/* =====================================================
   REQUEST COUNTS
===================================================== */

function updateRequestCounts() {

    const requested =
        jobs.filter(
            job =>
                job.status === "requested"
        ).length;


    const active =
        jobs.filter(
            job =>
                job.status === "active"
        ).length;


    const requestCount =
        document.getElementById(
            "requestCount"
        );


    const activeCount =
        document.getElementById(
            "activeCount"
        );


    const dashboardRequestCount =
        document.getElementById(
            "dashboardRequestCount"
        );


    const dashboardActiveCount =
        document.getElementById(
            "dashboardActiveCount"
        );


    if (requestCount) {
        requestCount.textContent =
            requested;
    }


    if (activeCount) {
        activeCount.textContent =
            active;
    }


    if (dashboardRequestCount) {
        dashboardRequestCount.textContent =
            requested;
    }


    if (dashboardActiveCount) {
        dashboardActiveCount.textContent =
            active;
    }

}


/* =====================================================
   OTP CUSTOMER VERIFICATION
===================================================== */

let otpJobId = null;


function openOTP(jobId) {

    otpJobId =
        jobId;


    document
        .getElementById("otpInput")
        .value = "";


    document
        .getElementById("otpModal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("otpModal")
        .classList.remove("show");

    otpJobId = null;

}


document
    .getElementById("verifyOtp")
    .addEventListener(
        "click",
        function () {

            const otp =
                document
                    .getElementById(
                        "otpInput"
                    )
                    .value
                    .trim();


            if (otp !== DEMO_OTP) {

                alert(
                    "Incorrect OTP. Prototype OTP is 1234."
                );

                return;

            }


            const job =
                jobs.find(
                    item =>
                        item.id ===
                        otpJobId
                );


            if (job) {

                job.status =
                    "completed";


                addCompletedJobEarnings(
                    job.price
                );

            }


            closeModal();

            renderActiveJobs();

            alert(
                "Customer verified. Job completed and earnings updated."
            );

        }
    );


/* =====================================================
   AVAILABILITY
===================================================== */

function setupAvailability() {

    const toggle =
        document.getElementById(
            "availabilityToggle"
        );


    toggle.addEventListener(
        "change",
        updateAvailabilityText
    );

}


function updateAvailabilityText() {

    const toggle =
        document.getElementById(
            "availabilityToggle"
        );


    const text =
        document.getElementById(
            "availabilityText"
        );


    if (!toggle || !text) {
        return;
    }


    const lang =
        currentUser?.language || "en";


    const t =
        translations[lang];


    text.textContent =
        toggle.checked
            ? t.available
            : t.unavailable;

}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function setupNotifications() {

    const button =
        document.getElementById(
            "notificationBtn"
        );


    const panel =
        document.getElementById(
            "notificationPanel"
        );


    button.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            panel.classList.toggle(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !panel.contains(event.target) &&
                !button.contains(event.target)
            ) {

                panel.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =====================================================
   SOS
===================================================== */

function setupSOS() {

    document
        .getElementById("sosBtn")
        .addEventListener(
            "click",
            function () {

                document
                    .getElementById(
                        "sosModal"
                    )
                    .classList.add("show");

            }
        );


    document
        .getElementById("submitSOS")
        .addEventListener(
            "click",
            function () {

                const reason =
                    document
                        .getElementById(
                            "sosReason"
                        )
                        .value
                        .trim();


                if (!reason) {

                    alert(
                        "Please describe the issue."
                    );

                    return;

                }


                alert(
                    "Report submitted to SahaSetu."
                );


                document
                    .getElementById(
                        "sosReason"
                    )
                    .value = "";


                closeSOS();

            }
        );

}


function closeSOS() {

    document
        .getElementById(
            "sosModal"
        )
        .classList.remove(
            "show"
        );

}


/* =====================================================
   VOICE ASSISTANT
===================================================== */

function setupVoiceAssistant() {

    const voiceButton =
        document.getElementById(
            "voiceBtn"
        );


    const startButton =
        document.getElementById(
            "startVoice"
        );


    const testButton =
        document.getElementById(
            "speakTest"
        );


    voiceButton.addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "voiceAssistant"
                )
                .classList.add("show");

        }
    );


    startButton.addEventListener(
        "click",
        startVoiceRecognition
    );


    testButton.addEventListener(
        "click",
        testVoice
    );


    initializeSpeechRecognition();

}


function closeVoice() {

    stopVoiceRecognition();

    document
        .getElementById(
            "voiceAssistant"
        )
        .classList.remove(
            "show"
        );

}


/* =====================================================
   SPEECH RECOGNITION
===================================================== */

function initializeSpeechRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    const support =
        document.getElementById(
            "voiceSupport"
        );


    if (!SpeechRecognition) {

        if (support) {

            support.textContent =
                "Voice recognition is not supported in this browser.";

        }

        return;
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

    }


<<<<<<< HEAD
    currentBooking = null;

    closeModal();

    resetActiveBooking();

    renderHistory();

    toast(
      'Thank you! Your review was submitted.'
    );

  }

});


/* =========================================================
   FINAL AMOUNT
========================================================= */

function calculateFinalAmount(){

  let amount = 500;

  if(currentBooking.extraApproved){

    amount +=
      Number(
        currentBooking.extraWork.cost
      );

  }

  return amount;

}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory(){

  if(!currentUser){

    return;

  }


  const history =
    currentUser.history || [];


  if(!history.length){

    $('historyList').className =
      'empty-state';

    $('historyList').innerHTML = `

      <div>▤</div>

      <h3>
        No completed services yet
      </h3>

      <p>
        Your invoices will appear here
        after a service is completed.
      </p>

    `;

    return;

  }


  $('historyList').className =
    'history-list';


  $('historyList').innerHTML =
    history.map(item=>`

      <div
        class="active-card"
        style="margin-bottom:15px"
      >

        <p class="eyebrow">
          ${escapeHtml(item.id)}
        </p>

        <h3 style="margin:0">
          ${escapeHtml(item.service)}
        </h3>

        <p class="muted">
          Worker:
          ${escapeHtml(item.worker)}
        </p>

        <p>
          Final payment:
          <strong>
            ₹${item.extraApproved
              ? 650
              : 500}
          </strong>
        </p>

        <p>
          ⭐ Your rating:
          ${item.rating}/5
        </p>

        <p class="muted">
          "${escapeHtml(item.review)}"
        </p>

        <p class="muted">
          Completed:
          ${escapeHtml(item.completedAt)}
        </p>

        <button
          class="secondary"
          onclick="showInvoice('${item.id}')"
        >
          View invoice
        </button>

      </div>

    `).join('');

}


/* =========================================================
   INVOICE
========================================================= */

function showInvoice(id){

  const history =
    currentUser.history || [];

  const item =
    history.find(
      booking => booking.id === id
    );

  if(!item) return;


  const extra =
    item.extraApproved
    ? Number(item.extraWork.cost)
    : 0;


  modal(`

    <h2>SahaSetu Service Invoice</h2>

    <div class="summary">

      <p>
        <strong>Invoice:</strong>
        ${escapeHtml(item.id)}
      </p>

      <p>
        <strong>Service:</strong>
        ${escapeHtml(item.service)}
      </p>

      <p>
        <strong>Worker:</strong>
        ${escapeHtml(item.worker)}
      </p>

      <p>
        Labour / service:
        ₹500
      </p>

      ${
        extra
        ? `<p>Additional work: ₹${extra}</p>`
        : ''
      }

      <hr>

      <p>
        <strong>
          Total: ₹${500 + extra}
        </strong>
      </p>

      <p class="green">
        ✓ Payment completed
      </p>

    </div>

    <button
      class="primary full"
      onclick="closeModal()"
    >
      Close
    </button>

  `);

}


/* =========================================================
   SUPPORT
========================================================= */

$('callSupport').addEventListener(
  'click',
  ()=>{

    modal(`

      <h2>SahaSetu support</h2>

      <p>
        Our support team can help with
        booking, payment and complaints.
      </p>

      <button
        class="primary full"
        onclick="closeModal()"
      >
        Request support
      </button>

    `);

  }
);


$('chatSupport').addEventListener(
  'click',
  ()=>{

    modal(`

      <h2>Secure support chat</h2>

      <p>
        Your phone number will remain private.
      </p>

      <input
        placeholder="Type your message"
        style="
          width:100%;
          padding:12px;
          border:1px solid #e7e1ef;
          border-radius:8px
        "
      >

      <button
        class="primary full"
        onclick="
          toast('Support message sent.');
          closeModal();
        "
      >
        Send message
      </button>

    `);

  }
);


$('reportProblem').addEventListener(
  'click',
  ()=>{

    modal(`

      <h2>Report a problem</h2>

      <p>
        Tell SahaSetu what went wrong.
      </p>

      <select
        id="reportType"
        style="
          width:100%;
          padding:12px;
          border:1px solid #e7e1ef;
          border-radius:8px
        "
      >

        <option>Worker behaviour</option>
        <option>Incorrect final price</option>
        <option>Payment issue</option>
        <option>Service quality</option>
        <option>Other</option>

      </select>

      <textarea
        id="reportText"
        placeholder="Describe the problem"
        style="
          width:100%;
          margin-top:12px;
          min-height:100px;
          padding:12px;
          border:1px solid #e7e1ef;
          border-radius:8px
        "
      ></textarea>

      <button
        class="primary full"
        id="submitReport"
      >
        Submit complaint
      </button>

    `);

  }
);


document.addEventListener('click',e=>{

  if(e.target.id !== 'submitReport')
    return;

  const type =
    $('reportType').value;

  toast(
    `Complaint submitted: ${type}`
  );

  closeModal();

});


/* =========================================================
   EMERGENCY
========================================================= */

$('emergency').addEventListener(
  'click',
  ()=>{

    modal(`

      <h2>Emergency support</h2>

      <p>
        For a real emergency, contact your
        local emergency service first.
      </p>

      <p>
        In this prototype, SahaSetu support
        has been notified.
      </p>

      <button
        class="primary full"
        onclick="closeModal()"
      >
        Okay
      </button>

    `);

  }
);


/* =========================================================
   MODAL
========================================================= */

function modal(html){

  $('modalContent').innerHTML =
    html;

  $('modal').classList.remove(
    'hidden'
  );

}


function closeModal(){

  $('modal').classList.add(
    'hidden'
  );

}


$('closeModal')
.addEventListener(
  'click',
  closeModal
);


$('modal')
.addEventListener(
  'click',
  e=>{

    if(
      e.target === $('modal')
    ){

      closeModal();

    }

  }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function toast(message){

  clearTimeout(toastTimer);

  $('toast').textContent =
    message;

  $('toast').classList.remove(
    'hidden'
  );

  toastTimer =
    setTimeout(
      () =>
        $('toast')
          .classList
          .add('hidden'),
      3200
=======
    recognition =
        new SpeechRecognition();


    recognition.continuous =
        false;


    recognition.interimResults =
        false;


    recognition.lang =
        voiceLanguages[
            currentUser?.language || "en"
        ];


    recognition.onstart =
        function () {

            isListening =
                true;


            document
                .getElementById(
                    "voiceStatus"
                )
                .textContent =
                "Listening...";


        };


    recognition.onresult =
        function (event) {

            const transcript =
                event
                    .results[0][0]
                    .transcript
                    .toLowerCase();


            document
                .getElementById(
                    "voiceStatus"
                )
                .textContent =
                "Heard: " +
                transcript;


            processVoiceCommand(
                transcript
            );

        };


    recognition.onerror =
        function () {

            isListening =
                false;


            document
                .getElementById(
                    "voiceStatus"
                )
                .textContent =
                "Could not understand. Please try again.";

        };


    recognition.onend =
        function () {

            isListening =
                false;

        };


    if (support) {

        support.textContent =
            "Voice recognition supported.";

    }

}


function startVoiceRecognition() {

    if (!recognition) {

        alert(
            "Voice recognition is not supported. Please use Google Chrome."
        );

        return;

    }


    recognition.lang =
        voiceLanguages[
            currentUser?.language || "en"
        ];


    try {

        recognition.start();

    } catch (error) {

        console.log(error);

    }

}


function stopVoiceRecognition() {

    if (
        recognition &&
        isListening
    ) {

        recognition.stop();

    }

}


/* =====================================================
   VOICE COMMANDS
===================================================== */

function processVoiceCommand(command) {

    const normalized =
        command.toLowerCase();


    if (
        normalized.includes("job") ||
        normalized.includes("request") ||
        normalized.includes("పని") ||
        normalized.includes("काम") ||
        normalized.includes("வேலை") ||
        normalized.includes("ജോലി")
    ) {

        goToPage("requests");

        speak(
            getVoiceText(
                "jobs"
            )
        );

        return;

    }


    if (
        normalized.includes("earning") ||
        normalized.includes("income") ||
        normalized.includes("money") ||
        normalized.includes("payment") ||
        normalized.includes("ఆదాయం") ||
        normalized.includes("कमाई") ||
        normalized.includes("வருமானம்") ||
        normalized.includes("വരുമാനം")
    ) {

        goToPage("earnings");

        speak(
            getVoiceText(
                "earnings"
            )
        );

        return;

    }


    if (
        normalized.includes("active") ||
        normalized.includes("accepted") ||
        normalized.includes("ప్రస్తుత") ||
        normalized.includes("सक्रिय") ||
        normalized.includes("செயலில்") ||
        normalized.includes("സജീവ")
    ) {

        goToPage("active");

        speak(
            getVoiceText(
                "active"
            )
        );

        return;

    }


    if (
        normalized.includes("profile") ||
        normalized.includes("my details") ||
        normalized.includes("प्रोफ़ाइल") ||
        normalized.includes("ప్రొఫైల్") ||
        normalized.includes("சுயவிவரம்") ||
        normalized.includes("പ്രൊഫൈൽ")
    ) {

        goToPage("profile");

        speak(
            getVoiceText(
                "profile"
            )
        );

        return;

    }


    if (
        normalized.includes("dashboard") ||
        normalized.includes("home") ||
        normalized.includes("డాష్") ||
        normalized.includes("डैशबोर्ड") ||
        normalized.includes("டாஷ்") ||
        normalized.includes("ഡാഷ്")
    ) {

        goToPage("dashboard");

        speak(
            getVoiceText(
                "dashboard"
            )
        );

        return;

    }


    if (
        normalized.includes("hello") ||
        normalized.includes("hi") ||
        normalized.includes("నమస్కారం") ||
        normalized.includes("नमस्ते") ||
        normalized.includes("வணக்கம்") ||
        normalized.includes("നമസ്കാരം")
    ) {

        speak(
            getVoiceText(
                "hello"
            )
        );

        return;

    }


    speak(
        getVoiceText(
            "unknown"
        )
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01
    );

}


<<<<<<< HEAD
/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value){

  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
=======
/* =====================================================
   VOICE RESPONSE TEXT
===================================================== */

function getVoiceText(type) {

    const lang =
        currentUser?.language || "en";


    const text = {

        en: {
            jobs: "Opening your job requests.",
            earnings: "Opening your earnings.",
            active: "Opening your active jobs.",
            profile: "Opening your profile.",
            dashboard: "Opening your dashboard.",
            hello: "Hello. How can I help you?",
            unknown: "I could not understand that command."
        },

        te: {
            jobs: "మీ పని అభ్యర్థనలను తెరుస్తున్నాను.",
            earnings: "మీ ఆదాయాన్ని తెరుస్తున్నాను.",
            active: "మీ ప్రస్తుత పనులను తెరుస్తున్నాను.",
            profile: "మీ ప్రొఫైల్‌ను తెరుస్తున్నాను.",
            dashboard: "మీ డాష్‌బోర్డ్‌ను తెరుస్తున్నాను.",
            hello: "నమస్కారం. నేను మీకు ఎలా సహాయం చేయగలను?",
            unknown: "ఆ కమాండ్ నాకు అర్థం కాలేదు."
        },

        hi: {
            jobs: "आपके काम के अनुरोध खोल रहा हूँ।",
            earnings: "आपकी कमाई खोल रहा हूँ।",
            active: "आपके सक्रिय काम खोल रहा हूँ।",
            profile: "आपकी प्रोफ़ाइल खोल रहा हूँ।",
            dashboard: "आपका डैशबोर्ड खोल रहा हूँ।",
            hello: "नमस्ते। मैं आपकी कैसे मदद कर सकता हूँ?",
            unknown: "मैं उस कमांड को समझ नहीं पाया।"
        },

        ta: {
            jobs: "உங்கள் வேலை கோரிக்கைகளைத் திறக்கிறேன்.",
            earnings: "உங்கள் வருமானத்தைத் திறக்கிறேன்.",
            active: "உங்கள் செயலில் உள்ள வேலைகளைத் திறக்கிறேன்.",
            profile: "உங்கள் சுயவிவரத்தைத் திறக்கிறேன்.",
            dashboard: "உங்கள் டாஷ்போர்டைத் திறக்கிறேன்.",
            hello: "வணக்கம். நான் உங்களுக்கு எப்படி உதவலாம்?",
            unknown: "அந்த கட்டளையை என்னால் புரிந்துகொள்ள முடியவில்லை."
        },

        ml: {
            jobs: "നിങ്ങളുടെ ജോലി അഭ്യർത്ഥനകൾ തുറക്കുന്നു.",
            earnings: "നിങ്ങളുടെ വരുമാനം തുറക്കുന്നു.",
            active: "നിങ്ങളുടെ സജീവ ജോലികൾ തുറക്കുന്നു.",
            profile: "നിങ്ങളുടെ പ്രൊഫൈൽ തുറക്കുന്നു.",
            dashboard: "നിങ്ങളുടെ ഡാഷ്ബോർഡ് തുറക്കുന്നു.",
            hello: "നമസ്കാരം. എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
            unknown: "ആ കമാൻഡ് എനിക്ക് മനസ്സിലായില്ല."
        }

    };


    return text[lang][type];
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   RESET BOOKING
========================================================= */

function resetActiveBooking(){

  $('activeBooking').outerHTML = `

    <div
      id="activeBooking"
      class="empty-state"
    >

      <div>🗓</div>

      <h3>
        No active booking
      </h3>

      <p>
        Need help at home?
        Book a verified worker.
      </p>

      <button
        class="primary go-book"
        onclick="showPage('book')"
      >
        Book a service
      </button>

    </div>

  `;
=======
/* =====================================================
   TEXT TO SPEECH
===================================================== */

function speak(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        return;

    }


    window.speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(
            text
        );


    const lang =
        currentUser?.language || "en";


    utterance.lang =
        voiceLanguages[lang];


    utterance.rate =
        0.9;


    utterance.pitch =
        1;


    window.speechSynthesis.speak(
        utterance
    );
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01

}


<<<<<<< HEAD
/* =========================================================
   PROFILE AVATAR
========================================================= */

$('profileAvatar').addEventListener(
  'click',
  ()=>{

    if(!currentUser) return;

    modal(`

      <h2>My profile</h2>

      <div class="summary">

        <p>
          <strong>Name:</strong>
          ${escapeHtml(currentUser.name)}
        </p>

        <p>
          <strong>Phone:</strong>
          +91 ${escapeHtml(currentUser.phone)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(currentUser.email || 'Not added')}
        </p>

        <p>
          <strong>Address:</strong>
          ${escapeHtml(currentUser.address || 'Not added')}
        </p>

        <p>
          <strong>Language:</strong>
          ${escapeHtml(currentUser.language)}
        </p>

        <p class="green">
          ✓ Demo identity:
          ${
            currentUser.aadhaarVerified
            ? 'Verified'
            : 'Not verified'
          }
        </p>

      </div>

      <button
        class="primary full"
        onclick="closeModal()"
      >
        Close
      </button>

    `);

  }
);


/* =========================================================
   INITIALIZATION
========================================================= */

renderServices();

const savedUser =
  getCurrentUser();


if(savedUser){

  currentUser =
    savedUser;

  currentBooking =
    savedUser.booking || null;

  openApp();

}
=======
function testVoice() {

    speak(
        getVoiceText(
            "hello"
        )
    );

}


/* =====================================================
   SWITCH ACCOUNT
===================================================== */

function setupSwitchAccount() {

    const button =
        document.getElementById(
            "switchAccountBtn"
        );


    button.addEventListener(
        "click",
        function () {

            const phone =
                prompt(
                    "Enter the mobile number of the account you want to switch to:"
                );


            if (!phone) {
                return;
            }


            const cleanPhone =
                phone.replace(
                    /\D/g,
                    ""
                ).slice(-10);


            if (
                !isValidPhone(cleanPhone)
            ) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            const users =
                getUsers();


            const user =
                users.find(
                    item =>
                        item.phone ===
                        cleanPhone
                );


            if (!user) {

                alert(
                    "No account found with this number."
                );

                return;

            }


            currentUser =
                ensureUserData(user);


            saveCurrentUser(
                currentUser
            );


            applyLanguage(
                currentUser.language
            );


            updateWorkerUI();

            renderAllJobs();

            renderActiveJobs();

            updateEarnings();


            alert(
                "Account switched successfully."
            );

        }
    );

}


/* =====================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const otpModal =
            document.getElementById(
                "otpModal"
            );

        const sosModal =
            document.getElementById(
                "sosModal"
            );


        if (
            event.target ===
            otpModal
        ) {

            closeModal();

        }


        if (
            event.target ===
            sosModal
        ) {

            closeSOS();

        }

    }
);
>>>>>>> 5a4fed95160be9d74e4dd0711c9d3b12c3d7ea01
