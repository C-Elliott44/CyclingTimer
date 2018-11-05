import React, {Component} from "react";
import '../App.css';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-black" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={handleClose}>Done</button>
                <button onClick={handleClose}>Cancel</button>
                {children}
                <button>Prev</button>
                <button>Add</button>
                <button>Next</button>
            </section>
        </div>
    );
};

export default Modal;