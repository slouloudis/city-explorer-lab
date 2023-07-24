import React, { useState } from 'react'
import axios from 'axios'

export default function LatAndLong() {
    const [search, setSearch] = useState(null)

    let handleSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    

  return (
    <div>
        <input onChange={handleSearch}></input>
    </div>
  )
}
