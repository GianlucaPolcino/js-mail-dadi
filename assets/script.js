// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creo l'arrey di mail
const mailList = ["pincopallo@mail.it", "melapera@mail.it", "mariorossi@mail.it"];

// Chiedo all'utente di inserire la sua mail
const userMail = prompt("Prego, inserisci la tua Mail!");
let validMail = false;

// Creo le constanti dei dadi 
const userNumber = Math.floor((Math.random() * 6) + 1);
const pcNumber = Math.floor((Math.random() * 6) + 1);
const diceRow = document.getElementById("dice-row");
const userDice = document.getElementById("user-dice");
const pcDice = document.getElementById("pc-dice");


// Creo il ciclo per confermare la validità della mail
for (i = 0; i < mailList.length; i++) {
  if (mailList[i] === userMail) {
    validMail = true;
  }
}

// Confermo la validità della mailList e, in caso di validità, procedo con il gioco
if (validMail == true) {
  document.getElementById("validmessage").innerHTML = ("La tua Mail è valida!");
  userDice.append(userNumber);
  pcDice.append(pcNumber);
  if (userNumber > pcNumber){
    document.getElementById("dicewinner").innerHTML = ("Congratulazioni! HAI VINTO!");
  } else if (userNumber == pcNumber){
    document.getElementById("dicewinner").innerHTML = ("Hai pareggiato! Ritenta!");
  } else {
    document.getElementById("dicewinner").innerHTML = ("Che sfortuna, hai perso :(");
  }
  
} else{
  document.getElementById("validmessage").innerHTML = ("Spiacenti, la Mail inserita non è valida.");
  diceRow.classList.add('d-none');
}






