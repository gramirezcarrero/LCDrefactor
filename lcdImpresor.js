// var imprimirNumero = function(size, numeroImp, espacio) {
var ClassName = function () {}
ClassName.prototype.imprimirNumero = function (size, numeroImp, espacio) {
    var pivotX = 0,
        CARACTER_VERTICAL = "|",
        CARACTER_HORIZONTAL = "-",
        POSICION_X = "X",
        POSICION_Y = "Y";
    var self = this;
    self.size = parseInt(size);
    // Calcula el numero de filas cada digito
    self.filasDig = (2 * self.size) + 3;
    self.columDig = self.size + 2;
    // Calcula el total de filas de la matriz en la que se almacenaran los digitos
    self.totalFilas = self.filasDig;
    // Calcula el tamaño del Numero a Imprimir
    self.numeroArray = ("" + numeroImp).split("")
    self.numeroImpLength = self.numeroArray.length;


    self.matrizImpr = []
    // Calcula el total de columnas de la matriz en la que se almacenaran los digitos
    self.totalColum = (self.columDig * self.numeroImpLength) + (espacio * self.numeroImpLength);
    var digitos = self.numeroArray;
    for (var i = 0; i < self.totalFilas; i++) {
        self.matrizImpr[i] = []
        for (var j = 0; j < self.totalColum; j++) {
            self.matrizImpr[i][j] = " ";
        }
    }
    // Puntos fijos
    self.pf1 = [];
    self.pf2 = [];
    self.pf3 = [];
    self.pf4 = [];
    self.pf5 = [];
    digitos.forEach(function(digito) {
        self.pf1[0] = 0;
        self.pf1[1] = 0 + pivotX;
        self.pf2[0] = (self.filasDig / 2);
        self.pf2[1] = 0 + pivotX;

        self.pf3[0] = (self.filasDig - 1);
        self.pf3[1] = 0 + pivotX;

        self.pf4[0] = (self.columDig - 1);
        self.pf4[1] = (self.filasDig / 2) + pivotX;

        self.pf5[0] = 0;
        self.pf5[1] = (self.columDig - 1) + pivotX;
        pivotX = pivotX + self.columDig + espacio;
        adicionarDigito(digito);
    })
    /**
     *
     * Metodo encargado de definir los segmentos que componen un digito y
     * a partir de los segmentos adicionar la representacion del digito a la matriz
     *
     * @param numero Digito
     */
    function adicionarDigito(numero) {
        self.numero = parseInt(numero)
        // Array para almacenar los segmentos de cada numero.
        var segList = [];
        switch (self.numero) {
            case 1:
                segList.push(3, 4);
                break;
            case 2:
                segList.push(5, 3, 6, 2, 7);
                break;
            case 3:
                segList.push(5, 3, 6, 4, 7);
                break;
            case 4:
                segList.push(1, 6, 3, 4);
                break;
            case 5:
                segList.push(5, 1, 6, 4, 7);
                break;
            case 6:
                segList.push(5, 1, 6, 2, 7, 4);
                break;
            case 7:
                segList.push(5, 3, 4);
                break;
            case 8:
                segList.push(1, 2, 3, 4, 5, 6, 7);
                break;
            case 9:
                segList.push(1, 3, 4, 5, 6, 7);
                break;
            case 0:
                segList.push(1, 2, 3, 4, 5, 7);
                break;
            default:
                break;
        }
        // Para iterar en cada segmento
        for (var i = 0 in segList) {
            adicionarSegmento(segList[i])
        }
    }
    /**
     *
     * Metodo encargado de añadir una linea a la matriz de Impresion
     *
     * @param matriz Matriz Impresion
     * @param punto Punto Pivote
     * @param posFija Posicion Fija
     * @param size Tamaño Segmento
     * @param caracter Caracter Segmento
     */
    function adicionarLinea(matriz, punto, posFija, size, caracter) {
        if (posFija == POSICION_X) {
            for (var y = 1; y <= size; y++) {
                var valorX = parseInt(punto[1]) + y;
                matriz[parseInt(punto[0])][valorX] = caracter;
            }
        } else {
            for (var i = 1; i <= size; i++) {
                var valorY = parseInt(punto[0]) + i;
                matriz[valorY][parseInt(punto[1])] = caracter;
            }
        }
    }
    /**
     *
     * Metodo encargado de un segmento a la matriz de Impresion
     *
     * @param segmento Segmento a adicionar
     */
    function adicionarSegmento(segmento) {
        switch (segmento) {
            case 1:
                adicionarLinea(self.matrizImpr, self.pf1, POSICION_Y, self.size, CARACTER_VERTICAL);
                break;
            case 2:
                adicionarLinea(self.matrizImpr, self.pf2, POSICION_Y, self.size, CARACTER_VERTICAL);
                break;
            case 3:
                adicionarLinea(self.matrizImpr, self.pf5, POSICION_Y, self.size, CARACTER_VERTICAL);
                break;
            case 4:
                adicionarLinea(self.matrizImpr, self.pf4, POSICION_Y, self.size, CARACTER_VERTICAL);
                break;
            case 5:
                adicionarLinea(self.matrizImpr, self.pf1, POSICION_X, self.size, CARACTER_HORIZONTAL);
                break;
            case 6:
                adicionarLinea(self.matrizImpr, self.pf2, POSICION_X, self.size, CARACTER_HORIZONTAL);
                break;
            case 7:
                adicionarLinea(self.matrizImpr, self.pf3, POSICION_X, self.size, CARACTER_HORIZONTAL);
                break;
            default:
                break;
        }
    }
    for (var h = 0; h < self.totalFilas; h++) {
        console.log(self.matrizImpr[h].join(''))
    }
    return true

}
function isNumeric(cadena) {
    return !isNaN(cadena)
}
/**
*
* Metodo encargado de procesar la entrada que contiene el size del segmento
* de los digitos y los digitos a imprimir
*
* @param comando Entrada que contiene el size del segmento de los digito
* y el numero a imprimir
* @param espacioDig Espacio Entre digitos
*/
ClassName.prototype.procesar = function (comando, espacioDig){

   var parametros;

   var tam;
   if(!isNumeric(espacioDig)){
     return "No es un numero";
   }
   if (!(comando.indexOf(",") !== -1)) {
        return ("Cadena " + comando + " no contiene caracter ,");

   }

   //Se hace el split de la cadena
   parametros = comando.split(",");

   //Valida la cantidad de parametros
   if(parametros.length>2)
   {
      return ("Cadena " + comando + " contiene mas caracter ,");
   }

   //Valida la cantidad de parametros
   if(parametros.length<2)
   {
      return("Cadena " + comando + " no contiene los parametros requeridos");

   }

   //Valida que el parametro size sea un numerico
   if(isNumeric(parametros[0]))
   {
       tam = parseInt(parametros[0]);

       // se valida que el size este entre 1 y 10
       if(tam <1 || tam >10)
       {
           console.log("El parametro size ["+tam+ "] debe estar entre 1 y 10");
           return
       }
   }
   else
   {
       console.log("Parametro Size [" + parametros[0] + "] no es un numero");
       return
   }

   // Realiza la impresion del numero
   var imprimirNumero = new ClassName()
   imprimirNumero = imprimirNumero.imprimirNumero
   return imprimirNumero(tam, parametros[1],espacioDig);


}
module.exports = {
  ClassName
}
