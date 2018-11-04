import React, {Component} from "react";
import '../App.css';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-black" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Done</button>
            </section>
        </div>
    );
};

export default Modal;