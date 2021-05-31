import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

export async function getStaticProps() {


  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  })
  const topics = await unsplash.topics.list({
    topicIdsOrSlugs: ['nature'] // 'architecture', 'experimental', 'wallpapers'
  })
  const res = await unsplash.photos.getRandom(
    {
      topics: topics.response.results[0].id
    }
  )
  const backgroundImage = res.response.urls.regular;
  
  return {
      props: {
        backgroundImage
      }
    }
}

export default function Home({backgroundImage}) {
  const [pageXY, setPageXY] = useState(null);

  useEffect(()=>{
    (function () {
      const ele = document.getElementById('__next');
      const rect = ele.getBoundingClientRect();
      setPageXY([rect.width, rect.height])
      console.log(pageXY)
    })()
  },[])
  return (
    <div>
      <Head>
        <title>Portfolio Page</title>
        <meta name="my-portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src={backgroundImage} layout='fill'/>
        
      </main>
      <footer>
      </footer>
    </div>
  )
}
