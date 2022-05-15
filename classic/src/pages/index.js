import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';

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
    console.table(additonalInfo)
  }, [])

  return (
    <Layout
      title=""
      description={description}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
