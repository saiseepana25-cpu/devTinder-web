import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const userFeed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (userFeed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Failed to fetch feed", err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!userFeed) return null;
  if (userFeed.data.length === 0)
    return <h1 className="text-center my-10">No more users in feed</h1>;
  return (
    <div className="flex flex-col items-center justify-center my-10">
      {userFeed && <UserCard userFeed={userFeed.data[0]} />}
    </div>
  );
};

export default Feed;
