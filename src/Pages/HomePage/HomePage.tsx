import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Home() {
	return (
		<main className="Home">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<section>
				<h1>LOSANGELES MOUNTAINS</h1>
			</section>
			<section>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
					Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
					hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
				</p>
			</section>
			<footer>
				<img src="" alt=""/>
				<p>LOSANGELES MOUNTAINS</p>
				<p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
			</footer>
		</main>
	);
}

export default Home;
