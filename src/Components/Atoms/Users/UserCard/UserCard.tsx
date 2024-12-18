import { TUserType } from "@customTypes/Apis/Users/Users";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useUser } from "@store/OtpForms/useUsers";
import { useNavigate } from "react-router";

const UserCard = ({ user }: { user: TUserType }) => {
  const navigate = useNavigate();
  const ctx = useUser();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar className="text-red-500" aria-label="recipe">
            {user.first_name.charAt(0)}
          </Avatar>
        }
        title={<div className="text-center text-red-700">{user.email}</div>}
        subheader={
          <div className="text-xl text-primary-100 text-end">{`id:${user.id}`}</div>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" className="text-slate-500">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
          <strong className="text-red-700 mx-3">{user.first_name}</strong>
          <strong className="text-red-700">{user.last_name}</strong>
        </Typography>
      </CardContent>

      <div
        onClick={() => {
          ctx.setOpen(true);
          navigate(`/welcome/${user.id}`);
        }}
        className="animate-bounce cursor-pointer text-center text-primary-100"
      >
        more details
      </div>
    </Card>
  );
};

export default UserCard;
