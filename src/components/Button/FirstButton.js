import { Button } from "@mui/material";

const FirstButton = () => {
    
    function goAddNewOrder (){
        document.location = "/addneworder";
    }

  return (
    <div>
      <Button className="FirstButton" onClick={goAddNewOrder} label="ADD NEW ORDER" color="primary" variant="outlined">ADD NEW ORDER</Button>
    </div>
  )
}

export default FirstButton
