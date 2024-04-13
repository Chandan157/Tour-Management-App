import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import custamizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem2",
  },
  {
    imgUrl: custamizationImg,
    title: "Customization",
    desc: "Lorem3",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
