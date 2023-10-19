//IMPORTA EL ARCHIVO DATOSBICI.JS PARA PODER ACCEDER A LA TRADUCCION DEL ARCHIVO JSON
let listaBiciletas = require("./datosBici");

//OBJETO LITERAL QUE PERMITE REALIZAR OPERACIONES CON LOS DATOS PROPORCIONADOS POR EL ARCHIVO JSON
let dhBici = 
{
    //ESTA ES LA PROPIEDAD QUE GUARDA EL ARRAY DE OBJETOS DE BICICLETA.JSON
    bicicletas: listaBiciletas,

    //FUNCION PARA BUSCAR BICICLETA EN EL ARCHIVO JSON QUE TENGA EL MISMO ID QUE COLOQUEMOS COMO PARAMETRO
    buscarBici:  function(id){

        //ESTE METODO BUSCA LAS BICICLETAS POR EL ID EN LOS OBJETOS DEL ARRAY DE BICICLETAS
        let buscar = this.bicicletas.filter(elemento => {
                return elemento.id == id;
        });

        //ESTA CONDICION EVALUA SI EXISTE LA BICICLETA, SI EXISTE LA RETORNA, SINO RETORNA NULL (VACIO)
        let condicion = buscar.length > 0? buscar[0]: null;
        return console.table(condicion);
    },

    //FUNCION QUE PERMITE CAMBIAR LA PROPIEDAD DE VENDIDO DE LOS OBJETOS BICILETA BUSCANDOLOS POR EL ID
    venderBici: function(id){

        //ESTE METODO BUSCA LA BICILETA POR EL ID, SI EXISTE LA RETORNA SINO RETORNA NULL
        let vender = this.bicicletas.filter(elemento => {
            return elemento.id == id;
        });
        let condicion = vender.length > 0? vender[0]: null;

        //AQUI SE EVALUA SI YA FUE VENDIDA O NO, Y SI NO EXISTE DICE QUE NO SE ENCONTRO
        if(condicion != null && condicion.vendida == "si"){
            return console.log("\n LA BICICLETA BUSCADA YA HA SIDO VENDIDA");
        }
        else if(condicion != null && condicion.vendida == "no"){
            condicion.vendida = "si";
            return console.table(vender);
        }
        else if (condicion == null){
            return console.log("\n LA BICICLETA BUSCADA NO HA SIDO ENCONTRADA")}
    },

    //FUNCION QUE BUSCA TODAS LAS BICICLETAS QUE NO HAYAN SIDO VENDIDAS
    biciParaLaVenta: function(){

        //ESTE METODO FILTRA TODAS LAS BICICLETAS QUE TENGAN LA PROPIEDAD VENDIDA = "NO" Y LAS RETORNA
        let ParaLaVenta = this.bicicletas.filter(elemento => {
            return elemento.vendida != "si";
        });

        return console.table(ParaLaVenta);
    },

    //FUNCION QUE PERMITE CALCULAS EL PRECIO TOTAL DE TODAS LAS BICICLETAS QUE HAYAN SIDO VENDIDAS
    totalDeVentas: function(){

        //ESTE METODO REVISA SI LA PROPIEDAD VENDIDA = "SI", SI LO ES, AUMENTA AL ACUMULADOR EL VALOR DE PRECIO, SINO AUMENTA EN 0
        let total = this.bicicletas.reduce((acumulador, bicicleta) => { 
            let condicion = bicicleta.vendida == "si"? bicicleta.precio: 0; 
            return acumulador + condicion;
        }, 0);
        
        return console.log("\n EL PRECIO TOTAL DE LAS VENTAS ES DE: $" + total);
    },

    //FUNCION QUE AUMENTA EL PRECIO DE TODAS LAS BICICLETAS DE ACUERO AL VALOR DEL PARAMETRO
    aumentoBici: function (aumento){

        //ESTE METODO RECORRE LA PROPIEDAD PRECIO DE LOS OBJETOS Y LOS VA MULTIPLICANDO CADA UNO POR EL VALOR DEL PARAMETRO
        let aumentarPrecio = this.bicicletas.map(elemento => {
            elemento.precio *= aumento;
            return elemento;
        })

        return (console.log("\n EL PRECIO DE TODAS LAS BICICLETAS HA SIDO AUMENTADO POR UN VALOR DE: " + aumento + "\n") + 
                console.table(aumentarPrecio));
    },

    //FUNCION QUE PERMITE FILTRAR LAS BICICLETAS POR NUMERO DE RODADO
    biciPorRodado: function (numRodado){

        //ESTE METODO FILTRA LAS BICICLETAS POR EL NUMERO DE RODADO
        let buscarRodado = this.bicicletas.filter(elemento => {
            return elemento.rodado == numRodado;
        })  

        //ESTA CONDICION REVISA SI EL METODO ANTERIOR RETORNA BICICLETAS, SI NO HAY NINGUNA RETORNA UN MENSAJE
        let condicion = buscarRodado.length > 0? console.table(buscarRodado): console.log("\n NO HAY BICICLETAS CON ESE N° DE RODADO");
        return condicion;
    },

    //FUNCION QUE MUESTRA UN LISTADO DE TABLAS DE TODAS LAS BICICLETAS COMO OBJETOS INDEPENDIENTES
    listarTodasLasBicicletas: function(){

        //ESTE METODO RECORRE EL ARRAY Y VA MOSTRANDO CADA OBJETO EN CADA ITERACION DEL CICLO
        let todasLasBicis = this.bicicletas.forEach(elemento => {
            return console.table(elemento);
        });

        return todasLasBicis;
    }
}

//MUESTRA POR CONSOLA UNA TABLA CON TODOS LOS OBJETOS DEL ARRAY DE BICICLETAS, SE VE MAS ESTETICO
console.table(dhBici.bicicletas);
console.log("\n **********************************************************"
            + "***********************************************************");

/* AQUI PUEDES LLAMAR LOS METODOS, NO ES NECESARIO USAR CONSOLE.LOG, SOLO UTILIZAR DHBICI.FUNCION(); 
SI NECESITA PARAMETRO COLOCALO DENTRO DE LOS PARENTESIS SINO DEJA SOLO LOS PARENTESIS */

//dhBici.buscarBici();
//dhBici.venderBici();
//dhBici.biciParaLaVenta();
//dhBici.totalDeVentas();
//dhBici.aumentoBici();
//dhBici.biciPorRodado();
//dhBici.listarTodasLasBicicletas();