import React from 'react';
import { IPizza } from '../models/models';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch } from '../store';
import { addItem, removeItem } from '../store/pizza/pizzaSlice';
const PizzaCard = ({ item }: { item: IPizza }) => {
  const [isOutlined, setOutlined] = React.useState(true);
  const dispatch = useAppDispatch();
  const onClickFavour = () => {
    setOutlined(!isOutlined);
    if (!isOutlined) {
      dispatch(removeItem(item));
    } else {
      dispatch(addItem(item));
    }
  };
  return (
    <div
      className={
        'relative bg-white border rounded-xl py-2 px-5 cursor-pointer hover:shadow-md  transition-all'
      }>
      <img className={'rounded-full'} src={item.imageUrl} alt="pizza" />
      <h2 className={'font-bold '}>{item.title}</h2>
      <span className={'font-bold'}>${item.price}</span>
      <p className={'text-gray-500'}>${Math.round(item.price / 12)}/12 month</p>
      <span onClick={onClickFavour} className={'absolute top-2 left-4'}>
        {isOutlined ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
      </span>
      <span className={'absolute top-2 right-4'}>
        <ShoppingCartIcon />
      </span>
    </div>
  );
};

export default PizzaCard;
