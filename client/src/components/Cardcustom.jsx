import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cardcustom.css"

function Cardcustom({title, imgURL, text, button}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">{button}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcustom;