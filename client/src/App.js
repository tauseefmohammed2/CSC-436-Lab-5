import { useReducer, useEffect } from 'react';
import CreateTodo from './Todos/CreateTodo';
import TodoList from './Todos/TodoList';
import UserBar from './User/UserBar';
import appReducer from './reducer';
import { StateContext } from './context';
import { useResource } from 'react-request-hook';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    todos: [],
  });  

  const [todosResponse, getTodos] = useResource(() => ({
    url: "/todo",
    method: "get",
    headers: {
      Authorization: `${state?.user?.access_token}`
    }
  }));

  useEffect(() => {
    if (state?.user?.access_token) {
      getTodos();
    }
  }, [state?.user?.access_token, getTodos]);

  useEffect(() => {
    if (todosResponse && todosResponse.data) {
      dispatch({ type: "FETCH_TODO", todos: todosResponse.data.todos.reverse() });
    }
  }, [todosResponse, dispatch]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div>
        <UserBar />
        {state.user && state.user.email && <CreateTodo />}
        <TodoList />
      </div>
    </StateContext.Provider>
  );
}

export default App;