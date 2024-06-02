import React, { useState } from 'react';
import '../styles/HomePage.css';
import Card from '../components/Card';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    const [Catagory, setCatagory] = useState(0);
    const { data } = useData();

    return(
        <>
            <section id='projects'>
                <div className="projects_lead">
                    <div className="projects_lead__title">My Projects.</div>
                    <p className="projects_lead__body">I belive in constant learning and creation. Here are the highlights of some of my best projects. Feel free to check them out!</p>
                    {/*
                    <div className="link_list project_filter">
                        <a style={{color: Catagory === 0 ? "#000" : "#888"}}onClick={() => {setCatagory(0)}}>Highlights</a> 
                        <a style={{color: Catagory === 1 ? "#000" : "#888"}} onClick={() => {setCatagory(1)}}>See All</a> 
                    </div>
                    */}
                </div>

                
                {data.projects.length === 0 ? (
                    <p style={{textAlign: "center", margin: "50px 20px", color: "#666"}}>No projects yet 😞</p>
                ) : (
                    <div className="projects_wrap">
                        {data.projects.map((item, index) => {return(
                            <Card 
                                key = {index}
                                id={index} title={item.title}
                                image={item.imagelinkPrimary}
                                desc={item.description}
                                display={Catagory === 1 || Catagory === 0||item.highlight === true ? "block" : "none"}
                            />
                        )})}
                    </div>
                )}


            </section>

            <div className="cta_page">
                <div className="cta_content">
                    <div className='cta_title'>Like what you see? </div>
                    <p className="cta_body">If you've enjoyed exploring my projects and want to learn more about the person behind them, dive into my story. Click below to read about me and gain a deeper understanding of who I am and what I can bring to your projects.</p>

                    <div className='cta_btn_grp'>
                        <Link target='blank' to={data.socialLinks[0].link}>
                            <div className='btn'>Download CV</div>
                        </Link>
                        <div style={{width: "15px"}} />
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/about">
                            <div className='btn'>Read More</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePage;