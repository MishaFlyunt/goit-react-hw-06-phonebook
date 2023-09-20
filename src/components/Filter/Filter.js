import { LabelStyled, FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Filter = () => {
  
  return (
    <FilterStyled>
      <LabelStyled>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          // value={filter}
          // onChange={changeSearchTerm}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
