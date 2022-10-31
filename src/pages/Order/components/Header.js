import { Stack, Avatar, Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
const Header = ({ title }) => {

  function goAddNewOrder (){
    document.location = "/addneworder";
  }

  const history = useHistory();

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
      <Button className="ButtonInOrder" onClick={goAddNewOrder} label="ADD NEW ORDER" color="primary" variant="outlined">ADD NEW ORDER</Button>
    </div>
  )
}

export default Header
