import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function HowItWorksBottomCardsOne({ image, heading, details }) {
  return (
    <Fragment>
      <Box px="4" py="14">
        <Stack
          maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          direction={{ base: "column", sm: "row" }}
          m="auto"
          align="center"
          justify={{ sm: "space-between" }}
          gap={{ sm: "4" }}
        >
          <Box order={{ sm: "1" }} maxW={{ sm: "50%", md: "40%" }}>
            <Heading py="4" fontSize="3xl">
              {heading}
            </Heading>

            <Text py="4" fontSize="lg" fontWeight="light">
              {details}
            </Text>
          </Box>
          <Box>
            <Image src={image} alt={heading} maxW={{ xl: "2xl" }} m="auto" />
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
}
