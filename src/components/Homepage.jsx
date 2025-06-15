import Image from "next/image";
import Technologies from '@/components/Technologies'
export default function Home() {

    return (
        <>
            <main className="h-auto">
                <div className="xxs:px-5 sm:px-10 lg:px-24 2xl:px-40">
                    <div className="bg-hero-grid h-auto mt-5">
                        <div className="xxs:text-center flex flex-col justify-center">
                            <div className="border border-[#55555580] xxs:py-16 sm:py-20 md:py-32 text-center">
                                <h1 className="xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold lg:leading-tight xl:leading-tight text-[#222222]">
                                    Bringing Visions to <br /> Digital Life.
                                </h1>
                                <p className="text-xl mt-7 text-[#222222]">
                                    Driving Growth Through Tailored Digital Solutions.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 h-24 border border-[#55555580]">
                                <div className="p-4 border-r border-[#55555580]">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        className="ms-auto xxs:text-base md:text-2xl text-[#A5A4A3]"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                        />
                                    </svg>
                                    <p className="xxs:text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                                        Expertise
                                    </p>
                                </div>
                                <div className="p-4 border-r border-[#55555580]">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        className="ms-auto xxs:text-base md:text-2xl text-[#A5A4A3]"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                        />
                                    </svg>
                                    <p className="xxs:text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                                        Innovation
                                    </p>
                                </div>
                                <div className="p-4 ">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        className="ms-auto xxs:text-base md:text-2xl text-[#A5A4A3]"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                        />
                                    </svg>
                                    <p className="xxs:text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                                        Solutions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxs:py-10 sm:py-20 md:py-24">
                        <div className="xxs:mt-0 mt-12 mx-auto border border-black-border pt-16">
                            <p className="text-md font-semibold text-center text-capilatize text-gray-600 opacity-80 mb-1">
                                who we are
                            </p>
                            <h4 className="text-3xl font-bold tracking-wide text-center">
                                KRIYONA INFOTECH
                            </h4>
                            <p className="text-[#666666] text-center my-8 xxs:w-full sm:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto">
                                "Kriyona Infotech creates impactful designs and robust solutions
                                for web and mobile apps. We blend our expertise in technology
                                and design to deliver innovative digital solutions that drive
                                your business forward."
                            </p>
                            <div className="grid grid-cols-3 border-t border-black-border">
                                <div className="xxs:text-center  border-r border-black-border p-5">
                                    <h2 className="text-center font-semibold text-xl text-primary-black">
                                        100%
                                    </h2>
                                    <p className="text-[10px] font-medium text-[#7F7F7F] text-center">
                                        CLIENT SATISFACTION
                                    </p>
                                </div>
                                <div className="xxs:text-center border-r border-black-border p-5">
                                    <h2 className="text-center font-semibold text-xl text-primary-black">
                                        98%
                                    </h2>
                                    <p className="text-[10px] font-medium text-[#7F7F7F] text-center">
                                        SUCCESS RATING
                                    </p>
                                </div>
                                <div className="xxs:text-center p-5">
                                    <h2 className="text-center font-semibold text-xl text-primary-black">
                                        15+
                                    </h2>
                                    <p className="text-[10px] font-medium text-[#7F7F7F] text-center">
                                        PROJECT COMPLETE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-pink">
            <div className="xxs:py-10 sm:py-5">
              <div className="text-center border border-black-border">
                <h1 className="xxs:text-4xl sm:text-5xl xl:text-6xl font-bold text-primary-black py-16">Our partners include</h1>
                <div className="grid grid-cols-1">
                  <div className="xl:hidden grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/vercel.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/tinybird.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/clerk.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/hashnode.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/perplexity.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/cal.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/attio.svg" /></div>
                    <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/mux.svg" /></div>
                  </div>
                  <div className="hidden xl:inline-grid">
                    <div className="grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/vercel.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/tinybird.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/clerk.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/hashnode.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/perplexity.svg" /></div>
                    </div>
                    <div className="grid lg:grid-cols-3">
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/cal.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/attio.svg" /></div>
                      <div className="border border-black-border py-5"><img alt="img" loading="lazy" width={150} height={150} decoding="async" data-nimg={1} className="mx-auto" style={{ color: 'transparent' }} src="/mux.svg" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

                    {/* digital partners section */}
                    {/* <div className="bg-pink">
            <div className="xxs:py-10 sm:py-5">
              <div className="text-center border border-black-border">
                <h1 className="xxs:text-4xl sm:text-5xl xl:text-5xl font-bold text-primary-black py-16">
                  Our Digital partners include
                </h1>
                <div className="grid grid-cols-1">
                  <div className="grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
                    <div className="border border-black-border py-5">
                      <a target="_blank">
                        <img
                          alt="Vercel"
                          loading="lazy"
                          width={70}
                          height={50}
                          decoding="async"
                          className="mx-auto object-cover"
                          src="/ess-121-CISEWOlG.png"
                        />
                      </a>
                    </div>
                    <div className="border border-black-border py-5">
                      <a target="_blank">
                        <img
                          alt="Tinybird"
                          loading="lazy"
                          width={110}
                          height="auto"
                          decoding="async"
                          className="mx-auto"
                          src="/Zippyzestpng.png"
                        />
                      </a>
                    </div>
                    <div className="border border-black-border py-5">
                      <a target="_blank">
                        <img
                          alt="Clerk"
                          loading="lazy"
                          width={180}
                          height="auto"
                          decoding="async"
                          className="mx-auto"
                          src="/mymovie.png"
                        />
                      </a>
                    </div>
                    <div className="border border-black-border py-5">
                      <a target="_blank">
                        <img
                          alt="Hashnode"
                          loading="lazy"
                          width={80}
                          height="auto"
                          decoding="async"
                          className="mx-auto"
                          src="/saraa-trends-bg_chr16j.png"
                        />
                      </a>
                    </div>
                    <div className="border border-black-border py-5">
                      <a target="_blank">
                        <img
                          alt="Perplexity"
                          loading="lazy"
                          width={70}
                          height="auto"
                          decoding="async"
                          className="mx-auto"
                          src="/eibmlogo.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>dfdfdf
          </div> */}

                    {/* portfolio  */}

                    <div className="bg-pink">
                        <div className="xxs:py-10 sm:py-5">
                            <div className="text-center border-r-1 border-black-border">
                                <h1 className="xxs:text-4xl sm:text-5xl xl:text-5xl font-bold text-primary-black py-16 border border-b-0 border-r-0 border-black-border">
                                    Our Valued Clients
                                </h1>

                                <div className="grid grid-cols-1">
                                    <div className="grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">
                                        {[
                                            {
                                                src: "/worldclasse.avif",
                                                alt: "World class Export",
                                            },
                                            {
                                                src: "/services/krishaexim.png",
                                                alt: "Krisha EXIM",
                                            },
                                            {
                                                src: "/oceansolar.png",
                                                alt: "Ocean Solar Energy",
                                            },
                                            {
                                                src: "/hem.png",
                                                alt: "HEM Shipping and Logistics",
                                            },
                                            {
                                                src: "/bsm.png",
                                                alt: "BSM - Bill Stock Management",
                                            },
                                            {
                                                src: "/kc.png",
                                                alt: "Kashtbhanjan Construction",
                                            },
                                            {
                                                src: "/fbm.png",
                                                alt: "FBM - Finance & Buisness Management",
                                            },

                                            {
                                                src: "/DIGIPOSTER.png",
                                                alt: "DigiPosterPro",
                                            },
                                            // {
                                            //
                                            //   src: "/eibmlogo.png",
                                            //   alt: "EIBM",
                                            //   width: 70,
                                            // },
                                            // {
                                            //
                                            //   src: "/saraa-trends-bg_chr16j.png",
                                            //   alt: "World class Export",
                                            //   width: 70,
                                            // },
                                            // {
                                            //
                                            //   src: "/mymovie.png",
                                            //   alt: "World class Export",
                                            //   width: 70,
                                            // },
                                        ].map((client, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-center align-center border border-b-0 border-r-0 border-black-border  py-5"
                                            >
                                                <Image
                                                    src={client.src}
                                                    alt={`${client.alt.trim()} logo`}
                                                    width={112} // same as w-28
                                                    height={48} // or whatever matches proportion
                                                    className="w-28 h-auto object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
                                        <div className="border border-black-border py-5 border-r-0">
                                            <a target="_blank">
                                                <img
                                                    alt="Vercel"
                                                    loading="lazy"
                                                    width={70}
                                                    height={70}
                                                    decoding="async"
                                                    className="mx-auto object-cover"
                                                    src="/ess-121-CISEWOlG.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="border border-black-border py-5 border-r-0">
                                            <a target="_blank">
                                                <img
                                                    alt="Tinybird"
                                                    loading="lazy"
                                                    width={110}
                                                    height="auto"
                                                    decoding="async"
                                                    className="mx-auto"
                                                    src="/Zippyzestpng.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="border border-black-border py-5 border-r-0">
                                            <a target="_blank">
                                                <img
                                                    alt="Clerk"
                                                    loading="lazy"
                                                    width={180}
                                                    height="auto"
                                                    decoding="async"
                                                    className="mx-auto"
                                                    src="/mymovie.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="border border-black-border py-5 border-r-0">
                                            <a target="_blank">
                                                <img
                                                    alt="Hashnode"
                                                    loading="lazy"
                                                    width={80}
                                                    height="auto"
                                                    decoding="async"
                                                    className="mx-auto"
                                                    src="/saraa-trends-bg_chr16j.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="border border-black-border py-5 border-r-0">
                                            <a target="_blank">
                                                <img
                                                    alt="Perplexity"
                                                    loading="lazy"
                                                    width={70}
                                                    height="auto"
                                                    decoding="async"
                                                    className="mx-auto"
                                                    src="/eibmlogo.png"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue">
                        <div className="mt-20 text-center border border-black-border">
                            <h1 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold text-primary-black mx-auto xxs:w-auto leading-snug pt-20">
                                We Deliver Exceptional <br />
                                Digital Solutions
                            </h1>
                            <p className="pt-10 py-20 font-medium">
                                Your trusted partner for achieving product design excellence
                                efficiently and reliably.
                            </p>
                            <div className="grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
                                <div className="border border-r-0 border-b-0 border-l-0 border-black-border pb-7">
                                    <img
                                        alt="Game Development"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/game.svg"
                                    />
                                    <p>Video Editing</p>
                                </div>
                                <div className="border border-r-0 border-b-0 border-black-border pb-7">
                                    <img
                                        alt="App Development"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/app.svg"
                                    />
                                    <p>App Development</p>
                                </div>
                                <div className="border border-r-0 border-b-0 border-black-border pb-7">
                                    <img
                                        alt="Web Development"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/web.svg"
                                    />
                                    <p>Web Development</p>
                                </div>
                                <div className="border border-r-0 border-b-0 border-l-0 border-black-border pb-7">
                                    <img
                                        alt="Animation"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/animation.svg"
                                    />
                                    <p>Animation</p>
                                </div>
                                <div className="border border-r-0 border-b-0 border-black-border pb-7">
                                    <img
                                        alt="Cloud And DevOps"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/cloud.svg"
                                    />
                                    <p>Cloud And DevOps</p>
                                </div>
                                <div className="border border-r-0 border-b-0 border-black-border pb-7">
                                    <img
                                        alt="UI/UX Design"
                                        loading="lazy"
                                        width={80}
                                        height={80}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mx-auto my-10 h-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/ui-ux.svg"
                                    />
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-pink">
            <div className="text-center xxs:mt-24 sm:mt-36 border border-black-border">
              <div className="xxs:text-4xl sm:text-5xl xl:text-6xl font-bold text-primary-black py-20">
                <h1>Technologies We Utilise</h1>
              </div>
              <div className="grid xxs:grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7">
                <p className="p-3 text-center cursor-pointer border border-black-border bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100%">Frontend</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">Backend</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">AI/ML</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">DevOps</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">UI/UX</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">Mobiles</p>
                <p className="p-3 text-center cursor-pointer border border-black-border false">Games</p>
              </div>
              <div className="grid xxs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://nextjs.org/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/nextjs.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://www.typescriptlang.org/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/typescript.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/javascript.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://react.dev"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/react.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://www.w3schools.com/html/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/html.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://www.w3schools.com/css/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/css.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://getbootstrap.com/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/bootstrap.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://angular.io/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/angular.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://sass-lang.com/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/sass.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://vuejs.org/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/vue-js.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://tailwindcss.com/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/tailwind-css.svg" /></a></div>
                <div className="border border-black-border xxs:p-5 sm:p-7"><a href="https://react-bootstrap.netlify.app/"><img alt="img" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="xxs:w-10 xxs:h-10 mx-auto" style={{ color: 'transparent' }} src="/react-bootstrap.svg" /></a></div>
              </div>
            </div>
          </div> */}
                    <Technologies />
                    <div className="xxs:mt-24 sm:mt-36 text-center border border-black-border py-20">
                        <h1 className="xxs:text-4xl sm:text-5xl font-semibold leading-tight text-[#222222]">
                            Success Stories
                        </h1>
                    </div>

                    <div className=" grid grid-cols-12">
                        {/* Row 1 - Left (30%) - 3 Vertical Boxes */}
                        <div className="col-span-12 lg:col-span-5 flex flex-col ">
                            <div className="p-7 border border-black-border">
                                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                                <p className="text-md mt-5">
                                    Kriyona Infotech played a crucial role in bringing my startup
                                    to life. Their team demonstrated exceptional professionalism,
                                    technical expertise, and a deep understanding of my business
                                    needs. From concept to execution, they delivered a seamless,
                                    high-quality platform on time, ensuring scalability and
                                    efficiency. Their ongoing support and commitment made the
                                    entire process smooth. Highly recommended!
                                </p>
                                <div className="flex items-center mt-10">
                                    <p>Rajiv M. Surati, Founder Of EES121</p>
                                </div>
                            </div>
                            <div className="p-7 border border-black-border">
                                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                                <p className="text-md mt-5 ">
                                    Exceptional Web Design Service!😊 The team was incredibly
                                    creative, professional, and responsive throughout the entire
                                    process. They delivered a visually stunning and user-friendly
                                    website that perfectly aligned with our brand. Their expertise
                                    in modern design trends and attention to detail have
                                    significantly enhanced our online presence. Highly recommend
                                    them to anyone seeking outstanding web design solutions!
                                </p>
                                <div className="flex items-center mt-10">
                                    <p>Nayan Bhisara, CEO Of Kriyona Studio</p>
                                </div>
                            </div>
                            {/* <div className="p-7 border border-black-border">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-sm mt-5">Excellent work!</p>
                <div className="flex items-center mt-10">
                  <p>Saurabh Baranwal</p>
                </div>
              </div> */}
                        </div>

                        {/* Row 1 - Right (60%) - One Large Box */}
                        <div className="col-span-12 lg:col-span-7 p-7 border border-black-border flex flex-col justify-center">
                            <div className="flex flex-col justify-between">
                                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                                <p className="xxs:text-sm md:text-lg lg:text-2xl leading-[35px] w-5/6 mx-auto">
                                    I'm really impressed with the rental app developed by Kriyona
                                    Infotech. The process of renting and returning products is
                                    very smooth, and the stock management and billing system work
                                    flawlessly. The user interface is clean and easy to navigate.
                                    Overall, I’m highly satisfied with the work and would
                                    definitely recommend their services.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center mt-10 md:mt-20  w-5/6 mx-auto">
                                    Parimal Gajera
                                </p>
                            </div>
                        </div>

                        {/* Row 2 - Three Equal Boxes */}
                        {/* <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Clean and professional website!</p>
              <div className="flex items-center mt-10">
                <p>Nilesh Sosa</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Superb service!</p>
              <div className="flex items-center mt-10">
                <p>Rajiv M. Surati</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">
                Great experience working with them!
              </p>
              <div className="flex items-center mt-10">
                <p>Akash Patel</p>
              </div>
            </div> */}

                        {/* Row 3 - Full Width Box */}
                        <div className="col-span-12 flex items-center  justify-center py-32 border border-black-border bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]">
                            <p className="text-lg md:text-4xl text-center">
                                Now that's what I call amazing!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}