import React from "react";

export default function User(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>;
  }

  return (
    <div className="user container">
      <h2>
        {details.first_name}&nbs;{details.last_name}
      </h2>
      <p>Email: {details.email}</p>
    </div>
  );
}
