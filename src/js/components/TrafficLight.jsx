import React, { useState } from 'react';

export function TrafficLight() {
    const [color, setColor] = useState('red');
    return (<div className="traffic-light-container">
        
            <div className="traffic-light-pole"></div>

            <div className={`traffic-light-box ${color === "red" ? "glow-red" : color === "yellow" ? "glow-yellow" : "glow-green"}`}>
                <div onClick={() => setColor("red")}
                    className={`light red ${color === "red" ? "active" : ""}`}></div>
                <div onClick={() => setColor("yellow")}
                    className={`light yellow ${color === "yellow" ? "active" : ""}`}></div>
                <div onClick={() => setColor("green")}
                    className={`light green ${color === "green" ? "active" : ""}`}></div>
            </div>
        </div>
    );
}