import React from 'react';
import PizzaCard from '../components/PizzaCard';
import { IPizza } from '../models/models';
import { useGetItemsQuery } from '../store/pizza/pizza.api';

const Home = () => {
  const { isLoading, isError, data } = useGetItemsQuery(1);
  return (
    <div className={'py-7 px-4 bg-slate-200'}>
      <div className={'grid grid-cols-4 gap-5  py-3 px-3'}>
        {isLoading && <div>Loading...</div>}
        {data?.map((obj: IPizza) => (
          <PizzaCard key={obj.id} item={obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
