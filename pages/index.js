import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/Carlos.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Carlos Gonzales Molina</title>
        <meta name="description" content="Portafolio de Carlos Gonzales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Full-Stack</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Biografia
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Carlos Jesus Gonzales Molina
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Egresado de Ingenieria de Sistemas
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Desarrollador de software con conocimientos en el área de tecnologías emergentes como ciencia de datos, inteligencia artificial, big data, etc.
              </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.facebook.com/cjgonzalesm/"
                target="_blank"
              >
                <AiFillFacebook/>
              </a>
              <a 
                href="https://www.linkedin.com/in/cgonzalesmolina/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@cgonzalesmolina"
                target="_blank"
              >
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            
            <h3 className="text-3xl py-1 dark:text-white ">Biografia</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Tengo 23 años vivo en la ciudad de Arequipa(Perú), estudie Ingenieria de Sistemas en la <a href="https://fips.unsa.edu.pe/ingenieriadesistemas/" className="text-red-300" target="_blank">Universidad Nacional de San Agustin</a>, mis hoobies son el futbol, la natacion e investigar las nuevas tecnologias que se van incorporando al mundo moderno.
            </p>
            
            
          </div>
          
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde que empece mi vida universitaria he desarrollado proyectos con multiples finalidades que me ayudaron a tener mayor
              <span className="text-teal-500"> experiencia</span> en el mundo de la<span className="text-teal-500"> tecnologia</span>, estos proyectos los he desarrollado de forma
              individual y también grupal, lo que me ayudo a crear habilidades de liderazgo y trabajo en equipo.

            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/csullcap/PIS-proyect"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>              
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/cgonzalesmo/doctor_app"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
              
            </div>            
          </div>
        </section>
      </main>
    </div>
  );
}
