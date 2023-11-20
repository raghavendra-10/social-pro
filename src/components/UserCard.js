// src/components/UserCard.js
import React from 'react';

const UserCard = () => {
  const data = require('../json/profileData.json');

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="upper">
          <img src={data.coverPhoto} className="img-fluid" alt="Cover" />
        </div>
        <div className="user text-center">
          <div className="profile">
            <img
              src={data.avatar}
              className="rounded-circle"
              width="80"
              alt="Profile"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4 className="mt-2">{data.name}</h4>
          <span className="text-muted d-block mb-2">{data.location}</span>
          <button className="btn btn-primary btn-sm follow">Follow</button>
          <div className="d-flex justify-content-between align-items-center mt-4 px-4">
            <div className="stats">
              <h6 className="mb-0">Followers</h6>
              <span>{data.followers}</span>
            </div>
            <div className="stats">
              <h6 className="mb-0">Projects</h6>
              <span>{data.projects}</span>
            </div>
            <div className="stats">
              <h6 className="mb-0">Posts</h6>
              <span>{data.Posts}</span>
            </div>
          </div>
        </div>

  
        <div className="mt-4 px-4">
     
          {data.posts.map((post, index) => (
            <div key={index} className="post">
              <h6>{post.title}</h6>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
