import React, { useState, useEffect } from 'react';
import { useData } from './DataContext';
import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebase"
import LoadingPage from '../pages/LoadingPage';

const DataWrapper = (props) => {
    const { setData } = useData();
    let siteID = localStorage.getItem("siteID");
    const [LoadStatus, setLoadStatus] = useState(0);

    const checkUser = async() => {
        if(!siteID){
            setLoadStatus(1);
        } else {
            const docRef = doc(db, "portfolios", siteID);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
              let data = docSnap.data();
              if (data.meta.status === 1) {
                setData(docSnap.data());
              }
              setLoadStatus(2)
            } else {
              setLoadStatus(1);
            }
        }

    }

    useEffect(() => {
        checkUser();
    }, [])

    if (LoadStatus=== 2){
        return(
            <>{props.children}</>
        );
    } else {
        return(
            <LoadingPage status={LoadStatus} />
        )
    }
}


export default DataWrapper;