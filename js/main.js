/*https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors.json*/

/*Metodos de Objetos

Object.keys(objeto) => Devuelve un array con las llaves del objeto
Object.values(objeto) => Devuelve un array con los valores del objeto
Object.entries(objeto) => Devuelve un array bidimencional con las llaves y los valores del objeto



*/

// GET  Llamar

const getMentors = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    //      let response = xhttp.responseText;
            let response = JSON.parse(xhttp.responseText);//parsear -> .parse es un metodo que recibe un string y lo combierte a Json, // .stringify es un metodo que recibe un Json y lo combierte a string
            console.log(response)

          console.log(Object.keys( response ))
          console.log(Object.values( response ))
          console.log(Object.entries( response ))
            
            Object.values( response ).forEach( mentor => {
                console.log( "objeto mentor -> ", mentor )
                console.log("llaves -> ", Object.keys(mentor))
                console.log( "mentor.name -> ", mentor.name )
            })

            console.log(" ")

//          for( in ) => for( key in object ){} => Es como un foEach

            for(key in response){
                console.log("mentor.key es", mentor.key, "porque no existe la propiedad:key dentro del objeto:mentor")
                console.log("llave -> ",key) 
                console.log("respuesta[posicion]" , response[key]) // necesito la llave cuyo valor sea igual a lo que tenga guardado en key 
            }
        }
    }

//    xhttp.open("GET", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors.json", true);
xhttp.open("GET", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/mentors.json", true);

    xhttp.send();
}

getMentors()



// POST  Guardar

let mentor = {
    name: "jonathan reyes",
    scores:35,
    phone:5555555555
}

const saveMentor = () => {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
            console.log(response)
        }
    }

//    xhttp.open("POST", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors.json", true);
xhttp.open("POST", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/mentors.json", true);

    xhttp.send( JSON.stringify(mentor)); // xhttp.send(mentor); 400 (Bad Request)
}

saveMentor()


// DELETE

//const deleteMentor = () => {
  const deleteMentor = mentorKey => {
    
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
            console.log(response)
        }
    }

//  xhttp.open("DELETE", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors/mentor1.json", true); // si quiero borrar el mentor1
//  xhttp.open("DELETE", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors.json", true);  // Eliminar toda la coleccion de mentores
//  xhttp.open("DELETE", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors/-MzE7i6yPZpNn0zQpA1t.json", true);// Eliminar el mentor creado
//  xhttp.open("DELETE", `https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/mentors/${mentorKey}.json`, true); // mandar a llamar al mentor en especifico // Consola deleteMentor("mentor1") || Consola deleteMentor("-MYDGXlkqLZVdKlMo9LR")
xhttp.open("DELETE", `https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/mentors/${mentorKey}.json`, true); // mandar a llamar al mentor en especifico // Consola deleteMentor("mentor1") || Consola deleteMentor("-MYDGXlkqLZVdKlMo9LR")

    xhttp.send();
}

/*console

deleteMentor("-MzE7i6yPZpNn0zQpA1t")
undefined
null                                        main.js:91 
*/


let mentor2 = {
    name: "Jonathan Reyes Alatorre",
    phone:"5555555555",
    age:"20"
}

let lettersArray = [
    "a",
    "b",
    "c"
]

const printMentor = () => {
    let mentorName = document.createTextNone(mentor2.name)
    let mentorphone = document.createTextNone(mentor2.phone)
    let mentorage = document.createTextNone(mentor2.age)

    /*Destructuring => Destructuracion: yo puedo extraer de forma directa los valores de un objeto a travez de una sintaxis especial*/

// Crear variables que apuntan a las propiedades de un objeto mentor2
// Si el objero mentor2 no cuenta con alguna de estas propiedades, el valor de esta variable va a dar indefinido

    let { name, phone, ege } = mentor2 // Si vienen de un OBJETO se encierran en LLAVES
   
    /*Equivalente mentor2
        let name = mentor2.name
        let phone = mentor2.phone
        let ege = mentor2.ege
    */

    let [ one, two, three ] = lettersArra // Si vienen de un ARRAY se encierran en CORCHETES

    /*Equivalente lettersArra
        let one = lettersArra[0]
        let two = lettersArra[1]
        let three = lettersArra[2]
    */

    /* 

    let someObject = {}

        someObject.name = name
        someObject.phone = phone
              
            Inversa a la deconstruccion
        va  a crear el objeto y a la propiedad name le va a poner el valor de 
        lo que sea que haya e una variable que se llame name
         si no existe va a tener la llave name pero el valor va a ser null

        let someObject = { name, phone, age }

        si yo quisiera que mo propiedad o mi llave tuviera un valor diferente, por ejemplo
        mentorName de lo que viniera de la variable name entonces le ponbemos mentorName:name
        
            let someObject = { mentorName:name, phone, age }

        la llave se va a llamar mentorName y el valor lo va a tomar desde la variable someObject.name = name
        */


/*
        let testMentor = {name:"Jonathan Reyes", age: 30}
        undefined
        let {someName:name, age} = testMentor
        undefined
        console.log(someName)
        VM999:1 Uncaught ReferenceError: someName is not defined
            at <anonymous>:1:13
        (anónimo) @ VM999:1
        console.log(name)
        VM1027:1 undefined
        undefined
        console.log(age)
        VM1070:1 30
        undefined

        let {name:someName, age} = testMentor
        undefined
        console.log(someName)
        VM1219:1 Jonathan Reyes
        undefined
*/

}

// Para guardar un mentor
/*https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/{su_nombre}/mentors.json*/
/*https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/mentors.json*/