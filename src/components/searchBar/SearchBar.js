import "./SearchBar.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SearchBar(){
    const [term, setTerm] = useState('')
    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        nav(`/search?q=${term}`)
    }

  return (
    <div className="searchbar">
        <form onClick={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input
                type="text"
                id="seach"
                onChange={(e) => setTerm(e.target.value)}
                required
            />
        </form>
    </div>
  )
}
