import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpeg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "Family Dental Clinic",
			description: "System build for a local dental surgery situated in Galle, Sri Lanka",
			imgUrl: projImg1,
		},
		{
			title: "True Power",
			description:
				"This is a mobile application created to maintain a person’s health in check. This application also acts as a music player when user is doing a workou Users can create and maintain meal plans, workout schedules as well as keep routine lists.",
			imgUrl: projImg2,
		},
		{
			title: "Online Tour Guide App",
			description:
				"This is a web application created as an Online Tour Guide and it has different functionalities of a Online tour guide booking system. And it is developed using web technologies",
			imgUrl: projImg3,
		},
		{
			title: "Note Create",
			description:
				"This is a Project that was created using MERN Stack to Create different notes. This is a pilot project used to create Family Dental Clinic dental clinic management system. This project was created to understand the classful implementation",
			imgUrl: projImg4,
		},
		{
			title: "Note Zipper",
			description:
				"This is a Project that was created using MERN Stack to Create different notes for each user. This is the pilot project used to create Family Dental Clinic dental clinic management system",
			imgUrl: projImg5,
		},
		{
			title: "Fitness Factory",
			description: "This project is created for a local gymnasium to manage its business functionalities",
			imgUrl: projImg6,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Projects</h2>
									<p>Showing here is the details of some of the projects that I have done.</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
											<Tab.Pane eventKey="first">
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
									<br></br>
									<br></br>
									<center>
										<h3>Click below Icon to View Projects in GitHub</h3>
									</center>
									<br></br>
									<a href="https://github.com/ThaminduChankana">
										<center>
											<div style={{ width: "5%" }}>
												<img src={navIcon4} alt="git" />
											</div>
										</center>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
