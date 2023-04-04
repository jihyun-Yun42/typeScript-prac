import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/modules/todoSlice';
import { todoType } from './TodoRedux';

type propsType = {
  item: todoType;
};

type editType = {
  id: number;
  title: string;
  content: string;
  isEdit: boolean;
};

export const EditTodo = ({ item }: propsType): JSX.Element => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<editType>({
    id: item.id,
    title: item.title,
    content: item.content,
    isEdit: false,
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTodo(edit));
    setEdit({
      id: item.id,
      title: item.title,
      content: item.content,
      isEdit: false,
    });
  };

  const changeIsEditHandler = () => {
    setEdit({ ...edit, isEdit: !edit.isEdit });
  };

  const clickDeleteHandler = (id: number) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {edit.isEdit ? (
        <form onSubmit={submitFormHandler}>
          <input
            type="text"
            name="title"
            value={edit.title}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="content"
            value={edit.content}
            onChange={changeInputHandler}
          />
          <button type="submit">제출완료</button>
        </form>
      ) : (
        <div>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <button onClick={changeIsEditHandler}>수정</button>
          <button onClick={() => clickDeleteHandler(item.id)}>삭제</button>
        </div>
      )}
    </>
  );
};
