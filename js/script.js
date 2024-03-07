//JSnack 1
const zuchinis = [
  {
    type: "nera",
    weight: 50,
    length: 7,
  },
  {
    type: "romanesca",
    weight: 120,
    length: 9,
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
    length: 10,
  },
  {
    type: "rugosa friulana",
    weight: 100,
    length: 12,
  },
  {
    type: "patisson",
    weight: 70.5,
    length: 8,
  },
  {
    type: "inglese",
    weight: "65",
    length: 14,
  },
];

let totalWeight = 0;

zuchinis.forEach(
  (zuchini) => (totalWeight = totalWeight + parseFloat(zuchini.weight))
);

console.log("JSnack 1 - Peso totale zucchine: ", totalWeight);
