const state={
  page:"dashboard",
  workers:[
    {id:"SAH-W-66016",name:"Ravi",skill:"Electrician",type:"Cooperative Worker",status:"Available",jobs:12,rating:4.8,earnings:128450,kyc:"Verified",phone:"+91 93456 78909",address:"Thanjavur, Tamil Nadu",location:"Thanjavur"},
    {id:"SAH-W-66017",name:"Rishikumar",skill:"Plumber",type:"Individual Worker",status:"Available",jobs:9,rating:4.7,earnings:114800,kyc:"Verified",phone:"+91 93456 78910",address:"Kumbakonam, Tamil Nadu",location:"Kumbakonam"},
    {id:"SAH-W-66018",name:"Kumar",skill:"Carpenter",type:"Cooperative Worker",status:"Busy",jobs:15,rating:4.6,earnings:121300,kyc:"Verified",phone:"+91 93456 78911",address:"Trichy, Tamil Nadu",location:"Tiruchirappalli"},
    {id:"SAH-W-66019",name:"Meena",skill:"Cleaning",type:"Cooperative Worker",status:"Available",jobs:18,rating:4.9,earnings:98600,kyc:"Verified",phone:"+91 93456 78912",address:"Thanjavur, Tamil Nadu",location:"Thanjavur"},
    {id:"SAH-W-66020",name:"Arun",skill:"Painter",type:"Individual Worker",status:"Offline",jobs:6,rating:4.4,earnings:62400,kyc:"Pending",phone:"+91 93456 78913",address:"Papanasam, Tamil Nadu",location:"Papanasam"}
  ],
  customers:[
    {name:"Priya",phone:"+91 98765 43210",address:"Thanjavur, Tamil Nadu",location:"Thanjavur",bookings:12,status:"Active",verified:true},
    {name:"Arun",phone:"+91 91234 56780",address:"Kumbakonam, Tamil Nadu",location:"Kumbakonam",bookings:8,status:"Active",verified:true},
    {name:"Meena",phone:"+91 93456 78901",address:"Trichy, Tamil Nadu",location:"Tiruchirappalli",bookings:17,status:"Active",verified:false},
    {name:"Suresh",phone:"+91 97890 12345",address:"Thanjavur, Tamil Nadu",location:"Thanjavur",bookings:4,status:"Blocked",verified:true}
  ],
  jobs:[
    {id:"#1024",customer:"Priya",service:"Electrical Repair",worker:"Ravi",status:"Pending",amount:800,priority:"Normal"},
    {id:"#1025",customer:"Arun",service:"Plumbing",worker:"Rishikumar",status:"Assigned",amount:650,priority:"Normal"},
    {id:"#1026",customer:"Meena",service:"Deep Cleaning",worker:"Meena",status:"In Progress",amount:1200,priority:"Normal"},
    {id:"#1027",customer:"Suresh",service:"Electrical Emergency",worker:"Unassigned",status:"Emergency",amount:1000,priority:"High"},
    {id:"#1028",customer:"Lakshmi",service:"Carpentry",worker:"Kumar",status:"Completed",amount:1500,priority:"Normal"}
  ],
  complaints:[
    {id:"#C1024",customer:"Priya",worker:"Ravi",issue:"Service quality",status:"Under Review"},
    {id:"#C1025",customer:"Meena",worker:"Kumar",issue:"Late arrival",status:"Open"},
    {id:"#C1026",customer:"Arun",worker:"Rishikumar",issue:"Billing query",status:"Resolved"}
  ]
};

const content=document.getElementById("content");
const title=document.getElementById("pageTitle");
const modalBackdrop=document.getElementById("modalBackdrop");
const modal=document.getElementById("modal");

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const d=document.createElement("div");d.className="toast";d.textContent=msg;document.getElementById("toasts").appendChild(d);setTimeout(()=>d.remove(),2600)}
function pill(v){let c=/available|completed|verified|active|resolved/i.test(v)?"green":/pending|review|assigned|busy/i.test(v)?"yellow":/emergency|blocked|open|offline/i.test(v)?"red":/in progress/i.test(v)?"blue":"gray";return `<span class="pill ${c}">${esc(v)}</span>`}
function avatar(name){return `<div class="avatar">${esc(name[0])}</div>`}

function render(){
  const pages={dashboard:"Dashboard",customers:"Customers",workers:"Workers",jobs:"Job Requests","active-jobs":"Active Jobs",earnings:"Earnings & Payments",kyc:"KYC & Verification",live:"Live Workers",emergency:"Emergency / SOS",reviews:"Reviews",complaints:"Complaints",analytics:"Analytics","ai-admin":"AI Admin",notifications:"Notifications",settings:"Settings"};
  title.textContent=pages[state.page]||"Dashboard";
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===state.page));
  const fn=({dashboard,customers,workers,jobs,"active-jobs":activeJobs,earnings,kyc,live,emergency,reviews,complaints,analytics,"ai-admin":aiAdmin,notifications,settings}[state.page]||dashboard);
  content.innerHTML=fn();
  bindPage();
}

