import React from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '../hooks/debounce';
import { useSearchItemsQuery } from '../store/pizza/pizza.api';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DetailsIcon from '@mui/icons-material/Details';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../store/pizza/pizzaSlice';
const Header = () => {
  const [search, setSearch] = React.useState('');
  const [dropdown, setDropdown] = React.useState(false);
  const debounced = useDebounce(search);
  const favouriteItems = useSelector(favouritesSelector);
  const { isError, isLoading, data } = useSearchItemsQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  });
  React.useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0);
  }, [debounced, data]);
  React.useEffect(() => {}, [favouriteItems]);
  return (
    <nav className=" w-full h-[100px] bg-slate-400">
      <div className={'flex justify-between h-full items-center px-4'}>
        <Link to={'/'}>
          <span className="text-cyan-50 font-bold text-3xl cursor-pointer">
            <DetailsIcon /> asaxiy
          </span>
        </Link>

        <div className="relative w-[450px] ">
          <input
            type="text"
            className="border rounded py-2 px-3 w-full h-[42px] mb-2 outline-slate-100"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {dropdown && (
            <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] list-none bg-white shadow-md overflow-y-scroll ">
              {data?.map((item: any) => (
                <Link to={`/pizza/${item.id}`} key={item.id}>
                  <li
                    onClick={() => setDropdown(false)}
                    className={
                      'py-2 px-2 cursor-pointer hover:bg-blue-600 transition-colors hover:text-white'
                    }>
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className={'flex gap-2'}>
          <ShoppingCartOutlinedIcon fontSize="large" />
          <Link to={'/favourites'}>
            <FavoriteBorderOutlinedIcon fontSize="large" />
            {favouriteItems.length > 0 && (
              <span className={'text-red-700 font-bold text-lg'}>{favouriteItems.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
