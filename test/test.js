var expect = require('chai').expect
var should = require('chai').should
var lcdImpresor = require('../lcdImpresor');
var size = 2
var numeroImp = 10
var espacio = 5

describe('Prueba para la Clase lcdImpresor', function(){
  it('valor de size entre 1 y 10', function() {
    expect(size).to.be.within(1,10);
  })
  it('Numero para numero para imprimirlo', function (){
    expect(numeroImp).to.be.a('number');
  })
  it('Numero espacio 0 a 5', function () {

    expect(espacio).to.be.within(0,5);
  })
  it("imprimir con los valores definidos antes", function(){
    var Clase = new lcdImpresor.ClassName()
    expect(Clase.imprimirNumero(size,numeroImp, espacio)).to.be.true;
  })
  it("procesar con valores de pruebas", function(){
    var Clase = new lcdImpresor.ClassName()
    this.size =  1
    this.numeroImp =  999
    this.espacio = 0
    expect(Clase.procesar(this.size+","+this.numeroImp, this.espacio)).to.be.true;
  })
  // Para superar este test converti en imprimirNumero de string a entero
  it("procesar con valores string", function(){
    var Clase = new lcdImpresor.ClassName()
    this.size =  "2"
    this.numeroImp =  "9"
    this.espacio = "1"
    expect(Clase.procesar(this.size+","+this.numeroImp, this.espacio)).to.be.true;
  })
  it("procesar con letras  y esperar un string con un mensaje de error", function(){
    var Clase = new lcdImpresor.ClassName()
    this.size =  "uno"
    this.numeroImp =  "cero"
    this.espacio = "space"
    expect(Clase.procesar(this.size+","+this.numeroImp, this.espacio)).to.be.a("string");
  })
})
