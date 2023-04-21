import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";





function ToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    );
  }
export default ToggleButton  