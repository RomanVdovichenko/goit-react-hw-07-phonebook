import React from 'react';
import { useDispatch } from 'react-redux';
import { chengeFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = evt => {
    dispatch(chengeFilter(evt.currentTarget.value));
  };

  return (
    <div>
    <label>
      <p>Find contacts by name</p>
      <input type="text" onChange={changeFilter}></input>
      </label>
    </div>
  );
};
