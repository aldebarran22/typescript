// Tipos de bucles:

for (let i: number = 0; i < 10 ; i++){
    console.log(i)
}

// Para arrays:
let numeros: number[] = [1, 2, 3, 4, 5];
// No ponemos el tipo de i, for of -> Va por lo elementos
for (let i of numeros ){
    console.log(i)
}

// Bucle for in: Va por los indices, luego acceder al elemento con el indice
let nombres: string[] = ["Ana", "Pedro", "Juan"]
for (let i in nombres){
    console.log(i, nombres[i])
}

// El iterador forEach: con los valores
nombres.forEach(valor => console.log(valor))

// El iterador forEach: con valor e indice:
nombres.forEach((valor, index) => console.log(index, valor))

// Bucle while


// Bucle do while