// el centro de la matriz es 5

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < array.length; i++) {
    //   console.log('fila', i, array[i])
    for (let j = 0; j < array[i].length; j++) {
        console.log('columna', j, array[i][j])
    }
}

for (let i = 0; i < array.length; i++) {
    if (i === 1) {
        //  console.log(array[i])
    } for (let j = 0; j < array[i].length; j++) {
        if (i === 1 && j === 1)
            console.log(array[i][j])
    }
}

for (let i = 0; i < array.length; i++) {
    if (i === 0) {
        //  console.log(array[i])
    }
    for (let j = 0; j < array[i].length; j++) {
        if (i === 0 && j === 0)
            console.log(array[i][j])
    }
}

for (let i = 0; i < array.length; i++) {
    if (i === 2) {
        //  console.log(array[i])
    }
    for (let j = 0; j < array[i].length; j++) {
        if (i === 2 && j === 2)
            console.log(array[i][j])
    }
}
for (let i = 0; i < array.length; i++) {
    if (i === 2) {
        // console.log(array[i])
    }
    for (let j = 0; j < array[i].length; j++) {
        if (i === 0 && j === 0) {
            console.log(array[i][j])
        } else if (i === 1 && j === 1) {
            console.log(array[i][j])
        } else if (i === 2 && j === 2) {
            console.log(array[i][j])
        }
    }
}

let conteo = "";
for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i].length; j++) {
       
        if ((i === 0 && j === 0) || (i === 1 && j === 1) || (i === 2 && j === 2)) {
        
        } else {
            conteo += " , " + array[i][j]
        }
    }
    console.log(conteo)
