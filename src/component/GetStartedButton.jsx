import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function GetStartedButton() {
  return (
    <Flex justify={{ base: "center", sm: "center" }} py="6" px="2">
      <Link to="/signup">
        <Button
          w={{ base: "full", sm: "max-content" }}
          height="14"
          colorScheme="blue"
          px={{ base: "8" }}
          fontSize="xl"
          fontWeight="medium"
        >
          Get Started - It's Free
        </Button>
      </Link>
    </Flex>
  );
}
