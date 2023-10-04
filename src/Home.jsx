import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

const [listofProduct ,setListofProduct] = useState([])


  useEffect(()=>{
    console.log("priya")
    axios.get("http://localhost:8080/products")
    .then((result)=>{
// console.log(result.data)

setListofProduct(result.data)

    })
  },[])
// console.log(`"http://localhost:8080"+${listofProduct[0].photo.path}`);

//   useEffect(()=>{
//     axios.get('http://localhost:8080/uploads/products')
//     .then((result)=>{
// console.log(result)
//     })
//   },[])
  return (


    <div className='Home'>
      <ul>
        <li><Link to= ''>Clothing</Link></li>
        <li><Link to= ''>Books</Link></li>
        <li><Link to= ''>Electoroines</Link></li>
        <li><Link to= ''>Beauty And Personalize</Link></li>
      </ul>

{
  (listofProduct)?
  listofProduct.map((lists, index)=>{
    return(
      <div>
      <h1 key={index}>{lists.name}</h1>
     <img src={"http://localhost:8080/" + lists.photo.path.split("//")[0] + "/" + lists.photo.path.split("//")[1]} alt='avaliable'/>
        </div>
    )
 
  })
  :" "
}


</div>


  )
}

export default Home