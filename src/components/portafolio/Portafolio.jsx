import React from 'react'
import { Button } from 'react-bootstrap'
import './portafolio.scss'
export const Portafolio = () => {
  return (
    <div className='desarrollos-wrapper'>
      <h2 style={{textAlign: 'center'}}>Otros desarrollos</h2>
    <div className='desarrollos-container'>
      
    <div className='desarrollo'>
            <div>
                <h4>Landing Page para Preuniversitario</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1737729762/Tu_e-commerce_en_linea_a_solo_un_click_lbeb96.webp" alt="Landing Page de preuniversitario" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>HTML, CSS, JavaScript, Grid, Media Queries</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Landing Page para el despliegue de informacion y contacto de Preuniversitario Tecnologico. </p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://juniority.cl/' target='_blank'><div className='btn-custom'>ver sitio<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />
            <div className='desarrollo'>
            <div>
                <h4>LMS para Preuniversitario</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1737730334/Tu_e-commerce_en_linea_a_solo_un_click_kfjepf.png" alt="Learning Management System de preuniversitario" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>HTML, CSS, PHP, Moodle</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Learning Management System para Preuniversitario Tecnologico, desarrollado con Moodle. </p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://moodle.juniority.cl/' target='_blank'><div className='btn-custom'>ver sitio<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />
    <div className='desarrollo'>
            <div>
                <h4>Diagrama de flujo Interactivo</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1724946579/flow_rcjmre.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Angular (TypeScript), Konva.js</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación para la creación de diagramas de flujo mediante Drag&Drop y otras configuraciones. <span
                        ><a
                          href="https://github.com/CarloAguirre/flow-diagram"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container mt-2'>
                <Button variant="outline-secondary" className='btn' href='https://flow-diagram.netlify.app/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />
    <div className='desarrollo'>
            <div>
                <h4>Software Control de Emisiones</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1724946579/hs_gwnyfi.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Angular (TypeScript), AWS Services (S3, Amplify, Cognito, otros), ApexChart, Bootstrap</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación para la <strong>Gestion Ambiental</strong> desarrollada para proyecto CORFO HuellaSmart.</p>
            </div>
            <div className='btn-container mt-2'>
                <Button variant="outline-secondary" className='btn' href='https://hs-software.netlify.app/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

       <div className='desarrollo'>
            <div>
                <h4>BibleBot con I.A</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1714696072/ia_app_ir4jmo.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Angular (TypeScript), Node.js (Express), Bootstrap</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación que mediante <strong>Inteligencia Artificial</strong> permite realizar estudios biblicos a partir de conceptos e ideas. <span
                        ><a
                        href="https://github.com/CarloAguirre/angular-gifs-app"
                        target="_blank"
                        ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                          ver codigo (frontend)
                        </button></a
                      ><a
                          href="https://github.com/CarloAguirre/ia-server"
                          target="_blank"
                          ><button variant="outline-secondary" className='btn' type="button" class="btn btn-primary btn-sm mb-3 ms-2 button-cv">
                            ver codigo (backend)
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://apostolicos.onrender.com/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />
        
        <div className='desarrollo'>
            <div>
                <h4>CRUD + Marketplace</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1694277945/card_1_ggnfsg.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>React.js (react-router-dom), Node.js (Express), PostgreSQL, Bootstrap</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>La aplicación incluye carrito y favoritos. Además, Permite crear, borrar/modificar usuarios y productos. <span
                        ><a
                        href="https://github.com/CarloAguirre/examen-desafio_latam"
                        target="_blank"
                        ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                          ver codigo (frontend)
                        </button></a
                      ><a
                          href="https://github.com/CarloAguirre/nodePG-server"
                          target="_blank"
                          ><button variant="outline-secondary" className='btn' type="button" class="btn btn-primary btn-sm mb-3 ms-2 button-cv">
                            ver codigo (backend)
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://marketplace-dl.netlify.app/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Dashboard de Administración</h4>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1671932168/card-10_kcz04a.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>HTML, CSS, Javascript (ApexCharts)</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Dashboard de administración para control de stock, ventas, compras, etc (disponible también en React). <span
                        ><a
                          href="https://github.com/CarloAguirre/admin-dashboard"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://carloaguirre.github.io/admin-dashboard/index.html' target='_blank'><div className='btn-custom'>ver layout<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            
            <div className='desarrollo'>
            <div>
                <h4>SPA React Pizza-App (layout)</h4>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1683297482/card-6_db9xwy.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>React.js (react-router-dom), JavaScript, HTML, CSS</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Single Page Aplication realizada en React para pizzeria.
                       Manejo de estados mediante React Context. <span
                        ><a
                          href="https://github.com/CarloAguirre/SPA_useContext-useNavigate-pizzaApp"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://pizza-app-reactbuild.netlify.app/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Portafolio de porgramador</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1715361668/2_d65x33.png" alt="imagen de desarrollo" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>ReactJS, SCSS</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación web desarrollada en React que permite el despliegue de información relacionada a formación, portafolio e histoial laboral. <span
                        ><a
                          href="https://github.com/CarloAguirre/carloaguirre.onrender.com"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://carloaguirre.onrender.com/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Pagina de arriendos tipo Airbnb</h4>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1671664998/card-5_iriowi.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>HTML, CSS, Bootstrap</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p> Layout de sitio web para arriendo vacacional de
                      propiedades, desarrollado en HTML, CSSS y Bootstrap. <span
                        ><a
                          href="https://github.com/CarloAguirre/pagina-arriendos-bootstrap"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://carloaguirre.github.io/pagina-arriendos-bootstrap/' target='_blank'><div className='btn-custom'>ver sitio<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Videojuego "Buscando a Wally"</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1715637211/Tu_e-commerce_en_linea_a_solo_un_click_gptks0.webp" alt="imagen proyecto" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>HTML, CSS (KeyFrames)</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p> Sitio web construido unicamente en HTML y CSS,
                      que mediante KeyFrames permite jugar en tiempo real. <span
                        ><a
                          href="https://github.com/CarloAguirre/wally"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://carloaguirre.github.io/wally/' target='_blank'><div className='btn-custom'>ver sitio<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Layout para librería</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1719267849/bookstore_szcpz0.webp" alt="layout local de cafe" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>JavaScript, HTML, CSS</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Layout para el despliegue de sitio web de librería. <span
                        ><a
                          href="https://github.com/CarloAguirre/bookstore"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://book-storenow.netlify.app/' target='_blank'><div className='btn-custom'>ver sitio<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>TODO list Dashboard</h4>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1683298665/todo_app_ia1iyu.webp" alt="" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Vanilla JavaScript, HTML, CSS</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Pagina realizada en JavasScript.
                      Permite la creacion, modificacion y eliminacion de registros. <span
                        ><a
                          href="https://github.com/CarloAguirre/javascript_exercises_04"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://carloaguirre.github.io/javascript_exercises_04/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Feriado App</h4>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1683299458/feriado_app_qvhd0p.webp" alt="" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>React.js, Bootstrap, HTML, CSS</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación realizada en React. Permite 
                  la obtencion de feriados mediante conexión con API. <span
                        ><a
                          href="https://github.com/CarloAguirre/feriados-app"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            <div className='btn-container'>
                <Button variant="outline-secondary" className='btn' href='https://calendar-appreact.netlify.app/' target='_blank'><div className='btn-custom'>ver app<span class="material-symbols-outlined ms-2">
                 open_in_new
                  </span></div></Button></div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Clima API</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1711549471/clima_edxara.webp" alt="" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Javascript, Node.js</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación de consola que permite 
                  la obtencion de informacion meteorologica mediante conexión con API. <span
                        ><a
                          href="https://github.com/CarloAguirre/aplicacion-clima-peticiones-http"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            </div><br />
            <hr /><br />

            <div className='desarrollo'>
            <div>
                <h4>Bitacora de tareas</h4>
                <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1711549477/tareas_le2m9l.webp" alt="" />
            </div>
            <div className='portafolio-descripciones tecnologias-wrapper'>
                <h5>Tecnologias</h5>
                <p>Javascript, Node.js</p>
            </div>
            <div className='portafolio-descripciones'>
                <h5>Descripción</h5>
                <p>Aplicación de consola que permite 
                  la creacion, listado y borrado de tareas. <span
                        ><a
                          href="https://github.com/CarloAguirre/aplicacion-de-consola-bitacora-tareas"
                          target="_blank"
                          ><button type="button" class="btn btn-primary btn-sm mb-3 button-cv">
                            ver codigo
                          </button></a
                        ></span
                      ></p>
            </div>
            </div><br />
            <hr /><br />

     
    </div>
    </div>
  )
}
