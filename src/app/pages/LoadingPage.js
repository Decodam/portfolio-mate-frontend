import React, {  } from 'react';


const LoadingPage = (props) => {
    return(
        <div className='loading_screen'>
            {props.status === 1 ? (
                <p>User not found... 😞</p>
            ) : (
                <div className="loader" />
            )}
        </div>
    );
}


export default LoadingPage;