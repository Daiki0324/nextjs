import { useEffect, useState } from 'react';
import supabase from "../utils/supabase";

export const useAddTodo = () => {
 const [todo, setTodo] = useState([]);

 useEffect(() => {
  fetchTodos()
 }, [])

 const fetchTodos = async () => {
  const datas : any = await supabase.from('todos').select('*');
  setTodos(datas.body)
 }

 return {todos, fetchTodos};
}