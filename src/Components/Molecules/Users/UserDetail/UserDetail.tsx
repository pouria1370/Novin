import useGetSingleUser from "@apis/Users/Hooks/useGetSingleUser";
import { Skeleton } from "@mui/material";

import { useParams } from "react-router";

const UserDetail = () => {
  const params = useParams();
  const user = useGetSingleUser(+params?.id || 0);

  return (
    <>
      {user.isLoading ? (
        <div>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </div>
      ) : (
        <div>
          <div>{user.data?.data.avatar}</div>
          <div>
            picture:
            <image to={user.data?.data.avatar} />
          </div>
          <div>family: {user.data?.data.last_name}</div>
          <div>name: {user.data?.data.first_name}</div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
