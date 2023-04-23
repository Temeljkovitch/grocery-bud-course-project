import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  const { name, completed, id } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button onClick={() => removeItem(id)} className="btn remove-btn">
        delete
      </button>
    </div>
  );
};

export default SingleItem;
