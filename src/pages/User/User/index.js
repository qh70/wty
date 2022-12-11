import Header from "../../../components/Header/Header"
import FirstButton from '../../../components/Button/FirstButton';
import UserList from "./components/UserList"


const User = () => {

  return (
    <div className="order">
      <Header/>
      <FirstButton goto="User"/>
      <UserList/>
    </div>
  )
}

export default User
