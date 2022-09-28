import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { AiOutlineRight } from "react-icons/ai";

export function SingleReviewCard() {
  return (
    <Fragment>
      <Box
        pt="8"
        bg="blue.50"
        px={{ base: "2", sm: "20" }}
        maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }}
        m={{ md: "auto" }}
      >
        <Box py="4">
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="300 "
            color="black"
            lineHeight="2"
          >
            <i>''</i> I have tested similar timetracking apps butthey all have
            limts. My Hours is without doubt the most important tool I use in my
            business.
            <i>''</i>
          </Text>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          py="6"
          justify={{ md: "space-between" }}
        >
          <Box
            color="linkedin.700"
            fontWeight="600"
            textAlign={{ base: "right", sm: "start" }}
            p="2"
            fontSize="xl"
          >
            <Text> - Kevin from St. Petersburg, FL, USA </Text>
          </Box>
          <Box px="2" textAlign="right" fontSize="xl" color="linkedin.600">
            <Text textDecor="underline">
              Read more reviews
              <span>
                <AiOutlineRight style={{ display: "inline" }} />
              </span>
            </Text>
          </Box>
        </Stack>
        <Stack
          py="6"
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={{ md: "4", lg: "10" }}
        >
          <Box textAlign="center">
            <Text
              fontWeight="bold"
              color="linkedin.800"
              fontSize="xs"
              py={{ base: "4", sm: "1" }}
            >
              MEMBERS
            </Text>
            <Text fontSize={{ base: "4xl", sm: "6xl" }} fontWeight="light">
              250 <span style={{ color: "#3b8fc2" }}>k</span>
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              fontWeight="bold"
              color="linkedin.800"
              fontSize="xs"
              py={{ base: "4", sm: "1" }}
            >
              LOGGED HOURS
            </Text>
            <Text fontSize={{ base: "4xl", sm: "6xl" }} fontWeight="light">
              1.6 <span style={{ color: "#3b8fc2" }}>b</span>
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              fontWeight="bold"
              color="linkedin.800"
              fontSize="xs"
              py={{ base: "4", sm: "1" }}
            >
              AVERAGE RATING
            </Text>
            <Text fontSize={{ base: "4xl", sm: "6xl" }} fontWeight="light">
              4.7<span style={{ color: "#3b8fc2" }}>/5</span>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
}
