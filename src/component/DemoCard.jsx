import { Box, Button, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function DemoCard() {
  return (
    <Fragment>
      <Box bg="#faf9f7" px={{ base: "4" }} py="6" p={{ sm: "8" }}>
        <Box py="2">
          <Text color="#3b718d" fontSize="4xl" fontWeight="light">
            Need more info ? Get a product demo.
          </Text>
        </Box>
        <Box py="4">
          <Button
            variant="outline"
            colorScheme="teal"
            fontWeight="light"
            h="16"
          >
            Talk to our Team
          </Button>
        </Box>
        <Box py="2">
          <Text color="#375d75" fontWeight="light" fontSize="sm">
            Teams of 6+ are welcome to book a personalized demo to see how My
            Hours works in detail.
          </Text>
        </Box>
      </Box>
    </Fragment>
  );
}
