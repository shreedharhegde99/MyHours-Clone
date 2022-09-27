import { Button, Flex } from "@chakra-ui/react";

export function GetStartedButton() {
  return (
    <Flex justify={{ sm: "center" }} py="6" px="2">
      <Button
        w={{ base: "full", sm: "max-content" }}
        height="14"
        colorScheme="blue"
        px={{ sm: "8" }}
      >
        Get Started - It's Free
      </Button>
    </Flex>
  );
}
