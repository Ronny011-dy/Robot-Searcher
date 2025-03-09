import { CardContainer } from '../CardContainer';
import { Robot } from '../../App';
import { List } from './CardList.styles';

interface Props {
  robots: Robot[];
}

export const CardList = ({ robots }: Props) => {
  console.log('DEV| robots:', robots);
  return (
    <List>
      {robots.map((robot) => {
        const { id, name, email } = robot;
        return <CardContainer name={name} email={email} id={id} key={id} />;
      })}
    </List>
  );
};
