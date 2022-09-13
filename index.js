let countHome = 0;
let countGuest = 0;
const score1El = document.querySelector('.score1');
const score2El = document.querySelector('.score2');
const resetBtn = document.querySelector('.reset-btn');
const btns = document.querySelectorAll('.btn');
/* Buttons to add points */

resetBtn.addEventListener('click', reset);

/* Check leader func */
function checkLeader() {
     if(countHome > countGuest && countGuest > 0) {
         score1El.classList.add('leader');
         score2El.classList.remove('leader');
     } else if(countHome < countGuest && countHome > 0) {
         score2El.classList.add('leader');
        score1El.classList.remove('leader');
     }
 }

 function addHome(num) {
    countHome += num;
    score2El.textContent = countHome;
    checkLeader();
}

/* Add a point to Guest player */
function addGuest(num) {
    countGuest += num;
    score2El.textContent = countGuest;
    checkLeader();
}

/* Start a new game */
function reset() {
    countHome = 0;
    countGuest = 0;
    score1El.textContent = countHome;
    score2El.textContent = countGuest;
    score2El.classList.remove('leader');
    score1El.classList.remove('leader');
}