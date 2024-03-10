import React from "react";
import { Box, Heading,} from "@chakra-ui/react";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Box textAlign="center">
                    <Heading as="h1" size="2xl" mb={4}>
                        Page Not Found
                    </Heading>
                </Box>
            </motion.div>
        </Box>
    );
};

export default NotFound;