import styles from "./Usuario.module.css"
import "rbx/index.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Image, Container, Content, Column, Footer} from 'rbx';
import InfoUsuario from "./InfoUsuario";
import TabelaInfoAcoes from "./TabelaInfoAcoes";
import PopupEdicao from "../Popups/PopupEdicao";

function PaginaUsuario() {
  const [users, setUsers] = useState({} as any)
  const [acoes, setAcoes] = useState({} as any)
  const [IsOpenPopup, setIsOpenPopup] = useState(false)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/read");
      setUsers(res.data)
    } catch (error) {
        console.log(error)
    };
  };

  const getAcoes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/readAcoes");
      setAcoes(res.data)
    } catch (error) {
        console.log(error)
    };
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  useEffect(() => {
    getAcoes();
  }, [setAcoes]);
  return (
    <>
    {/* NavbarUsuario */}
    <div className={styles.body}>
      <div>
        <Navbar className={styles.UsuarioNavbar} fixed="top">
        <Container>
          <Navbar.Brand>
          <Navbar.Item>
            <Image src="/imagens/logoVisiona.png"width = '120'/>
            <div className={styles.frasesDiv}></div>
            <div className={styles.frasesDiv}>
              <strong>Operação:</strong>
            </div>
            <div className={styles.frasesDiv}>Perfil de usuário</div>
            </Navbar.Item>
            <Navbar.Burger/>
            </Navbar.Brand>
            <Navbar.Menu>
            <Navbar.Segment align="end">
              <Navbar.Item dropdown>
                <Navbar.Link><Image src="/imagens/user.png"width = '40'/></Navbar.Link>
                <Navbar.Dropdown>
                <Navbar.Item>Informações</Navbar.Item>
                <Navbar.Item>Editar</Navbar.Item>
                <Navbar.Item>Sair</Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Container>
      </Navbar>
      <InfoUsuario users={users}/>

      {IsOpenPopup && <PopupEdicao setIsOpenPopup={setIsOpenPopup} />}
      <TabelaInfoAcoes acoes={acoes} />
      <button type="button" onClick={setIsOpenPopup.bind(IsOpenPopup, true)} className={styles.buttonUser2}><strong>Editar informações</strong></button>
      </div>


      {/* Footer */}


  <Footer className={styles.Ufooter}>
    <Container>
      <Content>
        <Column.Group centered>
          <Column size="one-third" mobile={{size: "full"}}>
            <div className={styles.UfooterCont}>
              <div>
                VISIONA TECNOLOGIA ESPACIAL S.A.
              </div>
              <div>
                2023 TODOS OS DIREITOS RESERVADOS
              </div>
            </div>
          </Column>
          <Column size="one-third" mobile={{size: "full"}}>
            <div className={styles.UfooterImgs}>
              <a href="https://www.facebook.com/VisionaEspacial">
                <img src="/imagens/facebook.png" alt="Facebook Visiona" />
              </a>
              <a href="https://www.linkedin.com/company/visiona-tecnologia-espacial-s-a-/">
                <img src="/imagens/linkedin.png" alt="Linkedin Visiona" />
              </a>
              <a href="https://www.visionaespacial.com.br/">
                <img src="/imagens/email.png" alt="Email Visiona" />
              </a>
              <a href="https://github.com/LittleTech10">
                <img src="/imagens/git.png" alt="Github Littletech" />
              </a>
            </div>
          </Column>
        </Column.Group>
      </Content>
    </Container>
  </Footer>
      </div>


      </>
  )
}

export default PaginaUsuario