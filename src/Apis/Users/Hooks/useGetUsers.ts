import { useQuery } from "@tanstack/react-query";
import usersServices from "../UsersServices";

const useGetUsers = (key: number) => {
  return useQuery({
    queryFn: ({ queryKey }) => {
      const [, key] = queryKey; // Extract the second value in the queryKey array
      return usersServices.GetAllUsers({ page: key as number });
    },
    queryKey: ["GET_USERS", key],
  });
};

export default useGetUsers;
