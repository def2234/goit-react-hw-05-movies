import { useState } from 'react';
import PropTypes from 'prop-types';
import { Btn, Form, Input } from './SearchForm.syled';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }

    onSubmit(value);
    resetForm();
  };

  const resetForm = () => {
    setValue('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={onInputChange}
        name="value"
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Btn type="submit">Search</Btn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
