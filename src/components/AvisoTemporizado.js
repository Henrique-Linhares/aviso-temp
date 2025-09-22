import React, {useState, useEffect} from 'react'

function AvisoTemporizado() {
    const [visibilidade, setVisibilidade] = useState(true);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setVisibilidade(false);
        }, 3000)

        return(() => {
            clearTimeout(temporizador)
        });
    }, []);

    const exibeMensagem = () => {
        if(visibilidade === true) {
            return <h1>Bem-Vindo</h1>
        } else {
            return null
        }
    }

    return(
        <div>
            {exibeMensagem()}
        </div>
    )
}

export default AvisoTemporizado;