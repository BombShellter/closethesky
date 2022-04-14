import { Container, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./ShelterStatistic.module.css";
import happy from "../../assets/happy.png";
import confused from "../../assets/confused.png";
import cry from "../../assets/cry.png";

const ShelterStatistic = (props: any) => {
  // const [item, setItem] = useState(Object);
  console.log(props.location);

  // useEffect(() => {
  //   axios
  //     .get("https://warm-beach-56088.herokuapp.com/db")
  //     .then((response) => {
  //       setItem(response.data[8]);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  return (
    <Container className={style.container}>
      <h2 className={style.title}>
        Статистика по сховищу № {props.shelter_number}
      </h2>
      <h4 className={style.subtitle}>
        Адресу: <strong> &nbsp; {props.adress}</strong>
      </h4>
      <h4 className={style.subtitle}>
        Загальний стан по оцінці комісії:{" "}
        <strong> &nbsp; {props.status}</strong>
      </h4>
      <h4 className={style.subtitle}>
        Місткість сховища: <strong> &nbsp; {props.shelter_limit}</strong>
      </h4>
      <ListGroup className={style.listContainer}>
        <ListGroup.Item className={style.listItem} variant="success">
          <p>Вода</p> <img src={happy} alt="" />
        </ListGroup.Item>
        <ListGroup.Item variant="danger" className={style.listItem}>
          Їжа <img src={cry} alt="" />
        </ListGroup.Item>
        <ListGroup.Item variant="warning" className={style.listItem}>
          Медикаменти <img src={confused} alt="" />
        </ListGroup.Item>
        <ListGroup.Item variant="success" className={style.listItem}>
          Засоби зв'язку <img src={happy} alt="" className={style.listItem} />
        </ListGroup.Item>
        <ListGroup.Item variant="danger" className={style.listItem}>
          Засоби обігріву
          <img src={cry} alt="" />
        </ListGroup.Item>
        <ListGroup.Item variant="warning" className={style.listItem}>
          Ковдри <img src={confused} alt="" />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default ShelterStatistic;
