import React from 'react';
import { IPizza } from '../models/models';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch } from '../store';
import { removeItem } from '../store/pizza/pizzaSlice';
const FavouriteCard = ({ item }: { item: IPizza }) => {
  const dispatch = useAppDispatch();
  const onClickDelete = () => {
    dispatch(removeItem(item));
  };
  React.useEffect(() => {}, [dispatch]);
  return (
    <div
      className={
        'relative flex bg-white border rounded-xl py-2 px-5 h-[200px] hover:shadow-md  transition-all'
      }>
      <img className={'rounded-full'} src={item.imageUrl} alt="pizza" />
      <h2 className={'font-bold '}>{item.title}</h2>
      <span className={'font-bold'}>${item.price}</span>
      <p className={'text-gray-500'}>${Math.round(item.price / 12)}/12 month</p>
      <button onClick={onClickDelete} className={'bg-blue-600 text-white py-2 px-4 rounded'}>
        Удалить
      </button>
      <span className={'absolute top-2 right-4'}>
        <ShoppingCartIcon />
      </span>
    </div>
  );
};

export default FavouriteCard;
