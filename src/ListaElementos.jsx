import React, { useEffect, useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firestore";

function ListaElementos () {
    const [documentosUnidos, setDocumentosUnidos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const query1 = collection(db, "fruits");
            const query2 = collection(db, "fruits-detail");
        
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
        
            const documentosUnidos = documentos1.map((doc1) => {
                const doc2 = documentos2.find((doc2) => doc2.id === doc1.id);
                return { ...doc1, ...doc2 };
            });
        
            setDocumentosUnidos(documentosUnidos);
            }
            fetchData();
        }, []);
        return (
            <ul>
                {documentosUnidos.map((doc) => (
                    <li key={doc.id}>
                        <Link to={`/elementos/${doc.id}`}>{doc.fruitName}</Link>
                    </li>
                ))}
            </ul>
    )
    }

export default ListaElementos