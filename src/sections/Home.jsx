import React from "react";
import {
  Box,
  Center,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import me from "../images/rayan.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Resources from "./Resources";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box bg="#2C1B47" maxH="100%" minH="calc(100vh)" w="100%">
      <Stack spacing={0}>
        <Flex
          justify="center"
          align="center"
          gap={{ base: 8, lg: 12 }}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 6, md: 10 }}
          mt={{ base: "34%", sm: "23%", md: "12%" }}
          pb="var(--section-space)"
        >
          <Box
            className="hero-photo-ring"
            flexShrink={0}
            w={{ base: "min(84vw, 25rem)", md: "min(42vw, 32rem)" }}
            p="4px"
            borderRadius="full"
            bgGradient="linear(to-br, #FF9A78, #df6d91, #7146a2)"
          >
            <Image src={me} w="100%" aspectRatio={1} objectFit="cover" borderRadius="full" />
          </Box>
          <Center width={{ base: "100%", md: "50%" }} maxW="46rem" mt={0}>
            <HomeField />
          </Center>
        </Flex>
        <Experience />
        <Projects />
        <Skills />
        <Resources />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Home;
