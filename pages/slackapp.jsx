import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import improvall1 from "../public/assets/projects/improvall-1.png";
import "semantic-ui-css/semantic.min.css";
import pollappCover from "../public/assets/projects/pollapp-cover.png";

import pollapp1 from "../public/assets/projects/pollapp-1.png";
import pollapp2 from "../public/assets/projects/pollapp-2.png";
import pollapp3 from "../public/assets/projects/pollapp-3.png";
import pollapp4 from "../public/assets/projects/pollapp-4.png";
import pollapp5 from "../public/assets/projects/pollapp-5.png";
import pollapp6 from "../public/assets/projects/pollapp-6.png";
import pollapp7 from "../public/assets/projects/pollapp-7.png";
import pollapp8 from "../public/assets/projects/pollapp-8.png";
import pollapp10 from "../public/assets/projects/pollapp-10.png";
import pollapp11 from "../public/assets/projects/pollapp-11.png";
import pollapp12 from "../public/assets/projects/pollapp-12.png";
import pollapp13 from "../public/assets/projects/pollapp-13.png";
import { TypeAnimation } from "react-type-animation";
import { BsChevronLeft } from "react-icons/bs";
import googlePlayBadge from "../public/assets/projects/google-play-badge.png";
import appleAppStore from "../public/assets/projects/improvall-apple.png";
import github from "../public/assets/projects/github.png";

const slackapp = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="relative">
        <div className="brightness-[0.3]">
          <Image
            className="object-fill h-[100%] w-[100%] blur-sm"
            src={pollappCover}
            alt="/"
          />
        </div>
        <div
          className="absolute top-[10vh] left-[10vw] lg:top-[30%]
      lg:left-[10%] sm:top-[10vh] sm:left-[10%] md:top-[30vh] md:left-[10%]"
        >
          <TypeAnimation
            sequence={["SLACK APP", 2000]}
            className="text-[10vw] py-4 tracking-widest text-[#bb86fc] "
            cursor={true}
            repeat={0}
            speed={10}
          />
        </div>
      </div>
      <div className="max-w-[1240px] m-auto px-8">
        <h1 className="uppercase tracking-wide pt-16 text-[#bb86fc]">
          Slack Poll App
        </h1>
      </div>
      <div className="p-8 max-w-[1240px] m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 content-center">
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <p className="py-2 text-[#ffffff] leading-8">
            <b>PollApp </b>
            is an open source polling app built for FOCUS Youth Organization, a
            Canadian charity.
          </p>
          <p className="py-2 text-[#ffffff]">
            <b>Slack Polling App Features: </b>
          </p>
          <div className="pl-8">
            <ul className="list-disc list-inside pointer-events-none leading-10 text-[#ffffff]">
              <li>
                <b>Date/Time </b> polls to set meeting date and times
                respectively.
              </li>
              <li>
                <b>Anonymous </b> mode for both poll types.
              </li>
              <li>
                <b>Display </b> current poll results to yourself or everyone.
              </li>
              <li>
                <b>Save </b> the results of any poll to be viewed in the future.
              </li>
              <li>
                <b>Delete </b> the saved history of all polls whenever.
              </li>
              <li>
                <b>View </b> all saved past polls including voter info as well
                as the top voted option.
              </li>
            </ul>
          </div>
          <p className="pb-2 pt-6 text-[#ffffff] leading-8">
            <b>PollApp </b>
            is installed on FOCUS Youth Organization&apos;s main Slack
            workplace. All backend of POST requests are processued using the
            BOlt SDK with Java, including the use of Java 19 features.
            Develpment was done using Maven in the Apache Netbeans IDE. All poll
            data is saved using Amazon S3.
          </p>
          <div>
            <p className="text-[#ffffff] leading-8 text-center">
              View on GitHub:
            </p>
            <div className="m-auto lg:w-[15vw] md:w-[30vw] sm:w-[30vw]">
              <div className="bg-[#bb86fc] rounded-xl p-4 hover:scale-105">
                <Link
                  href="https://github.com/daniel-wang-design/PollApp"
                  target={"_blank"}
                >
                  <Image className="object-fill" src={github} alt="/" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 w-[80vw] lg:w-[25vw] md:w-[30vw] sm:w-[30vw]">
          <Image
            className="rounded-xl object-scale-down hover:scale-105"
            src={pollapp13}
            alt="/"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1240px] w-full h-auto pt-2 m-auto">
        <h3 className="uppercase tracking-wide text-[#ffffff]">
          Programming Languages and Technologies
        </h3>
        <div className="grid md:lg:flex grid-rows-4 gap-6">
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Java</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Bolt SDK</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Amazon S3</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Apache Maven</h2>
            </div>
        </div>
      </div>
      <div className="p-8 max-w-[1240px] w-full h-auto pt-2 m-auto">
        <h1 className="text-[#bb86fc] tracking-wide">APP COMMANDS</h1>
        <div className="gap-3 pt-10 grid">
          <p className="text-[#ffffff] leading-8 text-center">
            <b>
              <i>/help </i>
            </b>
            (displays list of commands):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp2}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/examples </i>
            </b>
            (displays example commands):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp3}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/date-poll </i>
            </b>
            (launches a poll for the meeting date):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp4}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/save </i>
            </b>
            (saves the results of a current poll):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp7}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/time-poll </i>
            </b>
            (launches a poll for a meeting time):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp8}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/view </i>
            </b>
            (displays results of saved polls):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp10}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>/anon-time </i>
            </b>
            or
            <b>
              <i> /anon-date </i>
            </b>
            (launches an anonymous version of date and time polls):
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp11}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center">
            <b>
              <i>/view </i>
            </b>
            for an anonymous poll:
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp12}
            alt="/"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1240px] w-full h-auto pt-10 m-auto">
        <h1 className="text-[#bb86fc] tracking-wide">POLLING APP SNAPSHOTS</h1>
        <div className="gap-3 pt-10 grid">
          <p className="text-[#ffffff] leading-8 text-center">
            Slack App About Section:
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp1}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            Selecting a poll option:
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp5}
            alt="/"
          />
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            De-selecting a previously selected option :
          </p>
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-[1.01]"
            src={pollapp6}
            alt="/"
          />
        </div>
      </div>
      <div className="w-full pb-8 pt-16">
        <div className="max-w-[1240px] m-auto  w-full ">
          <div className="flex justify-center ">
            <Link href="/">
              <div className="bg-[#bb86fc] p-4 duration-300 ease-in rounded-full cursor-pointer hover:scale-110">
                <BsChevronLeft className="text-[#000000]" size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slackapp;
