import React,{ useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function ListadoFrutas() {
  const [documentos, setDocumentos] = useState([]);

  // función que se ejecuta al dar click en un botón de documento
  const handleClick = async (id) => {
    // obtenemos los documentos de la colección "documentos" que tengan el campo "id" igual al valor de la variable "id" que recibimos como parámetro
    const q = collection(db, "documentos");
    const querySnapshot = await getDocs(q.where("id", "==", id));

    // transformamos los datos obtenidos a un objeto y lo guardamos en el estado "documentos"
    const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setDocumentos(docs);
  };

  // función que se ejecuta al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      // obtenemos los documentos de la colección "uniones" ordenados por el campo "id" de forma descendente
      const q = collection(db, "uniones");
      const querySnapshot = await getDocs(q.orderBy("id", "desc"));

      // obtenemos los ids de los documentos ordenados
      const ids = querySnapshot.docs.map((doc) => doc.data().documentoId);

      // para cada id, obtenemos el documento correspondiente de la colección "documentos"
      const docs = [];
      for (let id of ids) {
        const q = collection(db, "documentos");
        const querySnapshot = await getDocs(q.where("id", "==", id));
        const doc = querySnapshot.docs[0];
        if (doc) {
          docs.push({ ...doc.data(), id: doc.id });
        }
      }

      // guardamos los documentos obtenidos en el estado "documentos"
      setDocumentos(docs);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* mapeamos los documentos obtenidos y mostramos un botón por cada uno */}
      {documentos.map((doc) => (
        <button key={doc.id} onClick={() => handleClick(doc.id)}>
          Documento {doc.id}
        </button>
      ))}

      {/* si se ha dado click en un botón de documento, mostramos su información */}
      {documentos.length > 0 && (
        <div>
          <h2>Información del documento:</h2>
          <p>Título: {documentos[0].titulo}</p>
          <p>Autor: {documentos[0].autor}</p>
          <p>Contenido: {documentos[0].contenido}</p>
        </div>
      )}
    </div>
  );
}

export default ListadoFrutas;

// tengo que hacer que en la 