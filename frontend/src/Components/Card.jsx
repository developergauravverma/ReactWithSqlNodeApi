import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/auth";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Card = ({ image, title, description, tags, id }) => {
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  const ImagePath = require(`../Assets/PostsImg/${image}`);
  const [postLikeCount, setPostLikeCount] = useState(0);
  const [islike, setIsLike] = useState(false);

  let userId = auth.user.Id;

  const fetchPostLikeCount = async (id) => {
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
  };

  const fetchIsPostLike = async (userId, postId) => {
    try {
      let { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/posts/getLikeByUserId`,
        { userId: userId, postId: postId }
      );
      if (data.success) {
        if (data.result) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      }
    } catch (err) {
      console.log("Error in Fetching Is Post Liked");
    }
  };

  const likeUpdate = async (e) => {
    debugger;
    let userId = e.currentTarget.getAttribute("data-userid");
    let postId = e.currentTarget.getAttribute("data-postid");
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/api/v1/posts/saveLikeOnPost`,
      { userId: userId, postId: postId }
    );
    if (data.success) {
      setIsLike(data.newLike);
      if (islike) {
        setPostLikeCount(postLikeCount - 1);
      } else {
        setPostLikeCount(postLikeCount + 1);
      }
    }
  };

  useEffect(() => {
    const data = async () => {
      await fetchIsPostLike(userId, id);
      await fetchPostLikeCount(id);
    };
    data();
  }, [id, userId]);

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
            {islike ? (
              <>
                <FcLike
                  onClick={likeUpdate}
                  data-userid={userId}
                  data-postid={id}
                />
              </>
            ) : (
              <>
                <FcLikePlaceholder
                  onClick={likeUpdate}
                  data-userid={userId}
                  data-postid={id}
                />
              </>
            )}
            <div>{postLikeCount}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
