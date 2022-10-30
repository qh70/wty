import { useState,useEffect } from "react"
import { API_GET_DATA } from "../../../global/constants"

import List from "./List"

// async function fetchData(setOrderList) {
//     const res = await fetch(API_GET_DATA)
//     const { data } = await res.json()
//     setOrderList(data);
// }



const Right = () => {

    const [ orderList, setOrderList ] = useState([]);

    // useEffect(() => {
    //     fetchData(setOrderList)
    // }, [])

    useEffect(() => {
        fetch("http://ec2-13-212-207-229.ap-southeast-1.compute.amazonaws.com:8088/rest/authenticate/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": "charles",
                "password": "abcd1234"
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }, [])

    function goAddNewOrder (){
        document.location = "/addneworder";
    }

  return (
    <div className="right">
      <div className="order">Order</div>
      <button className="buttons" onClick={goAddNewOrder}>Add New Order</button>
      <List orderList={orderList}/>    
    </div>
  )
}

export default Right