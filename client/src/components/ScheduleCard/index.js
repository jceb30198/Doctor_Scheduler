import React from "react";

function ScheduleCard(props) {
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props} src="#"/>
            </div>
            <div className="info-container">
                <ul>
                    <li>
                        <strong>Name:</strong>
                    </li>
                    <li>
                        <strong>Schedule:</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ScheduleCard;