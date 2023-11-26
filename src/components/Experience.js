import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
	return (
		<section className="experience" id="experience">
			<Container>
				<Row>
					<Col className="col-12">
						<div className="experience-bx wow zoomIn">
							<center>
								<h2>Experience</h2>
							</center>
							<br></br>
							<VerticalTimeline animate={true}>
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{ background: "#2D9596", color: "#fff", borderRadius: "25px" }}
									contentArrowStyle={{ borderRight: "7px solid  #2D9596" }}
									date="December 2022 - October 2023"
									iconStyle={{ background: "#2D9596", color: "#fff" }}
								>
									<h5>
										<h3>London Stock Exchange Group</h3>
										Intern Software Engineer
										<br />
										<br />
										<p>
											<h5>Skills:</h5> RESTful WebServices · React.js · Spring Boot · Testing · Test Cases · C++ ·
											Apache Kafka · Docker · Docker Swarm · Kubernetes · Java · Object-Oriented Programming (OOP) ·
											Agile Methodologies
										</p>
									</h5>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{ background: "#256D85", color: "#fff", borderRadius: "25px" }}
									contentArrowStyle={{ borderRight: "7px solid  #256D85" }}
									date="October 2023 - Present"
									iconStyle={{ background: "#256D85", color: "#fff" }}
								>
									<h5>
										<h3>Epic Lanka Technologies</h3>
										Associate Software Engineer
										<br />
										<br />
										<p>
											<h5>Skills:</h5> RESTful WebServices · Software Infrastructure · Application Engineering ·
											Software Development · Software Development Life Cycle (SDLC) · Software Project Management ·
											Enterprise Software · Banking Software · Oracle Applications · Oracle Database · Spring Boot · C++
										</p>
									</h5>
								</VerticalTimelineElement>
							</VerticalTimeline>
						</div>
					</Col>
				</Row>
			</Container>
			<br></br>
		</section>
	);
};
