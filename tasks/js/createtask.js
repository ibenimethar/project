 
    var importantBtn = document.querySelector('.Important');
    var optionalBtn = document.querySelector('.Optional');
    var waitingBtn = document.querySelector('.Waiting');
    var importantSection = document.getElementById('important');
    var optionalSection = document.getElementById('optional');
    var waitSection = document.getElementById('wait');
    var triangle = document.querySelector('.triangle')

    function hideAllSections() {
        importantSection.style.display = 'none';
        optionalSection.style.display = 'none';
        waitSection.style.display = 'none';
    }

    importantBtn.addEventListener('click', function() {
        hideAllSections();
        importantSection.style.display = 'block';
       triangle.style.left = '37%';

    });

    optionalBtn.addEventListener('click', function() {
        hideAllSections();
        optionalSection.style.display = 'block';
       triangle.style.left = '62%';
    });

    waitingBtn.addEventListener('click', function() {
        hideAllSections();
        waitSection.style.display = 'block';
       triangle.style.left = '88%';

    });
    var AddS = document.querySelector('.AddS');
    var durationBtn = document.querySelector('.duration-timer');
    var gradeBtn = document.querySelector('.grade');
    var substaskSection = document.getElementById('subtasks');
    var durationSection = document.getElementById('durations');
    var gradeSection = document.getElementById('grades');
    var trianglebtn = document.querySelector('.triangle-btn');

    function hide() {
        substaskSection.style.display = 'none';
        durationSection.style.display = 'none';
        gradeSection.style.display = 'none';
    }

    AddS.addEventListener('click', function() {
        hide();
        substaskSection.style.display = 'block';
        trianglebtn.style.left = '0.4%'; 
    });

    durationBtn.addEventListener('click', function() {
        hide();
        durationSection.style.display = 'block';
        trianglebtn.style.left = '18.8%'; 
    });

    gradeBtn.addEventListener('click', function() {
        hide();
        gradeSection.style.display = 'block';
        trianglebtn.style.left = '9.1%'; 
    });




function addSubsTask(){
  
    const subtasksContainer = document.getElementById('subtasks-container');
    const subtaskvalue = document.querySelector('.create-substaks').value.trim();
    if(subtaskvalue !=''){
    
        const subtaskDiv = document.createElement('div');
  
        subtaskDiv .classList.add('subtask-input');
 
       
        subtaskDiv.textContent = `  ${subtaskvalue} `;
      
        subtasksContainer.appendChild(subtaskDiv);
        document.querySelector('.create-substaks').value ='';
        document.querySelector('.create-substaks').focus();
    }


}
document.querySelector('.create-substaks').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addSubsTask(); 
    }
});
// document.addEventListener('DOMContentLoaded', () => {
//     // Handle section visibility
//     const sections = document.querySelectorAll('.content-section-btn');
//     sections.forEach(section => {
//         section.addEventListener('click', () => {
//             // Remove active class from all sections
//             sections.forEach(sec => sec.classList.remove('active'));

//             // Add active class to clicked section
//             section.classList.add('active');
//         });
//     });
// });
                        
function addobstacles(){

const obstaclCntainer = document.getElementById('obstacles-entry');
const obstacinput = document.querySelector('.create-obstacles').value.trim();
if(obstacinput !=''){

const obsdiv = document.createElement('li');

obsdiv .classList.add('obstacle-input');


obsdiv.textContent = `  ${obstacinput} `;

obstaclCntainer.appendChild(obsdiv);
document.querySelector('.create-obstacles').value ='';
document.querySelector('.create-obstacles').focus();
}


}
document.querySelector('.create-obstacles').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
event.preventDefault(); 
addobstacles(); 
}
});