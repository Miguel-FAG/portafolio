import Head from 'next/head'
import {skills,experiences,posts,projects} from '../perfil'
import Link from 'next/link'
/*import styles from '../styles/Home.module.css'*/

import Layout from "../components/layout";

const index = () => (
  <Layout>
    <Head>
      <title>Mi Portafolio</title>
    </Head>

    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <center><img src="foto-perfil.jpg" className="img-fluid" alt="" width="150px"/></center>
            </div>

            <div className="col-md-8">
              <h1> Miguel Ángel Guevara Fabián</h1>
              <h3>FullStack Developer</h3>
              <p>
                Soy una persona que me gusta aprender, considero que aprendo rápido, 
                eso lo fui adquiriendo más en la universidad ya que son varios proyectos 
                para cada materia que necesitan diferentes tipos de conocimientos para desarrollarlos. 
                También el tener retos y metas para mi son importantes siempre proponerme. 
                Mis hobbies son jugar futbol, nadar, correr en la playa, ver series, películas, 
                anime e intento de gamer con call of duty y halo. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, year, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {year}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, link, image }, index) => (
                <div className="col-md-6 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                        width="200px"
                        height="200px"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                        <a href={`/${link}`} target="_blank" rel="noopener noreferrer">Know More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>

)

export default index;
