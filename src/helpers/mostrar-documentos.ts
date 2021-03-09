import firebase from 'firebase';
export const retornaDocumentos = (snapshot: firebase.firestore.QuerySnapshot) =>{
    const documentos: any[] = [];

    snapshot .forEach( snapHijo=>{
            documentos.push({
                id:snapHijo.id,//agregamos los id
                ...snapHijo.data() //agregamos la demas data
            });
        } );

        console.log(documentos)
        return documentos;

}