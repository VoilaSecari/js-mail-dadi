//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numeriPlayer = [];
const numeriCPU = [];

// const randomNumberPlayer = Math.floor(Math.random() * 6) + 1;
// const randomNumberCPU = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumberPlayer);
// console.log(randomNumberCPU);

for (i = 0; i < 1; i++) {
  const randomNumberPlayer = Math.floor(Math.random() * 6) + 1;
  const randomNumberCPU = Math.floor(Math.random() * 6) + 1;
  if (randomNumberPlayer > randomNumberCPU) {
    console.log(
      "Il tuo numero:" +
        randomNumberPlayer +
        "\nIl numero della CPU :" +
        randomNumberCPU +
        "\nHai vinto"
    );
  } else if (randomNumberPlayer < randomNumberCPU) {
    console.log(
      "Il tuo numero:" +
        randomNumberPlayer +
        "\nIl numero della CPU :" +
        randomNumberCPU +
        "\nHai perso"
    );
  } else if (randomNumberPlayer === randomNumberCPU) {
    console.log(
      "Il tuo numero:" +
        randomNumberPlayer +
        "\nIl numero della CPU :" +
        randomNumberCPU +
        "\nSiete pari"
    );
  }
}
