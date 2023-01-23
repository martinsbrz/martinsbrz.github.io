import cabecalho from './Cabecalho.json';
import style from './Cabecalho.module.scss';

export default function Cabecalho(){
    return(
        <table className={style.table} id="cabecalho">
            <th colSpan={2}>DADOS</th>
            <tr>
                <td>Peso: {cabecalho.Peso}</td>
                <td>Altura: {cabecalho.Altura}</td>
            </tr>
            <tr>
                <td>Nome: {cabecalho.Nome}</td>
            </tr>
            <tr>
                <td>Mesociclo: {cabecalho.Mesociclo}</td>
            </tr>
            <tr>
                <td>Divisão: {cabecalho.Divisão}</td>
            </tr>
        </table>
    )
}