import React from "react";
import Card from "../Card/Card";
import { StyledList } from "./Styled";

const ListOfCars = ({ data }) => {
  return (
    <StyledList>
      {data.length !== 0 &&
        data.map((car) => (
          <Card
            key={car.id}
            img={car.img}
            title={car.make}
            year={car.year}
            price={car.rentalPrice}
            company={car.rentalCompany}
            mileage={car.mileage}
            adress={car.adress}
            model={car.model}
            type={car.type}
          />
        ))}
    </StyledList>
  );
};

export default ListOfCars;

//  {
//         "id": 9582,
//         "year": 2008,
//         "make": "Buick",
//         "model": "Enclave",
//         "type": "SUV",
//         "img": "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
//         "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//         "fuelConsumption": "10.5",
//         "engineSize": "3.6L V6",
//         "accessories": [
//             "Leather seats",
//             "Panoramic sunroof",
//             "Premium audio system"
//         ],
//         "functionalities": [
//             "Power liftgate",
//             "Remote start",
//             "Blind-spot monitoring"
//         ],
//         "rentalPrice": "$40",
//         "rentalCompany": "Luxury Car Rentals",
//         "address": "123 Example Street, Kiev, Ukraine",
//         "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//         "mileage": 5858
//     },
