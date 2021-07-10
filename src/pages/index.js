import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { features } from "../features";
import styles from "./styles.module.css";

function Badges() {
  return (
    <div className={styles.topBadges}>
      <a
        href="https://www.producthunt.com/posts/superplate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-superplate"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=293252&theme=light"
          alt="Superplate - The frontend boilerplate with superpowers | Product Hunt"
          style={{ width: 250, height: 54 }}
          width="250"
          height="54"
        />
      </a>
      <br />
      <a href="https://meercode.io">
        <img
          src="https://meercode.io/badge/pankod/superplate?type=ci-score&branch=master&token=2ZiT8YsoJgt57JB23NYwXrFY3rJHZboT&lastDay=31"
          alt="Meercode CI Score"
        />
      </a>
      <a href="https://meercode.io">
        <img
          src="https://meercode.io/badge/pankod/superplate?type=ci-success-rate&branch=master&token=2ZiT8YsoJgt57JB23NYwXrFY3rJHZboT&lastDay=31"
          alt="Meercode CI Success Rate"
        />
      </a>
      <a href="https://codeclimate.com/github/pankod/superplate/maintainability">
        <img src="https://api.codeclimate.com/v1/badges/eb4b5a8f88b6e511e61d/maintainability" />
      </a>
      <a href="https://www.npmjs.com/package/superplate-cli">
        <img
          src="https://img.shields.io/npm/v/superplate-cli.svg"
          alt="npm version"
        />
      </a>
      <a href="https://david-dm.org/pankod/superplate">
        <img
          src="https://david-dm.org/pankod/superplate/status.svg"
          alt="Dependencies Status"
        />
      </a>
      <a href="https://david-dm.org/pankod/superplate?type=dev">
        <img
          src="https://david-dm.org/pankod/superplate/dev-status.svg"
          alt="devDependencies Status"
        />
      </a>
      <a href="https://www.npmjs.com/package/superplate-cli">
        <img src="https://img.shields.io/npm/dm/superplate-cli" alt="npm" />
      </a>
    </div>
  );
}
function Feature({ imageUrl, title, url }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--2", styles.feature)}>
      <a href={url} target="_blank">
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3 className={styles.featureTitle}>{title}</h3>
      </a>
    </div>
  );
}

function Sections() {
  return (
    <>
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>All plugins follow the best practices</h2>
              <p>
                superplate gives you many abilities to create your own plugin
                and interact with the others. You can add{" "}
                <strong>
                  usefull, highly-demands front-end development tools and
                  libraries
                </strong>{" "}
                as a plugin by using superplate CLI during the project creation
                phase.
                <br />
                <br />
                To create a project called <i>my-app</i>, run this command:
              </p>
              <CodeBlock className="language-sh">
                npx superplate-cli my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.sectionImage}
                alt="Easy to get started in seconds"
                src="img/cli.gif"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--5 col--offset-1">
              <CodeBlock className="language-js">
                {` const base = {
  _app: {
      import: [
          'import { ChakraProvider } from "@chakra-ui/react";',
          'import theme from "@definitions/chakra/theme";',
      ],
      wrapper: [["<ChakraProvider theme={theme}>", "</ChakraProvider>"]],
  },
  testSetup: {
      import: [
          'import { ChakraProvider } from "@chakra-ui/react";',
          'import theme from "@definitions/chakra/theme";',
      ],
      wrapper: [["<ChakraProvider theme={theme}>", "</ChakraProvider>"]],
  },
};
module.exports = {
    extend() {
        return base;
    },
};
`}
              </CodeBlock>
              <br />
            </div>
            <div className="col col--4 col--offset-1">
              <h2>Easy to extend/customize plugin structure</h2>
              <p>
                You can easily develop your own framework CLI and plugins
                according to your needs to on top of superplate codebase due to
                its framework/plugin agnostic nature.
              </p>
              <CodeBlock className="language-sh">npm run dev</CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.logoContainer}>
            <img
              className={clsx(styles.heroBannerLogo, "margin-vert--md")}
              src="img/vitals-logo@2x.png"
              alt="logo-icon"
            />
          </div>
          <h1 style={{ color: "#fff", fontSize: 50 }}>Vitals.io</h1>
          <p className={clsx(styles.heroSubtitle, "hero__subtitle")}>
            {siteConfig.tagline}
          </p>
          {/* <Badges /> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {(features ?? []) && features.length > 0 && (
          <section className={styles.featuresContainer}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Sections />
    </Layout>
  );
}

export default Home;
