import React from 'react';
import './styles.css';

export default function ListItem(props) {
    
    const handleModal= (display) => {
        var modal = document.getElementById("myModal");
        modal.style.display = display;
    }

    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => handleModal("none")}>&times;</span>
                    <p>{props.value.name}</p>
                </div>
            </div>
            <li onClick={() => handleModal("block")}>
                <p>{props.value.name}</p>
            </li>
        </>
    );
}