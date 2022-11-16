import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/Categories';
import '../../styles/categories.css';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onClickStatus = (event) => {
    dispatch(checkStatus());
    event.currentTarget.classList.replace('categories-btn', 'btn-off');
  };

  return (
    <div className="categories-container">
      <button className="categories-btn" type="button" onClick={onClickStatus}>Check Satus</button>
      <h4>{categories}</h4>
    </div>
  );
}

export default Categories;
