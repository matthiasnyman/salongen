import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Stars from "./stars";
import salonInfo from "../data/saloninfo";
import arrow from "../img/arrow.svg";
import heart from '../img/heart.svg';
import pin from "../img/pin.svg";
import clock from "../img/clock.svg";
import globe from "../img/globe.svg";
import phone from "../img/phone.svg";


class Salong extends Component {

  render() {
    // const id = this.props.match.params.id;    
    const Salon = salonInfo[1];
    
    return (
      <div>
        <header className="salonHeader">
          <div className="salonHeaderStyle">
            <div className="salonheaderTopp">
              <Link to='/' className="backButton">
                <img src={arrow} alt="backButton" />
              </Link>
              <img src={heart} className="salonHeart" alt='Like'  />
            </div>
            <h1 className="salonName">{Salon.title}</h1>
            <Stars />
          </div>
        </header>

        <div className="salonArea">
          <div className="buttonarea">
            <div>
              <p>Info</p>
            </div>

            <div>
              <p>Schema</p>
            </div>
          </div>

          <div className="salonInfo">
            <div>
              <img src={pin} alt="address" />
              {Salon.address}
            </div>
            <hr />
            <div>
              <img src={clock} alt="open to" />
              Öppet till 19 idag
            </div>
            <hr />
            <div>
              <img src={phone} alt="phonenumber" />
              {Salon.phone}
            </div>
            <hr />
            <div>
              <img src={globe} alt="webaddress" />
              {Salon.webaddress}
            </div>
            <hr />

            {Salon.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Salong;
