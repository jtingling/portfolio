import Image from 'next/image'

export default function ProjectCard({ width, name, type, description }) {

    return (
        <>
            {width > 768 ?
                <div className={`grid justify-center grid-cols-1 grid-rows-1 bg-opacity-70 rounded-t-lg`} >
                    <div className="text-white sm:p-2">
                        <h1>{name}</h1>
                        <h3>{type}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                :
                <div className={`grid justify-center grid-cols-1 grid-rows-1 bg-opacity-70 rounded-t-lg`}>
                    <div className="text-white  md:col-span-3 bg-gray-800 bg-opacity-70 sm:pl-2 sm:rounded-r-lg">
                        <div className="text-white sm:p-2">
                            <h1>{name}</h1>
                            <h3>{type}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}