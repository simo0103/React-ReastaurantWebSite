import React, { Component } from 'react';
import map from '../../images/png/Map.png';
import '../../style/css/contattaci.css';



class Contattaci extends Component {
  render() {
    return (
      <div id="section contattaci" className="doveSiamo">
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11381.884697410938!2d11.35830642747802!3d44.505501572861256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fe5ceb7ec4306c4!2sDragon%20Pub!5e0!3m2!1sen!2sit!4v1575069663973!5m2!1sen!2sit" width="100%" height="450"></iframe>
        </div>
      </div>
    );
  }
}

export default Contattaci;