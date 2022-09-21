import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo_transparent.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<br></br>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
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
					</Col>
				</Row>
				<Row>
					<center>
						<h5>@All Rights Reserved 2022</h5>
					</center>
				</Row>
			</Container>
		</footer>
	);
};
