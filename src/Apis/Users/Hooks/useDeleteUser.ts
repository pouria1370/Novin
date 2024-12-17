import { useMutation } from "@tanstack/react-query";
import usersServices from "../UsersServices";

const useDeleteUser = ({ id }: { id: number }) => {
  return useMutation({
    mutationFn: () => usersServices.DeleteUser({ id }),

    mutationKey: ["UPDATE_USER", id],
  });
};

export default useDeleteUser;
