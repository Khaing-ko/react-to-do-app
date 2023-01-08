import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { green, grey, pink, blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import {
    Delete as DeleteIcon,
    Check as CheckIcon,
    Undo as UndoIcon,
    Edit as EditIcon,
} from "@mui/icons-material";

const TaskList = ({ item, remove, toggle }) => {
    return (
        <Box>
            {item.map((item) =>
                <List key={item.id}>
                    <ListItem>
                        <IconButton onClick={() => toggle(item.id)}>
                            {item.done ? (
                                <UndoIcon />
                            ) : (
                                <CheckIcon sx={{ color: green[500] }} />
                            )
                            }
                        </IconButton>
                        <ListItemText
                            sx={{
                                ml: 8,
                                color: item.done ? "grey" : "black",
                            }} >
                            {item.name}
                        </ListItemText>
                        
                        <Link to={`edit/${item.id}`} >
                            <EditIcon sx={{ color : "grey", mr:2}} />
                        </Link>

                        <IconButton onClick={() => remove(item.id)}>
                            <DeleteIcon sx={{ color : blue[500] }} />
                        </IconButton>
                    </ListItem>
                </List>
            )
            }
        </Box>
    )
}
export default TaskList;