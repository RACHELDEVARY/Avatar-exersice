
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






export const Home = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const [str, setStr] = useState(null)
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  let sideMenu = true
  const [flag, setFlag] = useState(1)
  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [userArray, setUserArray] = useState([])
  let newUser;

  const generateUser = async (str) => {
    let newContact
    try {
      console.log("i am in generate")
      const res = await fetch(`https://randomuser.me/api/?seeds=${str}`, {
        mathos: "GET",
        cors: 'cors'
      })

      let data = await res.json();
      if (data) {
        newContact = {
          userName: str, firstName: data.results[0].name.first, lastName: data.results[0].name.last,
          email: data.results[0].email
        }
        console.log("newContact", newContact);
      }
      return newContact
    }
    catch (err) {
      console.log("oopsss...error", err.message)
      return
    }
  }






  return (
    <Layout>
      <Header className="header">
        <h1>Generated Contacts:{userArray.length}</h1>
      </Header>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            width: 0,
            position: 'fixed',
            left: 0,
          }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="1">
              <InputText setStr={setStr} setFlag={setFlag} />
            </Menu.Item>

            <Menu.Item key="2">{flag ? < Avatar shape="circle" visible="true" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src={str ? `https://avatars.dicebear.com/api/female/${str}.svg` : "/broken-image.jpg"} /> : <Spin indicator={antIcon} />} </Menu.Item>

            <Menu.Item key="3"><Button color="primary" variant="contained" onClick={async () => {
              newUser = await generateUser(str);
              console.log("newUser", newUser)
              setUserArray(oldArray => [...oldArray, newUser])
              console.log("userArray", userArray)
            }}
              disabled={flag == 0 || str == null || str == ""} >create user</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Layout style={{ padding: '0 24px 24px' }}> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 250,
            minHeight: 280,
            width: 250,

          }}
        >
          {(!flag || str) && < DraftUser />}
          {userArray.length>0 && <ListOfUser userArray={userArray} />}
        </Content>
        {/* </Layout> */}
      </Layout>
    </Layout>
  )

}

