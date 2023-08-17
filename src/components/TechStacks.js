import react from "../assets/img/react.svg";
import node from "../assets/img/node.svg";
import java from "../assets/img/java.svg";
import cpp from "../assets/img/cpp.svg";
import JS from "../assets/img/JS.svg";
import css from "../assets/img/css.svg";
import html from "../assets/img/html.svg";
import express from "../assets/img/express.svg";
import redux from "../assets/img/redux.svg";
import python from "../assets/img/python.svg";
import php from "../assets/img/php.svg";
import c from "../assets/img/c.svg";
import dart from "../assets/img/dart.svg";
import sql from "../assets/img/sql.svg";
import nosql from "../assets/img/nosql.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import docker from "../assets/img/docker.svg";
import spring from "../assets/img/spring.svg";
import vitejs from "../assets/img/vitejs.svg";
import typescript from "../assets/img/typescript.svg";
import tailwind from "../assets/img/tailwind.svg";
import bitbucket from "../assets/img/bitbucket.svg";
import jira from "../assets/img/jira.svg";
import jest from "../assets/img/jest.svg";
import "react-multi-carousel/lib/styles.css";
import "react-appear-on-scroll/dist/index.css";
import { AppearingContainer, AppearSequentialContainer } from "react-appear-on-scroll";
import "react-appear-on-scroll/dist/index.css";
import { Row } from "react-bootstrap";

export const TechStacks = () => {
	return (
		<section className="techstack" id="techstack">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="techstack-bx wow zoomIn">
							<h2>Programming Languages and Frameworks</h2>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={express} alt="express" style={{ height: 107, marginTop: 25 }} />
											<h3>Express JS</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={vitejs} alt="vite" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Vite JS</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={typescript} alt="typescript" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>TypeScript</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={tailwind} alt="tailwind" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Tailwind</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={node} alt="nodet" />
											<h3>Node JS</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={react} alt="react" />
											<h3>React JS</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={JS} alt="js" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>JavaScript</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={spring} alt="spring" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Spring Boot</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={bitbucket} alt="bitbucket" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>BitBucket</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={jira} alt="jira" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Jira</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={jest} alt="jest" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Jest</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={docker} alt="docker" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Docker</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={java} alt="java" />
											<h3>Java</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={python} alt="python" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Python</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={c} alt="c" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>C</h3>
										</div>
									</AppearingContainer>

									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={html} alt="html" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>HTML</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={dart} alt="dart" />
											<h3>Dart</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={css} alt="css" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>CSS</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={php} alt="php" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Php</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={bootstrap} alt="bootstrap" />
											<h3>Bootstrap</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<Row>
								<AppearSequentialContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={redux} alt="redux" style={{ height: 107 }} />
											<h3 style={{ marginTop: 25 }}>Redux</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={nosql} alt="nosql" />
											<h3>NoSql</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img style={{ width: "45%", marginTop: 5 }} src={sql} alt="sql" />
											<h3 style={{ marginTop: 10 }}>SQL</h3>
										</div>
									</AppearingContainer>
									<AppearingContainer animationType="scale" transitionType="bouncy" fading>
										<div style={{ width: "200px", height: "150px" }}>
											<img src={cpp} alt="cpp" />
											<h3>C++</h3>
										</div>
									</AppearingContainer>
								</AppearSequentialContainer>
							</Row>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
