import React, { Component } from "react";
import '../../style/css/countdown.css';

class CountDown extends Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    
    componentDidMount() {
        this.interval = setInterval(() => {
           
            const now = Date.now();
            const then = new Date("2020-09-26").getTime();
            const tempoRestante = then - now;
            const seconds =  Math.floor(((tempoRestante % 60000) / 1000)) < 10   
                            ? "0" + Math.floor(((tempoRestante % 60000) / 1000)) 
                            : Math.floor(((tempoRestante % 60000) / 1000));
            const minutes =  Math.floor((tempoRestante / (1000 * 60)) % 60) < 10 
                            ? "0" + Math.floor((tempoRestante / (1000 * 60)) % 60) 
                            : Math.floor((tempoRestante / (1000 * 60)) % 60);
            const hours = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24) < 10 
                        ? "0" + Math.floor((tempoRestante / (1000 * 60 * 60)) % 24) 
                        : Math.floor((tempoRestante / (1000 * 60 * 60)) % 24) ;     
            const days = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    render() {
        const { days, hours, minutes, seconds } = this.state;
       
        return (
            <div className="countDown">
                <h3>Aspettando il Giù dal Ponte In Festa 2020</h3>
                <div className="countdown-wrapper">
                    <div className="countdown-item">                      
                        <span className="number">{days}</span>
                        <span>giorni</span>
                    </div>
                    <div className="countdown-item">                    
                        <span className="number">{hours}</span>
                        <span>ore</span>
                    </div>
                    <div className="countdown-item">        
                        <span className="number">{minutes}</span>
                        <span>minuti</span>
                    </div>
                    <div className="countdown-item">                  
                        <span className="number">{seconds}</span>
                        <span>secondi</span>
                    </div>
                </div>
            </div>  
        );
    }
}
export default CountDown;