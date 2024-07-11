import React from 'react'

const Inicio = () => {
    return (
        <div className="card col-lg-10 mt-8 mb-4 border-0 bg-light" style={{ height: "auto", marginLeft: "auto", marginRight: "auto" }}>
            <div className="card-body">
                <h1 className="card-title d-flex justify-content-start mt-2">¡Bienvenidos a Panettone Van!</h1>
                <p className="card-title d-flex justify-content-start mt-3">
                    Somos Alba y Pere, desde Cataluña, y estamos construyendo nuestra propia furgoneta Fiat Ducato 🚐💛
                </p>
                <p className="card-title d-flex justify-content-start mt-3">
                    Una vez que la terminemos, soñamos con hacer miles de viajes por el mundo, explorando nuevos lugares y viviendo aventuras increíbles. #DIY ⚒️🪚
                </p>
                <a href="#" className="btn mt-3" style={{ backgroundColor: "#28ADB5", color: "white" }}>Conócenos</a>
            </div>
        </div>
    )
}

export default Inicio;