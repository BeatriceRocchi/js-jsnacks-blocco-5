# JSnack

Sviluppare i seguenti JSnack.

## JSnack 1

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

### Svolgimento

1. Creare un array di 10 oggetti (zucchine)
2. Inizializzare il peso totale a 0
3. Con forEach, cicliare l'array e sommare ad ogni ciclo al peso totale il peso totale del ciclo precedente ed il peso di ogni oggetto
4. Inserire parseFloat nella somma per risolvere possibili problemi legati ai dati (ie. peso come stringa e non come numero)

## JSnack 2

Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

### Svolgimento

1. Con filter, creare un array di oggetti la cui lunghezza è inferiore a 15cm
2. Con filter, creare un array di oggetti la cui lunghezza è superiore o uguale a 15cm
3. Utilizzare la logica del JSnack precedente per ottenere il peso totale di ogni gruppo (inserire la logica dello JSnack 1 in una funzione)

## JSnack 3

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC).

### Svolgimento

1. Utilizzando split e come separatore "", creare un array avente per elementi le singole lettere della stringa
2. Utilizzando reverse, invertire gli elementi dell'array appena creato
3. Utilizzando join e come separatore "", trasformare l'array in una stringa

## JSnack 4

Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

### Svolgimento

1. Inizializzare un array vuoto in cui andranno inseriti alternativamente gli elementi dei due array
2. Attraverso un ciclo for, ad ogni ciclo pushare l'elemento ad indice i del primo array e in seguito l'elemento ad indice i del secondo array

## JSnack 5

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”.

### Svolgimento

1. Creare due numeri random: il minimo compreso fra 0 e la lunghezza dell'array e il massimo compreso fra il minimo e la lunghezza dell'array
2. Creare una funzione con parametri: array, minimo e massimo
3. Nella funzione, creare con filter un nuovo array contenente solo gli elementi il cui indice è maggiore o uguale al minimo e inferiore o uguale al massimo
