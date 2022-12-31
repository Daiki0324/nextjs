import React, { useState,useEffect } from 'react';
import supabase from '../utils/supabase';
import { InputTodoForm } from '../components/InputTodoForm';
import { TodoList } from '../components/ToDoList';

const Home = ()  => {
  return (
    <>
      <InputTodoForm />
      <TodoList />
    </>
  )
}

export default Home;