import React from "react";
import { StyledHero } from "./Styled";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <StyledHero>
      <div className="heroContainer">
        <div className="heroTitleContainer">
          <p className="heroText">Rent cars in Ukraine</p>
          <h1 className="heroTitle">Hit the road</h1>
          <p className="heroDescription">
            Find the perfect car in Ukraine to explore the natural beauty around
            the city, and find a place to relax with a summer day trip.
          </p>
          <Link className="heroBtn" to="/catalog">
            Rent the perfect car
          </Link>
        </div>

        <img
          className="heroImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0057.jpg/600px-%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0057.jpg"
          alt="city Kharkiv"
        />
      </div>

      <ul className="heroListContainer">
        <li>
          <h2 className="listTitle">Find the perfect car</h2>
          <p className="listText">
            Enter a location and date and browse thousands of cars shared by
            local hosts.
          </p>
        </li>
        <li>
          <h2 className="listTitle">Book your trip</h2>
          <p className="listText">
            Book on app or online, choose a protection plan, and say hi to your
            host! Cancel for free up to 24 hours before your trip.
          </p>
        </li>
        <li>
          <h2 className="listTitle">Hit the road</h2>
          <p className="listText">
            Have the car delivered or pick it up from your host. Check in with
            the app, grab the keys, and hit the road!
          </p>
        </li>
      </ul>
    </StyledHero>
  );
};

export default Hero;
