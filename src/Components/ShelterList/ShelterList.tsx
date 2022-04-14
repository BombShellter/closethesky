import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import s from "./ShelterList.module.css";
import { Link } from "react-router-dom";
import ShelterStatistic from "../../Pages/ShelterStatistic/ShelterStatistic";

function ShelterList() {
  const [shelter, setShelter] = useState([]);
  const [displayedShelters, setDisplayedShelters] = useState(10);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchShelters = async () => {
      const res = await axios.get("https://warm-beach-56088.herokuapp.com/db");
      setShelter(res.data);
      setIsLoaded(true);
    };
    fetchShelters();
  }, []);

  const currentShelters = shelter.slice(0, displayedShelters);

  function loadMoreShelters() {
    setDisplayedShelters((prev: any) => prev + 10);
  }

  function enterListElement(event: any) {
    event.currentTarget.classList.add(s.active);
  }

  function leaveListElement(event: any) {
    event.currentTarget.classList.remove(s.active);
  }

  return (
    <>
      {isLoaded ? (
        <>
          <h2 className={s.title}>Список бомбосховищ</h2>
          <ListGroup>
            {currentShelters.map((shelter: any) => (
              <ListGroup.Item
                key={shelter.shelter_id}
                onMouseEnter={enterListElement}
                onMouseLeave={leaveListElement}
              >
                {/* <Link to={`/shelters/shelter-statistic/${shelter.shelter_id}`}>
                  {`№ ${shelter.shelter_number}`} - {`Адрес: ${shelter.adress}`}
                </Link> */}
                <Link
                  to={{
                    pathname: `/shelters/shelter-statistic/${shelter.shelter_id}`,
                    // state: { currentShelters: shelter },
                  }}
                >
                  {`№ ${shelter.shelter_number}`} - {`Адрес: ${shelter.adress}`}
                  {/* <ShelterStatistic /> */}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className={s.button}>
            {currentShelters.length === shelter.length ? (
              <p>Усі сховища завантажено</p>
            ) : (
              <Button onClick={loadMoreShelters} variant="warning">
                Завантажити ще
              </Button>
            )}
          </div>
        </>
      ) : (
        <h2>Завантаження...</h2>
      )}
    </>
  );
}

export default ShelterList;
