import pujan from "../assets/Pujan.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ECTeamData from "~/app/data/ECTeamData";
import CCTeamData from "~/app/data/CCTeamData";
import WebTeamData from "~/app/data/WebTeamData";
import {faLinkedin, faSquareGithub, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";

export function ECTeamCard() {
  return (
    <>
      {ECTeamData.map((data, index: React.Key | null | undefined) => (
        <div key={index}>
          <div
            className='mx-auto w-64 bg-ieeeorange bg-opacity-10 hover:-translate-y-6 duration-500 hover:shadow-lg hover:shadow-[#75787B] border-ieeeorange rounded-xl'>
            <div className="relative overflow-hidden transition duration-500 transform rounded-lg">
              <Image src={data.imageURL} alt={data.name} width={512} height={512}
                     className="object-cover rounded-lg w-full aspect-[3/4]"/>
              <div
                className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0  hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasGitHub && <li>
                      <Link href={data.gitHubURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export function WebTeamCard() {
  return (
    <>
      {WebTeamData.map((data, index: React.Key | null | undefined) => (
        <div key={index}>
          <div
            className='mx-auto w-64 bg-ieeeorange bg-opacity-10 hover:-translate-y-6 duration-500 hover:shadow-lg hover:shadow-[#75787B] border-ieeeorange rounded-xl'>
            <div className="relative overflow-hidden transition duration-500 transform rounded-lg">
              <Image src={data.imageURL} alt={data.name} width={512} height={512}
                     className="object-cover rounded-lg w-full aspect-[3/4]"/>
              <div
                className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0  hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasGitHub && <li>
                      <Link href={data.gitHubURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export function CCTeamCard() {
  return (
    <>
      {CCTeamData.map((data, index: React.Key | null | undefined) => (
        <div key={index}>
          <div
            className='mx-auto w-64 bg-ieeeorange bg-opacity-10 hover:-translate-y-6 duration-500 hover:shadow-lg hover:shadow-[#75787B] border-ieeeorange rounded-full'>
            <div className="relative overflow-hidden transition duration-500 transform rounded-full">
              <Image src={data.imageURL} alt={data.name} width={512} height={512}
                     className="object-cover rounded-full w-full aspect-square"/>
              <div
                className="absolute inset-0 flex flex-col justify-end p-16 text-center transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0 hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasGitHub && <li>
                      <Link href={data.gitHubURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}
