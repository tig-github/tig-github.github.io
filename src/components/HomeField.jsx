/*
Large box that has an image oriented to right, specialized for homefield
*/
import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Spacer,
  Heading,
  Image,
} from "@chakra-ui/react";
import commit from "../images/commit.PNG";

const HomeField = () => {
  return (
    <>
      <Box bg="#DCCAE9" ml=".5rem" mb="2rem" pb="2rem" mt="2rem" w="100%">
        <Stack align="center" mt="1rem" ml="5.5rem" spacing={5}>
          <Heading mb="2rem" align="center">
            <Text>Hello! My name is Rayan</Text>
          </Heading>
          <Text>
            I am currently a Computer Science student at the University of
            California, Irvine
          </Text>
          <Text>I am passionate about Music, History, and Software.</Text>
          <Text>
            I like learning about Algorithms, Programming Languages, and more.
          </Text>
          <Text>
            Portfolio Todo: 3d Yaz with Threejs, display github commit history
            right here.
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default HomeField;