import React from "react";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
	return (
        <>
        <Header/>
		<main className="home">
			<section className="home__hero">
				<h1 className="home__title-title"><span className="home__highlight">LOSANGELES</span> MOUNTAINS</h1>
			</section>
			<section className="home__history">
                <h2 className="home__subtitle"><span className="home__prefix">01.</span>HISTORY</h2>
				<p className="home__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
					Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
					hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
				</p>
			</section>
            <section className="home__climb">
                <h2 className="home__subtitle"><span className="home__prefix">02.</span>CLIMB</h2>
                <p className="home__description">Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
            </section>
		</main>
        <Footer/>
        </>
	);
}

export default Home;
