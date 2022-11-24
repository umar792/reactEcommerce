import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const AppAPI = () => {
  const [userAPI, setUserAPI] = useState([]);
  const [loading, setLoading] = useState(true);
  let API = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const UserData = async (url) => {
    try {
      let res = await axios.get(url);
      let GitData = await res.data;
      setUserAPI(GitData);
      setLoading(false);
    } catch (error) {
      console.log("my error is" + error);
    }
  };

  useEffect(() => {
    UserData(API);
  }, []);
  if (loading) {
    return <div>....loading</div>;
  }
  return (
    <>
      {userAPI.map((curElem, index) => {
        return (
          <div className="api" key={index}>
            <div className="img">
              <img src={curElem.thumbnailUrl} alt="" />
            </div>
            <div className="data">
              <h1>Thaoa</h1>
              <p>{curElem.title.slice(1, 30)}</p>
              <div className="follower">
                <div className="articales">
                  <p>Articles</p>
                  <h3>320</h3>
                </div>
                <div className="articales">
                  <p>Followers</p>
                  <h3>786</h3>
                </div>
                <div className="articales">
                  <p>Following</p>
                  <h3>908</h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AppAPI;
