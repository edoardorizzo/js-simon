/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//generare 5 numeri casuali e associarli ad un elemento in pagina

const ul = document.createElement('ul');
document.body.appendChild(ul);

let numbers = [];

function generateRandomNumbers() {
  for (let index = 0; index < 5; index++) {
    const li = document.createElement('li');
    let number = Math.floor(Math.random() * 100 + 1);
    li.innerHTML = number;
    ul.appendChild(li);
    numbers.push(number);
    console.log(number);
  }
}

generateRandomNumbers();

const timer = setTimeout(function() {
  ul.style.display = 'none';
}, 5000);

const send = document.querySelector('button');
send.addEventListener('click', function() {
  const userArray = [];
  const inputs = document.querySelectorAll('input');
  for (let index = 0; index < inputs.length; index++) {
    userArray.push(inputs[index].valueAsNumber);
  }
  console.log(userArray);
  
  let isMatch = true;
  for (let index = 0; index < userArray.length; index++) {
    if (!numbers.includes(userArray[index])) {
      isMatch = false;
      break;
    }
  }
  
  if (isMatch) {
    alert('Complimenti! I numeri inseriti corrispondono a quelli generati.');
  } else {
    alert('Mi dispiace, i numeri inseriti sono sbagliati. Riprova!');
    document.location.reload();
  }
});



