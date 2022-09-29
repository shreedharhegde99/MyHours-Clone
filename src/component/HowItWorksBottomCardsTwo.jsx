import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function HowItWorksBottomCardsTwo({ image, heading, details }) {
  return (
    <Fragment>
      <Box px={{ base: "10", md: "6" }} py="10">
        <Box m="auto">
          <Heading py="4" fontSize="3xl">
            {heading}
          </Heading>

          <Text py="3" fontSize="lg">
            {details}
          </Text>
        </Box>
        <Box py="3">
          <Image
            src={image}
            alt={heading}
            // maxW={{ md: "2xl", lg: "4xl" }}
            m="auto"
          />
        </Box>
      </Box>
    </Fragment>
  );
}
