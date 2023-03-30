import React from 'react'

function Subcomponente() {

  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    async function obtenerDocumentos() {
      const q1 = query(collection(db, "coleccion1"), where("id", "==", 1));
      const querySnapshot1 = await getDocs(q1);

      let documentos = [];

      for (const doc1 of querySnapshot1.docs) {
        const doc2Ref = doc(db, "coleccion2", doc1.id);
        const doc2Snap = await getDoc(doc2Ref);

        const docData = {
          id: doc1.id,
          ...doc1.data(),
          ...doc2Snap.data()
        };

        documentos.push(docData);
      }

      setDocumentos(documentos);
    }

    obtenerDocumentos();
  }, []);

  return (
    <div>
      <h1>Listado de documentos</h1>
      <ul>
        {documentos.map((doc) => (
          <li key={doc.id}>
            <div>
              <h2>{doc.fruitName}</h2>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
   

export default Subcomponente;