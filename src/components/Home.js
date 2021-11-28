
import { useEffect, useState, useContext } from 'react';
import { Layout, Menu, Input,Spin } from 'antd';
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { InputText } from './InpoutText';
import './Home.css'
import { LoadingOutlined } from '@ant-design/icons';
import {ListOfUser} from './ListOfUser'
import { userDetailsContext } from '../context';
import  {DraftUser} from './DraftUser'






export const Home = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    const [str, setStr] = useState(null)
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    let sideMenu=true
    const [flag,setFlag]=useState(1)
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
  
const  generateUser=()=>{
  // try{
    console.log("i am in generate")
//   const response= await fetch("https://randomuser.me/documentation#seeds",{
//     mathos:"GET",
//     cors:'cors'
//   })

//   console.log(response)
//    }
//   catch (err) {
//     console.log("oopsss...error", err.message)
//     return
// }   
}




// export  async function getRooms (){
//   // alert(userId.user )
//       try {
//           const res = await fetch(baseUrl + '/booking/rooms', {
//               //צריכה לשנות ל GET
//               method: "GET",
//               headers: {
//                   'authorization': localStorage.getItem('token')
//               },
//               cors: 'cors',
//           })
//           let data = await res.json();
//           console.log("data",data);
//           if(data) return data    
        
//   }
//       catch (err) {
//           console.log("oopsss...error", err.message)
//           return
//       }
//   }
  
   
      return (
         <Layout>
         <Header className="header">
                <h1>header</h1>
         </Header>
            <Layout>
             <Sider 
      style={{
        overflow: 'auto',
        height: '100vh',
         width:0,
        position: 'fixed',
        left: 0,
      }}>
            <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  style={{ height: '100%', borderRight: 0}}
                >

                <Menu.Item key="1">
                 <InputText setStr={setStr} setFlag={setFlag}/>  
                     </Menu.Item>

               <Menu.Item key="2">{flag ?< Avatar shape="circle" visible="true" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                 src={str ? `https://avatars.dicebear.com/api/female/${str}.svg` : "/broken-image.jpg"} />:<Spin indicator={antIcon} />} </Menu.Item>

               <Menu.Item key="3"><Button color="primary" variant="contained"  onClicK= {()=>console.log("clicked")} 
               disabled={flag==0 || str==null||str==""} >create user</Button>
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
                width:250,
                
                        }}
                   >
                     {(!flag ||str) && < DraftUser />}
                     {/* <span>{userDetails}</span> */}
                       <ListOfUser/> 
                    </Content>
                {/* </Layout> */}
            </Layout>
        </Layout>
    )

}

