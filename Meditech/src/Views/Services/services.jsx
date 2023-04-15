import Layout from "./../../Layout";
import CardServices from "./../../Components/CardServices/cardservices";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const home = () => {
  return (
    <Layout>
      <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"70px 1fr 30px"}
      gridTemplateColumns={"250px 1fr"}
      h="960px"
      gap="1"
    >
      <GridItem pl="2" bg="pallette.color5" area={"main"}>
        <CardServices />
      </GridItem>
    </Grid>
    </Layout>
  );
};

export default home;
