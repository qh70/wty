import { Stack, Avatar, Button } from "@mui/material";

const Header = ({ title }) => {

  function goAddNewProduct (){
    document.location = "/addneworder";
  }

  return (
    <div className="wordOrder">
      <div className="titleNNameInOrder">
        <div className="titleInOrder">{title}</div>
        <div className="hideUnder600" style={{display: "flex"}}>
            <div className="nameInProduct">Name</div>
            <Stack className="stackInProduct2-1">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
        </div>
      </div>
      <Button className="ButtonInOrder" onClick={goAddNewProduct} label="ADD NEW ORDER" color="primary" variant="outlined">ADD NEW ORDER</Button>
    </div>
  )
}

export default Header
