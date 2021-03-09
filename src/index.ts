import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuario= {
    nombre: 'Pedro',
    activo: true,
    fechaNaci: 0
}
  
const usuarioRef = db.collection('usuarios')

//insert into usuarios ....

// db.collection('usuarios') //tabla de usuarios
//     .add(usuario) //agregamos al usuario
//     .then(docRed => {
//         console.log(docRef)
//     })
//     .catch(e=> console.log('error',e))

//update usuarios set activo =false where....
// usuarioRef
//     .doc('xkqpLdwUgQKPkFUcYj9E')//referencia al documento
//     .update({ //actualiza el dato que enviamos anda mas
//         activo:false
//     })

//Destructivo
// usuarioRef
//     .doc('xkqpLdwUgQKPkFUcYj9E')//referencia al documento
//     .set({ //borra todo y coloca solo lo que enviamos
//         activo:false
//     })

//delete fron usuarios where id = 'xx'
// usuarioRef
//     .doc('xkqpLdwUgQKPkFUcYj9E')
//     .delete()
//     .then(()=> console.log('Borrado'))
//     .catch(e=> console.log('error',e));


//select * forn usuarios;

//forma no simplificada
// usuarioRef
//     .onSnapshot( snap =>{ //se ejecutara cada vez que la info cambie en el lado de la bbdd firestore
//         retornaDocumentos(snap);
        
//     } )


//forma simplificada
// usuarioRef
//     .onSnapshot( retornaDocumentos ) //envia el snap de forma simplificada

    //no esta pendiente de lso cambios que se realicen de en la pagina
usuarioRef
    .get().then( retornaDocumentos ) //envia el snap de forma simplificada