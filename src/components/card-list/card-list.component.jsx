import CardContainer from '../card-container/card-container.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <CardContainer name={name} email={email} id={id} />;
      })}
    </div>
  );
};

export default CardList;
