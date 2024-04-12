"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Footer from "./components/Footer";
// import Courses from "./components/Route/Courses";
// import Reviews from "./components/Route/Reviews";
// import FAQ from "./components/FAQ/FAQ";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <>
      <Heading
        title="Online Shiksha"
        description="Online Shiksha is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Page;
