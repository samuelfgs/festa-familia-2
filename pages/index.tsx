// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";

import { ScreenVariantProvider } from "../components/plasmic/website_starter/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/website_starter/PlasmicHomepage";
import { useRouter } from "next/router";
import useSWR from "swr";

import usePrevious from "use-previous";

function Homepage() {
  const { data, mutate } = useSWR("orders", async () => 
    (await (await fetch("/api/hello?newOrder=0")).json()), {
    refreshInterval: 5000
  });
  const { data: newOrders, mutate: mutateNewOrders } = useSWR("newOrders", async () => 
    (await (await fetch("/api/hello?newOrder=1")).json()), {
      refreshInterval: 5000
    }
  )
  React.useEffect(() => {
    if (newOrders?.length > 0) {
      setTimeout(async () => {
        await fetch(`/api/hello?id=${newOrders[0].id}`, {
          method: "PUT"
        });
        console.log("put");
        mutate();
        mutateNewOrders();
      }, 5000)
    }
  }, [newOrders]);
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage
        orders={data}
        grid={{
          render(props, Comp) {
            return (
              // @ts-ignore
              <marquee width="100%" direction="up" height="100%" scrollamount={5}>
                <Comp {...props} />
              { /* @ts-ignore */}
              </marquee>
            )
          }
        }}
        newOrder={newOrders?.[0]}
      />
    </ph.PageParamsProvider>
  );
}

export default Homepage;
