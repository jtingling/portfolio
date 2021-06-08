import Link from 'next/link'
import ProjectCard from './ProjectCard'
import data from '../data/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function CardContainer({ width }) {
    return (
        <>
            {width > 768 ?
                <div className={`flex justify-center max-w-2xl md:my-60 mx-auto`} >
                    <div className="text-white bg-gray-800 bg-opacity-70 rounded-t-lg">
                        {
                            data.projects.map((project) => {
                                return <><ProjectCard width={width} project={project} description={project.description} /><br /></>
                            })
                        }
                        <Link href="/">
                            <a><p className="text-2xl"><FontAwesomeIcon icon={faLink} className="inline w-5 h-5 pr-1" />Home</p></a>
                        </Link>
                    </div>
                </div>
                :
                <div className={`flex justify-center flex-col my-20 mx-auto xs:rounded-lg`}>
                    <div className="text-white bg-gray-800 bg-opacity-70 rounded-t-lg">
                    {
                        data.projects.map((project) => {
                            return <ProjectCard key={project.id} width={width} project={project} className="p-1" />
                        })
                    }
                    <Link href="/">
                        <a><p className="text-2xl"><FontAwesomeIcon icon={faLink} className="inline w-5 h-5 pr-1" />Home</p></a>
                    </Link>
                    </div>
                </div>
            }
        </>
    )
}