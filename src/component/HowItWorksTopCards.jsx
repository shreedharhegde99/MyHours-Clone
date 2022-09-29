import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function HowItWorksTopCards({ image, heading, details }) {
  return (
    <Fragment>
      <Box px="4" py="14">
        <Box
          w={{ base: "full", sm: "70%", md: "lg", lg: "xl", xl: "2xl" }}
          m="auto"
        >
          <Heading py="4" fontSize="3xl">
            {" "}
            {heading}{" "}
          </Heading>

          <Text py="6" fontSize="lg">
            {details}{" "}
          </Text>
        </Box>
        <Box>
          <Image
            src={image}
            alt={heading}
            maxW={{ md: "2xl", lg: "4xl" }}
            m="auto"
          />
        </Box>
      </Box>
    </Fragment>
  );
}
