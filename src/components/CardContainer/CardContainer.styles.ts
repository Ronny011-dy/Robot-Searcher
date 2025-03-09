import styled from 'styled-components';

export const Container = styled.div`
  height: 350px;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(73, 73, 73, 0.094);
  padding-bottom: 15px;
  cursor: pointer;
  padding: 25px;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition-duration: 0.15s;
  }
`;
