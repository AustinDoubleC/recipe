import React from "react"
import './Recipes.css';

const Recipes = ({meal, title, image,ingredients,url}) => {
    return(
        <div className="recipe-container">
            <h1>{title}</h1>
            <img src={image} alt={title} />
                
                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <a href={url} target="_blank">Full recipe</a>
        </div>
    )
}

export default Recipes