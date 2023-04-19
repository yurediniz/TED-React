import React, { useState } from "react";

export default function Botao({imagem1, imagem2}) {
    const [imagem, setImagem] = useState(true);
    
    function handleClick() {
        setImagem(!imagem);
    }
    
    return (
        <div>
            <button className="botao" onClick={handleClick}>Alternar Logo</button>
            {imagem ? <img src={imagem1} alt="imagem 1" /> : <img src={imagem2} alt="imagem 2" />}
        </div>
    );
}

