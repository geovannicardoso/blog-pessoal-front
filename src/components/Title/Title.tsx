import React from "react";
import './Title.css';

interface Ititle {
    nome: string
}
function Title( props: Ititle) {
    return (
        <h1>Hello Word!</h1>
    );
}

export { Title }