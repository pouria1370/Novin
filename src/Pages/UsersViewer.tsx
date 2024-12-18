import UserLayout from "@components/Molecules/Users/Layout/UserLayout";
import UserList from "@components/Molecules/Users/UserList/UserList";
import { Drawer } from "@mui/material";
import { useUser } from "@store/OtpForms/useUsers";
import { Outlet, useNavigate } from "react-router";

const UsersViewer = () => {
  const user = useUser();
  const ctx = useUser();
  const navigate = useNavigate();
  return (
    <UserLayout>
      <UserList />
      <Drawer
        onClose={() => {
          navigate(-1);
          ctx.setOpen(false);
        }}
        open={user.open}
      >
        <Outlet />
      </Drawer>
    </UserLayout>
  );
};

export default UsersViewer;
