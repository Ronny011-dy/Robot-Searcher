import CardContainer from '../card-container/card-container.component';
import './card-list.styles.css';

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => {
        const { id, name, email } = robot;
        return <CardContainer name={name} email={email} id={id} />;
      })}
    </div>
  );
};

export default CardList;
