import axios from "axios";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import PostCard from "../Component/PostCard/PostCard.jsx";
import Box from "@mui/material/Box";
import Prograss from "../Component/Prograss Bar/Prograss.jsx";
import Form from "../Component/Form/form.jsx";
import FormData from "../Component/Form/form.jsx";


export default function Axios() {
    useEffect(() => {
        getdata()
    }, []);
    const [data, setData] = useState([])
    const [loder, setLoder] = useState(true)

    const getdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data)
                setLoder(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const PostData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const UpdateData = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <h1>Axios</h1>
            <hr/>

            {
                loder ?
                    <Box>
                       <Prograss/>
                    </Box>
                    :
                    <Box sx={{flex: 'Wrap'}}>
                        {data.map((val, index) => (

                            <PostCard description={val.body} id={val.id} title={val.title}/>
                        ))}

                    </Box>

            }


            {/*<Button onClick={()=>PostData()}>Post Data</Button><br/>*/}
            {/*<Button onClick={()=>PostData()}>Post Data</Button><br/>*/}
            {/*<hr/>*/}
            {/*<Button onClick={()=>UpdateData()}>Update Data</Button>*/}

        </div>
    )
}