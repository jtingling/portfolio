import { createApi } from 'unsplash-js';


/*
const topics = await unsplash.topics.list({
  topicIdsOrSlugs: ['nature'] // 'architecture', 'experimental', 'wallpapers'
})
console.log(topics.response.results)
*/

export default async function getBackgrounds() {
    const unsplash = createApi({
        accessKey: process.env.UNSPLASH_ACCESS_KEY
    })
    const res = await unsplash.photos.getRandom({ topics: '6sMVjTLSkeQ' })
    const backgroundImage = res.response.urls.regular;
    return backgroundImage
}
