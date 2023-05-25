import React from "react";
import Navbar from "./Navbar/Navbar";
import Cards from "./Content/Cards/Cards";
import Footer from "./Footer/Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Cards />
      <Footer />
		</div>
	)
};

export default Home;
