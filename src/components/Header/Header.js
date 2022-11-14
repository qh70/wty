import { Stack, Avatar } from "@mui/material";

const Header = () => {

  const URL = window.location.href;
  if (URL.includes("addnew")){
    const page = URL.split("/").slice(-1)[0]
    var title = page[0].toUpperCase()+page.substring(1, 3)+" "+page[3].toUpperCase()+page.substring(4,6)+" "+page[6].toUpperCase()+page.substring(7)
  }else{
    const page = URL.split("/").slice(-1)[0]
    var title = page[0].toUpperCase()+page.substring(1)
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
    </div>
  )
}

export default Header
