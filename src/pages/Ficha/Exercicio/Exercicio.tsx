import exercicios from './Exercicios.json';
import styles from './Exercicio.module.scss';

type IExercicio = typeof exercicios[0];


interface Props {
    categoria: number,
    grupo: string,
    nome: string,
    serie1: number,
    serie2: number,
    serie3: number,
    serie4: number,
    serie5: number,
    descanso: string,
    link: string
}

function OrganizaGrupo(grupo: string) {

    return (
        exercicios
            .filter(e => e.grupo == grupo)
            .sort((a) => a.grupo == grupo ? 1 : -1)
            .map((e) => (
                <tr>
                    <td>
                        <a href={e.link} target='_blank'>{e.nome.toUpperCase()}</a>
                    </td>
                    <td>
                        {e.serie1}
                    </td>
                    <td>
                        {e.serie2}
                    </td>
                    <td>
                        {e.serie3}
                    </td>
                    <td>
                        {e.serie4}
                    </td>
                    <td>
                        {e.serie5}
                    </td>
                    <td>
                        {e.descanso}
                    </td>
                </tr>
            ))

    )

}

function OrganizaCategoria(categoria: number) {

    var grupos = [...new Set(exercicios.filter(e => e.categoria == categoria).map(e => e.grupo))]

    return (

        <table className={styles.tabela}>
            <th colSpan={7}>{categoria}</th>
            <tr>
                <td></td>
                <td>WARM UP</td>
                <td colSpan={2}>WORKING SET</td>
                <td colSpan={2}>TOP SET</td>
            </tr>
            <tr>
                <th>Exercicios</th>
                <th>Serie 1</th>
                <th>Serie 2</th>
                <th>Serie 3</th>
                <th>Serie 4</th>
                <th>Serie 5</th>
                <th>Descanso</th>
            </tr>

            {
                grupos.map(
                    (x) => (
                        <>
                            <tr className={styles.grupoMuscular}>
                                <td colSpan={7}>
                                    {x.toUpperCase()}
                                </td>
                            </tr>
                            {OrganizaGrupo(x)}
                        </>
                    )
                )
            }

        </table>
    )
}

function GetGrupo(grupo: string) {
    return (
        <tr>
            {grupo}
        </tr>
    )
}


export default function Exercicio() {

    var categorias = [...new Set(exercicios.map(e => e.categoria))]        

    return (
        <div>
            {categorias
            .sort((a,b) => (a > b ? 1 : -1))
            .map((e) => (
                OrganizaCategoria(e)
            ))}
        </div>
    )
}