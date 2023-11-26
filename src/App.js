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
import { Extra } from "./components/Extra";
import { Experience } from "./components/Experience";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Experience />
			<TechStacks />
			<Projects />
			<Achievements />
			<Extra />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
