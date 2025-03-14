import styled from 'styled-components';

export const TextInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 300px;
  line-height: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
