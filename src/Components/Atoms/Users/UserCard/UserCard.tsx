import { TUserType } from "@customTypes/Apis/Users/Users";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const UserCard = ({ user }: { user: TUserType }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar className="text-red-500" aria-label="recipe">
            {user.first_name.charAt(0)}
          </Avatar>
        }
        title={user.email}
        subheader={`id:${user.id}`}
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
    </Card>
  );
};

export default UserCard;
