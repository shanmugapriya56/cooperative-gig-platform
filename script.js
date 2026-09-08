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

}


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

}


function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(CURRENT_USER_KEY)
        );

    } catch (error) {

        return null;

    }

}


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

}


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

}


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

}


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

}


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

    }


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

    }


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

    };


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

            }


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

    }


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
    );

}


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

}


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

}


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