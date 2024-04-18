import { useEffect, useState } from 'react'
import react  from 'react'
import axios from '../axios/axios'
import {API_KEY,imageUrl} from '../constant/constant'
import './Post.css'
function Post(props) {

   const[movies, setmovies]=useState([])

  useEffect( ()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    })

  },[] )


 
  return (
    <div className='row'>
        <h3 className='head'>{props.title}</h3>
        <div className='poster'>


          {movies.map((obj)=>
            <img className={props.isSmall ? 'smallpmg' : 'pimg'} src={`${imageUrl+obj.backdrop_path}`}></img>

            )}
            
        </div>
      
    </div>
  )
}

export default Post

