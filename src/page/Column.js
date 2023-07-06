import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import BtnSeeMore from "src/components/BtnSeeMore";
import RecommendColumnItem from "src/components/column/RecommendColumnItem";
import FoodColumnItem from "src/components/column/FoodColumnItem";

import { listRecommendColumn, listFoodColumnItem } from "src/json/ColumnData";

const Column = () => {
  return (
    <Box paddingTop={"70px"}>
      <Box>
        <Flex
          margin={"0 auto"}
          width={"80%"}
          justifyContent={"space-between"}
          gap={10}
        >
          {listRecommendColumn.map((item, index) => {
            return (
              <RecommendColumnItem
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </Flex>
      </Box>
      <Box marginTop={70}>
        <Box>
          <Box width={"80%"} margin={"0 auto"}>
            <Flex flexWrap={"wrap"}>
              {listFoodColumnItem.map((item, index) => {
                return (
                  <FoodColumnItem
                    key={index}
                    srcImage={item.image}
                    time={item.time}
                    content1={item.content1}
                    content2={item.content2}
                    num={index + 1}
                  />
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box marginBottom={70} mt={5} textAlign={"center"}>
        <BtnSeeMore text={"コラムをもっと見る"} />
      </Box>
    </Box>
  );
};

export default Column;
