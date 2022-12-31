import { useEffect, useState } from 'react';
import supabase from "../utils/supabase";

export const useAddTodo = () => {
 const [todos, setTodos] = useState([]);

 useEffect(() => {
  fetchTodos()
 }, [todos])

 const fetchTodos = async () => {
  let{data: todos} = await supabase.from('todos').select('*');
  setTodos(todos)
 }

 return {todos, fetchTodos};
}