function showResultModal(){
  document.getElementById('resultModal').classList.add('active');
  document.getElementById('nameInput').focus();
}
function closeResultModal(){
  document.getElementById('resultModal').classList.remove('active');
}
function openResultWindow() {
  window.open('result.html', '_blank');
}
function showDevMsg(){
  var card=document.getElementById('devMsgCard');
  card.classList.add('show');
  clearTimeout(window.devMsgTimeout);
  window.devMsgTimeout=setTimeout(function(){card.classList.remove('show');},3000);
}
const students=[
  {roll:'210899',enroll:'AY147274190',name:'RAKSHA JAIN',marks:'246/30 - SGPA :8.2',result:'PASS'},
  {roll:'210900',enroll:'AY147274191',name:'FARHA KHATOON',marks:'258/30 - SGPA :8.6',result:'PASS'},
  {roll:'210901',enroll:'AY147274209',name:'AMAAN KHAN',marks:'228/30 - SGPA :7.6',result:'PASS'},
  {roll:'210902',enroll:'AY147274203',name:'NIDA BEE',marks:'225/30 - SGPA :7.5',result:'PASS'},
  {roll:'210903',enroll:'AY147274194',name:'MAYANK MATHUR',marks:'240/30 - SGPA :8',result:'PASS'},
  {roll:'210904',enroll:'AY147274211',name:'TULSI VISHWAKARMA',marks:'237/30 - SGPA :7.9',result:'PASS'},
  {roll:'210905',enroll:'AY147274206',name:'UTKARSH RAI',marks:'231/30 - SGPA :7.7',result:'PASS'},
  {roll:'210906',enroll:'AY147274193',name:'NANDNI BAIRAGI',marks:'234/30 - SGPA :7.8',result:'PASS'},
  {roll:'210907',enroll:'AY147274214',name:'PUSHPENDRA SHARMA',marks:'219/30 - SGPA :7.3',result:'PASS'},
  {roll:'210908',enroll:'AY147274213',name:'AAYRA QURESHI',marks:'234/30 - SGPA :7.8',result:'PASS'},
  {roll:'210909',enroll:'AY147274186',name:'PRATEEK MISHRA',marks:'246/30 - SGPA :8.2',result:'PASS'},
  {roll:'210910',enroll:'AY147274185',name:'SATYAM DANGI',marks:'228/30 - SGPA :7.6',result:'PASS'},
  {roll:'210911',enroll:'AY147274184',name:'CHETAN JADIYA',marks:'240/30 - SGPA :8',result:'PASS'},
  {roll:'210912',enroll:'AY147274208',name:'SOMIL NEMA',marks:'243/30 - SGPA :8.1',result:'PASS'},
  {roll:'210913',enroll:'AY147274198',name:'AMIT LODHI',marks:'213/30 - SGPA :7.1',result:'PASS'},
  {roll:'210914',enroll:'AY147274217',name:'NIKIT RAJPUT',marks:'222/30 - SGPA :7.4',result:'PASS'}
];
function showResult(){
  const nameInput=document.getElementById('nameInput').value.trim().toUpperCase();
  const nameSpan=document.getElementById('studentName');
  const rollSpan=document.getElementById('studentRoll');
  const enrollSpan=document.getElementById('studentEnroll');
  const marksSpan=document.getElementById('studentMarks');
  const resultSpan=document.getElementById('studentResult');
  if(!nameInput){
    nameSpan.textContent='-';
    rollSpan.textContent='-';
    enrollSpan.textContent='-';
    marksSpan.textContent='-';
    resultSpan.textContent='-';
    return;
  }
  const found=students.find(s=>s.name.includes(nameInput));
  if(found){
    nameSpan.textContent=found.name;
    rollSpan.textContent=found.roll;
    enrollSpan.textContent=found.enroll;
    marksSpan.textContent=found.marks;
    resultSpan.innerHTML='<span class="result-badge">'+found.result+'</span>';
  }else{
    nameSpan.textContent='Not Found';
    rollSpan.textContent='-';
    enrollSpan.textContent='-';
    marksSpan.textContent='-';
    resultSpan.textContent='-';
  }
}
showResult();

