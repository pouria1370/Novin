/**
 *@description This Type is used just for users
 */
export type TUsersResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TUserType[];
  support: {
    url: string;
    text: string;
  };
};
/**
 *@description This Type is used just for user
 */
export type TUserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
/**
 *@description This Type is used just for single user
 */
export type TSingleUserResponseType = {
  data: TUserType;
  support: {
    url: string;
    text: string;
  };
};
/**
 *@description This Type is used just for create-user response
 */
export type TCreateUserResponseType = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};
/**
 *@description This Type is used just for create user input
 */
export type TCreateUserInput = {
  name: string;
  job: string;
};
/**
 *@description This Type is used just for update user input
 */
export type TUpdateUserInput = {
  name: string;
  job: string;
};
/**
 *@description This Type is used just for update user response
 */
export type TUpdateUserResponseType = {
  name: string;
  job: string;
  updatedAt: string;
};
