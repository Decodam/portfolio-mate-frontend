import React, { useState, useEffect } from 'react';
import '../styles/ProjectDetails.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import DataWrapper from '../context/DataWrapper';
import { useData } from '../context/DataContext';


const ProjectDetails = (props) => {
    const [ToggleNav, setToggleNav] = useState(false);
    const { data } = useData();
    const { id } = useParams();
    const navigate = useNavigate();
    const [Project, setProject] = useState({})

    const handleToogleNav = () => {
        if(ToggleNav === true){
            setToggleNav(false);
        } else {
            setToggleNav(true);
        }
    }

    useEffect(() => {
        // Convert id to a number
        const itemId = parseInt(id, 10);
        
        // Subtract 1 from itemId to get the index
        const index = itemId;

        // Check if index is within the bounds of the array
        if (index >= 0 && index < data.projects.length) {
            // Set Project to the object at index
            setProject(data.projects[index]);
        } else {
            navigate("/");
        }
    }, []);




    return(
        <DataWrapper>
            <header>
                <nav>
                    <Link to='/' className="nav_logo">{data.about.firstName}.</Link>

                    <Link  to="/" style={{textDecoration: "none", marginRight: "20px"}}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Close <IoCloseSharp style={{marginLeft: "3px"}} size={24} /></div></Link>
                </nav>
            </header>  

            <main>
                <div className="project_title">
                    <div className="project_title__content">
                        <p style={{fontSize: "42px"}} className="project_content__lead">{Project.title}.</p>
                        <p className="project_content__text">{Project.description}</p>
                        <div className="hero_links link_list">
                            <a style={{color: "#888"}} target="_blank" rel="noopener noreferrer">{Project.category}</a> 
                            {Project.highlights &&  <a style={{color: "#888"}} target="_blank" rel="noopener noreferrer">Highlights</a> }
                            <a href={Project.demolink} target="_blank" rel="noopener noreferrer">Demo Link</a> 
                        </div>
                    </div>
                    <div className="image_project_container">
                        <img className="project_title__img" src={Project.imagelinkPrimary} alt="" />
                    </div>

                </div>

                <div className="project_title left_img">
                    <div className="image_project_container">
                        <img className="project_title__img" src={Project.imagelinkSecondary} alt="" />
                    </div>
                    

                    <div className="project_title__content">
                        <p className="project_content__lead">Overview.</p>
                        <ul className="project_content__text">
                            {Project.overview && Project.overview.map((item, index) => (
                                <li key={index}>{item.content}</li>
                            ))}
                        </ul>

                    </div>
                </div>


                <div className="problem_sol">
                    <div className="problem_sol_content">
                        <p className="project_content__lead">Problems.</p>
                        <ul className="project_content__text">
                            {Project.problemAreas && Project.problemAreas.map((item, index) => (
                                <li key={index}>{item.content}</li>
                            ))}
                        </ul>

                    </div>
                    <div className="problem_sol_content">
                        <p className="project_content__lead">Solutions.</p>
                        <ul className="project_content__text">
                            {Project.solutionAreas && Project.solutionAreas.map((item, index) => (
                                <li key={index}>{item.content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <footer>
                <p>This Portfolio was made using <a target='_blank' href="">portfolio-mate.com</a></p>
            </footer>
        </DataWrapper>
    );
}


export default ProjectDetails;