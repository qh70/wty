import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Header = ({title}) => {
  return (
    <header className="wordProduct">
        <div className="wordAddNewOrder">{title}</div>
        <div className="hideUnder600" style={{display: "flex"}}>
            <a className="nameInProduct">Name</a>
            <Stack className="stackInProduct2-1">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
        </div>
    </header>
  )
}

export default Header
