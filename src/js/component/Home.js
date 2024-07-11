import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Footer from "./Footer";

const Home = () => {
	const cards = [
		{ imageUrl: "https://res.cloudinary.com/dx4vddpud/image/upload/v1717507214/friends-travelling-in-campervan-2023-11-27-04-52-55-utc_bjz5g3.jpg", title: "Primer viaje", description: "Cerdeña" },
		{ imageUrl: "https://res.cloudinary.com/dx4vddpud/image/upload/v1717507212/woman-taking-photo-with-mobile-of-her-friends-pigg-2023-11-27-05-09-52-utc_trwy7n.jpg", title: "Segundo viaje", description: "Pirineo Catalán" },
		{ imageUrl: "https://res.cloudinary.com/dx4vddpud/image/upload/v1717507212/woman-leaning-on-campervan-with-camera-2023-11-27-05-17-32-utc_ptjrpy.jpg", title: "Tercer viaje", description: "Roma" },
		{ imageUrl: "https://res.cloudinary.com/dx4vddpud/image/upload/v1717507211/inside-view-from-a-campervan-whit-surfer-outside-w-2023-11-27-05-36-59-utc_cx1cyp.jpg", title: "Cuarto viaje", description: "Los Alpes" }
	];

	return (
		<div className="text-center">
			<Navbar />
			<Inicio />
			<div className="row mt-4">
				<div className="row justify-content-center">
					{cards.map((card) => (
						<div className="col-lg-2 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
							<Card imageUrl={card.imageUrl} title={card.title} description={card.description} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