function shell(head,sub,action=""){return `<div class="hero"><div><div class="eyebrow">SahaSetu Cooperative</div><h1>${head}</h1><p>${sub}</p></div>${action}</div>`}
function dashboard(){
 return shell("Good evening, Admin 👋","Your cooperative at a glance.","<button class='btn primary' data-action='add-worker'>+ Add Worker</button>")+
 `<div class="grid stats">
 ${stat("👥","Total Customers","1,248","+12 today")}
 ${stat("⚒","Total Workers","86","62 cooperative · 24 individual")}
 ${stat("▣","Pending Requests","24","8 urgent")}
 ${stat("↻","Active Jobs","18","+4 today")}
 ${stat("₹","Today's Earnings","₹42,850","+12.4%")}
 ${stat("★","Average Rating","4.7 / 5","856 reviews")}
 ${stat("!","Emergency Requests","3","Needs attention")}
 ${stat("⚠","Complaints","7","2 new today")}
 </div>
 <div class="grid dashboard-grid">
  <div class="card"><div class="card-head"><h3>Weekly Bookings</h3><select class="select"><option>Last 7 days</option><option>Last 30 days</option></select></div><div class="chart">${[42,65,52,78,88,72,96].map((n,i)=>`<div class="bar" style="height:${n}%"><span>${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span></div>`).join("")}</div></div>
  <div class="card"><div class="card-head"><h3>Needs attention</h3><button class="btn secondary" data-page='emergency'>View all</button></div><div class="card-body mini-list">
   <div class="mini-row alert-card"><div class="stat-icon">🚨</div><div class="grow"><strong>3 emergency requests</strong><small>Immediate worker assignment required</small></div></div>
   <div class="mini-row"><div class="stat-icon">🛡</div><div class="grow"><strong>6 KYC reviews</strong><small>Workers waiting for verification</small></div></div>
   <div class="mini-row"><div class="stat-icon">⚠</div><div class="grow"><strong>2 new complaints</strong><small>Open since today</small></div></div>
  </div></div>
 </div>
 <div class="card table-card"><div class="card-head"><h3>Recent Job Requests</h3><button class="btn secondary" data-page='jobs'>View all jobs</button></div>${jobTable(state.jobs.slice(0,5))}</div>`;
}
function stat(icon,label,value,trend){return `<div class="card stat"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><h2>${value}</h2><span class="trend">${trend}</span></div>`}
function jobTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Request</th><th>Customer</th><th>Service</th><th>Worker</th><th>Status</th><th>Amount</th><th></th></tr></thead><tbody>${rows.map(j=>`<tr><td><strong>${j.id}</strong></td><td>${j.customer}</td><td>${j.service}</td><td>${j.worker}</td><td>${pill(j.status)}</td><td>₹${j.amount}</td><td><button class="btn secondary" data-job="${j.id}">View</button></td></tr>`).join("")}</tbody></table></div>`}

function workers(){
return shell("Workers","Manage cooperative and individual service providers.","<button class='btn primary' data-action='add-worker'>+ Add Worker</button>")+
`<div class="grid metric-grid"><div class="card metric"><span class="eyebrow">All workers</span><br><strong>${state.workers.length}</strong></div><div class="card metric"><span class="eyebrow">Cooperative workers</span><br><strong>${state.workers.filter(w=>w.type==="Cooperative Worker").length}</strong></div><div class="card metric"><span class="eyebrow">Individual workers</span><br><strong>${state.workers.filter(w=>w.type==="Individual Worker").length}</strong></div></div>
<div class="card table-card"><div class="search-row"><input class="search" id="workerSearch" placeholder="🔍 Search worker..."><select class="select" id="workerType"><option>All Worker Types</option><option>Cooperative Worker</option><option>Individual Worker</option></select><select class="select" id="workerStatus"><option>All Status</option><option>Available</option><option>Busy</option><option>Offline</option></select></div><div id="workerTable">${workerTable(state.workers)}</div></div>`;
}
function workerTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Worker</th><th>Skill</th><th>Worker Type</th><th>Phone</th><th>Location</th><th>Status</th><th>KYC</th><th></th></tr></thead><tbody>${rows.map(w=>`<tr><td><div class="worker-cell">${avatar(w.name)}<div><strong>${esc(w.name)}</strong><small>${esc(w.id)}</small></div></div></td><td>${w.skill}</td><td>${w.type==="Cooperative Worker"?"🏢":"👤"} ${w.type}</td><td>${w.phone||"Not added"}</td><td>📍 ${w.location||"Not added"}</td><td>${pill(w.status)}</td><td>${pill(w.kyc)}</td><td><button class="btn secondary" data-worker="${w.id}">View</button></td></tr>`).join("")}</tbody></table></div>`}<div><strong>${esc(w.name)}</strong><small>${esc(w.id)}</small></div></div></td><td>${w.skill}</td><td>${w.type==="Cooperative Worker"?"🏢":"👤"} ${w.type}</td><td>${pill(w.status)}</td><td>${w.jobs}</td><td>⭐ ${w.rating}</td><td>${pill(w.kyc)}</td><td><button class="btn secondary" data-worker="${w.id}">View</button></td></tr>`).join("")}</tbody></table></div>`}

