import React from "react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Flex,
  Switch,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import yazifyImage from "../images/personal.PNG";
import algoImage from "../images/coursework.PNG";
import zuumImage from "../images/zuum.png";
import personalImage from "../images/social.jpeg";
import greedyAntsImage from "../images/greedyants.png";
import ctcDefaultImage from "../images/CTC.png";
import icsscDefaultImage from "../images/icssc.svg";
import { FaPython, FaReact } from "react-icons/fa";
import {
  personalItems,
  OSSItems,
  courseItems,
  yazifyIcons,
  greedyAntsIcons,
  ctcIcons,
  icsscIcons,
  cs121Icons,
  cs117Icons,
  ics51Icons,
  cs142aIcons,
  cs180Icons,
} from "../lib/projectData";

const Projects = () => {
  const flexDirection = useBreakpointValue(
    {
      base: "column",
      md: "row",
    },
    {
      fallback: "column",
    }
  );
  const flexAlignment = useBreakpointValue(
    {
      base: "center",
      md: "left",
    },
    {
      fallback: "center",
    }
  );
  const { isOpen: fadeOpenPersonal, onToggle: onTogglePersonal } =
    useDisclosure({ defaultIsOpen: true });
  const { isOpen: fadeOpenOSS, onToggle: onToggleOSS } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: fadeOpenSchool, onToggle: onToggleSchool } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <Box className="site-section" bg="#2C1B47" w="100%" h="100%" minH="calc(100vh)" id="projects">
      <Stack
        align="center"
        spacing={10}
      >
        <Heading sz="md">
          <Text color="white">Projects</Text>
        </Heading>
        <Flex gap={20} mb={3} direction={flexDirection}>
          <Flex gap="2%" direction={flexDirection} align={flexAlignment}>
            <Text fontSize="2xl" fontWeight="600" color="white" align="center">
              {" "}
              Personal Projects
            </Text>
            <Switch
              onChange={onTogglePersonal}
              colorScheme="purple"
              mt={3}
              defaultChecked
            />
          </Flex>
          <Flex gap="2%" direction={flexDirection} align={flexAlignment}>
            <Text fontSize="2xl" fontWeight="600" color="white" align="center">
              {" "}
              OSS Contributions
            </Text>
            <Switch
              onChange={onToggleOSS}
              colorScheme="purple"
              mt={3}
              defaultChecked
            />
          </Flex>
          <Flex gap="5%" direction={flexDirection} align={flexAlignment}>
            <Text fontSize="2xl" fontWeight="600" color="white" align="center">
              {" "}
              School Projects
            </Text>
            <Switch
              onChange={onToggleSchool}
              colorScheme="purple"
              mt={3}
              defaultChecked
            />
          </Flex>
        </Flex>
        <Box />
        <Flex gap={20} wrap="wrap" justify="center" w="80%" maxW="70rem">
          <>
            <ProjectCard
              title={"Zuum Transporation NLP Chatbot"}
              img={zuumImage}
              tag={"School"}
              date={"2024"}
              description={courseItems.capstone}
              icons={cs180Icons}
              isSchool
              fadeOpen={fadeOpenSchool}
            />
          </>
          <>
            <ProjectCard
              title={"Yazify"}
              img={yazifyImage}
              tag={"Personal"}
              date={"2023"}
              link={"https://github.com/tig-github/yazify"}
              description={personalItems.Yazify}
              icons={yazifyIcons}
              fadeOpen={fadeOpenPersonal}
            />
            <ProjectCard
              title={"Algorithms Notebook"}
              img={algoImage}
              tag={"Personal"}
              date={"2024"}
              link={"https://github.com/tig-github/cs16x-algorithms-notebook"}
              description={personalItems.Algos}
              icons={[<FaPython size={40} color="white" />]}
              fadeOpen={fadeOpenPersonal}
            />
            <ProjectCard
              title={"GreedyAnts"}
              img={greedyAntsImage}
              tag={"Hackathon"}
              date={"2022"}
              link={"https://github.com/tig-github/GreedyAnts"}
              description={personalItems.GreedyAnts}
              icons={greedyAntsIcons}
              fadeOpen={fadeOpenPersonal}
            />
          </>
          <>
            <ProjectCard
              title={"Stand Up To Trash"}
              img={ctcDefaultImage}
              tag={"CTC"}
              date={"2024"}
              link={"https://github.com/ctc-uci/stand-up-to-trash-frontend"}
              description={OSSItems.trash}
              icons={ctcIcons}
              fadeOpen={fadeOpenOSS}
            />
            <ProjectCard
              title={"Patriots and Paws"}
              img={ctcDefaultImage}
              tag={"CTC"}
              date={"2023"}
              link={"https://github.com/ctc-uci/patriots-and-paws-frontend"}
              description={OSSItems["Patriots and Paws"]}
              icons={ctcIcons}
              fadeOpen={fadeOpenOSS}
            />
            <ProjectCard
              title={"AntAlmanac"}
              img={icsscDefaultImage}
              tag={"ICSSC"}
              date={"2024"}
              link={"https://github.com/icssc/AntAlmanac"}
              description={OSSItems.antalmanac}
              icons={icsscIcons}
              fadeOpen={fadeOpenOSS}
            />
            <ProjectCard
              title={"Abound Food Care"}
              img={ctcDefaultImage}
              tag={"CTC"}
              date={"2022"}
              link={"https://github.com/ctc-uci/abound-food-care-frontend"}
              description={OSSItems["Abound Food Care"]}
              icons={ctcIcons}
              fadeOpen={fadeOpenOSS}
            />
            <ProjectCard
              title={"Women's Safety Website"}
              img={ctcDefaultImage}
              tag={"CTC"}
              date={"2022"}
              link={"https://github.com/ctc-uci/bp-women-safety"}
              description={OSSItems["Women's Safety Website"]}
              icons={[<FaReact size={40} color="white" />]}
              fadeOpen={fadeOpenOSS}
            />
          </>
          <>
            <ProjectCard
              title={"CS 142A Compiler"}
              img={personalImage}
              tag={"School"}
              date={"2024"}
              description={courseItems.compiler}
              icons={cs142aIcons}
              isSchool
              fadeOpen={fadeOpenSchool}
            />
            <ProjectCard
              title={"CS 117 Teapot Model"}
              img={personalImage}
              tag={"School"}
              date={"2023"}
              description={courseItems.teapot}
              icons={cs117Icons}
              isSchool
              fadeOpen={fadeOpenSchool}
            />
            <ProjectCard
              title={"CS 121 Search Engine"}
              img={personalImage}
              tag={"School"}
              date={"2022"}
              description={courseItems["CS 121 Search Engine"]}
              icons={cs121Icons}
              isSchool
              fadeOpen={fadeOpenSchool}
            />
            <ProjectCard
              title={"ICS 51 Assembly Wordle"}
              img={personalImage}
              tag={"School"}
              date={"2022"}
              description={courseItems["ICS 51 Wordle in Assembly"]}
              icons={ics51Icons}
              isSchool
              fadeOpen={fadeOpenSchool}
            />
          </>
        </Flex>
        <Box mb={2}></Box>
      </Stack>
    </Box>
  );
};

export default Projects;
