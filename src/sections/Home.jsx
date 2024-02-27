import React from "react";
import { 
  Box, 
  Center,
  Stack, 
  Flex,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import me from "../images/rayan.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import Resources from "./Resources";
import Commits from "../components/Commits/Commits";

const Home = () => {
  const imageSize = useBreakpointValue({
    base: 0,
    md: 10,
  },
  {
    fallback: 'base',
  },
  )

  return (
    <Box bg="#2C1B47" maxH="100%" minH="calc(100vh)" w="100%">
      <Stack spacing={10}>
        <Flex justify="center" flexWrap="wrap" mt={{base: "30%", sm: "20%", md: "10%"}}>
          <Image src={me} boxSize="30%" minW="20rem" borderRadius="full" mr={imageSize} mb={3}/>
          <Flex justify="center" direction="column" width="55%">
            <HomeField />
          </Flex>
        </Flex>
        {/* <Center>
          <Commits />
        </Center> */}
        <Skills />
        <Projects />
        <Resources />
        <Box />
      </Stack>
    </Box>
  );
};

export default Home;
