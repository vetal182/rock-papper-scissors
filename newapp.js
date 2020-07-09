const btns = document.querySelectorAll('.choices');
const displayresult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    user = e.target.closest('.choices').id;
    let comp = getComputerChoice();
    results(user, comp);
    computerChoice.innerHTML = comp;
    userChoice.innerHTML = user;
    displayresult.innerHTML = results(user, comp);
  });
});

function getComputerChoice() {
  let randomNum = Math.ceil(Math.random() * 3);
  switch (randomNum) {
    case 1:
      return 'Камень';
    case 2:
      return 'Бумага';
    case 3:
      return 'Ножницы';
  }
}
function results(user, comp) {
  const win = 'Ты выиграл';
  const lose = 'Ты проиграл';

  if (user === comp) {
    return 'Ничья';
  } else if (user === 'Камень' && comp === 'Бумага') {
    return lose;
  } else if (user === 'Камень' && comp === 'Ножницы') {
    return win;
  } else if (user === 'Бумага' && comp === 'Камень') {
    return win;
  } else if (user === 'Бумага' && comp === 'Ножницы') {
    return lose;
  } else if (user === 'Ножницы' && comp == 'Бумага') {
    return win;
  } else if (user === 'Ножницы' && comp === 'Камень') {
    return lose;
  }
}