function customers(){return shell("Customers","Manage customer accounts and booking activity.")+
`<div class="card table-card"><div class="search-row"><input class="search" id="customerSearch" placeholder="🔍 Search customer..."><select class="select"><option>All Customers</option><option>Active</option><option>Blocked</option></select></div><div id="customerTable">${customerTable(state.customers)}</div></div>`}
function customerTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Customer</th><th>Phone</th><th>Location</th><th>Bookings</th><th>Verification</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map(c=>`<tr><td><div class="worker-cell">${avatar(c.name)}<strong>${c.name}</strong></div></td><td>${c.phone}</td><td>📍 ${c.location||"Not added"}</td><td>${c.bookings}</td><td>${c.verified?pill("Verified"):pill("Pending")}</td><td>${pill(c.status)}</td><td><button class="btn secondary" data-customer="${c.name}">View</button></td></tr>`).join("")}</tbody></table></div>`}<strong>${c.name}</strong></div></td><td>${c.phone}</td><td>${c.bookings}</td><td>${pill(c.status)}</td><td><button class="btn secondary" data-customer="${c.name}">View</button></td></tr>`).join("")}</tbody></table></div>`}

function jobs(){return shell("Job Requests","Every booking from the customer app can be monitored and assigned here.")+
`<div class="card table-card"><div class="search-row"><select class="select" id="jobFilter"><option>All Requests</option><option>Pending</option><option>Assigned</option><option>In Progress</option><option>Emergency</option><option>Completed</option></select><span class="toolbar-spacer"></span><button class="btn primary" data-action="simulate-booking">+ Simulate Customer Booking</button></div><div id="jobTable">${jobTable(state.jobs)}</div></div>`}
function activeJobs(){return shell("Active Jobs","Monitor jobs currently assigned or in progress.")+
`<div class="grid two-col">${state.jobs.filter(j=>["Assigned","In Progress","Emergency"].includes(j.status)).map(j=>`<div class="card feature-card ${j.status==="Emergency"?"alert-card":""}"><div class="card-head"><h3>${j.id} · ${j.service}</h3>${pill(j.status)}</div><div class="card-body"><p><b>Customer:</b> ${j.customer}<br><b>Worker:</b> ${j.worker}<br><b>Amount:</b> ₹${j.amount}</p><button class="btn secondary" data-job="${j.id}">View Job</button> <button class="btn primary" data-action="contact">Contact</button></div></div>`).join("")}</div>`}
function earnings(){return shell("Earnings & Payments","Track customer payments, worker earnings and cooperative share.")+
`<div class="grid stats">${stat("₹","Today's Revenue","₹42,850","+12.4%")}${stat("₹","This Month","₹8,42,500","+8.2%")}${stat("⚒","Worker Earnings","₹7,58,250","90% distributed")}${stat("🏢","Cooperative Share","₹84,250","10%")}</div>
<div class="card table-card"><div class="card-head"><h3>Worker Earnings</h3><button class="btn secondary" data-action="export">Export CSV</button></div><div class="table-wrap"><table class="table"><thead><tr><th>Worker</th><th>Type</th><th>Completed Jobs</th><th>Total Earnings</th><th>Rating</th></tr></thead><tbody>${state.workers.map(w=>`<tr><td><b>${w.name}</b></td><td>${w.type}</td><td>${w.jobs}</td><td>₹${w.earnings.toLocaleString()}</td><td>⭐ ${w.rating}</td></tr>`).join("")}</tbody></table></div></div>`}
function kyc(){return shell("KYC & Verification","Review worker verification status. Use demo data only in this prototype.")+
`<div class="grid metric-grid"><div class="card metric"><span class="eyebrow">Verified</span><br><strong>78</strong></div><div class="card metric"><span class="eyebrow">Pending</span><br><strong>6</strong></div><div class="card metric"><span class="eyebrow">Rejected</span><br><strong>2</strong></div></div>
<div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>Worker</th><th>Type</th><th>Skill</th><th>KYC</th><th>Action</th></tr></thead><tbody>${state.workers.map(w=>`<tr><td><b>${w.name}</b></td><td>${w.type}</td><td>${w.skill}</td><td>${pill(w.kyc)}</td><td><button class="btn secondary" data-kyc="${w.id}">Review</button></td></tr>`).join("")}</tbody></table></div></div>`}
function live(){return shell("Live Workers","Prototype map showing availability and simulated locations.")+
`<div class="grid two-col"><div class="map"><div class="pin p1">🟢 Ravi · 1.2 km</div><div class="pin p2">🟢 Rishikumar · 2.4 km</div><div class="pin p3">🟠 Kumar · Busy</div></div><div class="card"><div class="card-head"><h3>Worker availability</h3></div><div class="card-body mini-list">${state.workers.map(w=>`<div class="mini-row">${avatar(w.name)}<div class="grow"><strong>${w.name}</strong><small>${w.skill} · ${w.type}</small></div>${pill(w.status)}</div>`).join("")}</div></div></div>`}
function emergency(){return shell("Emergency / SOS","Prioritize urgent customer requests and assign the nearest suitable worker.","<button class='btn danger' data-action='resolve-all'>Resolve selected</button>")+
`<div class="card table-card alert-card">${jobTable(state.jobs.filter(j=>j.priority==="High"||j.status==="Emergency"))}</div>`}
function reviews(){return shell("Reviews & Ratings","Monitor service quality and customer satisfaction.")+
`<div class="grid two-col"><div class="card feature-card"><h3>⭐ 4.7 / 5</h3><p>856 total reviews</p><div class="mini-list"><div>5 ⭐ <b>72%</b></div><div>4 ⭐ <b>18%</b></div><div>3 ⭐ <b>6%</b></div><div>2 ⭐ <b>3%</b></div><div>1 ⭐ <b>1%</b></div></div></div><div class="card feature-card"><h3>Recent review</h3><p>Priya · ⭐⭐⭐⭐⭐</p><p>“Very professional and arrived on time.”</p><b>Worker: Ravi</b></div></div>`}
function complaints(){return shell("Complaints","Investigate customer issues and close cases transparently.")+
`<div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>Complaint</th><th>Customer</th><th>Worker</th><th>Issue</th><th>Status</th><th></th></tr></thead><tbody>${state.complaints.map(c=>`<tr><td><b>${c.id}</b></td><td>${c.customer}</td><td>${c.worker}</td><td>${c.issue}</td><td>${pill(c.status)}</td><td><button class="btn secondary" data-complaint="${c.id}">Open</button></td></tr>`).join("")}</tbody></table></div></div>`}
function analytics(){return shell("Analytics","Understand demand, worker utilization, revenue and cooperative performance.")+
`<div class="grid stats">${stat("📈","Booking Growth","+18.4%","vs last month")}${stat("⚒","Worker Utilization","74%","Healthy")}${stat("₹","Avg. Job Value","₹924","+6.8%")}${stat("👥","Repeat Customers","68%","+4.1%")}</div><div class="grid two-col" style="margin-top:15px"><div class="card"><div class="card-head"><h3>Service Demand</h3></div><div class="card-body mini-list">${[["Electrical",92],["Plumbing",76],["Cleaning",61],["Carpentry",48],["Painting",39]].map(x=>`<div><div style="display:flex;justify-content:space-between;font-size:10px"><b>${x[0]}</b><span>${x[1]}%</span></div><div style="height:8px;background:#edf1ef;border-radius:8px;margin-top:5px"><div style="height:100%;width:${x[1]}%;background:#58a866;border-radius:8px"></div></div></div>`).join("")}</div></div><div class="card"><div class="card-head"><h3>Worker Utilization</h3></div><div class="card-body mini-list">${state.workers.slice(0,4).map(w=>`<div class="mini-row"><div class="grow"><strong>${w.name}</strong><small>${w.type}</small></div><b>${Math.min(96,w.jobs*5+20)}%</b></div>`).join("")}</div></div></div>`}
function aiAdmin(){return shell("AI Admin","AI-assisted cooperative decisions. This demo uses local rule-based insights; connect an AI API for production.")+
`<div class="ai-box"><div class="eyebrow" style="color:#8de49d">SahaSetu Intelligence</div><h2>🤖 Cooperative AI Assistant</h2><p>Ask about workers, jobs, emergencies, earnings, demand or fair allocation.</p><div class="ai-input"><input id="aiInput" placeholder="e.g. Suggest a worker for an electrical emergency"><button class="btn primary" id="askAI">Ask AI</button></div><div class="ai-response" id="aiResponse"></div></div>
<div class="grid two-col" style="margin-top:15px">${["📊 Analyze today's performance","👷 Find underutilized workers","📍 Suggest worker allocation","🚨 Analyze emergency requests","💰 Analyze earnings","📈 Predict service demand"].map(x=>`<div class="card feature-card"><h3>${x}</h3><p>Generate a cooperative-focused insight from current dashboard data.</p><button class="btn secondary ai-quick" data-query="${x}">Run insight</button></div>`).join("")}</div>`}
function notifications(){return shell("Notifications","Recent events across the SahaSetu system.")+
`<div class="card mini-list" style="padding:18px"><div class="mini-row"><div class="stat-icon">🚨</div><div class="grow"><strong>Emergency request #1027 received</strong><small>Customer needs urgent electrical assistance.</small></div><small>2 min</small></div><div class="mini-row"><div class="stat-icon">⚒</div><div class="grow"><strong>Ravi accepted job #1024</strong><small>Worker is available and assigned.</small></div><small>18 min</small></div><div class="mini-row"><div class="stat-icon">🛡</div><div class="grow"><strong>New KYC submission</strong><small>Arun is waiting for review.</small></div><small>1 hr</small></div></div>`}
function settings(){return shell("Settings","Configure cooperative operations and admin preferences.")+
`<div class="grid two-col"><div class="card feature-card"><h3>Cooperative Profile</h3><p>Manage SahaSetu name, service area and contact information.</p><button class="btn secondary" data-action="settings-save">Edit profile</button></div><div class="card feature-card"><h3>Worker Allocation</h3><p>Enable fair allocation using skill, distance, availability and workload.</p><button class="btn primary" data-action="toggle-fair">Enabled ✓</button></div><div class="card feature-card"><h3>Notifications</h3><p>Emergency alerts, job updates, KYC and complaints.</p><button class="btn secondary" data-action="settings-save">Configure</button></div><div class="card feature-card"><h3>AI Settings</h3><p>Configure AI-assisted insights and provider connection for production.</p><button class="btn secondary" data-page="ai-admin">Open AI Admin</button></div></div>`}

