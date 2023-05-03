import React, { useState } from 'react';
import { IconButton, useColorMode, Flex, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      toggleColorMode();
    }, 1500);
  };

  const spinAnimation = keyframes`
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(2);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  `;

  return (
    <Flex alignItems="center" justifyContent="center" h="100%">
      <Box
        display="inline-block"
        cursor="pointer"
        onClick={handleClick}
        animation={isClicked ? `${spinAnimation} 1.5s ease-in-out` : "none"}
        transform={isClicked ? "rotate(360deg)" : "none"}
        w="36px"
        h="36px"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant="ghost"
          bg="transparent"
          borderRadius="50%"
          p="0"
          transition="transform 0.3s ease"
          _hover={{ transform: "rotate(90deg)" }}
          w="100%"
          h="100%"
        />
      </Box>
    </Flex>
  );
}

export default DarkModeToggle;