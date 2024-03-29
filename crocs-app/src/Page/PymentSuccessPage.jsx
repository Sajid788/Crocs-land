import React, { useEffect, useState } from "react";
import { Box, Text, Flex, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
//   const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { name } = JSON.parse(localStorage.getItem("userResponse"));

  useEffect(() => {
    window.scrollTo(0, 0);
    const redirectTimer = setTimeout(() => {
      // toast({
      //     title: "Thank you for your purchase!",
      //     description: "",
      //     variant: "subtle",
      //     status: "success",
      //     position: "top",
      //     duration: 3000,
      //     isClosable: true,
      // });
      setLoading(true);
    }, 3000);

    const redirectToHome = setTimeout(() => {
      navigate("/successful");
    }, 6000);
    return () => clearTimeout({ redirectTimer, redirectToHome });
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="90vh"
      bg="gray.100"
    >
      <Box p={8} borderRadius="md" bg="white" boxShadow="lg" textAlign="center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={textVariants}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              <img
                src="https://cdn.dribbble.com/users/5338201/screenshots/13804672/nod_to_pay.gif"
                alt="Payment gif"
                width={400}
              />
            </Text>
            <Text fontSize="lg" mb={4} fontWeight={"bold"} color={"red"}>
              Thank you, {name}, for your purchase.
            </Text>
            <Text fontSize="lg">
              {/* We appreciate your business and hope you enjoy your new item. */}
            </Text>
          </motion.div>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default PaymentSuccessPage;
