import type { FC } from 'react';
import { Container } from './CardContainer.styles';

interface Props {
  name: string;
  email: string;
  id: string;
}

const getRobotImage = (id: string) => {
  return `https://robohash.org/${id + 3}?size=300x350`;
};

export const CardContainer: FC<Props> = ({ name, email, id }) => (
  <Container>
    <img alt={`robot ${name}`} src={getRobotImage(id)} />
    <h2>{name}</h2>
    <p>{email}</p>
  </Container>
);
