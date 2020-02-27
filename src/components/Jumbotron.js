import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import backdropImage from "../assets/backdropImage.jpeg";

const Styles = styled.div`
	.jumbo {
		background: url(${backdropImage}) no-repeat fixed bottom;
		backgound-size: cover;
		color: #ccc;
		height: 200px;
		postition: relative;
		z-index: -2;
	}

	.overlay {
		background-color: #000;
		opacity: 0.5;
		postition: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;

const Jumbotron = () => {
	return (
		<Styles>
			<Jumbo fluid="true" className="jumbo">
				<div className="overlay"></div>
				<Container>
					<h1> Welcome </h1>
					<p>
						Playing and around with <span>React</span> and
						<span> React Router </span>
					</p>
				</Container>
			</Jumbo>
		</Styles>
	);
};

export default Jumbotron;
