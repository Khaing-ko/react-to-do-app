import React, { useRef } from "react";

import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Add } from "@mui/icons-material";
import { green } from "@mui/material/colors";


const NewTask = ({ add }) => {
    const input = useRef();

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                let new_item = input.current.value;
                if (!new_item) return false;
                add(new_item);

                input.current.value = "";
                input.current.focus();

            }}
            >
                <OutlinedInput color="error" fullWidth placeholder="Enter Task" inputRef={input} endAdornment = {
                <InputAdornment position="end">
                    <IconButton type="submit">
                        <Add sx={{ color: green[500]}} />
                    </IconButton>
                </InputAdornment>}/>
            </form>
        </div>
    )
}
export default NewTask;