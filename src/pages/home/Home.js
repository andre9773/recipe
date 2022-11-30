import "./Home.css"
import React from 'react'
import { useFetch } from "../../hooks/useFetch"
import { RecipeList } from "../../components/recipeList/RecipeList"
const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div className="Home">
        {error && <p className="error">{error} </p>}
        {isPending && <p className="loading">Loading...</p> }
        {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home
