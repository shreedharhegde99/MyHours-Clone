import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { imageList } from "../assets/ImagesList";
const { tickMark } = imageList.mobileApp;

export function MobileAppTopCards({
  image,
  title,
  subtitle,
  details,
  reverse,
}) {
  return (
    <Fragment>
      <Box>
        <Flex
          gap="4"
          justify="center"
          py="8"
          px="2"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: reverse ? "center" : "start" }}
        >
          <Box minW={{ md: "50%" }}>
            <Image src={image} alt={title} m="auto" />
          </Box>
          <Box order={{ md: reverse ? "-1" : "1" }}>
            <Heading color="#375d75" fontSize="2.5rem" py="2">
              {title}
            </Heading>
            <Text fontSize="2xl" py="2">
              {subtitle}
            </Text>
            {details.map((detail) => (
              <HStack gap="3" py="2" key={detail}>
                <Box>
                  <Image src={tickMark} alt="check_icon" w="6" h="6" />
                </Box>
                <Box fontSize="xl" fontWeight="light">
                  <Text> {detail} </Text>
                </Box>
              </HStack>
            ))}
          </Box>
        </Flex>
      </Box>
    </Fragment>
  );
}
