import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import { RootState } from '../redux/config/configStore';
import { addTodo } from '../redux/modules/todoSlice';
import { EditTodo } from './EditTodo';

export type todoType = {
  id: number;
  title: string;
  content: string;
};

export const TodoRedux = (): JSX.Element => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: 1,
    title: '',
    content: '',
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo({
      id: 1,
      title: '',
      content: '',
    });
  };

  const todos = useSelector((state: RootState) => state.todo);

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={changeInputHandler}
        />
        <input
          type="text"
          name="content"
          value={newTodo.content}
          onChange={changeInputHandler}
        />
        <button type="submit">추가</button>
      </form>
      {todos.map((item) => (
        <div
          key={item.id}
          style={{ border: '1px solid', width: '200px', height: '200px' }}
        >
          <EditTodo item={item} />
        </div>
      ))}
    </div>
  );
};
