import { useEffect, useState, useContext } from 'react';
import { Layout, Menu, Input, Spin } from 'antd';
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { InputText } from './InpoutText';
import './Home.css'
import { LoadingOutlined } from '@ant-design/icons';
import { ListOfUser } from './ListOfUser'
import { userDetailsContext } from '../context';
import { DraftUser } from './DraftUser'
import { generateUserRequest } from '../actions/generateUserRequest';



export const Home = () => {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const [str, setStr] = useState(null)
  const [flag, setFlag] = useState(1)
  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [userArray, setUserArray] = useState([])
  const [visible, setVisible] = useState("sideBar")
  let newUser;

  const generateUser = async () => {
    setVisible("sidebarDisabled")
    newUser = await generateUserRequest(str);
    let timer = setTimeout(setVisible("sideBar"), 1000)
    console.log("newUser", newUser)
    setUserArray(oldArray => [...oldArray, newUser])
    clearTimeout(timer)
  }

  useEffect(() => {
    if (sessionStorage.getItem("userArray"))
      setUserArray(JSON.parse(sessionStorage.getItem("userArray")))
  }, [])


  return (

    <div className="container">
      <div className="header">
        <h1>Generated Contacts:{userArray.length}</h1>
      </div>
      <div className="mainContent">
        <div className={visible}>
          {visible == "sideBar" && <InputText setStr={setStr} setFlag={setFlag} />}
          <div className="avatar">

            {visible == "sideBar" && (flag ? < Avatar shape="circle" visible="true"
              src={str ? `https://avatars.dicebear.com/api/female/${str}.svg` : "/broken-image.jpg"} /> : <Spin indicator={antIcon} />)}
          </div>
          {visible === "sideBar" && <Button color="primary" variant="contained" onClick={() => { generateUser() }}
            disabled={flag == 0 || str == null || str == ""} >create user</Button>}
        </div>
        <div className="contacts">
          <div className="draft">
            {visible == "sideBar" && (!flag || str) && < DraftUser />}
          </div>
          {userArray.length > 0 && <ListOfUser userArray={userArray} />}
        </div>
      </div>
    </div>
  )
}
