import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box p={6}>{children}</Box>
    </Box>
  );
}
