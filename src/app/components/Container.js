import React, { useState, useRef } from 'react';
import '../styles/Container.css';
import { Pivot as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import DataWrapper from '../context/DataWrapper';
import { useData } from '../context/DataContext';


const Container = (props) => {
    const mainRef = useRef(null);
    const [ToggleNav, setToggleNav] = useState(false);
    const executeMainScroll = () => mainRef.current.scrollIntoView();

    const handleToogleNav = () => {
        if(ToggleNav === true){
            setToggleNav(false);
        } else {
            setToggleNav(true);
        }
    }

    const { data } = useData();

    console.log(data)


    return(
        <DataWrapper>
            <header>
                <nav>
                    <Link onClick={() => {window.scrollTo(0, 0)}} to='/' className="nav_logo">{data.about.firstName}.</Link>

                    <div onClick={handleToogleNav} className={ToggleNav === true ? "nav_list open" : "nav_list"}>
                        <Link onClick={executeMainScroll} to="/" className={window.location.pathname === "/" ? "nav_list__item active" : "nav_list__item"}>Projects.</Link>
                        <Link onClick={executeMainScroll} to="/about" className={window.location.pathname === "/about" ? "nav_list__item active" : "nav_list__item"}>About.</Link>
                        <Link onClick={executeMainScroll} to="/contact" className={window.location.pathname === "/contact" ? "nav_list__item active" : "nav_list__item"}>Contact.</Link>
                        <Link target='_blank' to={data.socialLinks[0].link} className="nav_list__item">Resume.</Link>
                    </div>

                    <div className="nav_btn"><Hamburger  toggled={ToggleNav} toggle={setToggleNav} size={20}  /></div>
                </nav>
            </header>

            <main>
                <section id='hero'>
                    <p className="hero_lead">
                        Hello 👋 <br /> 
                        I'm {data.about.firstName} {data.about.lastName} - a {data.about.jobTitle} based in {data.about.city}, {data.about.country}.
                    </p>

                    <div className="hero_links link_list">
                        {data.socialLinks.map((item, index) => {
                            return <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>

                        })}
                    </div>
                </section>
                <div ref={mainRef}/>
                {props.children}
            </main>

            <footer>
                <p>This Portfolio was made using <Link target='_blank' to="">portfolio-mate.com</Link></p>
            </footer>
        </DataWrapper>
    );
}


export default Container;