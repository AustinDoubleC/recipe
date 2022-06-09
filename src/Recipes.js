import React from "react"

const Recipes = ({title, calories, image,ingredients,url}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories:{Math.round(calories)}</p>
            <img src={image} alt={title} />
            <a href={url}>Full recipe</a>

        </div>
    )
}

export default Recipes