// Notice board functionality
const notices = [
  {
    date: '15 May 2023',
    title: 'Final Semester Results Announced',
    text: 'All students can now check their results through the results portal.'
  },
  {
    date: '12 May 2023',
    title: 'Summer Internship Applications Open',
    text: 'Apply before May 25th to secure your spot in our summer internship program.'
  },
  {
    date: '10 May 2023',
    title: 'Campus Reopening Schedule',
    text: 'The campus will reopen for the new academic year on June 15th, 2023.'
  },
  {
    date: '05 May 2023',
    title: 'Scholarship Announcement',
    text: 'Merit scholarships for the next semester will be announced on May 20th.'
  },
  {
    date: '01 May 2023',
    title: 'New Course Offerings',
    text: 'Check the academic portal for new courses being offered next semester.'
  },
  {
    date: '28 Apr 2023',
    title: 'Library Extended Hours',
    text: 'The central library will remain open until 11 PM during exam week.'
  }
];

// Add click event to notice items
document.addEventListener('DOMContentLoaded', function() {
  const noticeItems = document.querySelectorAll('.notice-item');
  noticeItems.forEach(item => {
    item.addEventListener('click', function() {
      // Highlight the clicked notice
      noticeItems.forEach(i => i.classList.remove('active-notice'));
      this.classList.add('active-notice');
      
      // Show a message
      showDevMsg();
    });
  });
  
  // Add click event for event cards
  renderEvents(); // Initial render
  
  // Delegate event listener for dynamically created event cards
  document.getElementById('eventsList').addEventListener('click', function(e) {
    if (e.target.closest('.event-card')) {
      showDevMsg();
    }
  });
  
  // Add section toggle functionality
  const sectionToggles = document.querySelectorAll('.section-toggle');
  if (sectionToggles) {
    sectionToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const content = this.closest('.section-container').querySelector('.section-content');
        const icon = this.querySelector('.toggle-icon');
        
        if (content.style.display === 'none' || !content.style.display) {
          content.style.display = 'block';
          icon.textContent = '-';
        } else {
          content.style.display = 'none';
          icon.textContent = '+';
        }
      });
    });
  }
  
  // Add ticker controls functionality
  const prevBtn = document.querySelector('.ticker-control.prev');
  const nextBtn = document.querySelector('.ticker-control.next');
  const pauseBtn = document.querySelector('.ticker-control.pause');
  
  if (prevBtn && nextBtn && pauseBtn) {
    let isPaused = false;
    
    pauseBtn.addEventListener('click', function() {
      isPaused = !isPaused;
      this.textContent = isPaused ? '▶' : '||';
    });
    
    prevBtn.addEventListener('click', function() {
      // For demo - would normally cycle through news items
      showDevMsg();
    });
    
    nextBtn.addEventListener('click', function() {
      // For demo - would normally cycle through news items
      showDevMsg();
    });
  }
  
  // Add menu button functionality
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      showDevMsg();
    });
  }
  
  // Add bottom navigation functionality
  const navButtons = document.querySelectorAll('.nav-button');
  if (navButtons) {
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        showDevMsg();
      });
    });
  }
});

