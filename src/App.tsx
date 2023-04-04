import { useState } from 'react';
import { JsxElement } from 'typescript';

function App(): JSX.Element {
  const [addTodo, setAddTodo] = useState({
    title: '',
    content: '',
  });

  const [todo, setTodo] = useState([
    { title: '타스뽀개기', content: '3단계까지 마무으리' },
  ]);
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { name, value } = e.target;
    setAddTodo({ ...addTodo, [name]: value });
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo([...todo, addTodo]);
    setAddTodo({ title: '', content: '' });
  };
  return (
    <>
      <h1>TodoList</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          name="title"
          value={addTodo.title}
          onChange={changeInputHandler}
        />
        <input
          type="text"
          name="content"
          value={addTodo.content}
          onChange={changeInputHandler}
        />
        <button type="submit">추가</button>
      </form>
      {todo.map((item) => (
        <div style={{ width: '100px', height: '100px', border: '1px solid' }}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
