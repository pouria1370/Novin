import { useMutation } from "@tanstack/react-query";
import usersServices from "../UsersServices";
import { TUpdateUserInput } from "@customTypes/Apis/Users/Users";

const useUpdateUser = ({ id }: { id: number }) => {
  return useMutation({
    mutationFn: (input: TUpdateUserInput) =>
      usersServices.UpdateUser({ input, id }),

    mutationKey: ["UPDATE_USER", id],
  });
};

export default useUpdateUser;
