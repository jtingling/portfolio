import Link from 'next/link'

export default function Card({ view, yPosition, gridFormat, width }) {

    return (
        <div className={`${yPosition} mx-auto`}>
            <div className={`grid  ${gridFormat} ${view}  mx-auto`} >
                <img src="/images/profile.jpg" className="xs:rounded-t-lg sm:rounded-l-lg md:col-span-1" />
                <div className="text-white  md:col-span-3 bg-gray-800 bg-opacity-70 sm:pl-2 sm:rounded-r-lg">
                    <h1 className="pt-3">Jacob Tingling</h1>
                    <h3 className="pb-3">Web Developer</h3>
                    <button className="pb-0">more links</button>
                    <div className="grid md:grid-cols-1 md:grid-rows-2 pb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="self-end space-x-8 justify-self-center">
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}