// Student data with extended information
const students = [
  {
    roll:'210899',
    enroll:'AY147274190',
    name:'RAKSHA JAIN',
    marks:'246/30 - SGPA :8.2',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 85, grade: 'A'},
      {code: 'CS402', name: 'Computer Networks', marks: 78, grade: 'B+'},
      {code: 'CS403', name: 'Operating Systems', marks: 83, grade: 'A'},
      {code: 'CS404', name: 'Web Development', marks: 88, grade: 'A+'},
      {code: 'CS405', name: 'Project Work', marks: 90, grade: 'A+'}
    ],
    performance: {
      theory: 82,
      practical: 85,
      project: 90
    }
  },
  {
    roll:'210900',
    enroll:'AY147274191',
    name:'FARHA KHATOON',
    marks:'258/30 - SGPA :8.6',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 88, grade: 'A+'},
      {code: 'CS402', name: 'Computer Networks', marks: 85, grade: 'A'},
      {code: 'CS403', name: 'Operating Systems', marks: 86, grade: 'A'},
      {code: 'CS404', name: 'Web Development', marks: 90, grade: 'A+'},
      {code: 'CS405', name: 'Project Work', marks: 92, grade: 'A+'}
    ],
    performance: {
      theory: 86,
      practical: 88,
      project: 92
    }
  },
  {
    roll:'210901',
    enroll:'AY147274209',
    name:'AMAAN KHAN',
    marks:'228/30 - SGPA :7.6',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 75, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 72, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 76, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 80, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 82, grade: 'A'}
    ],
    performance: {
      theory: 74,
      practical: 78,
      project: 82
    }
  },
  {
    roll:'210902',
    enroll:'AY147274203',
    name:'NIDA BEE',
    marks:'225/30 - SGPA :7.5',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 74, grade: 'B'},
      {code: 'CS402', name: 'Computer Networks', marks: 71, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 75, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 78, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 80, grade: 'A'}
    ],
    performance: {
      theory: 73,
      practical: 76,
      project: 80
    }
  },
  {
    roll:'210903',
    enroll:'AY147274194',
    name:'MAYANK MATHUR',
    marks:'240/30 - SGPA :8',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 80, grade: 'A'},
      {code: 'CS402', name: 'Computer Networks', marks: 78, grade: 'B+'},
      {code: 'CS403', name: 'Operating Systems', marks: 82, grade: 'A'},
      {code: 'CS404', name: 'Web Development', marks: 85, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 86, grade: 'A'}
    ],
    performance: {
      theory: 80,
      practical: 83,
      project: 86
    }
  },
  {
    roll:'210904',
    enroll:'AY147274211',
    name:'TULSI VISHWAKARMA',
    marks:'237/30 - SGPA :7.9',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 78, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 75, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 79, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 82, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 83, grade: 'A'}
    ],
    performance: {
      theory: 78,
      practical: 77,
      project: 83
    }
  },
  {
    roll:'210905',
    enroll:'AY147274206',
    name:'UTKARSH RAI',
    marks:'231/30 - SGPA :7.7',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 75, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 72, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 76, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 79, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 80, grade: 'A'}
    ],
    performance: {
      theory: 74,
      practical: 78,
      project: 80
    }
  },
  {
    roll:'210906',
    enroll:'AY147274193',
    name:'NANDNI BAIRAGI',
    marks:'234/30 - SGPA :7.8',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 76, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 73, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 77, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 79, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 80, grade: 'A'}
    ],
    performance: {
      theory: 76,
      practical: 77,
      project: 80
    }
  },
  {
    roll:'210907',
    enroll:'AY147274214',
    name:'PUSHPENDRA SHARMA',
    marks:'219/30 - SGPA :7.3',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 70, grade: 'B'},
      {code: 'CS402', name: 'Computer Networks', marks: 68, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 72, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 74, grade: 'B'},
      {code: 'CS405', name: 'Project Work', marks: 76, grade: 'B+'}
    ],
    performance: {
      theory: 70,
      practical: 74,
      project: 76
    }
  },
  {
    roll:'210908',
    enroll:'AY147274213',
    name:'AAYRA QURESHI',
    marks:'234/30 - SGPA :7.8',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 76, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 73, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 77, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 79, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 80, grade: 'A'}
    ],
    performance: {
      theory: 76,
      practical: 77,
      project: 80
    }
  },
  {
    roll:'210909',
    enroll:'AY147274186',
    name:'PRATEEK MISHRA',
    marks:'246/30 - SGPA :8.2',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 80, grade: 'A'},
      {code: 'CS402', name: 'Computer Networks', marks: 78, grade: 'B+'},
      {code: 'CS403', name: 'Operating Systems', marks: 82, grade: 'A'},
      {code: 'CS404', name: 'Web Development', marks: 85, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 86, grade: 'A'}
    ],
    performance: {
      theory: 80,
      practical: 83,
      project: 86
    }
  },
  {
    roll:'210910',
    enroll:'AY147274185',
    name:'SATYAM DANGI',
    marks:'228/30 - SGPA :7.6',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 75, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 72, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 76, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 79, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 80, grade: 'A'}
    ],
    performance: {
      theory: 74,
      practical: 78,
      project: 80
    }
  },
  {
    roll:'210911',
    enroll:'AY147274184',
    name:'CHETAN JADIYA',
    marks:'240/30 - SGPA :8',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 78, grade: 'B+'},
      {code: 'CS402', name: 'Computer Networks', marks: 75, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 79, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 82, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 83, grade: 'A'}
    ],
    performance: {
      theory: 78,
      practical: 77,
      project: 83
    }
  },
  {
    roll:'210912',
    enroll:'AY147274208',
    name:'SOMIL NEMA',
    marks:'243/30 - SGPA :8.1',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 82, grade: 'A'},
      {code: 'CS402', name: 'Computer Networks', marks: 79, grade: 'B+'},
      {code: 'CS403', name: 'Operating Systems', marks: 83, grade: 'A'},
      {code: 'CS404', name: 'Web Development', marks: 87, grade: 'A'},
      {code: 'CS405', name: 'Project Work', marks: 88, grade: 'A+'}
    ],
    performance: {
      theory: 81,
      practical: 85,
      project: 88
    }
  },
  {
    roll:'210913',
    enroll:'AY147274198',
    name:'AMIT LODHI',
    marks:'213/30 - SGPA :7.1',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 70, grade: 'B'},
      {code: 'CS402', name: 'Computer Networks', marks: 68, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 72, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 74, grade: 'B'},
      {code: 'CS405', name: 'Project Work', marks: 76, grade: 'B+'}
    ],
    performance: {
      theory: 70,
      practical: 74,
      project: 76
    }
  },
  {
    roll:'210914',
    enroll:'AY147274217',
    name:'NIKIT RAJPUT',
    marks:'222/30 - SGPA :7.4',
    result:'PASS',
    subjects: [
      {code: 'CS401', name: 'Database Management Systems', marks: 72, grade: 'B'},
      {code: 'CS402', name: 'Computer Networks', marks: 70, grade: 'B'},
      {code: 'CS403', name: 'Operating Systems', marks: 74, grade: 'B+'},
      {code: 'CS404', name: 'Web Development', marks: 76, grade: 'B+'},
      {code: 'CS405', name: 'Project Work', marks: 78, grade: 'A'}
    ],
    performance: {
      theory: 72,
      practical: 76,
      project: 78
    }
  }
];

