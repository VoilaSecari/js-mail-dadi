// LISTA descrizione

//1- Crea una lista di mail
//2- Chiedi all'utente una mail
//3- Controlla che la mail inserita sia nell'elenco

// STEPS

// 1) Crea un array con le mail presenti
// 2) Prompt utente: inserisci l'email
//    ------- ciclo FOR -------
//  2.1) Controlla nell'array se ogni elemento è true o false (qui serve un approccio booleano, una variante switch)
//  2.2) IF trovi l'e-mail fermati e dai true
//  2.3) ELSE alert dicendo che l'e-mail non è corretta e di rimetterla

const invitedEmails = [
  "john.doe@gmail.com",
  "john.doe.1@gmail.com",
  "john.doe.12@gmail.com",
  "john.doe.123@gmail.com",
  "john.doe.1234@gmail.com",
  "john.doe.12345@gmail.com",
];
let isEmailIncluded = false;

const emailPrompt = prompt("Inserisci la tua e-mail");

for (let i = 0; i < invitedEmails.length && isEmailIncluded !== true; i++) {
  //default stringa per cercare e poi elencare
  const currentEmail = invitedEmails[i];

  if (currentEmail === emailPrompt) {
    isEmailIncluded = true;
  }
}

console.log(isEmailIncluded);
