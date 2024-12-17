import { useMutation } from "@tanstack/react-query";
import usersServices from "../UsersServices";
import { TCreateUserInput } from "@customTypes/Apis/Users/Users";

const useCreateUser = ({ id }: { id: number }) => {
  return useMutation({
    mutationFn: (input: TCreateUserInput) =>
      usersServices.CreateUser({ input, id }),

    mutationKey: ["CREATE_USER", id],
  });
};

export default useCreateUser;
