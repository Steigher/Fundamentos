/*output :
*
**
***
**
* */
function generarPatron(n) {

    let texto = ""
    for (let i = 0; i < n; i++) {
        for (let j = i; j <= i; j++) {
            texto += "*"
            console.log(texto)
        }
    } for (let i = n - 1; i >= 1; i--) {
        let texto = "";
        for (let j = 0; j < i; j++) {
            texto += "*";
        }
        console.log(texto);
    }
}
generarPatron(3)






