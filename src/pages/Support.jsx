import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { Footer } from "../component";
import { imageList } from "../assets/ImagesList";

export function Support() {
  return (
    <Fragment>
      <Box pt="12">
        <Box>
          <Box maxW={{ md: "3xl", lg: "6xl" }} m="auto" px="5">
            <Box>
              <Text
                fontSize={{ base: "5xl", sm: "7xl" }}
                py="6"
                fontWeight="thin"
              >
                We're here
              </Text>
              <Text
                color="#375d75"
                fontWeight="semibold"
                fontSize={{ base: "2xl", sm: "3xl" }}
              >
                We typically respond in less than 24 hours on business days.
                Contact us via email, live chat or the form below.
              </Text>
            </Box>
            <Box py="6">
              <Text
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight="400"
                lineHeight="1.5"
              >
                <span style={{ color: "#4a9abb", textDecoration: "underline" }}>
                  Read our help guides
                </span>
                <span> or send us a message to get detailed help.</span>
              </Text>
            </Box>
            <Box></Box>
          </Box>
        </Box>

        <Box px="4" py="10">
          <AspectRatio
            ratio={4 / 3}
            maxW={{ md: "2xl", lg: "3xl" }}
            m="auto"
            boxShadow={"dark-lg"}
          >
            <iframe
              title="My Hours tutorial descript"
              src="https://share.descript.com/embed/Wy9xHyM18c8"
            />
          </AspectRatio>
        </Box>
        <Divider />
        <Box px="4" py="12">
          <Box
            borderTop="1px"
            borderColor="gray.400"
            py="6"
            maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }}
            m="auto"
          >
            <Box py="4">
              <Heading color="#375d75" fontSize={{ base: "2xl", sm: "3xl" }}>
                What do you need help with ?
              </Heading>
            </Box>
            <FormControl>
              <Select placeholder="Select option" bg="gray.100" py="2">
                <option value="general">
                  I have a question before signing up...
                </option>
                <option value="no_account">I can't access my account...</option>
                <option value="bug">Something might be broken...</option>
                <option value="suggestion">
                  I'd like to request a feature...
                </option>
                <option value="billing">I have a billing question...</option>
                <option value="other">Other</option>
              </Select>
              <Stack py="4">
                <FormLabel fontSize="xl" color="gray.300">
                  Message
                </FormLabel>

                <Input
                  fontSize="sm"
                  placeholder="What's your issue or question?"
                />

                <FormLabel fontSize="xl" color="gray.300">
                  Name
                </FormLabel>
                <Input fontSize="sm" placeholder="Enter your name" />

                <FormLabel fontSize="xl" color="gray.300">
                  Email Address
                </FormLabel>
                <Input fontSize="sm" placeholder="Enter your email address" />
              </Stack>
              <HStack
                border="1px"
                borderColor="gray.300"
                maxW="xs"
                justify="space-between"
                px="4"
                py="2"
              >
                <HStack alignContent="center">
                  <Box>
                    <Checkbox size="lg" iconColor="green" colorScheme="none" />
                  </Box>
                  <Box>I'm not a robot</Box>
                </HStack>
                <Box>
                  <Flex align="center" direction="column">
                    <Image
                      src={imageList.support.recaptcha}
                      maxW="8"
                      alt="reCAPTCHA"
                    />
                    <Text m="0" p="0" fontSize="2xs">
                      reCAPTCHA
                    </Text>
                    <Text m="0" p="0" fontSize="8">
                      Privacy - Terms
                    </Text>
                  </Flex>
                </Box>
              </HStack>
              <Flex py="4" justify={{ base: "flex-end", sm: "flex-start" }}>
                <Button
                  variant="solid"
                  colorScheme="telegram"
                  borderRadius="2xl"
                  minW="20"
                >
                  Send
                </Button>
              </Flex>
            </FormControl>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
}
