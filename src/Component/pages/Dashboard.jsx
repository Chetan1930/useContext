import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Dashboard = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [data, setData] = useState({
    Name: "",
    password: "",
  });

  return (
    <div>
      {user.Name ? (
        <>
          <h2>{user.Name} is logged in</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(data);
            }}
          >
            <label>Name : </label>
            <input
              name="Name"
              type="text"
              value={data.Name}
              placeholder="Enter Name"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              required
            />{" "}
            <label>password : </label>
            <input
              name="password"
              type="password"
              value={data.password}
              placeholder="Enter Name"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              required
            />
            <button type="submit"> Login </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Dashboard;
