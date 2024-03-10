import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bottom={6}
      right={6}
      opacity={showButton ? 1 : 0}
      transition="opacity 0.3s"
    >
    </Box>
  );
};

export default ScrollToTopButton;