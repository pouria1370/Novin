import useGetUsers from "@apis/Users/Hooks/useGetUsers";
import UserCard from "@components/Atoms/Users/UserCard/UserCard";
import { Pagination } from "@mui/material";
import React, { useState } from "react";

const UserList = () => {
  const [page, setPage] = useState(1);
  const users = useGetUsers(page);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="grid lg:grid-cols-3 justify-items-center gap-6 gap-y-7 md:grid-cols-2 grid-cols-1">
      {users.data?.data.map((item, index) => (
        <UserCard user={item} key={`id${index}`} />
      ))}
      {
        <Pagination
          onChange={handleChange}
          variant="outlined"
          color="standard"
          count={users.data?.total_pages}
          className="col-span-full justify-self-center"
        />
      }
    </div>
  );
};

export default UserList;
