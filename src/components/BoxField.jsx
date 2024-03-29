/*
Large box that has an image oriented to right
*/
import React from "react";
import {
  Stack,
  HStack,
  Box,
  Container,
  Text,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import ListField from "./ListField";

// listItems by default null
const BoxField = ({ text, header, image, listItems, listLinks }) => {
  return (
    <Box bg="#DCCAE9" ml=".5rem" mb="2rem" mt="2rem" w="100%">
      <Flex w="100%">
        <Stack w="70%" ml="5.5rem" mt="2rem">
          <Heading>{header}</Heading>
          <Text mt="1rem">{text}</Text>
          {listItems && (
            <ListField items={listItems} mh={"0rem"} links={listLinks} />
          )}
        </Stack>
        <Container h="100%">
          {image && (
            <Image
              ml="7rem"
              my="5rem"
              boxSize="20rem"
              fit="cover"
              src={image}
            ></Image>
          )}
        </Container>
      </Flex>
    </Box>
  );
};

export default BoxField;
