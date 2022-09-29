import { Box, Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export function FooterNavlinkContainer({ data }) {
  return (
    <Fragment>
      <Heading as="h1" fontSize="lg" color="#dbf1ff">
        {data.heading}
      </Heading>
      {data.pages.map((page) => (
        <Box key={page.title} py="2" color="#dbf1ff">
          <Link to={`/${page.link}`}>{page.title}</Link>
        </Box>
      ))}
    </Fragment>
  );
}
