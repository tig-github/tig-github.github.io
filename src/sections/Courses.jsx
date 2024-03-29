import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ListField from "../components/ListField";

const Courses = () => {
  const cs12x = {
    "121 Information Retrieval":
      "Course covering key areas of information retrieval including indexing, scoring algorithms, retrieval, search engine architecture, etc. Built a fully functioning search engine on a team of four under harsh operational constraints.",
    "122A Intro to Data Management":
      "Course covering key areas in relational database design and usage including ER diagrams, SQL DDLs, relational algebra, normalization, SQL querying and transactions, Indexing, and RDBMS architecture.",
    "122D Beyond SQL Data Management":
      "Currently enrolled. Course covers six NoSQL databases, discussing architectural and parralelism tradeoffs amongst them and RDBMS. Covers several small projects to get practical experience with PostgreSQL, Cassandra, MongoDB, Neo4J, Spark, N1QL, and Dataframes.",
  };
  const cs14x = {
    "141 Programming Languages":
      "Course covering topics in programming languages including syntax, concurrency, scope, binding, paradigms, and more. Weekly projects giving hands on experience in languages such as Prolog, Common Lisp (pure subset, closer to a scheme), C, and more.",
    "152 Computer Architecture":
      "Covers Computer Architecture, from digital vs analog and transistors to modern GPU techniques. Special focus on pipelining and caches, with projects including matrix multiplication optimization and implementing pipelining in a processor with Bluespec Verilog.",
    "INF 102 Concepts of Programming Languages II":
      "Covers various more advance topics in Programming Languages including lambda calculus, monads, and more. Covers Computer Science history. Assignments are to program in very specific styles relating to programming history and paradigms.",
  };
  const cs16x = {
    "161 Design and Analysis of Algorithms":
      "Fundemental Computer Science course covering key algorithms design and analysis, including the Divide and Conquer paradigm and Master's Theorem, Dynamic Programming, Graph Algorithms (Basic, Shortest Path, Strongly Connected Components, Topological Sort), Minspan Trees, and more.",
    "162 Formal Languages and Automata":
      "Currently enrolled. Course covers fundemental topics in Computational theory including DFA/NFAs, Context Free Grammars, RegEx, Pumping Lemmas, and more.",
    "164 Computational Geometry and Geometric Modeling":
      "Course deep diving into fundemental geometric algorithms and data structures for wide applications, such as DCELs, Convex Hulls (2d,3d), Voronoi Diagrams, Delaunay Triangulations, Point Location, Range/Window querying, and more.",
  };
  const cs17x = {
    "171 Intro to Artificial Intelligence":
    "Introductory course in AI covering search techniques, logic techniques, and basic machine learning. Project requires optimizing an AI for checkers.",
    "178 Machine Learning and Data Mining":
      "Course covering topics in machine learning including Bayesian models, Perceptrons, Neural Networks, Decision Trees, Clustering, and more. Includes several hands on assignments to implement directly many of the models, and a final report.",
    "190 Deep Learning for Medical Imaging":
      "Course covering various Convolutional Neural Networks for practical application for medical diagnosis. Includes final report.",
    "117 Project in Computer Vision":
      "Covers basics and modern techniques in Computer Vision. Project was a 3D model reconstruction of a teapot with mesh and reconstruction optimizations."
  };
  const csPlannedCourses = {
    "CS 142A Compilers":
      "Compilers is both a key class for Computer Science students to take, and one I am personally very interested in.",
    "CS 163 Graph Algorithms":
      "Enrolled. Graphs are some of the most important data structures with huge applications, mastery over them is a huge advantage for any field in Computer Science. Almost every class I have taken so far has involved graphs at least in some way.",
    "CS 166 Quantum Computing":
      "Enrolled. Focuses on mathematical prerequisites, quantum information theory and circuits, and quantum algorithms including Grover's Algorithm.",
  };

  return (
    <Box bg="#2C1B47" w="100%" h="100%" id="courses">
      <Stack align="center" spacing={8}>
        <Heading sz="md" mt="8rem">
          <Text color="white">Courses</Text>
        </Heading>
        <Tabs w="60%">
          <TabList mt="4rem" align="center">
            <Tab>
              <Text color="white">12X Information</Text>
            </Tab>
            <Tab>
              <Text color="white">14X Systems and Software, 15X Hardware</Text>
            </Tab>
            <Tab>
              <Text color="white">16X Algorithms</Text>
            </Tab>
            <Tab>
              <Text color="white"> 17X Artificial Intelligence </Text>
            </Tab>
            <Tab>
              <Text color="white"> Planned Courses </Text>
            </Tab>
          </TabList>
          <TabPanels w="100%">
            <TabPanel>
              <ListField items={cs12x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs14x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs16x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs17x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={csPlannedCourses} mh="16rem" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default Courses;
