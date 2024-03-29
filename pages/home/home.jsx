import React from "react";
import About from "../../components/about/About";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/reservation/Reservation";
import Campaigns from "../../components/ui/Campaigns";
import Carosel from "../../components/ui/Carosel";
import Customers from "../../components/customers/Customers";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carosel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
