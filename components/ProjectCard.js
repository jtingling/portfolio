import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({ width, project }) {

    return (
        <>
            {width > 768 ?
                <div className={`grid justify-center grid-cols-1 grid-rows-1 bg-opacity-70 rounded-t-lg`} >
                    <div className="text-white  md:col-span-3 bg-gray-800 bg-opacity-70 m-2 rounded-lg">
                        <div className="text-white sm:p-2">
                            <a href={`${project.url}`} target="_blank"><h1><FontAwesomeIcon icon={faLink} size="sm" className="inline w-auto pr-1 h-10" />{project.name}</h1></a>
                            <h3>{project.type}</h3>
                            <p>{project.description}</p><br />
                            <p>Made with: {project.tech}</p>
                        </div>
                    </div>
                </div>
                :
                <div className={`grid justify-center grid-cols-1 grid-rows-1 bg-opacity-70 rounded-lg p-2`}>
                    <div className="text-white  md:col-span-3 bg-gray-800 bg-opacity-70 sm:pl-2 rounded-lg pl-2">
                        <div className="text-white sm:p-2">
                            <a href={`${project.url}`} target="_blank"><h2><FontAwesomeIcon icon={faLink} size="xs" className="inline w-auto pr-1 h-8" />{project.name}</h2></a>
                            <h3>{project.type}</h3>
                            <p>{project.description}</p>
                            <p>Made with: {project.tech}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}