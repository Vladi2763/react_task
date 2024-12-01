import {
  Card as CardMui,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

interface ICardProps {
  title: string;
  body: string;
  email?: string;
  children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, body, email, children }) => {
  return (
    <CardMui
      sx={{
        maxWidth: '32%',
        minWidth: '32%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="700">
          {title}
        </Typography>
        <Typography>{body}</Typography>
        {email && <Typography fontWeight="700">{email}</Typography>}
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>{children}</CardActions>
    </CardMui>
  );
};

export default Card;
