import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LIST from "../data/saloninfo";
import Stars from "./stars";
import arrow from "../img/arrow.svg";


class ListItem extends Component {

  render() {
    const { id, title, clock, address, time, price } = this.props.ListItem;
    
    return (
      <div key={id} className="salonListitem">

        <p className="salonClock">{clock}</p>

        <div className="salonDiv">

          <h2 className="salonTitle">{title}</h2>

          <div className="salonStars">
            <Stars className="stars"  /> 
          </div>

          <p className="salonAddress">{address}</p>
        </div>

        <div>
          <p className="salonPrice">{price} kr</p>
          <p className="salonTime">{time} min</p>
        </div>

        <Link to={`/salon/${id}`}  className="arrowsection">
          <img src={arrow} alt="arrow" />
        </Link>

      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hår</h1>
          <hr />
          <p>Pris</p>
          <hr />
        </header>

        {
          LIST.map(salong => {
            return (
              <div key={salong.id}>
                <ListItem ListItem={salong} />
                <hr className="hrStyle" />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default List;
