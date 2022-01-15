import React, {useState, useEffect} from 'react'

function fetchTwo(){
const [data, setData]= useState({})

useEffect(()=> {
fetch('https://randomuser.me/api')
.then(res=> res.json())
.then((e)=>setData(e.results[0]))
},[])


return(
<div className="card">
Name: {data.name && data.name.title} {data.name && data.name.first} {data.name && data.name.last} <br />
Email: {data.email} <br />
Gender: {data.gender} <br />
</div>
)
}
export default fetchTwo