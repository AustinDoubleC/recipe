import React from "react"

const Recipes = ({title, image,calories,url, dishType}) => {
    return(
        <div className="recipe-container">
            <img src={image} alt={title} id="recipe-image"/>
            <h3>{title}</h3>
            <div id="recipe-summary">
                <p>{dishType}</p>
                <p>calories: {calories}</p>
            </div>
            <a href={url} target="_blank">Full recipe</a>
        </div>
    )
}

export default Recipes