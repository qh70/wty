import { Button } from "@mui/material";

const FirstButton = ({ goto }) => {
    
    

    function gotosomewhere (){
        document.location = `/addnew${goto.toLowerCase()}`;
    }

  return (
    <div>
      <Button className="FirstButton" onClick={gotosomewhere} label="ADD NEW ORDER" color="primary" variant="outlined">ADD NEW {goto}</Button>
    </div>
  )
}

export default FirstButton
