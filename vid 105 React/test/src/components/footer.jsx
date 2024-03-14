import "./footer.css";
import React from 'react';


function footer({x}) {
    return (
        <footer>
            <p>copyright@ </p>
            <p>{x}.com</p>
        </footer>
    )
}

export default footer;