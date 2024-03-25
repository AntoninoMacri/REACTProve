import React, {useEffect, useState} from "react";

function Contatore (){
    const [contatore, setContatore] = useState(0);

    useEffect (
        ()=>{ console.log(`Il contatore è stato aggiornato a ${contatore}`);},
        [contatore]
    );

    return (
        <div>
            <p>contatore positivo/negativo: {contatore}</p>
            <button onClick={()=>setContatore(contatore +1)}>Incrementa</button>
            <button onClick={()=>setContatore(contatore -1)}>Decrementa</button>
            <button onClick={()=>setContatore(0)}>Reset</button>
        </div>
    );
}

export default Contatore;