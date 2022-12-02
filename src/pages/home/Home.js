import "./Home.css"
import React from 'react'
import { projectFirestore } from "../../firebase/config"
import RecipeList from "../../components/recipeList/RecipeList"
import { useEffect, useState } from "react"


const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

    useEffect(() => {
      setIsPending(true)

      projectFirestore.collection('recipes').get().then((snapshot) => {
        if ( snapshot.empty){
          setError('no recipes to load')
          setIsPending(false)
        }else{
          let result = []
          snapshot.docs.forEach(doc =>{
            result.push({id: doc.id, ...doc.data()})
          })
          setData(result)
          setIsPending(false)
        }
      }).catch(err => {
        setError(err.message)
        setIsPending(false)
      })

    },[])

  return (
    <div className="Home">
        {error && <p className="error">{error} </p>}
        {isPending && <p className="loading">Loading...</p> }
        {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home
