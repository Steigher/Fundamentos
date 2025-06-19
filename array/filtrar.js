/* Problema:
Dado un array de productos, filtrar los que tengan precio mayor a 50, ordenarlos del mas barato al mas caaro y calcular su valor total

.filter
.sort
.reduce*/
const productos = [
    {nombre: "camisa", precio: 30},
    {nombre: 'zapatos', precio: 80},
    {nombre: 'pantalon', precio: 45},
]
const filtroMayor50 = productos.filter(filt => filt.precio > 50) //filtra los objetos que cumplan la condiciòn
                            console.log(filtroMayor50) 
const orderCheapExpen = productos.sort((a, b)=> a.precio - b.precio)//orgniza los objetos de menor a mayor
                            console.log(orderCheapExpen); 
const valorTotal = productos.reduce((acumulator, producto) => acumulator + producto.precio, 0) //suma las propiedades
                            console.log(valorTotal);

const filtroMayor30 = productos.filter(filt => filt.precio > 30)
                            console.log(filtroMayor30)
const orderFiltro = filtroMayor30.sort((a, b)=> b.precio - a.precio)
                            console.log(orderFiltro);
const valorTotalFiltro = orderFiltro.reduce((acumulator, producto) => acumulator + producto.precio, 0)
                            console.log(valorTotalFiltro);


                            