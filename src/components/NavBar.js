import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo_transparent.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo} alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto" style={{ fontFamily: "sans-serif" }}>
							<Nav.Link
								href="#home"
								className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={activeLink === "techstacks" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#techstacks"
								className={activeLink === "techstacks" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("techstacks")}
							>
								Tech
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("projects")}
							>
								Projects
							</Nav.Link>
							<Nav.Link
								href="#achievements"
								className={activeLink === "achievements" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("achievements")}
							>
								Achievements
							</Nav.Link>
							<Nav.Link
								href="#extras"
								className={activeLink === "extras" ? "active navbar-link" : "navbar-link"}
								onClick={() => onUpdateActiveLink("extras")}
							>
								Extra
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a href="https://www.linkedin.com/in/thamindu-gamage-5391b5192/">
									<img src={navIcon1} alt="" />
								</a>
								<a href="https://www.facebook.com/thaminduchankana.gamage.5">
									<img src={navIcon2} alt="" />
								</a>
								<a href="https://github.com/ThaminduChankana">
									<img src={navIcon4} alt="" />
								</a>
								<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fde_legion_x%3Ffbclid%3DIwAR0LDslSOSf_jLy-zukIIcasFKG1_6WBOCEn_AzW46bRbRrlo6HHew4SL6A&h=AT2PUo8KwStKF5VkgJj2t8VDQeFxXyyHllLY6sRozQ3I7mTO7Y1221x6pg0YBiU7NKKeD00-MNbKa1juLD6c2xvq-Gp7EwDJaHLJl7k2LAfnpvkXsxFMd2lOwNfAMcEsagPVpvcO3WevBFZ98TvA">
									<img src={navIcon3} alt="" />
								</a>
							</div>
							<HashLink to="#connect">
								<button className="vvd" style={{ marginLeft: 25 }}>
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
