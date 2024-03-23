import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ image, title, description, tags, id }) => {
  const ImagePath = require(`../Assets/PostsImg/${image}`);
  const [postLikeCount, setPostLikeCount] = useState(0);
  debugger;

  const fetchPostLikeCount = async (id) => {
    let count = 0;
    try {
      let { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/posts/getLikeByPost`,
        {
          postId: id,
        }
      );
      if (data.success) {
        setPostLikeCount(data.result.postLikeCount);
      }
    } catch (err) {
      console.log(err);
    }
    return count;
  };

  useEffect(() => {
    fetchPostLikeCount(id);
  }, [id]);

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
          <div className="card-footer d-flex flex-row align-items-center m-1 p-1">
            <i className="fa-solid fa-heart"></i>
            <div>{postLikeCount}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
