import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { ReviewList } from "../assets/Reviewlist";
import { ReviewListCard } from "./ReviewListCard";
import { AiOutlineArrowRight } from "react-icons/ai";

export function Reviews() {
  return (
    <Fragment>
      <Box p="10" maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }} m="auto">
        <Box color="#375d75" py="2">
          <Heading fontSize="4xl" textAlign="center">
            My Hours has changed the way our customers work
          </Heading>
        </Box>
        <Box textAlign="center" py="6">
          <Text>
            We’ve helped 250.000+ people track their work since 2002. Our
            software does not include employee monitoring and never will.
          </Text>
        </Box>
        <Stack
          direction={{ base: "column", sm: "column", md: "row" }}
          gap={{ md: "2" }}
        >
          {ReviewList.map((list, i) => (
            <Box key={i}>
              <ReviewListCard data={list.cards} />
            </Box>
          ))}
        </Stack>

        <Center color="cyan.700" p="4">
          <Box fontSize="2xl" textDecoration="underline" px="2">
            Read more reviews
          </Box>
          <Box px="2">
            <AiOutlineArrowRight size="1.5rem " />
          </Box>
        </Center>
      </Box>
    </Fragment>
  );
}
