import React, { useEffect } from "react";
import { useTypesSelector } from "../hooks/useTypedSelector";

import type {} from "redux-thunk/extend-redux";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypesSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
