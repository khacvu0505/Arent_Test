import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { COLOR } from "src/constant";

const Meal = (props) => {
  const { icon, text } = props;
  return (
    <Box className="hexagon">
      <Box>
        <Box display="flex" justifyContent="center">
          {icon}
        </Box>
        <Text color={COLOR.light} display="flex" justifyContent="center">
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Meal;
