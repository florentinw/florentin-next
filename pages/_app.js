import App from "next/app";
import React from "react";
import Router from "next/router";
import useAckee from "use-ackee";

import { Footer, SmallText, CustomLink } from "../components";
import Providers from "../components/providers";

import "../assets/css/global.css";

Router.events.on("routeChangeComplete", (url) => {
  useAckee(
    url,
    {
      server: "https://analytics.florentin.moeritz.io",
      domainId: "838a9105-9d85-48c1-b9ea-4ad4491c2813",
    },
    {
      ignoreLocalhost: false,
      detailed: true,
    }
  );
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
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
}
