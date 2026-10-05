// to display github commit heapmap on the main page
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
    Box,
    Button,
    Text,
    Flex,
    Spacer,
    IconButton,
    Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import CalendarHeatmap from 'react-calendar-heatmap';
import { heatmapValuesPre2024 } from '../../lib/commitHeatmapCache';
import { processCommitCounts, processCommitValues, getCommits, getPriorCommits } from '../../utils/github';
import 'react-calendar-heatmap/dist/styles.css';
import './Commits.css';

let didInit = false; // for development, makes useEffect only run once on startup
const colorValue = (value) => { // simple function returning color class for commits
    if (!value) {
        return 'color-empty';
    }
    if (value.count < 3) {
        return 'lowcommit';
    }
    if (value.count < 8) {
        return 'mediumcommit';
    }
    if (value.count < 15) {
        return 'highcommit';
    }
    return 'hugecommit';
}

const Commits = () => {
    const [year, setYear] = useState(2023);
    const yearRef = useRef(2023);
    const [commits, setCommits] = useState([]);
    const [handlingCommit, setHandlingCommit] = useState(false);
    const commitValues = useMemo(() => [...heatmapValuesPre2024, ...processCommitValues(processCommitCounts(commits))], [commits]);

    const handleCommits = async () => {
        try {
            setHandlingCommit(true);
            const retrieved_commits = await getCommits(yearRef.current);
            setCommits([...retrieved_commits]);
            setHandlingCommit(false);
        }
        catch (error){
            console.log(error);
        }
    }

    // due to github pages not hiding env and no-auth limits, pagination requires new calls each time - luckily its also faster
    const handleClick = (newYear) => {
        yearRef.current = newYear;
        setYear(newYear);
    }
    
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            handleCommits();
        }
    })

    return (
        <>
            <Box w="75%" mt="5%">
                <Text fontSize="4xl" fontWeight="bold" color="white">{year} Commits</Text>
                <CalendarHeatmap
                    startDate={new Date(`${year}-01-01`)}
                    endDate={new Date(`${year}-12-31`)}
                    values={commitValues}
                    classForValue={(value) => colorValue(value)}
                />
                <Flex mt="1rem" gap={7}>
                    <IconButton icon={<ArrowBackIcon />} onClick={() => handleClick(year-1)} isDisabled={year <= 2021}/>
                    <IconButton icon={<ArrowForwardIcon />} onClick={() => handleClick(year+1)} isDisabled={year >= 2024} />
                    <Spacer />
                    {handlingCommit && <Spinner color="white" mt={2} />}
                </Flex>
            </Box>
        </>
    );
}

export default Commits;