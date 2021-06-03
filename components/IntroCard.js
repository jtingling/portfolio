import Image from 'next/image'

export default function IntroCard({imageWidth}) {
    return (
            <div className="grid mt-40 mb-40 xs:mx-10 s:mx-20 lg:mx-40 md:grid-cols-5 md:grid-rows-1 ">
                <div className="sm:col-span-2">
                    <img src="/images/profile.jpg" className="w-full xs:rounded-t-lg sm:rounded-l-lg "/>
                </div>
                <div className="text-white sm:col-span-2 md:col-span-3 bg-gray-800 bg-opacity-70 sm:pl-2 w-full">
                    <h1 className="pt-3">Jacob Tingling</h1>
                    <h3 className="pb-3">Web Developer</h3>
                    <button className="pb-3">more links</button>
                    <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>

            </div>
    )
}