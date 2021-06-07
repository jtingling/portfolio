import ProjectCard from './ProjectCard'
import data from '../data/projects.json'


export default function CardContainer({ width }) {
    return (
        <>
            {width > 768 ?
                <div className={`flex justify-center max-w-2xl md:my-60 mx-auto`} >
                    <div className="text-white bg-gray-800 bg-opacity-70 rounded-t-lg">
                            {
                                data.projects.map((project) => {
                                    return <ProjectCard width={width} name={project.name} type={project.type} description={project.description} />
                                })
                            }
                    </div>
                    <div >
                    </div>
                </div>
                :
                <div className={`flex justify-center flex-col my-20 mx-auto xs:rounded-t-lg`}>
                            {
                                data.projects.map((project) => {
                                    return <ProjectCard width={width} name={project.name} type={project.type} description={project.description} />
                                })
                            }
                </div>
            }
        </>
    )
}