function bindPage(){
 document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>{state.page=b.dataset.page;render();

/* ===== SahaSetu Admin OTP Login ===== */
const adminAuth = {
  loggedIn: sessionStorage.getItem("sahasetuAdminLoggedIn") === "true",
  phone: sessionStorage.getItem("sahasetuAdminPhone") || "+91 98765 43210",
  otp: null
};

function loginPhoneHTML(){
  return `<div class="field"><label>Admin phone number</label><input id="adminPhone" value="${esc(adminAuth.phone)}" placeholder="+91 XXXXX XXXXX"></div><button class="btn primary login-btn" id="sendOtp">Send OTP</button>`;
}
function loginOtpHTML(){
  return `<div class="otp-sent">OTP sent to <b>${esc(adminAuth.phone)}</b></div><div class="field"><label>Enter 6-digit OTP</label><input id="adminOtp" maxlength="6" inputmode="numeric" placeholder="Enter OTP"></div><button class="btn primary login-btn" id="verifyOtp">Verify & Login</button><button class="text-btn" id="resendOtp">Resend OTP</button><div class="demo-otp">Demo OTP: <b>${adminAuth.otp}</b></div>`;
}
function showLogin(){
  document.getElementById("loginOverlay").classList.remove("hidden");
  document.getElementById("loginBox").innerHTML=loginPhoneHTML();
  bindLogin();
}
function bindLogin(){
  const send=document.getElementById("sendOtp");
  if(send) send.onclick=()=>{
    const p=document.getElementById("adminPhone").value.trim();
    if(!p){toast("Enter the admin phone number");return}
    adminAuth.phone=p;
    adminAuth.otp=String(Math.floor(100000+Math.random()*900000));
    document.getElementById("loginBox").innerHTML=loginOtpHTML();
    bindLogin();
    toast("OTP generated for this prototype");
  };
  const verify=document.getElementById("verifyOtp");
  if(verify) verify.onclick=()=>{
    if(document.getElementById("adminOtp").value.trim()===adminAuth.otp){
      adminAuth.loggedIn=true;
      sessionStorage.setItem("sahasetuAdminLoggedIn","true");
      sessionStorage.setItem("sahasetuAdminPhone",adminAuth.phone);
      document.getElementById("loginOverlay").classList.add("hidden");
      toast("Admin login successful");
    }else toast("Incorrect OTP");
  };
  const resend=document.getElementById("resendOtp");
  if(resend) resend.onclick=()=>{
    adminAuth.otp=String(Math.floor(100000+Math.random()*900000));
    document.getElementById("loginBox").innerHTML=loginOtpHTML();
    bindLogin();
    toast("New OTP generated");
  };
}
const oldLogout=document.getElementById("logout");
if(oldLogout) oldLogout.onclick=()=>{
  adminAuth.loggedIn=false;
  adminAuth.otp=null;
  sessionStorage.removeItem("sahasetuAdminLoggedIn");
  showLogin();
  toast("Logged out");
};
if(!adminAuth.loggedIn) showLogin();
document.getElementById("sidebar").classList.remove("open")});
 const ws=document.getElementById("workerSearch"); if(ws) ws.oninput=filterWorkers;
 const wt=document.getElementById("workerType"); if(wt) wt.onchange=filterWorkers;
 const wst=document.getElementById("workerStatus"); if(wst) wst.onchange=filterWorkers;
 const cs=document.getElementById("customerSearch"); if(cs) cs.oninput=()=>{const q=cs.value.toLowerCase();document.getElementById("customerTable").innerHTML=customerTable(state.customers.filter(c=>JSON.stringify(c).toLowerCase().includes(q)))};
 const jf=document.getElementById("jobFilter"); if(jf) jf.onchange=()=>{const v=jf.value;document.getElementById("jobTable").innerHTML=jobTable(v==="All Requests"?state.jobs:state.jobs.filter(j=>j.status===v))};
 document.querySelectorAll("[data-worker]").forEach(b=>b.onclick=()=>workerModal(b.dataset.worker));
 document.querySelectorAll("[data-customer]").forEach(b=>b.onclick=()=>customerModal(b.dataset.customer));
 document.querySelectorAll("[data-job]").forEach(b=>b.onclick=()=>jobModal(b.dataset.job));
 document.querySelectorAll("[data-kyc]").forEach(b=>b.onclick=()=>kycModal(b.dataset.kyc));
 document.querySelectorAll("[data-complaint]").forEach(b=>b.onclick=()=>complaintModal(b.dataset.complaint));
 document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>actions(b.dataset.action));
 const ask=document.getElementById("askAI"); if(ask) ask.onclick=runAI;
 document.querySelectorAll(".ai-quick").forEach(b=>b.onclick=()=>runAI(b.dataset.query));
}
function filterWorkers(){const q=(document.getElementById("workerSearch")?.value||"").toLowerCase(),t=document.getElementById("workerType")?.value||"All Worker Types",s=document.getElementById("workerStatus")?.value||"All Status";const rows=state.workers.filter(w=>(w.name+" "+w.skill+" "+w.id).toLowerCase().includes(q)&&(t==="All Worker Types"||w.type===t)&&(s==="All Status"||w.status===s));document.getElementById("workerTable").innerHTML=workerTable(rows)}
function openModal(titleText,body,foot=""){modal.innerHTML=`<div class="modal-head"><strong>${titleText}</strong><button class="close" id="closeModal">×</button></div><div class="modal-body">${body}</div>${foot?`<div class="modal-foot">${foot}</div>`:""}`;modalBackdrop.classList.remove("hidden");document.getElementById("closeModal").onclick=closeModal}
function closeModal(){modalBackdrop.classList.add("hidden")}
function workerModal(id){const w=state.workers.find(x=>x.id===id);openModal(`${w.name} · ${w.skill}`,`<div class="worker-cell">${avatar(w.name)}<div><h3 style="margin:0">${w.name}</h3><small>${w.id}</small></div></div><div class="grid two-col" style="margin-top:18px"><div class="card feature-card"><b>Worker Type</b><p>${w.type==="Cooperative Worker"?"🏢":"👤"} ${w.type}</p></div><div class="card feature-card"><b>KYC</b><p>${pill(w.kyc)}</p></div><div class="card feature-card"><b>Phone</b><p>${w.phone||"Not added"}</p></div><div class="card feature-card"><b>Address</b><p>${w.address||"Not added"}</p></div><div class="card feature-card"><b>Location</b><p>📍 ${w.location||"Not added"}</p></div><div class="card feature-card"><b>Completed Jobs</b><p>${w.jobs}</p></div><div class="card feature-card"><b>Earnings</b><p>₹${w.earnings.toLocaleString()}</p></div><div class="card feature-card"><b>Rating</b><p>⭐ ${w.rating}</p></div></div>`,`<button class="btn secondary" id="toggleWorker">Change Availability</button><button class="btn primary" id="editWorker">Edit Worker</button>`);document.getElementById("toggleWorker").onclick=()=>{w.status=w.status==="Available"?"Offline":"Available";closeModal();render();toast(`${w.name} is now ${w.status}`)};document.getElementById("editWorker").onclick=()=>addWorkerModal(w)} · ${w.skill}`,`<div class="worker-cell">${avatar(w.name)}<div><h3 style="margin:0">${w.name}</h3><small>${w.id}</small></div></div><div class="grid two-col" style="margin-top:18px"><div class="card feature-card"><b>Worker Type</b><p>${w.type==="Cooperative Worker"?"🏢":"👤"} ${w.type}</p></div><div class="card feature-card"><b>KYC</b><p>${pill(w.kyc)}</p></div><div class="card feature-card"><b>Completed Jobs</b><p>${w.jobs}</p></div><div class="card feature-card"><b>Earnings</b><p>₹${w.earnings.toLocaleString()}</p></div></div>`,`<button class="btn secondary" id="toggleWorker">Change Availability</button><button class="btn primary" id="editWorker">Edit Worker</button>`);
document.getElementById("toggleWorker").onclick=()=>{w.status=w.status==="Available"?"Offline":"Available";closeModal();render();toast(`${w.name} is now ${w.status}`)};
document.getElementById("editWorker").onclick=()=>addWorkerModal(w);
}
function addWorkerModal(w=null){openModal(w?"Edit Worker":"Add Worker",`<div class="form-grid"><div class="field"><label>Full name</label><input id="fName" value="${w?.name||""}"></div><div class="field"><label>Primary skill</label><input id="fSkill" value="${w?.skill||""}" placeholder="Electrician"></div><div class="field"><label>Worker Type</label><select id="fType"><option ${w?.type==="Cooperative Worker"?"selected":""}>Cooperative Worker</option><option ${w?.type==="Individual Worker"?"selected":""}>Individual Worker</option></select></div><div class="field"><label>Availability</label><select id="fStatus"><option ${w?.status==="Available"?"selected":""}>Available</option><option ${w?.status==="Busy"?"selected":""}>Busy</option><option ${w?.status==="Offline"?"selected":""}>Offline</option></select></div><div class="field"><label>Phone number</label><input id="fPhone" value="${w?.phone||""}" placeholder="+91 XXXXX XXXXX"></div><div class="field"><label>Location</label><input id="fLocation" value="${w?.location||""}" placeholder="Thanjavur"></div><div class="field full"><label>Address</label><input id="fAddress" value="${w?.address||""}" placeholder="Area, city, Tamil Nadu"></div></div>`,`<button class="btn secondary" id="cancelM">Cancel</button><button class="btn primary" id="saveWorker">Save Worker</button>`);document.getElementById("cancelM").onclick=closeModal;document.getElementById("saveWorker").onclick=()=>{const name=document.getElementById("fName").value.trim(),skill=document.getElementById("fSkill").value.trim(),phone=document.getElementById("fPhone").value.trim(),location=document.getElementById("fLocation").value.trim(),address=document.getElementById("fAddress").value.trim();if(!name||!skill||!phone||!location||!address){toast("Fill name, skill, phone, location and address");return}if(w){w.name=name;w.skill=skill;w.type=document.getElementById("fType").value;w.status=document.getElementById("fStatus").value;w.phone=phone;w.location=location;w.address=address}else state.workers.push({id:"SAH-W-"+(66020+state.workers.length),name,skill,type:document.getElementById("fType").value,status:document.getElementById("fStatus").value,jobs:0,rating:0,earnings:0,kyc:"Pending",phone,address,location});closeModal();render();toast(w?"Worker updated":"Worker added successfully")}}"></div><div class="field"><label>Primary skill</label><input id="fSkill" value="${w?.skill||""}" placeholder="Electrician"></div><div class="field"><label>Worker Type</label><select id="fType"><option ${w?.type==="Cooperative Worker"?"selected":""}>Cooperative Worker</option><option ${w?.type==="Individual Worker"?"selected":""}>Individual Worker</option></select></div><div class="field"><label>Availability</label><select id="fStatus"><option>Available</option><option>Busy</option><option>Offline</option></select></div></div>`,`<button class="btn secondary" id="cancelM">Cancel</button><button class="btn primary" id="saveWorker">Save Worker</button>`);
document.getElementById("cancelM").onclick=closeModal;document.getElementById("saveWorker").onclick=()=>{const name=document.getElementById("fName").value.trim(),skill=document.getElementById("fSkill").value.trim();if(!name||!skill){toast("Enter name and skill");return}if(w){w.name=name;w.skill=skill;w.type=document.getElementById("fType").value;w.status=document.getElementById("fStatus").value}else state.workers.push({id:"SAH-W-"+(66020+state.workers.length),name,skill,type:document.getElementById("fType").value,status:document.getElementById("fStatus").value,jobs:0,rating:0,earnings:0,kyc:"Pending"});closeModal();render();toast(w?"Worker updated":"Worker added successfully")};
}
function customerModal(name){const c=state.customers.find(x=>x.name===name);openModal(c.name,`<div class="grid two-col"><div class="card feature-card"><b>Phone</b><p>${c.phone}</p></div><div class="card feature-card"><b>Address</b><p>${c.address||"Not added"}</p></div><div class="card feature-card"><b>Location</b><p>📍 ${c.location||"Not added"}</p></div><div class="card feature-card"><b>Verification</b><p>${c.verified?pill("Verified"):pill("Pending")}</p></div><div class="card feature-card"><b>Status</b><p>${pill(c.status)}</p></div><div class="card feature-card"><b>Bookings</b><p>${c.bookings}</p></div></div>`,`<button class="btn secondary" id="verifyC">${c.verified?"Mark Unverified":"Verify Customer"}</button><button class="btn danger" id="blockC">${c.status==="Blocked"?"Unblock":"Block"} Customer</button>`);document.getElementById("verifyC").onclick=()=>{c.verified=!c.verified;closeModal();render();toast(c.verified?"Customer verified":"Customer verification removed")};document.getElementById("blockC").onclick=()=>{c.status=c.status==="Blocked"?"Active":"Blocked";closeModal();render();toast("Customer status updated")}}</p></div><div class="card feature-card"><b>Status</b><p>${pill(c.status)}</p></div><div class="card feature-card"><b>Bookings</b><p>${c.bookings}</p></div><div class="card feature-card"><b>Account</b><p>Customer since 2026</p></div></div>`,`<button class="btn danger" id="blockC">${c.status==="Blocked"?"Unblock":"Block"} Customer</button>`);
document.getElementById("blockC").onclick=()=>{c.status=c.status==="Blocked"?"Active":"Blocked";closeModal();render();toast("Customer status updated")};
}
function jobModal(id){const j=state.jobs.find(x=>x.id===id);openModal(`${j.id} · ${j.service}`,`<div class="grid two-col"><div class="card feature-card"><b>Customer</b><p>${j.customer}</p></div><div class="card feature-card"><b>Worker</b><p>${j.worker}</p></div><div class="card feature-card"><b>Status</b><p>${pill(j.status)}</p></div><div class="card feature-card"><b>Amount</b><p>₹${j.amount}</p></div></div><p style="font-size:11px;color:#718078">A production version can sync this state with the shared SahaSetu backend so customer, worker and admin dashboards update together.</p>`,`<button class="btn secondary" id="assignJ">Assign Worker</button><button class="btn primary" id="completeJ">Mark Completed</button>`);
document.getElementById("assignJ").onclick=()=>{const w=state.workers.find(x=>x.status==="Available"&&x.skill.toLowerCase().includes(j.service.split(" ")[0].toLowerCase()))||state.workers.find(x=>x.status==="Available");j.worker=w?.name||"Ravi";j.status="Assigned";closeModal();render();toast(`${j.worker} assigned to ${j.id}`)};
document.getElementById("completeJ").onclick=()=>{j.status="Completed";closeModal();render();toast(`${j.id} marked completed`)};
}
function kycModal(id){const w=state.workers.find(x=>x.id===id);openModal(`KYC Review · ${w.name}`,`<p style="font-size:11px;color:#718078">Demo verification record. Do not store real identity documents in this front-end prototype.</p><div class="grid two-col"><div class="card feature-card"><b>Worker Type</b><p>${w.type}</p></div><div class="card feature-card"><b>Current Status</b><p>${pill(w.kyc)}</p></div></div>`,`<button class="btn danger" id="rejectK">Reject</button><button class="btn primary" id="approveK">Approve</button>`);document.getElementById("approveK").onclick=()=>{w.kyc="Verified";closeModal();render();toast("KYC approved")};document.getElementById("rejectK").onclick=()=>{w.kyc="Rejected";closeModal();render();toast("KYC rejected")}}
function complaintModal(id){const c=state.complaints.find(x=>x.id===id);openModal(`${c.id} · Complaint`,`<div class="card feature-card"><b>${c.issue}</b><p>Customer: ${c.customer}<br>Worker: ${c.worker}<br>Status: ${c.status}</p></div>`,`<button class="btn primary" id="resolveC">Resolve complaint</button>`);document.getElementById("resolveC").onclick=()=>{c.status="Resolved";closeModal();render();toast("Complaint resolved")}}
function actions(a){if(a==="add-worker")addWorkerModal();else if(a==="simulate-booking"){state.jobs.unshift({id:"#"+(1029+state.jobs.length),customer:"New Customer",service:"Electrical Repair",worker:"Unassigned",status:"Pending",amount:850,priority:"Normal"});render();toast("New customer booking received")}else if(a==="contact")toast("Contact action opened (prototype)");else if(a==="resolve-all"){state.jobs.forEach(j=>{if(j.status==="Emergency")j.status="Assigned"});render();toast("Emergency requests assigned")}else if(a==="export")toast("CSV export prepared (prototype)");else if(a==="settings-save")toast("Settings saved");else if(a==="toggle-fair")toast("Fair allocation remains enabled")}
function runAI(query){query=query||document.getElementById("aiInput")?.value||"";if(!query){toast("Type a question for AI Admin");return}const q=query.toLowerCase();let ans;
if(q.includes("emergency"))ans="There are 3 urgent requests. For electrical emergencies, Ravi is the strongest available match because he is an electrician and currently available. Prioritize distance, skill, availability and workload.";
else if(q.includes("underutil")||q.includes("no job"))ans="Ravi has 12 jobs, Rishikumar 9, Kumar 15, Meena 18 and Arun 6. Arun is currently the most underutilized; consider routing suitable new work to him after checking availability and skill.";
else if(q.includes("earning")||q.includes("revenue"))ans="Today's revenue is ₹42,850. Monthly revenue is ₹8,42,500, with ₹7,58,250 distributed to workers and ₹84,250 as the cooperative share.";
else if(q.includes("allocation")||q.includes("assign")||q.includes("worker"))ans="Recommended allocation logic: skill match + distance + availability + current workload + emergency priority. For a normal electrical request, Ravi is a strong candidate; for plumbing, Rishikumar is the direct skill match.";
else if(q.includes("demand"))ans="Electrical services currently show the highest demand, followed by plumbing and cleaning. Consider keeping more electricians available during peak periods.";
else ans="I can analyze workers, jobs, emergency requests, earnings, demand and fair cooperative allocation. Try: “Suggest a worker for an electrical emergency.”";
const box=document.getElementById("aiResponse");if(box){box.style.display="block";box.innerHTML="<b>AI Insight</b><br>"+ans}}
document.getElementById("nav").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b){state.page=b.dataset.page;render();}});
document.getElementById("mobileMenu").onclick=()=>document.getElementById("sidebar").classList.toggle("open");
document.getElementById("notificationBtn").onclick=()=>{state.page="notifications";render()};
document.getElementById("logout").onclick=()=>toast("Logged out (prototype)");
modalBackdrop.addEventListener("click",e=>{if(e.target===modalBackdrop)closeModal()});
render();

/* ===== SahaSetu Admin OTP Authentication ===== */
(function(){
  const overlay=document.getElementById("loginOverlay");
  const box=document.getElementById("loginBox");
  if(!overlay || !box) return;

  let otp=null;
  let phone=sessionStorage.getItem("sahasetuAdminPhone") || "+91 98765 43210";

  function esc2(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}

  function showPhone(){
    box.innerHTML=`
      <div class="field">
        <label>Admin phone number</label>
        <input id="adminPhone" type="tel" value="${esc2(phone)}" placeholder="+91 XXXXX XXXXX">
      </div>
      <button class="btn primary login-btn" id="sendOtp">Send OTP</button>`;
    document.getElementById("sendOtp").onclick=()=>{
      const value=document.getElementById("adminPhone").value.trim();
      if(!value){toast("Enter admin phone number");return}
      phone=value;
      otp=String(Math.floor(100000+Math.random()*900000));
      box.innerHTML=`
        <div class="otp-sent">OTP sent to <b>${esc2(phone)}</b></div>
        <div class="field">
          <label>Enter 6-digit OTP</label>
          <input id="adminOtp" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" placeholder="Enter OTP">
        </div>
        <button class="btn primary login-btn" id="verifyOtp">Verify & Login</button>
        <button class="text-btn" id="resendOtp">Resend OTP</button>
        <div class="demo-otp">Demo OTP: <b>${otp}</b></div>`;
      document.getElementById("adminOtp").focus();
      document.getElementById("verifyOtp").onclick=verify;
      document.getElementById("resendOtp").onclick=showOtp;
      toast("OTP generated");
    };
  }

  function showOtp(){
    otp=String(Math.floor(100000+Math.random()*900000));
    box.innerHTML=`
      <div class="otp-sent">OTP sent to <b>${esc2(phone)}</b></div>
      <div class="field">
        <label>Enter 6-digit OTP</label>
        <input id="adminOtp" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" placeholder="Enter OTP">
      </div>
      <button class="btn primary login-btn" id="verifyOtp">Verify & Login</button>
      <button class="text-btn" id="resendOtp">Resend OTP</button>
      <div class="demo-otp">Demo OTP: <b>${otp}</b></div>`;
    document.getElementById("verifyOtp").onclick=verify;
    document.getElementById("resendOtp").onclick=showOtp;
    document.getElementById("adminOtp").focus();
  }

  function verify(){
    const entered=document.getElementById("adminOtp").value.trim();
    if(entered===otp){
      sessionStorage.setItem("sahasetuAdminLoggedIn","true");
      sessionStorage.setItem("sahasetuAdminPhone",phone);
      overlay.classList.add("hidden");
      toast("Welcome to SahaSetu Admin");
    }else{
      toast("Incorrect OTP. Use the demo OTP shown below.");
    }
  }

  function logout(){
    sessionStorage.removeItem("sahasetuAdminLoggedIn");
    otp=null;
    overlay.classList.remove("hidden");
    showPhone();
    window.scrollTo(0,0);
  }

  const logged=sessionStorage.getItem("sahasetuAdminLoggedIn")==="true";
  if(logged){
    overlay.classList.add("hidden");
  }else{
    overlay.classList.remove("hidden");
    showPhone();
  }

  const logoutBtn=document.getElementById("logout");
  if(logoutBtn) logoutBtn.onclick=logout;
})();

