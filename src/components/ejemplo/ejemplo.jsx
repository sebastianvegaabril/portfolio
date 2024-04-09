import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


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
                            <img src={linkedin}></img>
                            <img src={github}></img>
                        </div>

                    </div>
                </section>

                <section className="two">
                    <div className='proyectos'>
                        <h1>PROYECTOS</h1>

                        <div className='proyectosContenedor'>
                            
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
            </div>
        </>
    ) 
}

export default Ejemplo;