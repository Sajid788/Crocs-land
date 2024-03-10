import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessful = () => {
	const navigate = useNavigate();

	return (
		<div>
			<VStack
				margin="auto"
				style={{
					// border: "1px solid gray",
					width: "40%",
					margin: " auto",
					marginTop: "10PX",
					marginBottom: "100px",
				}}
			>
				<div>
					<img
						src="https://cdn.dribbble.com/users/2015153/screenshots/7442124/media/97681cd6ef4e896e8df157b1d1bdca06.gif"
						alt="img"
					/>
				</div>

				<Button
					width="50%"
					style={{ marginTop: "0px", marginBottom: "50px" }}
					onClick={() => navigate("/")}
					fontSize="x"
					padding={5}
					colorScheme="teal"
				>
					Order Successfully Placed
				</Button>
			</VStack>
		</div>
	);
};

export default OrderSuccessful;