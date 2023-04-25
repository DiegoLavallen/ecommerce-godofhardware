import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import useCounter from "../../utils/hooks/useCounter";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <Card sx={{ width: 345, height: 550 }} key={item.id}>
      <CardMedia sx={{ height: 180 }} image={item.img} title="Product image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={increment} variant="contained" size="small">
          Sumar
        </Button>
        <Typography variant="body1" color="text.primary">
          {counter}
        </Typography>
      </CardActions>
      <CardActions>
        <Button onClick={decrement} variant="contained" size="small">
          Restar
        </Button>
      </CardActions>
      <CardActions>
        <Button onClick={reset} variant="contained" size="small">
          Resetear
        </Button>
      </CardActions>
      <CardActions>
        <Link to={`ItemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
