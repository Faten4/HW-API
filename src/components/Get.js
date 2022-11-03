import React, {useEffect, useState} from "react"
import axios from "axios"


function Get() {
    const[state, setstate]= React.useState([])
  React.useEffect(() => {
    axios.get("https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=10&columns=title%2Crelease_date%2Ccover_url&order=chronology%2CDESC&filter=title%3DIron").then((res)=>{
      console.log(res.data);
      setstate(res.data);
      })
  }, [])
  return (
    <div>
        <div className="api-con">
        { state.map((items)=>{
      return(
        <div className="img-con">
        <img src={items.image_link}></img>
        {/* <p> {items.fName}</p>
        <p> {items.lName}</p> */}
        
        </div>
      )})}
      </div>
        </div>
  )
}

export default Get