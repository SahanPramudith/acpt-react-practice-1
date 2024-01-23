import axios from "axios";
import {useEffect} from "react";


export default function Axios() {
    useEffect(() => {
        getdata()
    }, []);
    const getdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return(
        <div>
            <h1>Axios</h1>
        </div>
    )
}