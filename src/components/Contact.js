import { Form, Input } from "semantic-ui-react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "emailjs-com";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
	const SERVICE_ID = "service_j4j5c1w";
	const TEMPLATE_ID = "template_mzxsqae";
	const USER_ID = "Iy-QiigYlPnZyEiqm";

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				Swal({
					icon: "success",
					title: "Message Sent Successfully",
					text: "I Will Get In Touch With You Soon :)",
				});
			},
			(error) => {
				Swal({
					icon: "error",
					title: "Oops, something went wrong",
					text: error.text,
				});
			}
		);
		e.target.reset();
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={isVisible ? "animate__animated animate__zoomIn" : ""}
									src={contactImg}
									alt="Contact Us"
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Get In Touch</h2>
									<Form onSubmit={handleOnSubmit} className="FormInquiries">
										<Form.Field
											id="form-input-control-last-name"
											control={Input}
											label="Name"
											name="user_name"
											placeholder="Enter Your Name"
											required
											icon="user circle"
										/>

										<Form.Field
											id="form-input-control-email"
											control={Input}
											label="Email"
											type="email"
											name="user_email"
											placeholder="Enter Your Email"
											required
											icon="mail"
										/>

										<Form.Field
											id="form-input-control-phone"
											control={Input}
											label="Telephone"
											name="user_phone"
											placeholder="Enter Your Telephone Number"
											required
											maxLength={10}
											icon="phone"
										/>

										<Form.Field
											id="form-textarea-control-opinion"
											control={Input}
											label="Message"
											name="user_message"
											placeholder="Message…"
											required
										/>

										<Button
											variant="primary"
											type="submit"
											style={{ borderRadius: 25, float: "right", borderColor: "white" }}
										>
											Send Message
										</Button>
									</Form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
