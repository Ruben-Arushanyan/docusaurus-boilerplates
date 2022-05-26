import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroBanner from '@site/src/components/HeroBanner';
import _once from 'lodash/once'

const logOnce = _once(console.table);

export default function Home() {
  const {
    siteConfig: {
      customFields: {
        description,
        additonalInfo,
      },
    },
  } = useDocusaurusContext()

  useEffect(() => {
    logOnce(additonalInfo)
  }, [])

  return (
    <Layout
      title=""
      description={description}
    >
      <HeroBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
