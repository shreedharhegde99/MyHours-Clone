import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function UseCaseCard({ data }) {
  const { image, heading, details, color } = data;
  return (
    <Fragment>
      <Box
        py="6"
        px="6"
        bg={color ? "red.50" : "blue.50"}
        borderRadius="3xl"
        boxShadow="2xl"
        maxW={{ lg: "xs", xl: "sm" }}
      >
        <Box pb="8">
          <Image
            src={image}
            alt={heading}
            maxW={{ base: "2xs", md: "40", xl: "3xs" }}
            m="auto"
          />
        </Box>
        <Heading color="#375d75" py="2" fontSize="3xl">
          {heading}{" "}
        </Heading>
        <Text fontSize="lg">{details} </Text>
      </Box>
    </Fragment>
  );
}
