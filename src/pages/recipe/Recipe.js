import "./Recipe.css"
import React from 'react'
import { useFetch } from "../../hooks/useFetch"
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";


const Recipe = () => {
    const { id } = useParams();
    const {mode} = useTheme()
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isPending, error } = useFetch(url);

    console.log(recipe);
   return (

    <div className={`recipe ${mode}`}>
         {error && <p className="error">{error} </p>}
        {isPending && <p className="loading">Loading...</p> }
        {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe