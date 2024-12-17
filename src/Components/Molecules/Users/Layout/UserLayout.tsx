import useLogout from "@apis/Auth/Hooks/useLogout";
import { useAuth } from "@store/Auth/useAuth";
import { ReactNode, useMemo } from "react";
import { useNavigate } from "react-router";

const UserLayout = ({ children }: { children: ReactNode }) => {
  const existToken = useMemo(
    () => JSON.parse(localStorage.getItem("Auth") as string)?.state?.token,
    []
  );
  const mutate = useLogout();
  const navigate = useNavigate();
  const auth = useAuth();
  const logoutHandler = () => {
    mutate.mutate();
    auth.removeRegisterId();
    auth.removeToken();
    navigate("/login");
  };
  return (
    <div className="items-center justify-center bg-gradient-to-l from-primary-100 to-green-600  flex flex-col gap-3">
      <div className="  ">
        {existToken ? (
          <h1 onClick={() => logoutHandler()} className="text-slate-100">
            خروج
          </h1>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default UserLayout;
