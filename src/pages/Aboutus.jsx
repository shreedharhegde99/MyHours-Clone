import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { aboutDetails } from "../assets/AboutDetails";
import { imageList } from "../assets/ImagesList";
import { Footer } from "../component";

export function Aboutus() {
  return (
    <Fragment>
      <Box pt="24">
        <Box>
          <Box maxW={{ md: "3xl", lg: "5xl" }} m="auto">
            <Box textAlign="center">
              <Text
                fontSize={{ base: "5xl", sm: "7xl" }}
                py="6"
                px="2"
                fontWeight="light"
                lineHeight={{ sm: "normal" }}
              >
                About us
              </Text>
              <Text
                color="#375d75"
                fontWeight="semibold"
                fontSize="4xl"
                textAlign="center"
              >
                The story behind My Hours
              </Text>
            </Box>
            <Box px="2" py="6">
              <Text
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontWeight="light"
                color="twitter.900"
                textAlign="center"
                lineHeight="1.5"
              >
                We launched My Hours back in 2002. Since then it has been
                rewritten twice to meet the growing demands. My Hours is a
                product of Spica, a company headquartered in Ljubljana with 100+
                employees.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py="16" maxW={{ md: "xl", lg: "2xl", xl: "3xl" }} m="auto">
          <Text
            fontWeight="light"
            fontSize="5xl"
            lineHeight="normal"
            pb="16"
            px="4"
          >
            We are building My Hours because we believe that:
          </Text>
          <Stack gap="10" px="4">
            {aboutDetails.map(({ title, details }) => (
              <Box key={title}>
                <Heading py="2" fontSize="3xl">
                  {title}
                </Heading>
                <Text fontSize="2xl" fontWeight="light">
                  {" "}
                  {details}{" "}
                </Text>
              </Box>
            ))}
          </Stack>
          <Box px={{ base: "4", sm: "3" }} py="24">
            <Image
              src={imageList.logo}
              alt="MyHoursLogo"
              maxW={{ base: "full", sm: "45%", xl: "50%" }}
            />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
}
