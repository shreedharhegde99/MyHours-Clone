import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";

export function TableData({ title, data }) {
  return (
    <Box py="4">
      <Table>
        <Thead>
          <Tr>
            <Th textTransform="none" fontSize="2xl" py="6">
              {title === "Track" ? "Feature" : ""}{" "}
            </Th>
            <Th textTransform="none" fontSize="2xl" py="6">
              {title === "Track" ? "Free" : ""}{" "}
            </Th>
            <Th textTransform="none" fontSize="2xl" py="6">
              {title === "Track" ? "Pro" : ""}{" "}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td bg="gray.100" width="full" colSpan="3" fontWeight="medium">
              {title}
            </Td>
          </Tr>
          <GenerateTableData data={data} />
        </Tbody>
      </Table>
    </Box>
  );
}

function GenerateTableData({ data }) {
  // console.log(data);
  return data.map((detail) => (
    <Tr key={detail.title}>
      <Td fontWeight="light">{detail.title} </Td>
      <Td>{detail.free ? <IoMdCheckmark size="1.8rem" /> : ""} </Td>
      <Td>
        <IoMdCheckmark size="1.8rem" />
      </Td>
    </Tr>
  ));
}
