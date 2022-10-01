import {
  Box,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { BsChevronRight } from "react-icons/bs";

export function FeatureCards({ heading, details, images }) {
  return (
    <Fragment>
      <Box px="4" py="20" maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }} m="auto">
        <Box>
          <Text fontSize={{ base: "5xl", sm: "6xl" }} fontWeight="light" py="6">
            {heading}
          </Text>
        </Box>
        <Tabs variant="unstyled">
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", lg: "normal" }}
            gap="4"
          >
            <TabList
              order={{ base: 2, md: -1 }}
              m="auto"
              flexDirection="column"
              gap={{ base: "3", lg: "9" }}
              w={{ base: "full", xl: "4xl" }}
            >
              {details.map(({ title, desc }) => (
                <Tab
                  w={{ base: "full", sm: "80%" }}
                  key={title}
                  border="1px solid"
                  borderRadius="lg"
                  m="auto"
                  borderColor="GrayText"
                  _selected={{
                    color: "white",
                    bg: "#3b8fc2",
                  }}
                >
                  <Stack
                    direction="row"
                    align="center"
                    py="4"
                    px="2"
                    justify="space-between"
                    w="full"
                  >
                    <Box textAlign="start" w="full">
                      <Heading fontSize="lg" fontWeight="black" py="2">
                        {title}
                      </Heading>
                      <Text fontSize="md" fontWeight="light">
                        {desc}
                      </Text>
                    </Box>
                    <Box>
                      <BsChevronRight size="1.5rem" color="inherit" />
                    </Box>
                  </Stack>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {images.map((image) => (
                <TabPanel key={image} p="2">
                  <Image
                    src={image}
                    alt={heading}
                    maxW={{
                      base: "75%",
                      sm: "70%",
                      md: "full",
                      lg:
                        heading === "Integrations"
                          ? "sm"
                          : heading === "Mobile apps"
                          ? "2xs"
                          : "full",
                    }}
                    maxH={{ lg: "md" }}
                    m="auto"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Stack>
        </Tabs>
      </Box>
    </Fragment>
  );
}
