import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please Login</div>;
  return <div>Wellcome {user.username}</div>;
}
