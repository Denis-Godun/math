let audio = document.querySelector(".error");

let firstOption = document.querySelector(".item1"),
  secondOption = document.querySelector(".item2"),
  thirdOption = document.querySelector(".item3");

let answer = 0;

let createEquation = function () {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);

  let answer1 = Math.floor(Math.random() * 13);
  let answer2 = Math.floor(Math.random() * 13);

  allAnswer = [];
  switchAnswer = [];

  answer = eval(num1 + num2);

  document.querySelector(".num1").innerHTML = num1;
  document.querySelector(".num2").innerHTML = num2;

  allAnswer = [answer, answer1, answer2];

  for (i = allAnswer.length; i--; ) {
    switchAnswer.push(
      allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  firstOption.innerHTML = switchAnswer[0];
  secondOption.innerHTML = switchAnswer[1];
  thirdOption.innerHTML = switchAnswer[2];
};

firstOption.onclick = () => {
  if (firstOption.innerHTML == answer) {
    createEquation();
  } else {
    audio.play();
  }
};
secondOption.onclick = () => {
  if (secondOption.innerHTML == answer) {
    createEquation();
  } else {
    audio.play();
  }
};
thirdOption.onclick = () => {
  if (thirdOption.innerHTML == answer) {
    createEquation();
  } else {
    audio.play();
  }
};

createEquation();
