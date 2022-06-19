import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroBanner from '@site/src/components/HeroBanner';
import AdditonalInfoLog from '@site/src/components/AdditonalInfoLog';

export default function Home() {
  const {
    siteConfig: {
      customFields: {
        description,
      },
    },
  } = useDocusaurusContext()

  return (
    <Layout
      title=""
      description={description}
    >
      <HeroBanner />
      <main>
        <HomepageFeatures />
      </main>
      <AdditonalInfoLog />
    </Layout>
  )
}
