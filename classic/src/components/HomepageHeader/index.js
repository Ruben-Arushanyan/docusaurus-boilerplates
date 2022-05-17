import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            <Link
                className="button button--primary button--lg"
                to="/docs/intro"
            >
                Get Started
            </Link>
            <Link
                className="button button--info button--lg"
                to="/docs/intro"
            >
                Try a Demo
            </Link>
        </div>
      </div>
    </header>
  );
}