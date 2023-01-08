import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Edit";

import { Box, AppBar, Toolbar, Typography, Button, Container, Divider } from "@mui/material";


const App = () => {

  const [items, setItems] = useState([
    { id: 1, name: 'Buy groceries for the week', done: false },
    { id: 2, name: 'Sign up for a yoga class', done: false },
    { id: 3, name: 'Pay monthly bills', done: false },
    { id: 4, name: 'Schedule dentist appointment', done: false },
    { id: 5, name: 'Write a blog post', done: true },
    { id: 6, name: 'Finish project report for work', done: true },
    { id: 7, name: 'Send thank-you notes for birthday gifts', done: true },
  ]);

  console.log(items[0]);

  const add = (new_item) => {
    setItems([
      { id: items.length + 1, name: new_item, done: false },
      ...items,
    ]);
  }

  const remove = (del_id) => {
    setItems(items.filter(item => item.id !== del_id));
  };

  const toggle = (toggle_id) => {
    setItems(items.map(item => {
      if (item.id === toggle_id) {
        item.done = !item.done;
      }
      return item;
    }))
  }

  const get = (get_id) => {
    return items.filter((item) => item.id === parseInt(get_id))[0];
  };

  const update = (update_id, update_item) => {
    setItems(
      items.map((item) => {
        if (item.id === parseInt(update_id)) item.name = update_item;
        return item;
      })
    )
  }

  const clear = () => {
    setItems(items.filter( (item) => !item.done ))
  };


  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button color="inherit" onClick={clear} >Clear</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <NewTask add={add} />
              <TaskList item={items.filter(item => !item.done)} remove={remove} toggle={toggle} />
              <Divider />
              <TaskList item={items.filter(item => item.done)} remove={remove} toggle={toggle} />
            </Container>
          } ></Route>
          <Route path="/edit/:id" element={<Edit get={get} update={update} />} />
        </Routes>
      </Router>
    </Box>

  )
}
export default App;
