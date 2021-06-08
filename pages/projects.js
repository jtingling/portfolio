import Image from 'next/image'
import { useState, useEffect } from 'react';
import getBackgrounds from '../lib/backgrounds';
import CardTemplate from '../components/CardContainer';
export async function getStaticProps() {
  const backgroundImage = await getBackgrounds();
  return {
    props: {
      backgroundImage
    }
  }
}
export default function Projects({ backgroundImage }) {
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
    <div className={`relative z-0 inset-0 overflow-hidden`}>
      {width != null && <Image src={backgroundImage} width={width} height={height} alt="nature" />}
      <div className="absolute inset-0 z-1 ">
        <div>
          <CardTemplate width={width} />
        </div>
      </div>
    </div>

  )
}