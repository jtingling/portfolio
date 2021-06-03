import Head from 'next/head'
import Image from 'next/image'
import IntroCard from '../components/IntroCard'
import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
export async function getStaticProps() {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  })
  /*
  const topics = await unsplash.topics.list({
    topicIdsOrSlugs: ['nature'] // 'architecture', 'experimental', 'wallpapers'
  })
  console.log(topics.response.results)
  */
  const res = await unsplash.photos.getRandom({ topics: '6sMVjTLSkeQ' })
  const backgroundImage = res.response.urls.regular;
  return {
    props: {
      backgroundImage
    }
  }
}

export default function Home({ backgroundImage }) {
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  if (process.browser) {
    useEffect(() => {
      setHeight(document.children[0].clientHeight)
    }, [document.children[0].clientHeight])
    useEffect(() => {
      setWidth(document.children[0].clientWidth)
    }, [document.children[0].clientWidth])
  }
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Portfolio Page</title>
        <meta name="my-portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="fixed z-0">
          {width != null && <Image priority src={backgroundImage} width={width} height={height} layout='fixed' alt='nature image' />}
        </div>
        <div className="absolute">
          <IntroCard imageWidth={width} />
        </div>

      </main>
      <footer>
      </footer>
    </div>
  )
}
