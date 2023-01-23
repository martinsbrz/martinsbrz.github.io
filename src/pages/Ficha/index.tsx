import Cabecalho from "./Cabecalho/index";
import Consideracoes from "./Consideracoes/index";
import Exercicio from "./Exercicio/Exercicio";
import Mesociclo from "./Mesociclo/index";
import styles from './Ficha.module.scss';

export default function Ficha() {
    return (
        <div className={styles.index}>
            <div className={styles.esquerda}>
                <Exercicio />
            </div>
            <div className={styles.direita}>
                <Cabecalho />
                <Consideracoes />
                <Mesociclo />
            </div>

        </div>
    )
}