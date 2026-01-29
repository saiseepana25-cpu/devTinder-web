import React from "react";
import { BASE_URL } from "../utils/constants.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice.js";

const UserCard = ({ userFeed }) => {
  const { _id, about, firstName, lastName, photoUrl, age, gender } = userFeed;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error sending request>>>>>", err);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm mb-20">
      <figure>
        <img src={photoUrl} alt="userImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && (
          <p className="mb-0">
            {age} - {gender}
          </p>
        )}
        <p>{about}</p>
        <div className="card-actions flex content-center">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("intrested", _id)}
          >
            interested
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            ignored
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
