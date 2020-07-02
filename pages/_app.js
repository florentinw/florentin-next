import { useEffect } from "react";
import Router from "next/router";
import * as ackeeTracker from "ackee-tracker";

import { Footer, SmallText, CustomLink } from "../components";
import Providers from "../components/providers";

import "../assets/css/global.css";



const MyApp = (props) =>{
  const { Component, pageProps } = props;

  useEffect(() => {
    const ackeeTrackerInstance = ackeeTracker.create({
      server: "https://analytics.florentin.moeritz.io",
      domainId: "838a9105-9d85-48c1-b9ea-4ad4491c2813",
    }, {
      ignoreLocalhost: true,
      detailed: true,
    })
    if(window.location.hostname == "florentin.design") ackeeTrackerInstance.record();

    Router.events.on("routeChangeComplete", (path) => {
      if(window.location.hostname == "florentin.design") ackeeTrackerInstance.record()
    });

  },[]);

  return (
      <Providers>
        <Component {...pageProps} />
        <Footer
          style={{ marginBottom: "100px" }}
          leftContent={<SmallText>2015 - ∞</SmallText>}
          rightContent={
            <CustomLink isExternal={false} href="/legal">
              Legal
            </CustomLink>
          }
        />
      </Providers>
    );
}


export default MyApp;