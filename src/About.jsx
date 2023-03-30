import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, doc, } from "firebase/firestore";

import { db } from "./Firestore";

function About() {
    const [documentos, setDocumentos] = useState(null);
    
    const [documentosUnidos, setDocumentosUnidos] = useState([]);
    let { id } = useParams();
        useEffect(() => {
        const obtenerDocumentos = async () => {
            const doc2Query = query(
            collection(db, "user-flores"),
            where("id", "==", id)
            );
            const querySnapshot = await getDocs(doc2Query);
            if (querySnapshot.docs.length > 0) {
            const doc2 = querySnapshot.docs[0].data();
            setDocumentos(doc2);
            } else {
            console.log("No se encontró el documento");
            }
        };
        obtenerDocumentos();
        }, [id]);
    
        return (
        <div>
            <ul>
            <h1 >Listado de Frutas</h1>
            {documentos && (
                <li>
                <Link to="/1" >{documentos.campo}</Link>
                <p>{documentos.description}</p>
                <ul>
                    <li>{documentos.family}</li>
                    <li>{documentos.producingCountries.country}</li>
                    <li>{documentos.maturationFruit}</li>
                </ul>
                </li>
            )}
            </ul>
        </div>
        );
}
    

export default About