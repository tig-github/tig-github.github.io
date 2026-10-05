import React from "react";
import { Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin } from "react-icons/fa";

const interests = ["Algorithms", "Programming Languages", "Music", "History"];

const HomeField = () => (
  <Stack className="hero-copy" align="flex-start" spacing={{ base: 4, md: 5 }}>
    <Box>
      <Heading
        as="h1"
        color="white"
        fontSize={{ base: "clamp(1.75rem, 8vw, 3.25rem)", md: "clamp(2.5rem, 5vw, 4.75rem)" }}
        lineHeight="1.05"
        whiteSpace="nowrap"
      >
        Rayan Tighiouart
      </Heading>
    </Box>

    <Text color="purple.100" fontSize={{ base: "xl", md: "1.375rem" }} fontWeight="600">
      Associate Full Stack Developer · Codazen @ Meta
    </Text>

    <Text color="whiteAlpha.800" fontSize={{ base: "xl", md: "1.375rem" }} lineHeight="1.8">
      UC Irvine CS alum specializing in algorithms. I’m into music, history, and building software.
    </Text>

    <Flex gap={2} wrap="wrap" aria-label="Interests">
      {interests.map((interest) => (
        <Box key={interest} as="span" px={3} py={1.5} border="1px solid" borderColor="whiteAlpha.300" borderRadius="full" color="purple.100" fontSize="sm">
          {interest}
        </Box>
      ))}
    </Flex>

    <Flex gap={3} wrap="wrap" pt={1}>
      <HashLink smooth to="/#projects">
      <Button bg="purple.300" color="#281b3d" _hover={{ bg: "purple.200", transform: "translateY(-1px)" }} size="lg">
          View Projects
        </Button>
      </HashLink>
      <Button as={Link} href="https://www.linkedin.com/in/rayantig/" isExternal variant="outline" color="white" borderColor="whiteAlpha.500" leftIcon={<FaLinkedin />} size="lg" _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}>
        LinkedIn
      </Button>
    </Flex>

    <Flex align="center" gap={2} color="whiteAlpha.700" fontSize="sm" pt={1}>
      <Box as="span" w="2" h="2" borderRadius="full" bg="purple.300" boxShadow="0 0 10px var(--chakra-colors-purple-300)" />
      Currently building a web simulation game
    </Flex>
  </Stack>
);

export default HomeField;
