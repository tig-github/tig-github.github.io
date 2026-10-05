/*
    Card that gives information on a given project
*/
import React, { useRef } from "react";
import {
  Text,
  Button,
  Center,
  Flex,
  Stack,
  Image,
  Card,
  CardHeader, 
  CardBody, 
  Link,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import ProjectCardModal from "./ProjectCardModal";

const ProjectCard = ({title, img, tag, date, link, description, icons, isSchool, fadeOpen}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cardRef = useRef(null);

    const handlePointerMove = (event) => {
        if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const card = cardRef.current;
        if (!card) return;

        const bounds = card.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width;
        const vertical = (event.clientY - bounds.top) / bounds.height;
        const rotateX = (0.5 - vertical) * 16;
        const rotateY = (horizontal - 0.5) * 16;
        const rotateZ = (horizontal - 0.5) * 2;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    };

    const resetTilt = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        }
    };

    return (
        <Fade in={fadeOpen} transition={{enter: {duration: 0.2}}} unmountOnExit>
        <Card 
            ref={cardRef}
            w="20rem" 
            bg="rgba(212, 90, 253, .2)"
            color="white"
            borderRadius="7%"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            transition="transform 160ms ease-out"
            sx={{
                transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
                "@media (prefers-reduced-motion: reduce)": { transition: "none" },
            }}
        >
            <CardHeader maxH="6rem" opacity="100%">
                <Center>
                    <Text fontSize="2xl" fontWeight="bold" align="center">{title}</Text>
                </Center>
            </CardHeader>
            <CardBody>
                <Stack gap={4}>
                <Center>
                    <Image src={img} boxSize={250} borderRadius="10%"></Image>
                </Center>
                <Flex justify="center" mt={2}>
                    {
                    !isSchool &&
                            <Link href={link} isExternal mr={3}>
                                <AiFillGithub size={40} color="white"/>
                            </Link>
                    }
                    <Center>
                        <Text >{tag} Project - {date}</Text>
                    </Center>
                </Flex>
                <Flex justify="center" gap={2}>
                    {icons && icons.map((i) => i)}
                </Flex>
                <Center>
                    <Button onClick={onOpen} colorScheme="blackAlpha" color="white">Learn More</Button>
                    <ProjectCardModal isOpen={isOpen} onClose={onClose} title={title} description={description}/>
                </Center>
                </Stack>
            </CardBody>
        </Card>
        </Fade>
    )
}

export default ProjectCard;
