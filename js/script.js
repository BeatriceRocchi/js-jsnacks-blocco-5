//JSnack 1
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

console.log("JSnack 1 - Peso totale zucchine: ", getTotalWeight(zuchinis));

function getTotalWeight(zuchinisArray) {
  let totalWeight = 0;

  zuchinisArray.forEach(
    (zuchiniItem) =>
      (totalWeight = totalWeight + parseFloat(zuchiniItem.weight))
  );

  return totalWeight;
}

//JSnack 2
const shortZuchinis = zuchinis.filter(
  (zuchini) => parseFloat(zuchini.length) < 15
);

const longZuchinis = zuchinis.filter(
  (zuchini) => parseFloat(zuchini.length) >= 15
);

console.log(
  "JSnack 2 - Peso totale zucchine corte: ",
  getTotalWeight(shortZuchinis)
);
console.log(
  "JSnack 2 - Peso totale zucchine lunghe: ",
  getTotalWeight(longZuchinis)
);

//JSnack 3
const string = "Zucchina";

console.log("JSnack 3 - Parola da invertire: ", string);
console.log("JSnack 3 - Parola invertita: ", reverseString(string));

function reverseString(stringToReverse) {
  return stringToReverse.split("").reverse().join("");
}
