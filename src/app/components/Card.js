import React, {  } from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return(
        <Link style={{display: props.display}} to={`/project/${props.id}`} className="card">
            <img src={props.image} className="card_img" />
            <div className="card_content">
                <div className="card_content__title">
                    {props.title}
                </div>
                <div className="card_content__desc">{props.desc}</div>
            </div>
        </Link>
    );
}


export default Card;