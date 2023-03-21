/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//generare 5 numeri casuali e associarli ad un elemento in pagina
const ul = document.createElement('ul');

for (let index = 0; index < 5; index++) {
    const li = document.createElement('li');
    let randomNumbers = numbers[index];
    randomNumbers = Math.floor(Math.random() * 100 + 1);
    li.textContent = randomNumbers;
    ul.appendChild(li)
    console.log(randomNumbers);
}