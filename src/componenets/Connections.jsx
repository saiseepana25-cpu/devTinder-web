import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice.js";

const Connections = () => {
  const dispatch = useDispatch();
  const userConnections = useSelector((store) => store.connections);
  const getconnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error("Failed to fetch connections", err);
    }
  };
  useEffect(() => {
    getconnections();
  }, []);
  if (!userConnections) return null;
  if (userConnections.length === 0) return <h1>No connections found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl">Connections</h1>
      {userConnections.map((connection) => {
        const { _id, firstName, lastName, about, age, gender, photoUrl } =
          connection;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                src={photoUrl}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font bold text xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
