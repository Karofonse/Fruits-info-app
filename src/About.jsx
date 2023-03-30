import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, doc} from "firebase/firestore";
import { db } from "./Firestore";
import { Bars } from "react-loader-spinner";

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
                console.log("doc2Data", doc2Data)
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
        <h1 className='text-center text-4xl text-green-700 font-medium '>Listado de frutas</h1>
        {isLoading ? (
            console.log("isLoading", isLoading),
            <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        ) : (
            <div>
                <h1>About</h1>
                <p>{document?.bloom}</p>
                <p>{document?.climaticZone}</p>
                <p>{document?.family}</p>
            </div>  
        )}
</ul>
);
}
    

export default About