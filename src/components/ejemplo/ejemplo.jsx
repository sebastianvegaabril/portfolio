import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function redirectLinkedin(){
    window.open('https://www.linkedin.com/in/sebasti%C3%A1n-vega-88410223b/','_blank')
}

function redirectGithub(){
    window.open('https://github.com/sebastianvegaabril','_blank')
}

const Ejemplo = () => {
    return (
        <>
            <div className="container">
                <section className="one">
                    <div className="presentacion">
                        <div>
                            <h1>
                                Hola, soy Sebastian Vega
                            </h1>
                        </div>

                        <div>
                            <p>
                                Soy un programador Freelance, actualmente estoy cursando Ingenieria en Sistemas en la Universidad ORT Uruguay
                            </p>
                        </div>

                        <div className='links'>
                            <img src={linkedin} onClick={redirectLinkedin}></img>
                            <img src={github} onClick={redirectGithub}></img>
                        </div>

                    </div>
                </section>

                <section className="two">
                    <div className='proyectos'>
                        <h1>PROYECTO LANDING ESTETICA A.ABRIL</h1>

                        <div className='proyectosContenedor'>
                            <div className='proyectoPeluqueia'>
                            <div data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&sS'></img>
                            <AwesomeSlider animation="cubeAnimation" transitionDelay={0}>
                                <div data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                                <div data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                                <div data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                            </AwesomeSlider>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                <div className="container2">
                    <div className='contacto'>
                        <h1>
                            CONTACTO
                        </h1>
                        <form action='https://formsubmit.co/sebastianvegabril@gmail.com' method='POST'>
                            
                            <input type='text' name='name' placeholder='Tu Nombre' required></input>
                           
                            <input type='email' name='email' placeholder='ejemplo@gmail.com' required></input>
                            <textarea name="mensaje" rows="4" cols="50" id='inputMensaje' placeholder='Hola, te contacto para ...' required></textarea>
                            <button type='submit' className='boton'>ENVIAR</button>
                        </form>
                    </div>
                    <div className="blob"></div>
                </div>
                </section>

                <section>
                <div>
                <AwesomeSlider animation="cubeAnimation">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mLErx6V1mw65MY03HpcLLkRvtvX-4Nbs06_-4UC-oQ&s" />
                </AwesomeSlider>
                                
                </div>
                </section>
            </div>
        </>
    ) 
}

export default Ejemplo;