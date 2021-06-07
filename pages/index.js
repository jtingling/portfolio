import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { useState, useEffect } from 'react';
import getBackgrounds from '../lib/backgrounds';

export async function getStaticProps() {
  const backgroundImage = await getBackgrounds();
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
    <html>
      <Head>
        <title>Portfolio Page</title>
        <meta name="my-portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className={`relative z-0 inset-0 ${width > 768 && "overflow-hidden"}`}>
          {width != null && <Image src={backgroundImage} width={width} height={height} alt="nature" />}
          <div className="absolute inset-0 z-1 ">
            {width < 768 && <Card width={width} yPosition={"my-20"} view={"xs:max-w-sm"} gridFormat={"xs:grid-rows-2 xs:grid-cols-1 xs:grid-flow-col"}/>}
            {width > 768 && <Card width={width} yPosition={"my-60"} view={"md:max-w-7xl"} gridFormat={"md:grid-cols-4 md:grid-rows-1"}/>}
          </div>
        </div>

      </main>
    </html>
  )
}
