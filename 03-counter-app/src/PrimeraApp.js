
import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo, subtitulo }) => {

    // const saludo = {
    //     nombre: 'German',
    //     edad: 32,
    // };




    return (
        <>
            <h1>Hola Mundo</h1>
            <h4>Mi primera App</h4>
            <h5>{saludo}</h5>
            <p>{subtitulo}</p>
            {/* <pre>{JSON.stringify(saludo)}</pre> */}
        </>
    );

};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;

