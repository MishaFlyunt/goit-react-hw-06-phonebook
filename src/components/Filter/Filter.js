import { LabelStyled, FilterStyled } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  // const changeFilter = newFilter => {
  // //   setFilter(newFilter.target.value.toLowerCase().trim());
  // // };
  return (
    <FilterStyled>
      <LabelStyled>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
