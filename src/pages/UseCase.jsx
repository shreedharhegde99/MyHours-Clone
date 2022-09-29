import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import { Footer, GetStartedButton } from "../component";
import { cardDetails } from "../assets/UseCaseCardDetails";
import { UseCaseCard } from "../component/UseCaseCard";
import { Reviews } from "../component/Reviews";

export function UseCase() {
  return (
    <Fragment>
      <Box pt="24">
        <Box>
          <Box maxW={{ md: "3xl", lg: "5xl" }} m="auto">
            <Box textAlign="center">
              <Text
                fontSize={{ base: "4xl", sm: "7xl" }}
                py="6"
                px="2"
                fontWeight="light"
                lineHeight={{ sm: "normal" }}
              >
                Use cases
              </Text>
              <Text
                color="#375d75"
                fontWeight="semibold"
                fontSize="3xl"
                textAlign="center"
              >
                & how My Hours solves problems
              </Text>
            </Box>
            <Box px="2" py="6">
              <Text
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontWeight="light"
                color="twitter.900"
                textAlign="center"
                lineHeight="1.5"
              >
                From tracking time, to reporting and invoicing your clients, My
                Hours is there for you the whole time.
              </Text>
            </Box>
            <Box>
              <GetStartedButton />
            </Box>
          </Box>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "6", md: "8" }}
          py="20"
          px={{ base: "4", md: "10", lg: "6" }}
          maxW={{ md: "3xl", lg: "5xl", xl: "6xl" }}
          m="auto"
        >
          {cardDetails.map((column, i) => (
            <VStack gap="6" key={i} maxW={{ md: "xl" }}>
              {column.map((data) => (
                <UseCaseCard data={data} key={data.heading} />
              ))}
            </VStack>
          ))}
        </Stack>
        <Reviews />
        <Footer />
      </Box>
    </Fragment>
  );
}
