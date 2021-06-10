import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLink, faForward } from '@fortawesome/free-solid-svg-icons'
import content from '../data/content.json'
export default function Card({ view, yPosition, gridFormat, width }) {

    return (
        <>
            {
                width > 768 ?
                    <div className={`${yPosition} mx-auto`}>
                        <div className={`grid  ${gridFormat} ${view}  mx-auto`} >
                            <img src="/images/profile.jpg" className="rounded-l-lg col-span-1" />
                            <div className="text-white col-span-3 bg-gray-800 bg-opacity-70 pl-2 rounded-r-lg">
                                <h1 className="pt-3">Jacob Tingling</h1>
                                <h3 className="pb-0">Web Developer</h3>
                                <div className="flex justify-start w-24 h-10 p-0">
                                    <a href="https://github.com/jtingling" className="w-full h-10" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    <a href="https://www.linkedin.com/in/jtingling/" target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                    <a href="https://www.facebook.com/jacob.t.58/" target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                </div>
                                <div className="grid content-center grid-cols-1 grid-rows-2 pt-1">
                                    <p className="text-2xl">{content.intro}</p>
                                    <div className="space-x-8 justify-self-center pt-5 ">
                                        <button type="button" className="rounded-full py-3 px-6 bg-gray-900">
                                            <Link href="/projects">
                                                <a><p className="text-2xl -mt-2">Projects</p></a>
                                            </Link>
                                        </button>
                                        <button type="button" className="rounded-full py-3 px-6 bg-gray-900">
                                            <Link href="/projects">
                                                <a><p className="text-2xl -mt-2">Contact Me</p></a>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`${yPosition} mx-auto`}>
                        <div className={`grid  ${gridFormat} ${view}  mx-auto`} >
                            <img src="/images/profile.jpg" className="xs:rounded-t-lg" />
                            <div className="text-white bg-gray-800 bg-opacity-70 pl-2 rounded-b-lg h-4/5">
                                <h1 className="pt-3">Jacob Tingling</h1>
                                <h3 className="pb-0">Web Developer</h3>
                                <div className="flex justify-start w-24 h-10 p-0">
                                    <a href="https://github.com/jtingling" className="w-full h-10" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    <a href="https://www.linkedin.com/in/jtingling/" target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                    <a href="https://www.facebook.com/jacob.t.58/" target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                </div>
                                <div className="grid pt-1">
                                    <p className="text-2xl">{content.intro}</p>
                                    <div className="self-end space-x-8 justify-self-center pt-5 ">
                                        <div className="space-x-8 justify-self-center">
                                            <button type="button" className="rounded-full py-3 px-6 bg-gray-900">
                                                <Link href="/projects">
                                                    <a><p className="text-2xl -mt-2">Projects</p></a>
                                                </Link>
                                            </button>
                                            <button type="button" className="rounded-full py-3 px-6 bg-gray-900">
                                                <Link href="/projects">
                                                    <a><p className="text-2xl -mt-2">Contact Me</p></a>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}