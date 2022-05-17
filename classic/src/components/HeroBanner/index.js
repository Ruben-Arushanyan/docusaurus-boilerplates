import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTitle}>
          {siteConfig.title}
          <img
            alt='logo'
            className={styles.heroLogo}
            src={useBaseUrl('/img/logo.svg')}
            width="300"
            height="300"
          />
        </h1>
        <h2 className={styles.heroProjectTagline}>
            Psakecin <b>Maroyin</b>, tvin choban <b>Karoyin</b>
        </h2>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
            Get Started
          </Link>
          <Link className="button button--info" to="/docs/intro">
            Try a Demo
          </Link>
        </div>
      </div>
    </div>
  )
}