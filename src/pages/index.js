import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Feature from "../components/Feature";

const features = [
  {
    title: "About me",
    imageUrl: "img/undraw_Hello_qnas.svg",
    description: (
      <>
        Hi, I am Naga. A frontend developer best known for developing highly
        performing web applications using most modern technical solutions which
        proved to stand the test of time by being accessible, secure, scalable
        and modular.
      </>
    )
  },
  {
    title: "Tech I dig",
    imageUrl: "img/undraw_web_developer_p3e5.svg",
    description: (
      <>
        My best work is in React, Node.js and ES6. I love exploring different
        aspects of frontend development and most recently I have gotten a kick
        for JAMStack architectures and JavaScript based backends including some
        serverless stuff.
      </>
    )
  },
  {
    title: "Resume",
    imageUrl: "img/undraw_Resume_re_hkth.svg",
    description: (
      <>
        Are you looking for details of my professional experience, my education,
        technologies I worked on etc? How about having a look at my resume that
        you can download from {` `}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1TWnPqf1X40KPTY5kF55cGBEHfkJpqGun/view?usp=sharing"
        >
          here
        </a>
        {` `}
        as a PDF file.
      </>
    )
  },

  {
    title: "Video resume",
    imageUrl: "img/undraw_online_video_ivvq.svg",
    description: (
      <>
        If you are someone who enjoys video content, checkout this{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://youtu.be/gLn8BADTA5k"
        >
          56 seconds video
        </a>{" "}
        about me.
      </>
    )
  }
];

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Front-end is a fun trend!</h1>
          <img
            src={useBaseUrl("img/smiley.jpeg")}
            alt="Naga's DP"
            className={styles.heroLogo}
          />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--lg button--secondary",
                styles.getStarted
              )}
              to={useBaseUrl("all-articles/")}
            >
              Get Started
            </Link>
            <a
              href="https://wa.link/80m7yu"
              rel="noreferrer noopener"
              target="_blank"
              className={clsx(
                "button button--lg button--info",
                styles.getStarted
              )}
            >
              Chat Now
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
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
    </Layout>
  );
}
