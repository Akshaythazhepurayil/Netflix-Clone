import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imageUrl} from '../../Constants/constants'
import axios from '../../axios'

const RowPost = (props) => {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((obj)=>
            <img className={props.isSmall? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='Poster'/>
          )}
        
            
        </div>

    </div>
  )
}

export default RowPost