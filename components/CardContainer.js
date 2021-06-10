import Link from 'next/link'
import ProjectCard from './ProjectCard'
import data from '../data/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faBackward } from '@fortawesome/free-solid-svg-icons'

export default function CardContainer({ width }) {
    return (
        <>
            {width > 768 ?
                <div className={`max-w-2xl md:my-60 mx-auto`} >
                    <div className="flex flex-col text-white bg-gray-800 bg-opacity-70 rounded-t-lg">
                        {
                            data.projects.map((project) => {
                                return <><ProjectCard width={width} project={project} description={project.description} /><br /></>
                            })
                        }
                        <button type="button" className="self-center rounded-full py-3 px-6 bg-gray-900 max-w-xs">
                            <Link href="/">
                                <a><p className="text-2xl -mt-2">Back</p></a>
                            </Link>
                        </button>
                    </div>
                </div>
                :
                <div className={`flex justify-center flex-col my-20 mx-auto xs:rounded-lg`}>
                    <div className="flex flex-col text-white bg-gray-800 bg-opacity-70 rounded-t-lg">
                        {
                            data.projects.map((project) => {
                                return <ProjectCard key={project.id} width={width} project={project} className="p-1" />
                            })
                        }
                        <button type="button" className="self-center rounded-full py-3 px-6 bg-gray-900 max-w-xs">
                            <Link href="/">
                                <a><p className="text-2xl -mt-2">Back</p></a>
                            </Link>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}