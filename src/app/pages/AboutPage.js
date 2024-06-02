import React, {  } from 'react';
import '../styles/AboutPage.css';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';


const AboutPage = (props) => {
    const { data } = useData();


    return(
        <>
            <div style={{marginTop: "100px"}} className="project_title left_img">
                <img className="me_img" src={data.about.photo} alt="" />
                <div className="project_title__content">
                    <p className="project_content__lead">About Me.</p>
                    <ul className="project_content__text">
                        {data.about.descriptions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {
                data.experience.length > 0 && (
                    <section id='projects'>
                        <div className="projects_lead">
                            <div className="projects_lead__title">My Experience.</div>
                            <p className="projects_lead__body">Here, you'll find details about my professional journey and the roles I've held in various organizations. Each entry provides insights into my responsibilities, achievements, and the valuable skills I've gained along the way.</p>
                        </div>
        
                        <div className="roles_wrap">
                            {data.experience.map((role, index) => (
                                <div key={index} className="roles_wrap_content">
                                    <p className="roles_wrap_content__lead">{role.companyName}</p>
                                    <p className="roles_title">{role.jobTitle}</p>
                                    <p className="roles_timeline">{role.startingYear} - {role.endingYear}</p>
                                    <ul className="roles_wrap_content__text">
                                        {role.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )
            }
                
                
                
                
            {
                data.about.skills.length > 0 && (
                    <div style={{ margin: "120px 0" }} className="skills">
                        <div className="skills__image">
                            <img src="https://illustrations.popsy.co/white/engineer.svg" alt="Engineer illustration" />
                        </div>
                        
                        <div className="skills__content">
                            <div className="skills_content_title">My Skills.</div>
                            <ul className="roles_wrap_content__text">
                                {data.about.skills.map((skill, index) => (
                                    <li key={index} className="skill_list">
                                        <span>{skill.skillCategory} : </span><br />
                                        {skill.skillDescription}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }


            {
                data.education.length > 0 && (
                    <section id='projects'>
                        <div className="projects_lead">
                            <div className="projects_lead__title">My Education.</div>
                            <p className="projects_lead__body">Here, I outline my academic background and credentials. Discover the educational journey that has shaped my knowledge and skills. From degrees earned to institutions attended, each entry provides insight into my commitment to learning and development.</p>
                        </div>
        
                        <div className="roles_wrap">
                            {data.education.map((edu, index) => (
                                <div key={index} className="roles_wrap_content">
                                    <p className="roles_wrap_content__lead">{edu.instituteName}</p>
                                    <p className="roles_title">{edu.courseName}</p>
                                    <p className="roles_timeline">{edu.startingDate} - {edu.endingDate}</p>
                                    <ul className="roles_wrap_content__text">
                                        {edu.description.map((desc, descIndex) => (
                                            <li key={descIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )
            }


            <div className="cta_page">
                <div className="cta_content">
                    <div className='cta_title'>Want me on your team? </div>
                    <p className="cta_body">I'm ready to bring my expertise and dedication to your team. With a passion for my work and a proven track record, I'm eager to contribute to your projects and help you achieve your goals. Let's collaborate and create something amazing together!</p>

                    <div className='cta_btn_grp'>
                        <Link target='blank' to={data.socialLinks[0].link}>
                            <div className='btn'>Download CV</div>
                        </Link>
                        <div style={{width: "15px"}} />
                        <Link to="/contact">
                            <div   className='btn'>Contact me</div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}


export default AboutPage;