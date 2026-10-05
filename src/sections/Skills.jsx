import React from "react";
import {
  Box,
  Center,
  Text,
  Heading,
  Flex,
  Stack,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import {
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiNeo4J,
  SiExpress,
  SiFlask,
  SiPhp,
  SiGraphql,
  SiOpenai,
  SiDocker,
  SiAmazonaws,
  SiJenkins,
} from "react-icons/si";

const ClaudeCodeMark = () => (
  <svg viewBox="0 0 100 100" width="40" height="40" aria-label="Claude Code" role="img">
    <polygon
      fill="white"
      points="50,2 56,32 72,9 66,38 91,22 73,45 99,44 73,54 96,69 68,63 79,91 58,68 50,98 43,68 21,91 32,63 4,69 27,54 1,44 29,45 9,22 35,38 28,9 44,32"
    />
  </svg>
);

const SkillIcon = ({ label, children }) => (
  <Tooltip label={label} hasArrow>
    <Box as="span" role="img" aria-label={label} tabIndex={0} display="inline-flex" alignItems="center">
      {children}
    </Box>
  </Tooltip>
);

const Skills = () => {
  const gridTemplate = useBreakpointValue(
    {
      base: `
          "cat1"
          "icon1"
          "cat4"
          "icon4"
          "cat2"
          "icon2"
          "cat3"
          "icon3"
          "cat5"
          "icon5"
          `,
      md: `
          "cat1 icon1"
          "cat4 icon4"
          "cat2 icon2"
          "cat3 icon3"
          "cat5 icon5"
          `,
    },
    {
      fallback: `
          "cat1 icon1"
          "cat4 icon4"
          "cat2 icon2"
          "cat3 icon3"
          "cat5 icon5"
          `,
    }
  );
  return (
    <Box className="site-section" bg="#2C1B47" w="100%" h="100%" id="skills">
      <Stack align="center" gap="3rem">
        <Heading sz="md">
          <Text color="white">Skills</Text>
        </Heading>
        <SimpleGrid
          width="70%"
          templateRows="5"
          templateColumns="2"
          templateAreas={gridTemplate}
          gap={{ base: 7, md: 14 }}
        >
          <GridItem rowSpan={1} colSpan={1} area={"cat1"}>
            <Center>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Top Languages
              </Text>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"icon1"}>
            <Flex gap={3} wrap="wrap" justify="center">
              <SkillIcon label="JavaScript"><IoLogoJavascript size={40} color="white" /></SkillIcon>
              <SkillIcon label="Python"><FaPython size={40} color="white" /></SkillIcon>
              <SkillIcon label="C++"><SiCplusplus size={40} color="white" /></SkillIcon>
              <SkillIcon label="PHP"><SiPhp size={40} color="white" /></SkillIcon>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"cat2"}>
            <Center>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Databases
              </Text>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"icon2"}>
            <Flex gap={3} wrap="wrap" justify="center">
              <SkillIcon label="PostgreSQL"><SiPostgresql size={40} color="white" /></SkillIcon>
              <SkillIcon label="MySQL"><SiMysql size={40} color="white" /></SkillIcon>
              <SkillIcon label="Neo4j"><SiNeo4J size={40} color="white" /></SkillIcon>
              <SkillIcon label="GraphQL"><SiGraphql size={40} color="white" /></SkillIcon>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"cat3"}>
            <Center>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Frameworks
              </Text>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"icon3"}>
            <Flex gap={3} wrap="wrap" justify="center">
              <SkillIcon label="React"><FaReact size={40} color="white" /></SkillIcon>
              <SkillIcon label="Express"><SiExpress size={40} color="white" /></SkillIcon>
              <SkillIcon label="Node.js"><DiNodejs size={40} color="white" /></SkillIcon>
              <SkillIcon label="Flask"><SiFlask size={40} color="white" /></SkillIcon>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"cat4"}>
            <Center>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Agentic Tools
              </Text>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area={"icon4"}>
            <Flex gap={6} wrap="wrap" justify="center">
              <SkillIcon label="Claude Code"><ClaudeCodeMark /></SkillIcon>
              <SkillIcon label="Codex"><SiOpenai size={40} color="white" /></SkillIcon>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area="cat5">
            <Center>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                DevOps &amp; Cloud
              </Text>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} area="icon5">
            <Flex gap={3} wrap="wrap" justify="center">
              <SkillIcon label="Docker"><SiDocker size={40} color="white" /></SkillIcon>
              <SkillIcon label="AWS"><SiAmazonaws size={40} color="white" /></SkillIcon>
              <SkillIcon label="Jenkins"><SiJenkins size={40} color="white" /></SkillIcon>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Skills;
