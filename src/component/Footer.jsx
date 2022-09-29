import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { imageList } from "../assets/ImagesList";
import { BiCopyright } from "react-icons/bi";
import { LinkLists } from "../assets/FooterLinkList";
import { FooterNavlinkContainer } from "./FooterNavlinkContainer";

export function Footer() {
  return (
    <Fragment>
      <Box bg="#375d75" pt="14">
        <Stack
          direction={{ base: "column", md: "row" }}
          maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          m={{ md: "auto" }}
          gap={{ md: "1" }}
        >
          <Box px="2" minW={{ md: "max-content" }} color="gray.300">
            <Image src={imageList.footerLogo} alt="myhours_logo" />
            <Text>
              <BiCopyright
                size="1.1rem"
                style={{
                  display: "inline",
                  alignSelf: "baseline",
                  marginBottom: "-3px",
                }}
              />
              My Hours
            </Text>
            <Text> All rights reserved.</Text>
          </Box>

          {LinkLists.map((list) => (
            <Container p={{ base: "3", md: "2" }} key={list.heading}>
              <FooterNavlinkContainer data={list} />
            </Container>
          ))}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          color="whiteAlpha.900"
          px="4"
          py="4"
          justify={{ md: "center" }}
        >
          <Text fontSize="xl">
            Looking for employee attendance and absence tracking ? Visit{" "}
          </Text>
          <Text fontSize="xl" textDecor="underline" fontWeight="bold" mt="-2">
            All Hours
          </Text>
        </Stack>
      </Box>
    </Fragment>
  );
}
