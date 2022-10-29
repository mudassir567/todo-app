const express = require("express");
const todoModel = require("./model");

const create_todo = async (req, res) => {
  //const { title, description }= req.body //ye smjhna hai

  const todo = new todoModel({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const add_todo = await todo.save();
    res.status(201).json(add_todo);
    console.log(add_todo);
  } catch (err) {
    console.log(err);
  }
};

//create_todo()

const get_todo = async (req, res) => {
  try {
    const todo_list = await todoModel.find({});
    res.status(201).send(todo_list);
  } catch (err) {
    console.log(err);
  }
};
//get_todo()

const delete_todo = async (req, res) => {
  const ids = req.params.id;
  try {
    const deltodos = await todoModel.findByIdAndDelete(ids);
    console.log(deltodos);
    res.status(200).send(deltodos);
    //     if(error){
    //         console.log('error')
    //     }
    //     else{
    //         res.send(deleteddata)
    //         console.log('delete worked',deleteddata)
    //     }

    // }
  } catch (err) {
    console.log(err);
  }
};
const update_todo = async (req, res) => {
  try {
    const ids = req.params.id;
    const update = req.body;
    // const options= {new:true}//ye line b ni smjha mai

    const edit_todos = await todoModel.findByIdAndUpdate(ids, update, {
      new: true,
    });
    console.log("update func worked");
    res.status(200).send(edit_todos);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create_todo, get_todo, delete_todo, update_todo };
