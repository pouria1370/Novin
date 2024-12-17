import UserLayout from "@components/Molecules/Users/Layout/UserLayout";
import UserList from "@components/Molecules/Users/UserList/UserList";
import { Drawer } from "@mui/material";
import { Outlet } from "react-router";

const UsersViewer = () => {
  return (
    <UserLayout>
      <UserList />
      <Drawer open={false}>
        <Outlet />
      </Drawer>
    </UserLayout>
  );
};

export default UsersViewer;
