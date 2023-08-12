// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: exaoomPbYuXnPAofivxyBg
// Component: RwbMKBMb1j

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: exaoomPbYuXnPAofivxyBg/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: RwbMKBMb1j/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  orders?: any;
  newOrder?: any;
  testOrders?: boolean;
  testNewOrder?: boolean;
};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>(
  "orders",
  "newOrder",
  "testOrders",
  "testNewOrder"
);

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  grid?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          orders: [
            { id: 0, name: "A", barraca: "B" },
            { id: 1, name: "A", barraca: "B" },
            { id: 2, name: "A", barraca: "B" },
            { id: 3, name: "A", barraca: "B" }
          ],
          newOrder: [],
          testOrders: false,
          testNewOrder: false
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__u9AvU)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__c2NpG)}
                displayHeight={"100%" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/website_starter/images/whatsAppImage20230812At143106Jpeg.jpg",
                  fullWidth: 1024,
                  fullHeight: 576,
                  aspectRatio: undefined
                }}
              />

              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__caBq2)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__z8R6M)}
                    displayHeight={"250px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"250px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/website_starter/images/isvpng.png",
                      fullWidth: 1080,
                      fullHeight: 1080,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__lrIjt)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__hanpu)}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__hazpa,
                            "title" as const
                          )}
                        >
                          {"ARRAIAL \nDA FAM\u00cdLIA"}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className={classNames(projectcss.all, sty.freeBox___5Oyht)}>
                {(() => {
                  try {
                    return $props.testOrders || $props.testNewOrder
                      ? $props.testOrders
                      : !$props.newOrder;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qw3As)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kkq5L
                      )}
                    >
                      {"PEDIDOS PRONTOS"}
                    </div>
                    {true ? (
                      <div
                        data-plasmic-name={"grid"}
                        data-plasmic-override={overrides.grid}
                        className={classNames(projectcss.all, sty.grid)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__pRnrw
                          )}
                        >
                          {(
                            (() => {
                              try {
                                return $props.orders.flatMap(ord => [ord, ord]);
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return [];
                                }
                                throw e;
                              }
                            })() ?? []
                          ).map((currentItem, currentIndex) => (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__y8IMt
                              )}
                              key={currentIndex}
                            >
                              {(() => {
                                try {
                                  return [0, 3].includes(currentIndex % 4);
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return true;
                                  }
                                  throw e;
                                }
                              })() ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__p7Cb1
                                  )}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__eo4Gi
                                    )}
                                  >
                                    <React.Fragment>
                                      {(() => {
                                        try {
                                          return currentItem.name;
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return "";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </React.Fragment>
                                  </div>
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__k1Qct
                                    )}
                                  >
                                    <React.Fragment>
                                      {(() => {
                                        try {
                                          return currentItem.barraca;
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return "";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </React.Fragment>
                                  </div>
                                </p.Stack>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {(() => {
                  try {
                    return $props.testNewOrder || $props.testOrders
                      ? $props.testNewOrder
                      : !!$props.newOrder;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qk9Ls)}
                  >
                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__yiQYu
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nOfxM
                          )}
                        >
                          {"NOVO PEDIDO PRONTO"}
                        </div>
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__vGeby
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__zK2AE
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return $props.newOrder.name;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "ISAAC";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ymvUa
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return $props.newOrder.barraca;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "JAPONES";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </div>
                          </p.Stack>
                        ) : null}
                      </p.Stack>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "grid"],
  grid: ["grid"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  grid: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    grid: makeNodeComponent("grid"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
