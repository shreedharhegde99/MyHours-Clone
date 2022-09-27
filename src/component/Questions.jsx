import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { HiCheck } from "react-icons/hi";

export function Questions() {
  return (
    <Fragment>
      <Box px="4" py="4" w={{ md: "xl", lg: "2xl" }} m="auto">
        <Center>
          <Heading fontSize="3xl" color="blue.700" textAlign="center">
            Have questions ? We're Here
          </Heading>
        </Center>
        <Box p="4">
          <Text textAlign="center">
            It's always nice to have someone to talk to when facing new
            software. Get in touch and we'll try our best to help you out.
          </Text>
        </Box>
        <Stack
          py="4"
          color="blue.500"
          textAlign="center"
          justify="center"
          direction={{ base: "column", sm: "row" }}
        >
          <Stack direction={{ base: "column", sm: "row" }} align="center">
            <Text>
              <HiCheck size="1.2rem" />
            </Text>
            <Text textDecoration="underline">EMAIL & LIVE CHAT</Text>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} align="center">
            <Text>
              <HiCheck size="1.2rem" />
            </Text>
            <Text textDecoration="underline">TRAINING FOR TEAMS</Text>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} align="center">
            <Text>
              <HiCheck size="1.2rem" />
            </Text>
            <Text textDecoration="underline">KNOWLEDGE BASE</Text>
          </Stack>
        </Stack>
      </Box>
    </Fragment>
  );
}