// DOM Elements
const nameInput = document.getElementById('nameInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');
const notFoundMessage = document.getElementById('notFoundMessage');
const studentName = document.getElementById('studentName');
const studentRoll = document.getElementById('studentRoll');
const studentEnroll = document.getElementById('studentEnroll');
const studentMarks = document.getElementById('studentMarks');
const studentResult = document.getElementById('studentResult');
const marksProgress = document.getElementById('marksProgress');
const subjectTableBody = document.getElementById('subjectTableBody');
const theoryBar = document.getElementById('theoryBar');
const practicalBar = document.getElementById('practicalBar');
const projectBar = document.getElementById('projectBar');
const theorySegment = document.getElementById('theorySegment');
const practicalSegment = document.getElementById('practicalSegment');
const projectSegment = document.getElementById('projectSegment');
const avgPerformance = document.getElementById('avgPerformance');

// Event Listeners
searchButton.addEventListener('click', searchStudent);
nameInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchStudent();
  }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize back button functionality
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
  
  // Initialize search button
  const searchButton = document.getElementById('searchButton');
  if (searchButton) {
    searchButton.addEventListener('click', showResult);
  }
  
  // Initialize search input enter key
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        showResult();
      }
    });
    
    // Focus the search input on page load
    nameInput.focus();
  }

  // Check if there's a name parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');
  if (nameParam) {
    nameInput.value = nameParam;
    showResult();
  }
});

