import Dashbord from "../../Pagess/Dashbord/Dashbord.jsx";
import User from "../../Pagess/User/User.jsx";
import AddchartIcon from '@mui/icons-material/Addchart';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Axios from "../../Axios/Axios.jsx";
import FormData from "../../Component/Form/form.jsx";


const routs=[
    {
        name:'Dashbord',
        path:'/dashbord',
        component:<Dashbord/>,
        key:'dashbord',
        icone:<AddchartIcon/>
    },

    {
        name:'User',
        path:'/user',
        component:<User/>,
        key:'user',
        icone: <InboxIcon/>,
    },
    {
        name:'Axios',
        path:'/axios',
        component:<Axios/>,
        key:'axios',
        icone: <InboxIcon/>,
    },
    {
        name:'Form',
        path:'/form',
        component:<FormData/>,
        key:'form',
        icone: <InboxIcon/>,
    },
]
export default routs