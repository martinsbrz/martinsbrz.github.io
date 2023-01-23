import mesociclos from './Mesociclo.json';
import style from './Mesociclo.module.scss';


export default function Mesociclo() {
    return (
        <table className={style.table}>
            <th colSpan={4}>MESOCICLO</th>
            <tr>
                <td></td>
                <td>SÉRIES X REPETIÇÕES</td>
                <td>DIVISÃO DA SÉRIE</td>
                <td>FASE</td>
            </tr>
            {mesociclos.map((mesociclo) => (
                <tr key={mesociclo.semana}>
                    <td>SEMANA {mesociclo.semana}</td>
                    <td>{mesociclo.series} x {mesociclo.repeticoes}</td>
                    <td>{mesociclo.divisao}</td>
                    <td>{mesociclo.fase}</td>
                </tr>
            ))}
        </table>
    )
}