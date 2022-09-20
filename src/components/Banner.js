import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { BrowserRouter as Router } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import cv from "../../src/assets/docs/Thamindu Gamage CV - Personal.pdf";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "Fullstack Developer", "Android Developer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	});

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1, index);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<Router>
			<section className="banner" id="home">
				<Container>
					<Row className="aligh-items-center">
						<Col xs={12} md={6} xl={7}>
							<TrackVisibility>
								{({ isVisible }) => (
									<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
										<h1>
											{`Hi! I'm Thamindu Chankana`}
											<br></br>
											<br></br>
											<span className="txt-rotate">
												<span className="wrap">{text}</span>
											</span>
										</h1>
										<p style={{ fontSize: 20 }}>
											I am a Hardworking ambitious software engineering undergraduate. Who is enthusiastic on trying new
											things and doing experiments. Interested in finding new opportunities and challenges. Interested
											in research and development as well as Machine Learning and Artificial Intelligence...
										</p>

										<HashLink to="#connect" style={{ textDecoration: "none" }}>
											<button style={{ fontSize: 20 }}>
												Connect With Me<ArrowRightCircle size={35} />
											</button>
										</HashLink>
										<Button variant="info" size="lg" style={{ fontSize: 20, marginTop: 25 }} href={cv}>
											View My CV
										</Button>
									</div>
								)}
							</TrackVisibility>
						</Col>
						<Col xs={12} md={6} xl={5}>
							<center>
								<TrackVisibility>
									{({ isVisible }) => (
										<div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
											<br></br>
											<img
												id="picture"
												src="https://res.cloudinary.com/dllpluvl8/image/upload/v1663609792/Portfolio/IMG_0002_lre7xv.jpg"
												alt="pic"
											/>
										</div>
									)}
								</TrackVisibility>
							</center>
						</Col>
					</Row>
				</Container>
			</section>
		</Router>
	);
};
