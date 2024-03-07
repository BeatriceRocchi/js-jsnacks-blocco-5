//Dati per stampare in pagina
const outputData = document.querySelector(".data-wrapper");
const output1 = document.querySelector(".output-1");
const output2a = document.querySelector(".output-2a");
const output2b = document.querySelector(".output-2b");
const output3a = document.querySelector(".output-3a");
const output3b = document.querySelector(".output-3b");
const output4a = document.querySelector(".output-4a");
const output4b = document.querySelector(".output-4b");
const output4c = document.querySelector(".output-4c");
const output5a = document.querySelector(".output-5a");
const output5b = document.querySelector(".output-5b");
const output5c = document.querySelector(".output-5c");
const output5d = document.querySelector(".output-5d");

// ----- JSnack 1 ----- //
const zuchinis = [
  {
    type: "nera",
    weight: 50,
    length: "15.6",
  },
  {
    type: "romanesca",
    weight: 120,
    length: 20,
  },
  {
    type: "fiorentina",
    weight: 53,
    length: 8,
  },
  {
    type: "napoletana",
    weight: 50,
    length: 12,
  },
  {
    type: "tonda",
    weight: 95,
    length: 10,
  },
  {
    type: "trombetta",
    weight: 120,
    length: 7,
  },
  {
    type: "gialla",
    weight: 83,
    length: 18,
  },
  {
    type: "rugosa friulana",
    weight: 100,
    length: 12.5,
  },
  {
    type: "patisson",
    weight: 70.5,
    length: 20.2,
  },
  {
    type: "inglese",
    weight: "65",
    length: 14,
  },
];

//Stampa dati
zuchinis.forEach((zuchini) => {
  outputData.innerHTML += createTemplate(zuchini);
});

function createTemplate(item) {
  return `
  <div class="data p-2">
    <div>Tipologia: ${item.type}</div>
    <div>Peso: ${item.weight} gr</div>
    <div>Lunghezza: ${item.length} cm</div>
  </div>
  `;
}

//Stampa in pagina e Logica
output1.innerHTML = getTotalWeight(zuchinis) + "gr";

function getTotalWeight(zuchinisArray) {
  let totalWeight = 0;

  zuchinisArray.forEach(
    (zuchiniItem) =>
      (totalWeight = totalWeight + parseFloat(zuchiniItem.weight))
  );

  return totalWeight;
}

// ----- JSnack 2 ----- //
const shortZuchinis = zuchinis.filter(
  (zuchini) => parseFloat(zuchini.length) < 15
);

const longZuchinis = zuchinis.filter(
  (zuchini) => parseFloat(zuchini.length) >= 15
);

output2a.innerHTML = getTotalWeight(shortZuchinis) + "gr";
output2b.innerHTML = getTotalWeight(longZuchinis) + "gr";

// ----- JSnack 3 ----- //
const string = "Zucchina";

output3a.innerHTML = string;
output3b.innerHTML = reverseString(string);

function reverseString(stringToReverse) {
  return stringToReverse.split("").reverse().join("");
}

// ----- JSnack 4 ----- //
const arrayA = ["a", "b", "c", "d"];
const arrayB = [1, 2, 3, 4];

output4a.innerHTML = arrayA;
output4b.innerHTML = arrayB;
output4c.innerHTML = getArrayAlt(arrayA, arrayB);

function getArrayAlt(firstArray, secondArray) {
  let arrayAlt = [];
  for (let i = 0; i < firstArray.length; i++) {
    arrayAlt.push(firstArray[i]);
    arrayAlt.push(secondArray[i]);
  }
  return arrayAlt;
}

// ----- JSnack 5 ----- //
const array = ["zero", "uno", "due", "tre", "quattro", "cinque"];
const numMin = Math.floor(Math.random() * array.length);
const numMax = Math.floor(
  Math.random() * (array.length - (numMin + 1)) + numMin
);

output5a.innerHTML = array;
output5b.innerHTML = numMin;
output5c.innerHTML = numMax;
output5d.innerHTML = getNewArray(array, numMin, numMax);

function getNewArray(oldArray, min, max) {
  const newArray = oldArray.filter(
    (element, index) => index >= min && index <= max
  );
  return newArray;
}
