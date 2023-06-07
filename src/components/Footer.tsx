import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full bg-gray-300 dark:bg-gray-800 text-center py-8'>
            <div className='flex w-full gap-10 items-center justify-center'>
                <Link href='https://github.com/ackermanGitHub'>
                    <svg width="32px" height="32px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                <Link href="https://twitter.com/july_dev">
                    <svg width="32px" height="32px" viewBox="0 -4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">

                        <title>Twitter-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs>

                        </defs>
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC">
                                <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" id="Twitter">

                                </path>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className='grid grid-cols-2 min-[768px]:grid-cols-4 gap-4 p-4'>
                <Link href="/stack" className='text-gray-500 my-2'>Stack Used</Link>
                <Link href="/profile" className='text-gray-500 my-2'>Profile Page</Link>
                <Link href="#" className='text-gray-500 my-2'>Repository</Link>
                <Link href="#" className='text-gray-500 my-2'>Portfolio</Link>
                <Link href="#" className='text-gray-500 my-2'>CV</Link>
                <Link href="#" className='text-gray-500 my-2'>Nextjs Docs</Link>
                <Link href="#" className='text-gray-500 my-2'>How it Works</Link>
                <Link href="#" className='text-gray-500 my-2'>Contact</Link>
            </div>
            <h2 className='text-gray-500'>© 2023 All rights reserved</h2>
        </footer>
    )
}

export default Footer