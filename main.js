// Volleyball Quiz by seher

document.getElementById("btn").addEventListener("click", Enter);

let correctEl = document.getElementById("num-mark");
let answerEl = document.getElementById("answer");

function Enter() {
  // Mark Question #1
  let answer1 = document.getElementById("ques1-in").value.toLowerCase();
  let numCorrect = 0;
  let numSpan = document.getElementById("ques1");

  if (answer1 === "william g. morgan") {
    document.getElementById("ques1-out").innerHTML = `correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("ques1-out").innerHTML = `in-correct`;
  }

  // Mark Question #2
  let answer2 = document.getElementById("ques2-in").value;

  if (answer2 === "12") {
    document.getElementById("ques2-out").innerHTML = `correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("ques2-out").innerHTML = `in-correct`;
  }

  //Mark Question #3
  let answer3 = document.getElementById("ques3-in").value.toLowerCase();

  if (answer3 === "usa") {
    document.getElementById("ques3-out").innerHTML = `correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("ques3-out").innerHTML = `in-correct`;
  }

  //Mark Question #4
  let answer4 = document.getElementById("ques4-in").value;

  if (answer4 === "1895") {
    document.getElementById("ques4-out").innerHTML = `correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("ques4-out").innerHTML = `in-correct`;
  }

  // Output the Score
  correctEl.innerHTML = numCorrect;

  let percent = (numCorrect / 4) * 100;
  document.getElementById("perc-out").innerHTML = percent;

  // FEED BACK
  if (numCorrect === 0) {
    answerEl.innnerHTML = `<p>You should go to study..</p>`;
  } else if (numCorrect === 1) {
    answerEl.innerHTML = `<p>You got 1 thing correct!</p>`;
  } else if (numCorrect === 2) {
    answerEl.innerHTML = `<p>You need some prictice,and you will be perfect.</p>`;
  } else if (numCorrect === 3) {
    answerEl.innerHTML = `<p>Better,Next time you will!</p>`;
  } else if (numCorrect === 4) {
    answerEl.innerHTML = `<p> Great job!</p>`;
  }
}
