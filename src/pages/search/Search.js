import React from 'react'
import "./Search.css"
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import ResipeList from '../../components/recipeList/RecipeList.js'

export default function Search() {
const queryString = useLocation().search
console.log(queryString)
const queryParams = new URLSearchParams(queryString)
console.log(queryParams)
const query = queryParams.get('q')
console.log(query)
const url = 'http://localhost:3000/recipes?q=' + query

const {error, isPending, data} = useFetch(url)

  return (

    <div>
      <h2 className='page-title'>Recipe including "{query}" </h2>
      {error && <p className="error">{error} </p>}
        {isPending && <p className="loading">Loading...</p> }
        {data && <ResipeList recipes={data}/>}
    </div>
  )
}
