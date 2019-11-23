import React, { Component } from 'react';
import map from '../../images/png/Map.png';
import '../../style/css/contattaci.css';



class Contattaci extends Component {
  render() {
    return (
      <div id="section" className="doveSiamo">
        <div className="hoursList">
          <ul>
            <span className="listTitle">Orari:</span>
            <li className="orari">
              <span className="day">Lunedì</span>
              <span>18:00 - 02:00</span>
            </li>
            <li className="orari">
              <span className="day">Martedì</span>
              <span>18:00 - 02:00</span>
            </li>
            <li className="orari">
              <span className="day">Mercoledì</span>
              <span>18:00 - 02:00</span>
            </li>
            <li className="orari">
              <span className="day">Giovedì</span>
              <span>18:00 - 02:00</span>
            </li>
            <li className="orari">
              <span className="day">Venerdì</span>
              <span>18:00 - 03:00</span>
            </li>
            <li className="orari">
              <span className="day">Sabato</span>
              <span>18:00 - 03:00</span>
            </li>
            <li className="orari">
              <span className="day">Domenica</span>
              <span>18:00 - 02:00</span>
            </li>

          </ul>
        </div>
        <div className="address">
          <div>
            <h3>
              Dove siamo:
            </h3>
            <p>
            Via della Repubblica 16, Bologna
            </p>     
            <p>
              Tel: 051-516022
            </p>

          </div>
          <img className="map" src={map} alt="dove siamo"/> 
        </div>
      </div>
    );
  }
}

export default Contattaci;