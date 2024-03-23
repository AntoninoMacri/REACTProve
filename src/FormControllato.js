import React, {useState} from "react";

function FormControllato (){
    const [nome, setNome] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Un nome è stato inviato: ${nome}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                nome:
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </label>
            <input type="submit" value="invia" />
        </form>
    );
}

export default FormControllato;