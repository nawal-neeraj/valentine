import { Box, Button, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import RunawayButton from "./RunAwayButton";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const bg = useColorModeValue("neutral.0", "neutral.900");
  const navigate = useNavigate();

  return (
    <Box p={6} minH="100vh" position="relative">
      <Box bg={bg} borderRadius="lg" p={20} boxShadow="md" minH="60vh">
        <Box textAlign="center" mb={6}>
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} // big & responsive
            fontWeight="extrabold" // super bold
            bgGradient="linear(to-r, pink.400, pink.600, #FF69B4)" // nice pink shades → hot pink
            bgClip="text" // crucial: clips bg to text shape
            letterSpacing="tight"
            lineHeight="1.1"
            mb={6}
            // Optional fun: subtle shine/animation on hover
            _hover={{
              bgGradient: "linear(to-r, pink.300, #FF1493, pink.500)",
              transform: "scale(1.03)",
              transition: "all 0.4s ease",
            }}
          >
            Will You Be My Valentine?
          </Text>
          <Image
            alt="heaet"
            borderRadius="lg"
            h={{ base: "140px", md: "180px" }}
            mb={6}
            w="auto"
            mx="auto"
            src={"heart.png"}
            objectFit="contain" // crucial for transparent PNGs
            transition="transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)" // bouncy overshoot
            _hover={{
              transform: "scale(1.18)", // zoom in ~18%
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            // Optional: tiny scale down when clicked/tapped
            _active={{
              transform: "scale(0.96)",
              transitionDuration: "0.18s",
            }}
            // Helps in some edge cases with layout shift
            willChange="transform"
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Flex
            justify="center"
            gap={10}
            mt="auto" // pushes to bottom
            flexWrap="wrap" // safe for small screens
          >
            <Button
              size="lg"
              colorScheme="teal" // ← same as RunawayButton
              boxShadow="md"
              minW="100px"
              px={8}
              py={6}
              fontSize="lg"
              _hover={{
                bg: "teal.400",
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
              onClick={() => navigate("/accepted")}
            >
              Yes
            </Button>
          </Flex>
          <Flex>
            <RunawayButton />
          </Flex>
        </Box>
        {/* <Box flex="1" /> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
