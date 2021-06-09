import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLink, faForward} from '@fortawesome/free-solid-svg-icons'
import content from '../data/content.json'
export default function Card({ view, yPosition, gridFormat, width }) {

    return (
        <div className={`${yPosition} mx-auto`}>
            <div className={`grid  ${gridFormat} ${view}  mx-auto`} >
                <img src="/images/profile.jpg" className="xs:rounded-t-lg sm:rounded-l-lg md:col-span-1" />
                <div className="text-white  md:col-span-3 bg-gray-800 bg-opacity-70 sm:pl-2 sm:rounded-r-lg">
                    <h1 className="pt-3">Jacob Tingling</h1>
                    <h3 className="pb-0">Web Developer</h3>
                    <div className="flex justify-start w-24 h-10 p-0">
                        <a href="https://github.com/jtingling" className="w-full h-10" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a href="https://www.linkedin.com/in/jtingling/"  target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        <a href="https://www.facebook.com/jacob.t.58/" target="_blank" className="pl-2 w-full h-10"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                    </div>
                    <div className="grid md:grid-cols-1 md:grid-rows-2 pt-1">
                        <p className="text-2xl">{content.intro}</p>
                        <p className="text-xl pt-4">{content.contact}</p>
                        <div className="self-end space-x-8 justify-self-start pt-5 ">
                            <Link href="/projects" className="flex items-baseline">
                                <a><p className="text-2xl"><FontAwesomeIcon icon={faForward} className="inline w-5 h-5 pr-1"/>Projects</p></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}