import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Item() {
    const param = useParams()

    const [dataSearch, setDataSearch] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/ProjectList/${param.id}`)
            .then((response) => response.json())
            .then(projects => {

                setDataSearch(dataSearch => projects)
            })
    }, [])

    console.log(dataSearch)
    return (
        <div>
            <img src={dataSearch.image} />
            <h1>{dataSearch.name}</h1>
            <h1>Skills : {dataSearch.skills}</h1>

        </div>
    )
}

export default Item