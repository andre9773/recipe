import "./RecipeList.css"
import { NavLink } from "react-router-dom";
import React from 'react'

export const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-list">
        {recipes.map((recipe) =>(
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)} ...</div>
                <NavLink  to={`/recipe/${recipe.id}`}> Cook This</NavLink>
            </div>
            
        ))}

    </div>
  )
}
