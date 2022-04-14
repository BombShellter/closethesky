import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shelters = () => {
  return (
    <Container>
      <h1>Shelters</h1>
      <Link className="nav-link" to="/shelters/shelter-statistic">
        Статистика сховища
      </Link>
    </Container>
  );
};

export default Shelters;
