import React from "react";

const UserCard = ({ userFeed }) => {
  const { about, firstName, lastName, photoUrl, age, gender } = userFeed;
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
          <button className="btn btn-primary">interested</button>
          <button className="btn btn-secondary">ignored</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
