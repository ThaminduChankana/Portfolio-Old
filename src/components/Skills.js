import android from "../assets/img/android.svg";
import web from "../assets/img/web.svg";
import devOps from "../assets/img/devOps.svg";
import db from "../assets/img/database.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from "react-bootstrap";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<br></br>
							<Carousel
								responsive={responsive}
								autoPlay={true}
								infinite={true}
								className="owl-carousel owl-theme techstack-slider"
								arrows={false}
								swipeable={true}
							>
								<Col>
									<div className="item">
										<img src={web} alt="web" />
										<h5>Web Development</h5>
										<br></br>
										<p>
											create up-to-date, inventive websites that will <br></br> aid in your marketing efforts.
										</p>
									</div>
								</Col>
								<Col>
									<div className="item">
										<img src={db} alt="db" />
										<h5>Database Handling</h5>
										<br></br>
										<p>Create or maintain SQL or NoSql databases for business and general purposes.</p>
									</div>
								</Col>
								<Col>
									<div className="item">
										<img src={android} alt="android" style={{ Bottom: 10 }} />
										<h5>Android Development</h5>
										<br></br>
										<p>
											Create user-friendly Android applications using the newest technology in accordance with the user
											requirements.
										</p>
									</div>
								</Col>

								<Col>
									<div className="item">
										<img src={devOps} alt="devops" />
										<h5>DevOps</h5>
										<br></br>
										<p>
											Monitor the life cycle of the application development throughout the development process and
											finally deliver a quality software product to the user.
										</p>
									</div>
								</Col>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
