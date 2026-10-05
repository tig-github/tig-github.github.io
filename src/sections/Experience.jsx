import React from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import ctcIcon from "../images/ctc-experience.png";
import uciIcon from "../images/uci2.svg";
import cdzIcon from "../images/cdz.svg";

const Experience = () => {
  return (
    <>
      <Box className="site-section" bg="#2C1B47" w="100%" h="100%" id="experience">
        <Stack
          align="center"
          spacing={10}
        >
          <Heading as="h1">
            <Text color="white">Experience</Text>
          </Heading>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "black",
                color: "white",
                boxShadow: "none",
                paddingBottom: "2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid black",
              }}
              date="June 2024 - Present"
              dateClassName="experience-date"
              icon={<Image src={cdzIcon} borderRadius="full" />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Full Stack Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Codazen</h4>
              <Text>
                Associate Full Stack Engineer at Codazen, on assignment at Meta.
              </Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#780be6",
                boxShadow: "none",
                paddingBottom: "2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Oct 2021 - June 2024"
              dateClassName="experience-date"
              iconClassName="ctc-experience-icon"
              icon={<Image src={ctcIcon} borderRadius="full" />}
            >
              <h3 className="vertical-timeline-element-title">
                Student Volunteer Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Commit the Change
              </h4>
              <Text>
                Developer in student organization creating open source software
                for local nonprofits utilizing common industry standards, with
                contributions to several projects.
              </Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#617dfa",
                color: "white",
                boxShadow: "none",
                paddingBottom: "2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #617dfa",
              }}
              date="March 2022 - December 2022"
              dateClassName="experience-date"
              icon={<Image src={uciIcon} borderRadius="full" />}
            >
              <h3 className="vertical-timeline-element-title">
                Learning Assistant, Grader
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                UC Irvine Donald Bren School
              </h4>
              <Text>
                Learning Assistant for the course Boolean Logic and Discrete
                Structures for a quarter, then a grader for the same course.
              </Text>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Stack>
      </Box>
    </>
  );
};

export default Experience;
