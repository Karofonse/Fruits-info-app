import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, doc} from "firebase/firestore";
import { db } from "./Firestore";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

function About() {

    const [document, setDocument] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let { id } = useParams();
    let doc2Data;

    useEffect(() => {

        setIsLoading(true);

        setTimeout(() => {
            async function fetchData() {
                const query2 = query(collection(db, "fruits-detail"), orderBy("id","asc"));
                const doc2 = await getDocs(query2);
                const doc = doc2.docs.find(doc => doc.id === id);
                doc2Data = doc2.docs[id-1].data();
                setIsLoading(false);
                setDocument(doc2Data);
                
            }
            fetchData().catch(error => {
                console.error(error);
            });
        },5000)
    
}, [id]);

return (
    <ul>
        <h1 className='text-center text-4xl text-green-700 font-medium my-6'>Detalles sobre la fruta escogida</h1>
    {isLoading ? (
        <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        wrapperClass=""
        visible={true}
        />
    ) : (
        <div className="p-4 md:p-10">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center text-center">
                <h2 className="text-xl font-bold mb-3">Datos de la fruta</h2>
                <p><strong>Nombre de la familia:</strong> {document?.family}</p>
                <p><strong>Estacion donde se produce:</strong> {document?.bloom}</p>
                {/* <p><strong>Ciudades donde se produce:</strong> {document?.producingCuntry}</p> */}
                <p><strong>Clima:</strong> {document?.climaticZone}</p>
                <p><strong>Nombre cientifico:</strong> {document?.scientificName}</p>
                <p><strong>Nombre del arbol:</strong> {document?.treeName}</p>
                <p><strong>Época de maduración:</strong> {document?.maturationFruit}</p>
            </div>
                </div>
                    <div className="col-span-12 md:col-span-8">
                        <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-3 text-center">Descripción de la fruta</h2>
                            <p>{document?.description}</p>
                        </div>
                    </div>
            </div>
                <div className="flex justify-center mt-8">
                    <Link
                    to="/"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto text-center"
                    >
                    Volver a la página principal
                    </Link>
                </div>
            </div>
        )}
</ul>

);
}
    

export default About