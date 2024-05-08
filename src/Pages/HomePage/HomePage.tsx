import React, {useState} from "react";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import thumbnail1 from "../../assets/images/man-cliff.png";
import thumbnail2 from "../../assets/images/hikers-mountains.png";
import ScheduleTable from "../../components/Schedule/SheduleTable";
import {v4 as uuidv4} from "uuid";

const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState('mountain1');
	const scheduleMountain1 = [
		{id: uuidv4(), date: "25 Nov 2016", description: "Vestibulum viverra"},
		{id: uuidv4(), date: "28 Nov 2016", description: "Vestibulum viverra"},
		{id: uuidv4(), date: "18 Dec 2016", description: "Vestibulum viverra"},
		{id: uuidv4(), date: "7 Jan 2017", description: "Vestibulum viverra"},
	];
    const scheduleMountain2 = [
		{id: uuidv4(), date: "12 Feb 2017", description: "Lorem ipsum dolor sit"},
		{id: uuidv4(), date: "22 Feb 2017", description: "Sed do eiusmod tempor"},
		{id: uuidv4(), date: "2 Mar 2017", description: "Ut labore et dolore"},
		{id: uuidv4(), date: "15 Mar 2017", description: "Magna aliqua"},
	];
	return (
		<>
			<main className="home">
				<section className="home__hero">
					<Header modifier="top" />
					<h1 className="home__title">
						<span className="home__title-highlight">LOSANGELES</span> MOUNTAINS
					</h1>
				</section>
				<Header />
				<section className="home__history" id="history">
					<h2 className="home__subtitle">
						<span className="home__prefix">01.</span>HISTORY
					</h2>
					<p className="home__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
						Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
						hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
					</p>
					<div className="home__carousel-container">
						<div className="home__carousel-slide">
							<img src={thumbnail1} alt="Man on a cliff" className="home__thumbnail" />
							<img src={thumbnail2} alt="People hiking in the mountains" className="home__thumbnail" />
							<img src={thumbnail1} alt="Man on a cliff" className="home__thumbnail" />
							<img src={thumbnail2} alt="People hiking in the mountains" className="home__thumbnail" />
						</div>
					</div>
				</section>
				<section className="home__climb" id="team">
					<div className="home__section-header">
						<span className="home__prefix">02.</span>
						<h2 className="home__subtitle">CLIMB</h2>
						<p className="home__description">
							Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
							tortor nec congue.
						</p>
					</div>
					<div className="home__section-menu">
                        <h4 className={`home__tab ${activeTab === 'mountain1' ? 'home__tab--active' : ''}`} onClick={() => setActiveTab('mountain1')}>MOUNTAIN 1</h4>
						<h4 className={`home__tab ${activeTab === 'mountain2' ? 'home__tab--active' : ''}`} onClick={() => setActiveTab('mountain2')}>MOUNTAIN 2</h4>
					</div>
					<div className="home__section-body">
						<div className="home__section-container">
							<h3 className="home__subtitle">SCHEDULE</h3>
							{activeTab === 'mountain1' ? <ScheduleTable schedule={scheduleMountain1} /> : <ScheduleTable schedule={scheduleMountain2} />}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
