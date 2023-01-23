import consideracoes from './Consideracoes.json';
import style from './Consideracoes.module.scss';

export default function Consideracoes() {
    return (
        <div>
            <table className={style.table}>
                <th colSpan={2}>CONSIDERAÇÕES</th>
                {consideracoes.map((consideracao) => (
                    <tr key ={consideracao.nome}>
                        <td>{consideracao.nome}</td>
                        <td>{consideracao.descricao}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}