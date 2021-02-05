import React from 'react';
import "../App.css";

const Alert = ({alert}) =>{
    return(
        <div className="alerts">{alert}</div>
    );
}

export default Alert;