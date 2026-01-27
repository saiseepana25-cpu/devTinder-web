import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const userRequests = useSelector((store) => store.requests);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data));
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };
  const handleRequests = async (status, _id) => {
    try {
      console.log("sai");
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequests(_id));
    } catch (err) {
      console.error("Error handling requests", err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl">Requests</h1>
      {userRequests &&
        userRequests.map((request) => {
          const { _id, firstName, lastName, about, age, gender, photoUrl } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
            >
              <div>
                <img
                  src={photoUrl}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font bold text xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + " " + gender}</p>}
                <p>{about}</p>
              </div>
              <div>
                <button
                  className="btn btn-primary mx-4"
                  onClick={() => handleRequests("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => handleRequests("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Requests;
