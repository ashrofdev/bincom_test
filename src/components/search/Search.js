import React from 'react'
import './search.css'

const Search = ({onSearch}) => {
        return (
            <div className="search">
                <input onChange={(e)=>onSearch(e.target.value)} placeholder="Filter by party..."/>
               
            </div>
        )
}
export default Search