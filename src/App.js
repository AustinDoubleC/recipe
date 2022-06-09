import React, { useEffect, useState} from "react"
import './App.css';
import Recipes from "./Recipes"

const App = () => {
  const APP_ID = "552063c7";
  const APP_KEY = "de9efc6166b8b86638b0df942bb06940";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("");

  useEffect(()=>{
    getRecipes();
  },[query])
  
  const getRecipes = async () =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes (data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return(
    <div className="main-container">
      <header className="header">
        <h1>Recipe Searcher</h1>
        <form onSubmit={getSearch} className="search-form">
          <input className="input-search" type="text" value={search} onChange={updateSearch}></input>
          <button className="btnSearch" type="submit">Search</button>
      </form>
      </header>
      <main>
        {recipes.map(recipe=>(
          <Recipes 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          url={recipe.recipe.url}
          />
        ))}
      </main>
    </div>
  )
}

export default App;
