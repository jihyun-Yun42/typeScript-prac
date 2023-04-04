import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navi = useNavigate();

  return <button onClick={() => navi('/redux')}>redux로 TodoList</button>;
};