// Campus images - kept for reference but no longer used for main slider
const mainSliderImgs=[
  {src:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',cap:'Campus Main Gate'},
  {src:'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',cap:'Library'},
  {src:'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',cap:'Sports Complex'},
  {src:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',cap:'Annual Events'}
];

// Original slider functionality - disabled since we're using the new slideshow
// let mainIdx=0,mainSliding=false;
// function slideMain(dir){
//   if(mainSliding)return;
//   mainSliding=true;
//   let a=document.getElementById('mainImgA'),b=document.getElementById('mainImgB'),cap=document.getElementById('mainCap');
//   let nextIdx=(mainIdx+dir+mainSliderImgs.length)%mainSliderImgs.length;
//   b.src=mainSliderImgs[nextIdx].src;
//   b.className=dir>0?'slider-img slide-in':'slider-img slide-out';
//   setTimeout(()=>{
//     a.className=dir>0?'slider-img slide-out':'slider-img slide-in';
//     b.className='slider-img active';
//     cap.textContent=mainSliderImgs[nextIdx].cap;
//     setTimeout(()=>{
//       a.className=dir>0?'slider-img slide-in':'slider-img slide-out';
//       b.className='slider-img active';
//       let tmp=a;a=b;b=tmp;
//       document.getElementById('mainImgA').id='mainImgB';
//       document.getElementById('mainImgB').id='mainImgA';
//       mainIdx=nextIdx;
//       mainSliding=false;
//     },700);
//   },10);
// }
// setInterval(()=>{slideMain(1);},3000); // Disabled since we're using the new slideshow

document.getElementById('resultModal')?.addEventListener('click',function(e){if(e.target===this)closeResultModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeResultModal();}});

// Events functionality
const events=[
  {date:'21 May 2025',title:'Annual Tech Fest "InnovateX 2025" Concludes Successfully'},
  {date:'18 May 2025',title:'Inter-College Cricket Tournament Trophy Returns Home'},
  {date:'15 May 2025',title:'Student Startup "EduSmart" Wins State-Level Pitch Competition'},
  {date:'10 May 2025',title:'New Library Wing Inaugurated by District Collector'},
  {date:'09 May 2025',title:'Students Win National Robotics Competition: First Prize'},
  {date:'03 May 2025',title:'University Receives 5-Star Rating by NAAC Accreditation'},
  {date:'28 Apr 2025',title:'Latest Research on AI Published in International Journal'},
  {date:'15 Apr 2025',title:'Alumni Donates ₹5 Crore for New Technology Center'},
  {date:'01 Apr 2025',title:'COVID-19 Vaccination Camp to Start Next Week on Campus'},
  {date:'20 Mar 2025',title:'Vice Chancellor Appointed as Member of Education Commission'},
  {date:'10 Mar 2025',title:'Campus Placement Records Broken: 95% Students Placed'},
  {date:'01 Mar 2025',title:'University Ranked #3 in Engineering by National Survey'},
  {date:'25 May 2025',title:'Faculty Member Receives Presidential Award for Research'},
  {date:'20 May 2025',title:'New Collaboration with MIT for Student Exchange Program'},
  {date:'18 May 2025',title:'University Sports Team Wins Inter-University Championship'}
];
let eventIdx=0;
function renderEvents(){
  const list=document.getElementById('eventsList');
  list.innerHTML='';
  for(let i=0;i<4;i++){
    const e=events[(eventIdx+i)%events.length];
    const card=document.createElement('div');
    card.className='event-card';
    card.innerHTML=`<div class='event-date'>${e.date}</div><div class='event-title'>${e.title}</div>`;
    list.appendChild(card);
  }
}
function slideEvents(dir){
  const eventsList = document.getElementById('eventsList');
  
  // Add slide out animation
  eventsList.style.opacity = '0';
  eventsList.style.transform = dir > 0 ? 'translateX(-10px)' : 'translateX(10px)';
  
  setTimeout(() => {
    // Update event index
    eventIdx = (eventIdx + dir + events.length) % events.length;
    
    // Render new events
    renderEvents();
    
    // Add slide in animation
    setTimeout(() => {
      eventsList.style.opacity = '1';
      eventsList.style.transform = 'translateX(0)';
    }, 50);
  }, 300);
}
renderEvents();
setInterval(()=>{slideEvents(1);},3000); // Increased frequency since buttons are removed
