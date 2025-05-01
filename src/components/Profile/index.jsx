import "./style.css"
export default function ({nome, idade, profissao, foto}){
    return(
        <>
        <h1>Nome: {nome}</h1>
        <h2>Idade: {idade}</h2>
        <h2>profissao: {profissao}</h2>
        <h2>foto: </h2><img src={foto} />
        <hr />
        </>
    )
}
