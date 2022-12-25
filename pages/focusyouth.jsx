import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import focus1 from "../public/assets/projects/focusyouth-1.png";
import focus2 from "../public/assets/projects/focusyouth-2.png";
import focus3 from "../public/assets/projects/focusyouth-3.png";
import focus4 from "../public/assets/projects/focusyouth-4.png";
import focus5 from "../public/assets/projects/focusyouth-5.png";
import focus6 from "../public/assets/projects/focusyouth-6.png";
import focus7 from "../public/assets/projects/focusyouth-7.png";
import "semantic-ui-css/semantic.min.css";
import focusCover from "../public/assets/projects/focusyouth-cover.png";

import { TypeAnimation } from "react-type-animation";
import { BsChevronLeft } from "react-icons/bs";

import github from "../public/assets/projects/github.png";

const focusyouth = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="relative">
        <div className="brightness-[0.3]">
          <Image
            className="object-fill h-[100%] w-[100%] blur-sm"
            src={focusCover}
            alt="/"
          />
        </div>
        <div
          className="absolute top-[10vh] left-[10vw] lg:top-[30%]
      lg:left-[10%] sm:top-[10vh] sm:left-[10%] md:top-[30vh] md:left-[10%]"
        >
          <TypeAnimation
            sequence={["USER PORTAL", 2000]}
            className="text-[10vw] py-4 tracking-widest text-[#bb86fc] "
            cursor={true}
            repeat={0}
            speed={10}
          />
        </div>
      </div>

      <div className="p-8 px-4 max-w-[1240px] m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <h1 className="uppercase tracking-wide pt-16 text-[#bb86fc]">
            FOCUS Youth Organization&apos;s User Portal
          </h1>
          <p className="py-2 text-[#ffffff] leading-8">
            This is a user portal created for FOCUS Youth Organization, a
            Canadian charity that I founded back in grade 9. The portal is used
            to validate FOCUS Youth active members and allow executives,
            volunteers, and tutors, to log their volunteer hours. The user
            portal is a full-stack <b>(MERN) </b>app; using Vercel to host the
            React client, and Heroku for the NodeJS server.
          </p>
          <p className="py-2 text-[#ffffff]">
            <b>Full-Stack (MERN) App Features: </b>
          </p>
          <div className="pl-8">
            <ul className="list-disc list-inside pointer-events-none leading-10 text-[#ffffff]">
              <li>
                <b>Login </b> to your unique account to view, log, and update
                your volunteer hours.
              </li>
              <li>
                <b>Authencated </b> user id allows only admins to view protected
                pages.
              </li>
              <li>
                <b>Automatic </b> sign-out after 1 hour using JSONWebTokens for
                security.
              </li>
              <li>
                <b>Admin </b> role allows users to edit/add/delete users.
              </li>
              <li>
                <b>Approve </b> volunteer hours of other volunteers.
              </li>
              <li>
                <b>Sign-out </b> to switch users or end current session.
              </li>
              <li>
                <b>Sign-up </b> page for any new volunteer to join the user
                portal.
              </li>
            </ul>
          </div>
          <p className="pb-2 pt-6 text-[#ffffff] leading-8">
            <b>About the user portal: </b>
            The user portal uses MongoDB atlas to store user information. One
            collection stores user data (email, name, password, role, etc.)
            while another collection stores all the volunteer hour date
            (description, duration, approvel, etc.)
          </p>
          <p className="pb-2 pt-6 text-[#ffffff] leading-8">
            The backend NodeJS server is hosted on Heroku, and the frontend
            React app is hosted on Vercel and can be accessed at{" "}
            <a
              href="https://portal.focusyouth.ca"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#bb86fc]"
            >
              portal.focusyouth.ca
            </a>
            &nbsp;Express is used as the routing and middleware for GET and POST
            methods from the React client to the NodeJS server.
          </p>
          <p className="pb-2 pt-6 text-[#ffffff] leading-8">
            User authentication is handled using JSONWebTokens sent from the
            server-side to the client-side webpage.
          </p>
          <br />
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-[#ffffff] leading-8">View on GitHub:</p>
              <div className="m-auto lg:w-[15vw] md:w-[30vw] sm:w-[30vw]">
                <div className="bg-[#bb86fc] rounded-xl p-4 hover:scale-105">
                  <Link
                    href="https://github.com/daniel-wang-design/user-portal"
                    target={"_blank"}
                  >
                    <Image className="object-fill" src={github} alt="/" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:pt-0 lg:pt-0 pt-8">
              <p className="text-[#ffffff] leading-8">View live site:</p>
              <div className=" m-auto">
                <div className="m-auto hover:scale-105">
                  <Link href="HTTPS://PORTAL.FOCUSYOUTH.CA" target={"_blank"}>
                    <div className="bg-[#bb86fc] rounded-xl p-4">
                      <p className="text-black font-bold text-center text-3xl">
                        PORTAL.FOCUSYOUTH.CA
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 w-[80vw] lg:w-[25vw] md:w-[30vw] sm:w-[30vw]">
          <Image
            className="rounded-xl object-scale-down"
            src={focus1}
            alt="/"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1240px] grid gap-6 w-full h-auto pt-2 m-auto">
        <div>
          <h3 className="uppercase tracking-wide text-[#ffffff]">
            Programming Languages and Technologies
          </h3>
          <div className="grid md:lg:flex grid-rows-7 gap-6">
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">MongoDB</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Express</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">React</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">NodeJS</h2>
            </div>{" "}
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">JavaScript</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">HTML</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">CSS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 max-w-[1240px] w-full h-auto pt-2 m-auto">
        <h1 className="text-[#bb86fc] tracking-wide">APP SHOWCASE</h1>
        <div className="gap-3 pt-10 grid">
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>Sign-Up Page </i>
            </b>
            (for new users):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus7}
              alt="/"
            />
          </div>

          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>Log-In Page </i>
            </b>
            (for existing users):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus6}
              alt="/"
            />
          </div>
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>User List </i>
            </b>
            (list of all FOCUS Youth members or volunteers):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus2}
              alt="/"
            />
          </div>
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>View Volunteer Hours </i>
            </b>
            (view, edit, and add new volunteer hours):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus3}
              alt="/"
            />
          </div>
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>Create a New User </i>
            </b>
            (for portal admins only):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus4}
              alt="/"
            />
          </div>
          <p className="text-[#ffffff] leading-8 text-center pt-16">
            <b>
              <i>Update a User </i>
            </b>
            (for portal admins only):
          </p>
          <div className="bg-[#bb86fc] p-[1px] hover:scale-105 rounded-xl">
            <Image
              className="rounded-xl object-fill w-[100vw]"
              src={focus5}
              alt="/"
            />
          </div>
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

export default focusyouth;
