import { useEffect, useState } from "react";

const AllUserTab = () => {
  const [userData, setUserData] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PRODUCTION_URL}/user`
      );

      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      {userData.map((data) => {
        return <p key={data._id}>{data.firstName}</p>;
      })}
    </div>
  );
};

export default AllUserTab;
