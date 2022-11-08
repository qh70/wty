import { Stack, Avatar } from "@mui/material";

const Header = ({ title }) => {

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
