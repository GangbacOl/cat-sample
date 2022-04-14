import styled from 'styled-components';

const Search = () => {
  return (
    <SearchForm>
      <SearchLabel>
        <SearchInputArea />
      </SearchLabel>
      <SearchSubmitBtn type='button' value='Search' />
    </SearchForm>
  );
};

const SearchForm = styled.form``;
const SearchLabel = styled.label``;
const SearchInputArea = styled.input``;
const SearchSubmitBtn = styled.input``;

export default Search;
