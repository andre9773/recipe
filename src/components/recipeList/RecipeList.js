import "./RecipeList.css"
import { NavLink } from "react-router-dom";
import React from 'react'
import { useTheme } from "../../hooks/useTheme";
import Trashcan from '../../assets/trashcan.svg'
import { projectFirestore } from "../../firebase/config";

export default function RecipeList({recipes}){
    const {mode} = useTheme()
    if (recipes.length === 0){
        return <div className="error">No recipe to load...</div>
    }

    const handelClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }
  return (
    <div className="recipe-list">
        {recipes.map((recipe) =>(
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)} ...</div>
                <NavLink  to={`/recipe/${recipe.id}`}> Cook This</NavLink>
                <img 
                    className="delete"
                    src={Trashcan}
                    onClick={() => handelClick(recipe.id)} 
                    alt='Trashcan'
                    />
            </div>
            
        ))}

    </div>
  )
}
