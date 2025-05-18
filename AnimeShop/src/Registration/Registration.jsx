import {React, useState} from 'react'
import styles from './Registration.module.css'
import Login from './Login'
import Signup from './Signup'

function Registration() {
  const [toggle, setToggle] = useState(true)
  //const [logoutEmail, setLogoutEmail] = useState("");
  //const [logoutPassword, setLogoutPassword] = useState("");

  //const [user, setUser] = useState({});
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
  <>
  <div className={styles.main}>
  {toggle ? 
  <Login toggleForm={handleToggle}/>: 
  <Signup toggleForm={handleToggle}/>}
  </div>
  </>
  )
}
  
export default Registration;