// Search student function
function searchStudent() {
  const name = nameInput.value.trim().toUpperCase();
  
  if (!name) {
    showNotFound();
    return;
  }
  
  const foundStudent = students.find(s => s.name.includes(name));
  
  if (foundStudent) {
    displayStudentResult(foundStudent);
  } else {
    showNotFound();
  }
}

// Display student result
function displayStudentResult(student) {
  // Update basic info
  studentName.textContent = student.name;
  studentRoll.textContent = student.roll;
  studentEnroll.textContent = student.enroll;
  studentMarks.textContent = student.marks;
  studentResult.textContent = student.result;
  
  // Extract SGPA value for progress bar
  const sgpaMatch = student.marks.match(/SGPA\s*:\s*(\d+(\.\d+)?)/i);
  if (sgpaMatch && sgpaMatch[1]) {
    const sgpa = parseFloat(sgpaMatch[1]);
    const progressPercentage = (sgpa / 10) * 100;
    marksProgress.style.width = `${progressPercentage}%`;
  } else {
    marksProgress.style.width = '0%';
  }
  
  // Generate subject table rows
  subjectTableBody.innerHTML = '';
  if (student.subjects) {
    student.subjects.forEach(subject => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${subject.code}</td>
        <td>${subject.name}</td>
        <td>${subject.marks}</td>
        <td>${subject.grade}</td>
      `;
      subjectTableBody.appendChild(row);
    });
  }
  
  // Update performance bars
  if (student.performance) {
    theoryBar.style.width = `${student.performance.theory}%`;
    practicalBar.style.width = `${student.performance.practical}%`;
    projectBar.style.width = `${student.performance.project}%`;
    
    // Update pie chart segments
    updatePieChart(student.performance);
  } else {
    theoryBar.style.width = '0%';
    practicalBar.style.width = '0%';
    projectBar.style.width = '0%';
    
    // Reset pie chart
    resetPieChart();
  }
  
  // Show result container, hide not found message
  resultContainer.style.display = 'flex';
  notFoundMessage.style.display = 'none';
  
  // Add animation
  resultContainer.style.animation = 'fadeIn 0.5s ease forwards';
}

// Show not found message
function showNotFound() {
  resultContainer.style.display = 'none';
  notFoundMessage.style.display = 'flex';
  notFoundMessage.style.animation = 'fadeIn 0.5s ease forwards';
}

// Update pie chart based on performance
function updatePieChart(performance) {
  const total = performance.theory + performance.practical + performance.project;
  const average = Math.round(total / 3);
  
  // Calculate proportions
  const theoryProportion = performance.theory / total;
  const practicalProportion = performance.practical / total;
  const projectProportion = performance.project / total;
  
  // Calculate angles for pie segments
  const theoryAngle = theoryProportion * 360;
  const practicalAngle = practicalProportion * 360;
  
  // Update segment positioning
  theorySegment.style.transform = `rotate(0deg)`;
  theorySegment.style.clipPath = `polygon(50% 50%, 50% 0%, ${theoryProportion > 0.5 ? '0% 0%, 0% 100%, 100% 100%' : '100% 0%'}, 50% 50%)`;
  
  practicalSegment.style.transform = `rotate(${theoryAngle}deg)`;
  practicalSegment.style.clipPath = `polygon(50% 50%, 50% 0%, ${practicalProportion > 0.5 ? '0% 0%, 0% 100%, 100% 100%' : '100% 0%'}, 50% 50%)`;
  
  projectSegment.style.transform = `rotate(${theoryAngle + practicalAngle}deg)`;
  projectSegment.style.clipPath = `polygon(50% 50%, 50% 0%, ${projectProportion > 0.5 ? '0% 0%, 0% 100%, 100% 100%' : '100% 0%'}, 50% 50%)`;
  
  // Update average in center
  avgPerformance.textContent = `${average}%`;
}

// Reset pie chart to default state
function resetPieChart() {
  theorySegment.style.transform = 'rotate(0deg)';
  theorySegment.style.clipPath = 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)';
  
  practicalSegment.style.transform = 'rotate(120deg)';
  practicalSegment.style.clipPath = 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)';
  
  projectSegment.style.transform = 'rotate(240deg)';
  projectSegment.style.clipPath = 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)';
  
  avgPerformance.textContent = '0%';
}

// Handle the search functionality
function showResult() {
  const nameInput = document.getElementById('nameInput').value.trim().toUpperCase();
  const nameSpan = document.getElementById('studentName');
  const rollSpan = document.getElementById('studentRoll');
  const enrollSpan = document.getElementById('studentEnroll');
  const marksSpan = document.getElementById('studentMarks');
  const resultSpan = document.getElementById('studentResult');
  const resultContainer = document.getElementById('resultContainer');
  const notFoundMessage = document.getElementById('notFoundMessage');
  
  resultContainer.style.display = 'none';
  notFoundMessage.style.display = 'none';
  
  if (!nameInput) {
    nameSpan.textContent = '-';
    rollSpan.textContent = '-';
    enrollSpan.textContent = '-';
    marksSpan.textContent = '-';
    resultSpan.textContent = '-';
    return;
  }
  
  const found = students.find(s => s.name.includes(nameInput));
  
  if (found) {
    nameSpan.textContent = found.name;
    rollSpan.textContent = found.roll;
    enrollSpan.textContent = found.enroll;
    marksSpan.textContent = found.marks;
    resultSpan.innerHTML = found.result;
    
    // Show the result container
    resultContainer.style.display = 'block';
    
    // Update the progress bar if it exists
    const progressBar = document.getElementById('marksProgress');
    if (progressBar) {
      const marksStr = found.marks;
      const sgpaMatch = marksStr.match(/SGPA\s*:\s*(\d+\.?\d*)/i);
      
      if (sgpaMatch && sgpaMatch[1]) {
        const sgpa = parseFloat(sgpaMatch[1]);
        const percentage = (sgpa / 10) * 100;
        progressBar.style.width = percentage + '%';
      }
    }
  } else {
    // Show not found message
    notFoundMessage.style.display = 'flex';
  }
}

// Function to show development message
function showDevMsg() {
  const msgBox = document.createElement('div');
  msgBox.className = 'dev-msg-card show';
  msgBox.textContent = 'Feature under development';
  document.body.appendChild(msgBox);
  
  setTimeout(function() {
    msgBox.classList.remove('show');
    setTimeout(function() {
      document.body.removeChild(msgBox);
    }, 300);
  }, 2000);
}

// Style for dev message card
const style = document.createElement('style');
style.textContent = `
.dev-msg-card {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #003366;
  padding: 16px 32px;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.13);
  font-size: 1.08rem;
  font-weight: 500;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.dev-msg-card.show {
  opacity: 1;
  pointer-events: auto;
}
`;
document.head.appendChild(style); 