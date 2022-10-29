import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const api_url = "http://localhost:8085/todos/";

function TodoCreateForm({
  todoList,
  setTodoList,
  currentTodo,
  setCurrentTodo,
  // isEdit,
  // setIsEdit,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    _id: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (!currentTodo) {
      const title = e.target.title.value;
      const description = e.target.description.value;
      console.log(title, description);
      add_todo(title, description);
      e.target.reset();
    } else {
      console.log(form, currentTodo);
      // do edit things
      update_todo(form._id, form.title, form.description);

      setCurrentTodo(null);
    }

    setForm({
      title: "",
      description: "",
      _id: "",
    });
  };

  const add_todo = async (title, description) => {
    try {
      const { data } = await axios.post(api_url, {
        title: title,
        description: description,
      });
      console.log(data);
      // const newTodos = []
      // for (let i = 0; i < todoList.length; i++) {
      //   const todo = todoList[i];
      //   newTodos.push(todo)
      // }
      // newTodos.push(data)
      const newTodos = [...todoList, data];
      // [[{...data}, {...data}]]
      // [{...data}, {...data}]

      console.log(newTodos);
      setTodoList(newTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const update_todo = async (todo_id, todo_title, todo_description) => {
    try {
      const updated_todo = await axios.put(`${api_url}${todo_id}`, {
        title: todo_title,
        description: todo_description,
      });
      console.log(updated_todo);

      const updating_todos = todoList.map(todo => {
        if (todo._id === todo_id) {
          console.log(todo._id);
          console.log(todo_id);

          return updated_todo.data;
        } else {
          console.log("nooooooooo");
          console.log(todo);
          return todo;
        }
      });
      setTodoList(updating_todos);
      console.log(updating_todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(currentTodo, "CURRENT");

    if (currentTodo) setForm(currentTodo);
  }, [currentTodo]);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    // const data = { ...form };
    // data[name] = value;

    // const data = { ...form, [name]: value };

    // setForm(data);

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            value={form.title}
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TodoCreateForm;
