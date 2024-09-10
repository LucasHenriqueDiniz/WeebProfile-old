import React from "react";
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from "react-icons/ri";
import { APIUser } from "./types";

interface Props {
  APIUser: APIUser;
}

const ProfileData: React.FC<Props> = ({ APIUser }) => {
  const { name, login, avatar_url, bio, followers, following, company, location, email, blog } = APIUser;
  return (
    <div className="profile-data-container">
      <div className="profile-data-flex">
        <div className="profile-data-avatar-container">
          <img src={avatar_url} alt={login} className="profile-data-avatar" />
        </div>
        <div className="profile-data-name">
          <h1>{name}</h1>
          <h2>{login}</h2>
        </div>
      </div>
      <div className="profile-data-bio">{bio && <p>{bio}</p>}</div>
      <ul className="profile-data-row">
        <li>
          <RiGroupLine className="profile-data-icon" />
          <b>{followers}</b>
          <span>Followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>Following</span>
        </li>
      </ul>

      <ul className="profile-data-column">
        {company && (
          <li>
            <RiBuilding4Line className="profile-data-icon" />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <RiMapPin2Line className="profile-data-icon" />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <RiMailLine className="profile-data-icon" />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <RiLinksLine className="profile-data-icon" />
            <span>{blog}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileData;
