import React from "react";
import { 
  Box, 
  Text, 
  Heading, 
  Stack, 
  Flex, 
  Center, 
  Button, 
  useDisclosure,
} from "@chakra-ui/react";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, } from "react-icons/si";
import ResourceModal from "../components/ResourceModal";
import {
  pythonResourceLinks,
  jsResourceLinks,
  reactResourceLinks,
  cplusplusResourceLinks,
} from "../lib/resourceData";

const Resources = () => {
  const { isOpen: isPythonOpen, onOpen: onPythonOpen, onClose: onPythonClose } = useDisclosure();
  const { isOpen: isJavascriptOpen, onOpen: onJavascriptOpen, onClose: onJavascriptClose } = useDisclosure();
  const { isOpen: isReactOpen, onOpen: onReactOpen, onClose: onReactClose } = useDisclosure();
  const { isOpen: isCplusplusOpen, onOpen: onCplusplusOpen, onClose: onCplusplusClose } = useDisclosure();
  
  return (
    <>
      <Box className="site-section" bg="#2C1B47" w="100%" h="100%" id="resources">
        <Stack align="center" spacing={10}>
          <Heading as="h1">
            <Text color="white">Resources</Text>
          </Heading>
          <Box bg="#DCCAE9" px="1rem" ml=".5rem" mb="2rem" w="60%" borderRadius="1rem">
            <Stack align="center" my="2rem" spacing={10}>
                <Heading>
                  <Text align="center">Helpful Resources</Text>
                </Heading>
              <Text align="center">The following are resources that helped me learn about Computer Science and Programming.</Text>
              <Text align="center">Click any of the icons below to learn more.</Text>
              <Center>
                <Flex justify="center" gap="2rem" wrap="wrap">
                  <Button onClick={onPythonOpen} variant="unstyled" size="100%">
                    <FaPython size="8em" color="#281b3d"/>
                  </Button>
                  <ResourceModal isOpen={isPythonOpen} onClose={onPythonClose} resource="Python" resourceLinks={pythonResourceLinks} icon={<FaPython size="20%"/>}/>

                  <Button onClick={onJavascriptOpen} variant="unstyled" size="100%">
                    <IoLogoJavascript size="8em" color="#281b3d"/>
                  </Button>
                  <ResourceModal isOpen={isJavascriptOpen} onClose={onJavascriptClose} resource="Javascript" resourceLinks={jsResourceLinks} icon={<IoLogoJavascript size="20%" />}/>

                  <Button onClick={onReactOpen} variant="unstyled" size="100%">
                    <FaReact size="8em" color="#281b3d"/>
                  </Button>
                  <ResourceModal isOpen={isReactOpen} onClose={onReactClose} resource="React" resourceLinks={reactResourceLinks} icon={<FaReact size="20%" />}/>

                  <Button onClick={onCplusplusOpen} variant="unstyled" size="100%">
                    <SiCplusplus size="8em" color="#281b3d"/>
                  </Button>
                  <ResourceModal isOpen={isCplusplusOpen} onClose={onCplusplusClose} resource="C++" resourceLinks={cplusplusResourceLinks} icon={<SiCplusplus size="20%" />}/>
                </Flex>
              </Center>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Resources;
