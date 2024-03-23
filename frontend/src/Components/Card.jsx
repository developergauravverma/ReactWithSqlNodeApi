import React from "react";

const Card = ({ image, title, description, tags, id }) => {
  const ImagePath = require(`../Assets/PostsImg/${image}`);
  return (
    <>
      <div className="card-group h-50 m-2" style={{ width: "300px" }}>
        <div className="card w-auto">
          <img src={ImagePath} className="card-img-top" alt="default" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{tags}</p>
          </div>
          <div className="card-footer">footer</div>
        </div>
      </div>
    </>
  );
};

export default Card;
