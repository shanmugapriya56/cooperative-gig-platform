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

}


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

}


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

}


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

}


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

}


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

}


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

}


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

}


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

    }


    if(!selectedWorker){

      return toast(
        'Please select a nearby worker.'
      );

    }


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

    };


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

            }


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

    }


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
    );

}


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

}


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

}


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