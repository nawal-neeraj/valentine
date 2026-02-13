import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import RunawayButton from "./RunAwayButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const bg = useColorModeValue("neutral.0", "neutral.900");
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const imageToken = params.get("image"); // JWT

    if (name) {
      localStorage.setItem("valentine_name", name);
      setName(name);
    }

    if (imageToken) {
      try {
        const decoded = jwtDecode(imageToken);
        if (decoded.image) {
          localStorage.setItem("valentine_image", decoded.image);
        }
      } catch (err) {
        console.error("Invalid JWT token for image:", err);
      }
    }
  }, [location.search]);

  // 💖 Get name from localStorage
  // const name = localStorage.getItem("valentine_name") || "";

  return (
    <Box p={6} minH="100vh" position="relative">
      <Box bg={bg} borderRadius="lg" boxShadow="md" minH="60vh">
        <Box textAlign="center" mb={6}>
          {/* 💕 Name appears here */}
          {name && (
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="extrabold"
              mb={2}
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
              letterSpacing="wide"
              animation="heartBeatGlow 1.8s ease-in-out infinite"
              display="inline-block" // IMPORTANT for transform
            >
              Hey {name} 💖
            </Text>
          )}

          {/* 💘 Main heading */}
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, pink.400, pink.600, #FF69B4)"
            bgClip="text"
            letterSpacing="tight"
            lineHeight="1.1"
            mb={6}
            _hover={{
              bgGradient: "linear(to-r, pink.300, #FF1493, pink.500)",
              transform: "scale(1.03)",
              transition: "all 0.4s ease",
            }}
          >
            Will You Be My Valentine?
          </Text>

          {/* ❤️ Heart image */}
          <Image
            alt="heart"
            borderRadius="lg"
            h={{ base: "140px", md: "180px" }}
            mb={6}
            w="auto"
            mx="auto"
            src="heart.png"
            objectFit="contain"
            transition="transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)"
            _hover={{
              transform: "scale(1.18)",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            _active={{
              transform: "scale(0.96)",
              transitionDuration: "0.18s",
            }}
            willChange="transform"
          />
        </Box>

        {/* 💚 Buttons */}
        <Box display="flex" flexDirection="column">
          <Flex justify="center" gap={10} mt="auto" flexWrap="wrap">
            <Button
              size="lg"
              minW="120px"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              color="white"
              bgGradient="linear(to-r, teal.400, teal.500)"
              boxShadow="md"
              transition="all 0.25s ease"
              _hover={{
                bgGradient: "linear(to-r, teal.500, teal.600)",
                transform: "scale(1.07)",
                boxShadow: "xl",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
              onClick={() => navigate("/accepted")}
            >
              Yes 💖
            </Button>
          </Flex>

          <Flex justify="center" mt={4}>
            <RunawayButton />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
