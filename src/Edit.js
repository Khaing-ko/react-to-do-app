import { ArrowBack as ArrowBackIcon, Save as SaveIcon } from "@mui/icons-material";
import { Container, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { green } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ get, update }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [subject, setSubject] = useState([]);
    useEffect(() => {
        setSubject(get(id).name)
    }, [get, id])

    const updateHandler = () => {
        update(id, subject)
        navigate('/');
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box sx={{ mb: 2 }} >
                <IconButton
                    onClick={() => {
                        navigate("/");
                    }} >
                    <ArrowBackIcon />
                </IconButton>
            </Box>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    update(id, subject);
                    navigate("/");
                }}
            >

                <OutlinedInput
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                color="error"
                endAdornment = {
                    <InputAdornment position="end">
                        <IconButton type="submit">
                            <SaveIcon sx={{ color: green[500]}} />
                        </IconButton>
                    </InputAdornment>

                }
                />


            </form>
        </Container >
    )
}

export default Edit;