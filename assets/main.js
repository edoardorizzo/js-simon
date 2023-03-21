/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//generare 5 numeri casuali e associarli ad un elemento in pagina

const ul = document.createElement('ul');
document.body.appendChild(ul);

let numbers = [];

function generateRandomNumbers(number) {
    for (let index = 0; index < 5; index++) {
        const li = document.createElement('li');
        let number = numbers[index];
        number = Math.floor(Math.random() * 100 + 1);
        li.innerHTML = number;
        ul.appendChild(li)
        console.log(number);
    }
}
generateRandomNumbers(numbers);


const timer = setTimeout(function(){
    ul.style.display = ('none');
}, 1000)

const submit = document.querySelector('button');
submit.addEventListener ('click', function(){
    const userNumber = document.querySelector('input').valueAsNumber;
    console.log(userNumber);

    if (userNumber == numbers) {
        alert('Hai indovinato tutti i numeri')
    } else {
        alert('Purtroppo i numeri non sono corretti, riprova');
        document.location.reload();
    }
})