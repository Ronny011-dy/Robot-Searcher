import CardContainer from '../card-container/card-container.component';
import { Robot } from '../../App';

import styled from 'styled-components';

const StyledCardList = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 50px;
`;

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => {
  return (
    <StyledCardList className="card-list">
      {robots.map((robot) => {
        const { id, name, email } = robot;
        return <CardContainer name={name} email={email} id={id} />;
      })}
    </StyledCardList>
  );
};

export default CardList;
