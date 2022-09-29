import { Box, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function ReviewListCard({ data }) {
  return (
    <Fragment>
      {data.map((list) => (
        <Box key={list.author} py="2">
          <Text fontSize="lg">{list.details}</Text>
          <Heading as="h2" fontSize="lg" py="2" fontWeight="bold">
            <i>{list.author}</i>
          </Heading>
        </Box>
      ))}
    </Fragment>
  );
}
