import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filterInputId = useId();

  return (
    <div className={css.searchBar}>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="text"
        id={filterInputId}
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
