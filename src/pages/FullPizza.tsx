import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ParamsType } from '../models/models';
import { useGetOneItemQuery } from '../store/pizza/pizza.api';

const FullPizza = () => {
  const { id } = useParams<ParamsType>();
  const { isError, isLoading, data } = useGetOneItemQuery(id!);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something wrong</div>}
      <div className={'text-black'}>{data?.title}</div>
    </div>
  );
};

export default FullPizza;
