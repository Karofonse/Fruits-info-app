import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { db } from "./Firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, getDoc, doc, orderBy, onSnapshot } from 'firebase/firestore';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import About from './About';

function App() {

  // unir dos colecciones por su id, funciona perfecto
const [documentosUnidos, setDocumentosUnidos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const query1 = query(collection(db, "user"), orderBy("id","asc"));//
      const query2 = query(collection(db, "user-flores"), orderBy("id","asc"));

      const data1 = await getDocs(query1);
      const data2 = await getDocs(query2);

      const documentos1 = data1.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const documentos2 = data2.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const documentosUnidos = await Promise.all(
        documentos1.map(async (doc1) => {
          const doc2Query = query(
            collection(db, "user-flores"),
            where("id", "==", doc1.id)
          );
          const doc2 = await getDocs(doc2Query);
          const doc2Data = doc2.docs[0].data();
          return { ...doc1, ...doc2Data };
        })
      );
      setDocumentosUnidos(documentosUnidos);
    }
    fetchData();
  }, []);
  
return (
  <ul>
  
    <h1 className='text-center text-4xl text-green-700 font-medium '>Listado de frutas</h1>
    <div className=''>
      {documentosUnidos.map((doc) => (
        <li key={doc.id}>
          <div className='flex items-center justify-center min-h-screen container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl overflow-hidden "></div>
              <Link to={`/${doc.id}` }className='text-red-500'>
                Nombre : {doc.campo}
                <hr />
                Flor: {doc.flores}
                <hr />
                Id: {doc.id}</Link>
            </div>
          </div>
        </li>
      ))}
  </div>
</ul>
);
}

export default App;