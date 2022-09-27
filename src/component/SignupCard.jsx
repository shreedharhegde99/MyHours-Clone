import { Box, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { GetStartedButton } from "./GetStartedButton";

export function SignupCard() {
  return (
    <Fragment>
      <Box bg="blue.50" py="10" px="4">
        <Box textAlign="center" w={{ sm: "md" }} m="auto">
          <Heading fontSize="4xl" color="#375d75">
            Waste no more time, jump right in!
          </Heading>
        </Box>
        <GetStartedButton />
        <Box textAlign="center" color="gray.600" fontWeight="thin">
          <Text>
            My Hours is Free to use for teams of any size.Pro paid plan comes
            with additional features like invoicing, admin controls and priority
            support.
          </Text>
        </Box>
      </Box>
    </Fragment>
  );
}
