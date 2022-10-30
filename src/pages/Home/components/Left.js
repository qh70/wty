import { useState } from 'react'
import Item from './Item'
import List from '@mui/material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import GroupsIcon from '@mui/icons-material/Groups';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Order from "../../../static/Order.png"
import Product from "../../../static/Product.png"
import User from "../../../static/User.png"
// import { makeStyles } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom';

// 本來嘗試useReducer，但後來感覺useState比較合適
// function reducer({state}) {
//     switch (state){
//         case !"Order":
//             return {
//                 state: "Order"
//             }
//         case !"Product":
//             return {
//                 state: "Product"
//             }
//         case !"Users":
//             return {
//                 state: "Users"
//             }
//         case !"Clients":
//             return {
//                 state: "Clients"
//             }
//     }
// }

// const useStyles = makeStyles({
//   active: {
//     backgroundColor: "#5B60DE"
//   }
// });


const Left = () => {
    // 本來嘗試useReducer，但後來感覺useState比較合適
    // const [state, dispatch] = useReducer(reducer, {
    //     state: "Order"
    // })
    const [state, setState] = useState("Order");

    const history = useHistory();
    
    const location = useLocation()

    // const classes = useStyles()

    const itemMeun = [
      {
        text: "Order",
        icon: <ListAltIcon />,
        path: "/order"
      },
      {
        text: "Product",
        icon: <Inventory2Icon />,
        path: "/product"
      },
      {
        text: "User",
        icon: <PersonSharpIcon />,
        path: "/user"
      },
      {
        text: "Client",
        icon: <GroupsIcon />,
        path: "/client"
      }
    ]

  return (
    <div className="leftEmpty">
        <div className="left">
          <div className="imgNWTKTrading">
            <img className="WTC-logo1" src={require("../../../static/WTY-logo 1.png")}/>
            <p className="WTKTrading">WTK Trading</p>
          </div>
          {/* <Item state={state} setState={setState} itemName="Order"/>
          <Item state={state} setState={setState} itemName="Product"/>
          <Item state={state} setState={setState} itemName="Users"/>
          <Item state={state} setState={setState} itemName="Clients"/> */}
          <List >
            {itemMeun.map(item => (
              <ListItem 
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                // className={location.pathname == item.path ? classes.active :null}
              >
                <div className={location.pathname == item.path ? "straightLine" : "straightLineDark"}></div>
                <div className={location.pathname == item.path ? "iconNMenu" : "iconNMenuDark"}>
                  <ListItemIcon className={location.pathname == item.path ? "itemIcon" : "itemIconDark"}>{item.icon}</ListItemIcon>
                  <ListItemText className={location.pathname == item.path ? "itemMenu" : "itemMenuDark"} primary={item.text}/>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
    </div>
  )
}

export default Left
