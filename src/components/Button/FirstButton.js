import { Button } from "@mui/material";
import { useHistory } from "react-router-dom"

const FirstButton = ({ goto, token }) => {
    
    const history = useHistory();

    function gotosomewhere (){
      history.push(`/addnew${goto.toLowerCase()}`)
    }

  return (
    <div>
      <Button className="FirstButton" onClick={()=>{gotosomewhere()}} label="ADD NEW ORDER" color="primary" variant="outlined">ADD NEW {goto}</Button>
    </div>
  )
}

export default FirstButton
