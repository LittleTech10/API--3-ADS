import styles from "./Usuario.module.css"
import "rbx/index.css"
import {Title, Content, Column} from 'rbx'; 
import { ColumnGroup } from "rbx/grid/columns/column-group";

export default function InfoUsuario({users}) {
  return (
    <div className={styles.box}>
      <Title size={5}><strong>Informações do usuário</strong></Title>
      {/* <Content> */}
      {users && users.map && users.map((item, i) => (
        // <Column.Group>
          // <Column size={5}>
            <tr key={i} className={styles.letra}>
              <strong>Nome: {item.usuario_nome}</strong>
              <strong>Email: {item.usuario_email}</strong>
              <strong>Usuário: {item.nome_usuario}</strong>
              <strong>Tipo: {item.usuario_tipo}</strong>
              <strong>Criado em: {item.to_char}</strong>
            </tr>
          // {/* </Column> */}
        // </Column.Group>
      ))} 
      {/* </Content> */}
    </div>
  )
}