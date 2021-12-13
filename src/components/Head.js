import React from "react";
import { Grid, Text } from "../elements";

const Head = (props) => {
  return (
    <React.Fragment>
      {/* <Title> */}
      <Grid center background_color="#8b4513">
        <Text color="white" size="30px" margin="0px" bold>
          My Reads
        </Text>
      </Grid>
      {/* </Title> */}
    </React.Fragment>
  );
};

export default Head;
