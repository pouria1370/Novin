import Axios from "../Axios_Infrastructure";
import {
  TCreateUserInput,
  TCreateUserResponseType,
  TSingleUserResponseType,
  TUpdateUserInput,
  TUpdateUserResponseType,
  TUsersResponseType,
} from "@customTypes/Apis/Users/Users";

class UsersServices {
  async GetAllUsers({ page }: { page: number }) {
    const responce = await Axios.get<TUsersResponseType>(`/users?page=${page}`);
    if (!responce.data) {
      throw responce.data;
    }
    return responce.data;
  }
  async GetSingleUser({ id }: { id: number }) {
    const response = await Axios.get<TSingleUserResponseType>(`/users/${id}`);
    if (!response.data) {
      throw response.data;
    }
    return response.data;
  }
  async DeleteUser({ id }: { id: number }) {
    const response = await Axios.delete<null>(`/users/${id}`);
    return response.data;
  }
  async UpdateUser({ input, id }: { input: TUpdateUserInput; id: number }) {
    const response = await Axios.post<TUpdateUserResponseType[]>(
      `/users/${id}`,
      input
    );
    if (!response.data) {
      throw response.data;
    }
    return response.data;
  }
  async CreateUser({ input, id }: { input: TCreateUserInput; id: number }) {
    const response = await Axios.post<TCreateUserResponseType[]>(
      `/users/${id}`,
      input
    );
    if (!response.data) {
      throw response.data;
    }
    return response.data;
  }
}

const usersServices = new UsersServices();
export default usersServices;
