import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 350 }} key={item.id}>
      <CardMedia sx={{ height: 120 }} image={item.img} title="Product image" />
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

      <CardActions className="detailContainer">
        <Link to={`/ItemDetail/${item.id}`}>
          <Button className="DetailButton" variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
