// Lo primero es importar react:
import React from "react";

// creamos una constante con el mismo nombre que el archivo

const Card = ({ title, description, imageUrl }) => {
    //Lógica

    return (
        <div>
            <div className="card mb-4" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div >
    );
}

export default Card;