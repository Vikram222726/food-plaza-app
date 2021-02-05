import React from 'react';
import "../App.css";

const RecipeDetails = ({ingredients}) => {
    return(
    <div className="idts">
        <div>- {ingredients[0]}</div>
        <div>- {ingredients[1]}</div>
        <div>- {ingredients[2]}</div>
        <div>- {ingredients[3]}</div>
    </div>
    )
}

export default RecipeDetails;