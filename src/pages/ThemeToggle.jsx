import { Button, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleClear = () => {
    localStorage.removeItem("valentine_name");
    localStorage.removeItem("valentine_image");
    navigate("/");
  };

  return (
    <HStack spacing={3}>
      <Button
        size="sm"
        colorScheme="pink"
        variant="outline"
        onClick={handleClear}
      >
        Clear
      </Button>

      <IconButton
        aria-label="Toggle theme"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        variant="ghost"
        fontSize="20px"
      />
    </HStack>
  );
}
