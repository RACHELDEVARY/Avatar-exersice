import { TextField, Avatar } from "@material-ui/core"
import { useContext } from 'react';
import { userDetailsContext } from '../context';


export const DraftUser = () => {
    const [userDetails] = useContext(userDetailsContext);
    return (
        <div style={{ display: "flex", opacity: 0.5 }}>
            <TextField value={userDetails} placeholder="Draft User" />
            <Avatar src={userDetails ? `https://avatars.dicebear.com/api/female/${userDetails}.svg` : "/broken-image.jpg"} />
        </div>
    )
}