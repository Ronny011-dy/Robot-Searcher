import './card-container.styles.css';

const CardContainer = ({ name, email, id }) => (
  <div className={`card-container ${id}`} key={id}>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id + 3}?size=300x350`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default CardContainer;
