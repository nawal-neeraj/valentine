import { Flex, Heading, Spacer } from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggle";

export default function Navbar() {
  return (
    <Flex p={4} align="right" shadow="sm">
      <Spacer />
      <ThemeToggleButton />
    </Flex>
  );
}
