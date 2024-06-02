import React, { useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider, useParams
} from "react-router-dom";
import Container from './app/components/Container';
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ProjectDetails from './app/pages/ProjectDetails';
import ErrorPage from './app/pages/ErrorPage';
import LoadingPage from './app/pages/LoadingPage';
import { useData } from './app/context/DataContext';
import { doc, getDoc } from "firebase/firestore";
import {db} from "./app/context/firebase"



const SetUser = () => {
  const { setData } = useData();
  const { id } = useParams();
  const [LoadStatus, setLoadStatus] = useState(0)

  const checkUser = async() => {
    const docRef = doc(db, "portfolios", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data = docSnap.data();
      if (data.meta.status === 1) {
        localStorage.setItem("siteID", id);
        setData(docSnap.data());
      }
      document.location.href = "/"
    } else {
      setLoadStatus(1);
      localStorage.setItem("siteID", null);
    }
  }

  useEffect(() => {
    checkUser();
  }, [])

  return(
    <LoadingPage status={LoadStatus} />
  )
}


const router = createBrowserRouter([
    {
      path: "/user/:id",
      element: <SetUser />
    },
    {
      path: "/",
      element: <Container><HomePage /></Container>,
    },
    {
      path: "/about",
      element: <Container><AboutPage /></Container>,
    },
    {
      path: "/contact",
      element: <Container><ContactPage /></Container>,
    },
    {
      path: "/project/:id",
      element: <ProjectDetails />,
    },{
      path: "*",
      element: <ErrorPage />,
    },
]);

const App = (props) => {
  return(
    <>
      <RouterProvider router={router} />
    </>
  );
  

}


export default App;