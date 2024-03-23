import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import Spinner from "../Components/Spinner";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/posts/getallposts`
    );
    if (data.success) {
      setPosts(data.data);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      {posts ? (
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h3>This page have latest posts.</h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col d-flex flex-row flex-wrap justify-content-start">
              {posts.map((x) => (
                <Card
                  key={x.Id}
                  id={x.Id}
                  image={x.ImagePath}
                  description={x.Discription}
                  tags={x.Tags}
                  title={x.Title}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
