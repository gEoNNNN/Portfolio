import './Card.scss';

interface CardProps {
  name: string;
  description: string;
  bannerImage: string;
}

const Card: React.FC<CardProps> = ({ name, description, bannerImage }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className='imgcontainer'>
          <div
            className="banner-image"
            style={{ backgroundImage: `url(${bannerImage})` }} // Set background image dynamically
          />
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="button-wrapper">
        <button className="btn fill">DETAILS</button>
      </div>
    </div>
  );
}

export default Card;
