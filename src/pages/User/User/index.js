import { useContext } from 'react';

import Header from "../../../components/Header/Header"
import FirstButton from '../../../components/Button/FirstButton';
import UserList from "./components/UserList"

import { GetContext } from '../../../GetContext';

const User = () => {

  const { setEditable } = useContext(GetContext)

  setEditable(false)

  return (
    <div className="order">
      <Header/>
      <FirstButton goto="User"/>
      <UserList/>
    </div>
  )
}

export default User
