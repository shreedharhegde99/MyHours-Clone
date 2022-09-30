import { Box, useRadio } from "@chakra-ui/react";

export function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.300",
          color: "white",
          borderColor: "blue.300",
        }}
        textAlign="center"
        bg="blue.50"
        w={{ base: "14", sm: "16" }}
        px={1}
        py={2}
        fontSize="sm"
      >
        {props.children}
      </Box>
    </Box>
  );
}
