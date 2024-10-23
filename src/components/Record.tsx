import { generateClient } from 'aws-amplify/api';
import { createTodo, updateTodo, deleteTodo } from '../graphql/mutations.js';
import { listTodos } from '../graphql/queries.js';
import React, { useEffect } from 'react';

const client = generateClient();

const record = () => {
  useEffect(() => {
    const fetchTodos = async () => {
      const result = await client.graphql({
        query: listTodos,
        variables: {}
      });
      console.log(result);  // This will log the list of todos
    };

    fetchTodos();
  }, []);

  const createNewTodo = async () => {
    const result = await client.graphql({
      query: createTodo,
      variables: {
        input: {
          name: "Hello Bobby, My first to-do!"
        }
      }
    });
    console.log(result);  // This will log the created todo
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={createNewTodo}>Create Todo</button>
    </div>
  );
};

export default record;
