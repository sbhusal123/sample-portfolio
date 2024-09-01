export function Footer() {
    return (
        <div className="bg-slate-950">
            <div className="flex max-sm:flex-col sm:flex-row  p-5 text-white gap-10 sm:justify-center sm:space-x-20">

                        {/* LOGO */}
                        <div className="sm:w-1/3">
                            <div className="flex flex-col gap-2">
                                <div className="border-b-2 sm:border-none border-slate-500 items-center">
                                    <h1 className="text-3xl">LOGO</h1>
                                </div>
                                <div className="text-slate-500 flex items-center">
                                    <p className="text-justify">
                                        Est consequat ut minim eu ex exercitation quis velit ut in dolor non sunt irure. Lorem ipsum fugiat anim veniam id mollit Lorem non cillum nostrud aliqua et consequat.
                                        Lorem ipsum fugiat anim veniam id mollit Lorem non cillum nostrud aliqua et consequat.
                                        Est consequat ut minim eu ex exercitation quis velit ut in dolor non sunt irure. Lorem ipsum fugiat anim veniam id mollit Lorem non cillum nostrud aliqua et consequat.
                                        Lorem ipsum fugiat anim veniam id mollit Lorem non cillum nostrud aliqua et consequat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h1 className="text-3xl border-b-2 sm:border-none border-slate-500">Explore</h1>
                                </div>
                                <div className="grid grid-cols-2 text-slate-500 gap-2 cursor-pointer">
                                    <a>Home</a>
                                    <a>About Us</a>
                                    <a>Services</a>
                                    <a>Portfolio</a>
                                    <a>FooBar</a>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div>
                                <h1 className="text-3xl border-b-2 sm:border-none mb-2 border-slate-400">Contact Us</h1>
                            </div>
                            <div className="flex flex-col gap-2 text-slate-500">
                                <p>
                                    <svg className="size-5 mr-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <span className="inline">Satungal, Kathmandu</span>
                                </p>
                                <p>
                                    <svg className="size-5 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <span className="inline">janedoe@gmail.com</span>
                                </p>

                                <p>
                                    <svg className="size-4 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <span className="inline">987987987</span>
                                </p>
                                <p>
                                    <svg stroke="#64748b" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16" className="size-5 inline mr-2">
                                        <path fill="#64748b" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"></path><path fill="#fff" d="M9.082,10.12h2.071l0.326-2.104H9.082V6.868c0-0.875,0.286-1.65,1.104-1.65h1.312V3.383	c-0.23-0.03-0.719-0.099-1.641-0.099c-1.924,0-3.054,1.016-3.054,3.334v1.398H4.824v2.104h1.979v5.781C7.196,15.961,7.592,16,8,16	c0.368,0,0.729-0.033,1.082-0.082V10.12z"></path>
                                    </svg>
                                    <span className="inline">@asdasd</span>
                                </p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80" className="size-5 inline mr-2" stroke="#64748b">
                                        <path fill="#64748b" d="M 26.816406 9 C 17.542969 9 10 16.542969 10 25.816406 L 10 52.183594 C 10 61.457031 17.542969 69 26.816406 69 L 53.183594 69 C 62.457031 69 70 61.457031 70 52.183594 L 70 25.816406 C 70 16.542969 62.457031 9 53.183594 9 Z M 26.816406 11 L 53.183594 11 C 61.375 11 68 17.625 68 25.816406 L 68 52.183594 C 68 60.375 61.375 67 53.183594 67 L 26.816406 67 C 18.625 67 12 60.375 12 52.183594 L 12 25.816406 C 12 17.625 18.625 11 26.816406 11 Z M 58 19.5 C 56.621094 19.5 55.5 20.621094 55.5 22 C 55.5 23.378906 56.621094 24.5 58 24.5 C 59.378906 24.5 60.5 23.378906 60.5 22 C 60.5 20.621094 59.378906 19.5 58 19.5 Z M 40 22 C 30.621094 22 23 29.621094 23 39 C 23 48.378906 30.621094 56 40 56 C 49.378906 56 57 48.378906 57 39 C 57 29.621094 49.378906 22 40 22 Z M 40 24 C 48.296875 24 55 30.703125 55 39 C 55 47.296875 48.296875 54 40 54 C 31.703125 54 25 47.296875 25 39 C 25 30.703125 31.703125 24 40 24 Z M 40 27 C 39.449219 27 39 27.449219 39 28 C 39 28.550781 39.449219 29 40 29 C 40.550781 29 41 28.550781 41 28 C 41 27.449219 40.550781 27 40 27 Z M 35.796875 27.835938 C 35.664063 27.835938 35.53125 27.859375 35.40625 27.910156 C 34.898438 28.125 34.65625 28.707031 34.867188 29.21875 C 35.078125 29.730469 35.664063 29.972656 36.171875 29.761719 C 36.683594 29.546875 36.925781 28.964844 36.714844 28.453125 C 36.5625 28.082031 36.199219 27.839844 35.796875 27.835938 Z M 44.230469 27.835938 C 43.816406 27.828125 43.441406 28.070313 43.285156 28.453125 C 43.074219 28.964844 43.316406 29.546875 43.828125 29.761719 C 44.335938 29.972656 44.921875 29.730469 45.132813 29.21875 C 45.34375 28.707031 45.101563 28.125 44.59375 27.910156 C 44.476563 27.863281 44.355469 27.839844 44.230469 27.835938 Z M 32.234375 30.222656 C 31.964844 30.21875 31.707031 30.324219 31.515625 30.515625 C 31.125 30.90625 31.125 31.539063 31.515625 31.929688 C 31.90625 32.320313 32.539063 32.320313 32.929688 31.929688 C 33.320313 31.539063 33.320313 30.90625 32.929688 30.515625 C 32.746094 30.332031 32.496094 30.226563 32.234375 30.222656 Z M 47.792969 30.222656 C 47.519531 30.21875 47.261719 30.324219 47.070313 30.515625 C 46.679688 30.90625 46.679688 31.539063 47.070313 31.929688 C 47.460938 32.320313 48.09375 32.320313 48.484375 31.929688 C 48.875 31.539063 48.875 30.90625 48.484375 30.515625 C 48.300781 30.332031 48.050781 30.226563 47.792969 30.222656 Z M 50.171875 33.789063 C 50.035156 33.789063 49.902344 33.8125 49.78125 33.863281 C 49.269531 34.078125 49.027344 34.660156 49.238281 35.171875 C 49.449219 35.683594 50.035156 35.925781 50.546875 35.714844 C 51.054688 35.5 51.296875 34.917969 51.085938 34.40625 C 50.933594 34.035156 50.570313 33.792969 50.171875 33.789063 Z M 29.859375 33.792969 C 29.445313 33.78125 29.070313 34.027344 28.914063 34.40625 C 28.703125 34.917969 28.945313 35.503906 29.453125 35.714844 C 29.699219 35.816406 29.976563 35.816406 30.222656 35.714844 C 30.464844 35.613281 30.660156 35.417969 30.761719 35.171875 C 30.863281 34.925781 30.863281 34.652344 30.761719 34.40625 C 30.660156 34.160156 30.464844 33.964844 30.21875 33.863281 C 30.105469 33.820313 29.984375 33.792969 29.859375 33.792969 Z M 29 38 C 28.449219 38 28 38.449219 28 39 C 28 39.550781 28.449219 40 29 40 C 29.550781 40 30 39.550781 30 39 C 30 38.449219 29.550781 38 29 38 Z M 51 38 C 50.449219 38 50 38.449219 50 39 C 50 39.550781 50.449219 40 51 40 C 51.550781 40 52 39.550781 52 39 C 52 38.449219 51.550781 38 51 38 Z M 29.84375 42.207031 C 29.710938 42.207031 29.578125 42.234375 29.453125 42.285156 C 28.945313 42.496094 28.703125 43.082031 28.914063 43.59375 C 29.125 44.101563 29.710938 44.34375 30.21875 44.132813 C 30.730469 43.921875 30.972656 43.335938 30.761719 42.828125 C 30.609375 42.457031 30.246094 42.210938 29.84375 42.207031 Z M 50.1875 42.207031 C 49.773438 42.199219 49.398438 42.445313 49.238281 42.824219 C 49.027344 43.335938 49.269531 43.917969 49.78125 44.128906 C 50.292969 44.34375 50.875 44.101563 51.089844 43.589844 C 51.300781 43.078125 51.058594 42.496094 50.546875 42.28125 C 50.433594 42.234375 50.308594 42.210938 50.1875 42.207031 Z M 32.234375 45.777344 C 31.964844 45.773438 31.703125 45.878906 31.515625 46.070313 C 31.125 46.460938 31.125 47.09375 31.515625 47.484375 C 31.902344 47.875 32.539063 47.875 32.925781 47.484375 C 33.316406 47.09375 33.316406 46.460938 32.925781 46.070313 C 32.742188 45.886719 32.496094 45.78125 32.234375 45.777344 Z M 47.792969 45.78125 C 47.519531 45.773438 47.261719 45.878906 47.070313 46.070313 C 46.882813 46.257813 46.777344 46.511719 46.777344 46.777344 C 46.777344 47.042969 46.882813 47.296875 47.070313 47.484375 C 47.460938 47.875 48.09375 47.875 48.484375 47.484375 C 48.671875 47.296875 48.777344 47.042969 48.777344 46.777344 C 48.777344 46.511719 48.671875 46.257813 48.484375 46.070313 C 48.300781 45.886719 48.050781 45.78125 47.792969 45.78125 Z M 35.8125 48.160156 C 35.398438 48.152344 35.023438 48.398438 34.867188 48.78125 C 34.65625 49.289063 34.898438 49.875 35.40625 50.085938 C 35.917969 50.296875 36.503906 50.054688 36.714844 49.546875 C 36.925781 49.035156 36.683594 48.449219 36.171875 48.238281 C 36.058594 48.191406 35.9375 48.164063 35.8125 48.160156 Z M 44.21875 48.160156 C 44.085938 48.160156 43.953125 48.1875 43.828125 48.238281 C 43.316406 48.449219 43.074219 49.035156 43.285156 49.546875 C 43.5 50.054688 44.082031 50.296875 44.59375 50.085938 C 45.105469 49.875 45.347656 49.289063 45.136719 48.78125 C 44.980469 48.410156 44.621094 48.164063 44.21875 48.160156 Z M 40 49 C 39.449219 49 39 49.449219 39 50 C 39 50.550781 39.449219 51 40 51 C 40.550781 51 41 50.550781 41 50 C 41 49.449219 40.550781 49 40 49 Z"></path>
                                    </svg>
                                    <span className="inline">@asdasd</span>
                                </p>
                            </div>
                        </div>
            </div>
            <hr className="text-slate-800"/>
            <p className="text-center text-sm p-2 text-slate-500 ">Copyright @2004 Anonymous. Inc</p>
        </div>
        
    )
}