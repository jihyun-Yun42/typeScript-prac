import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = [{ title: '타입스크립트 부시자', content: 'ㄹㅇ.', id: 1 }];

type payloadType = { title: string; content: string; id?: number; isEdit?: boolean };
type stateType = { title: string; content: string; id: number }[];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state: stateType, action: PayloadAction<payloadType>) {
      console.log(action.payload);
      return [...state, { ...action.payload, id: state[state.length - 1].id + 1 }];
    },
    updateTodo(state: stateType, action: PayloadAction<payloadType>) {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title, content: action.payload.content }
          : item
      );
    },
    deleteTodo(state: stateType, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
