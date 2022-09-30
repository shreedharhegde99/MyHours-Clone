import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function MobileAppBottomCards({ image, title, details }) {
  return (
    <Fragment>
      <Box>
        <Box>
          <Image src={image} alt={title} w="24" />
        </Box>
        <Box>
          <Heading color="#687481" py="2" fontSize="2xl">
            {" "}
            {title}{" "}
          </Heading>
          <Text fontSize="xl">{details} </Text>
        </Box>
      </Box>
    </Fragment>
  );
}
