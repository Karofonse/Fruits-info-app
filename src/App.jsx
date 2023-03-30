import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { db } from "./Firestore";
import { collection, query, where, getDocs, orderBy,  } from 'firebase/firestore';
import {Link} from "react-router-dom";
import Home from './components/Navbar/Home';

function App() {

  // unir dos colecciones por su id, funciona perfecto
const [documentosUnidos, setDocumentosUnidos] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const query1 = query(collection(db, "fruits"), orderBy("id","asc"));//
      const query2 = query(collection(db, "fruits-detail"), orderBy("id","asc"));

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

      const documentosUnidos  = await Promise.all(
        documentos1.map(async (doc1) => {
          const doc2Query = query(
            collection(db, "fruits-detail"),
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
  <div className='text-center'>
    <Navbar />
    <Home/>
    <ul className="py-10">
      <h1 className="text-3xl font-bold mb-4 text-green-500 text-center">Listado de frutas</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {documentosUnidos.map((doc) => (
          <li key={doc.id} className="mx-6 mt-6 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <Link to={`/${doc.id}`} className="h-full w-full">
                <div className="bg-gray-200 text-gray-700 text-lg font-bold px-4 py-2">{doc.fruitName}</div>
                <hr />
                <div className="p-4">
                  <strong>Originario de:</strong> {doc.origin}
                </div>
                <div className="p-4">
                  <strong>Tiempo de vida:</strong> {doc.lifeCycle}
                </div>
              </Link>
            </div>
      </li>
    ))}
  </div>
</ul>
</div>
);
}

export default App;