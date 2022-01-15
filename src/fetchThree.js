import React, {useState, useEffect} from 'react'

function fetchThree(){
const [info, setInfo] = useState([])

useEffect(()=>{
fetchData();
},[])

async function fetchData(){
  try{
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const json = await response.json()
setInfo(json)
  }
  catch(error){
    console.log(error)
  }
}


return(
<div >
  <ul className="newCard">
{info.map((info)=>{
return(
  <li key={info.id} className="card">{info.name} <br />
  {info.email} <br />
  {info.username}
  </li>
)
})
}
</ul>
</div>

)}
export default fetchThree