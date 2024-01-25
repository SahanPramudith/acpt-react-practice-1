import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function Form() {

    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const onsit = (value) => {

        setName(target.value)
        setAge(target.value)
        setAddress(target.value)
        console.log(address, age, name)
    }
    const onclick = () => {
        console.log("name "+name,"address "+address,'age  '+age)
    }

    return (
        <div>
            <Box>
                <TextField onChange={onsit}  id="filled-basic" label="Age" variant="filled"/><br/>
                <TextField onChange={onsit}  id="filled-basic" label="Name" variant="filled"/><br/>
                <TextField onChange={onsit}  id="filled-basic" label="Address" variant="filled"/><br/>
                <Button onClick={onclick} variant="text">Text</Button>
            </Box>
        </div>
    )
}