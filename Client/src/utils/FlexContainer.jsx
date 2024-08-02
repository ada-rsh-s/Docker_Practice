import { Flex } from "antd";

const FlexContainer = ({ children }) => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex className="test" justify="space-evenly" align="center">
        {children}
      </Flex>
    </Flex>
  );
};

export default FlexContainer;
