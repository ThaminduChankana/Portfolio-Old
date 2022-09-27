import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TechStacks } from "./components/TechStacks";
import { Achievements } from "./components/Achievements";

function App() {
	return (
		<div className="App">
			<div className="background">
				<NavBar />
				<Banner />
				<Skills />
				<TechStacks />
			</div>
			<Projects />
			<Achievements />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
