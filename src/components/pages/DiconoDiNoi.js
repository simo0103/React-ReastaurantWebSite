import React, { Component } from "react";
import Slider from "react-slick";
import '../../style/css/diconodinoi.css';
import tropadvisorlogo from '../../images/png/tripadvisor1.png';

class DiconodiNoi extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };
    return (
    <div id="section" className="diconodinoi">
        <h3>
            Dicono di noi:
        </h3>
        <Slider {...settings}>
            <div>
                <div className="text-container">
                    <p>
                    " Uno dei migliori se non il miglior pub di Bologna.<br></br>Personale gentile e disponibile.<br></br> Le birre sono tante e son tutte buone, la pasta che fanno è speciale.<br></br>Fanno vedere le partite e il posto è molto accogliente. Anche i prezzi sono ottimi. "
                    </p>
                    <img className="tripadvisor" src={tropadvisorlogo} alt="tripadvisor logo"/> 

                </div>
            </div>

            <div>
                <div className="text-container">
                    <p>
                    " Fantastico pub adatto sia per singoli che per grandi comitive,<br></br> staff sempre cortese e ben capace;<br></br>
                    cibo molto buono (stuzzicherie, hamburger, pasta al kg) e birra eccellente (anche al litro), il tutto a buon prezzo. "
                </p>
                <img className="tripadvisor" src={tropadvisorlogo} alt="tripadvisor logo"/> 
                </div>

            </div>
            <div>
                <div className="text-container">
                    <p>
                    " Ti senti a casa.<br></br>
Secondo me uno dei migliori pub che ci sia a Bologna,<br></br> mangiare ottimo e buone birre sia in bottiglia che alla spina.<br></br> 
Poi che dire i camerieri sono veramente bravi professionali e simpatici. "
                    </p>
                    <img className="tripadvisor" src={tropadvisorlogo} alt="tripadvisor logo"/>        

                </div>
            </div>
        
        </Slider>

    </div>
    );
  }
}
export default DiconodiNoi;