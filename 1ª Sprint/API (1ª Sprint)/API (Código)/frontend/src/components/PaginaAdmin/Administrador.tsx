import "rbx/index.css"
import { Chart } from "react-google-charts";
import { Navbar, Image, Table, Footer, Content, Column} from 'rbx';
import styles from "./Administrador.module.css"
import { useEffect, useState } from "react";
import axios from "axios";

export const data = [
    ["Task", "Hours Per Day"],
    ["Ativos", 10]
];

export default function Admin(){

    const [usersAll, setUsersAll] = useState({} as any)
    const [usersActions, setUsersActions] = useState({} as any)

    const getUsersAll = async () => {
        try {
          const res = await axios.get("http://localhost:3001/allusers");
          setUsersAll(res.data)
        } catch (error) {
            console.log(error)
        };
    };

    const getUserActions = async () => {
        try {
          const res = await axios.get("http://localhost:3001/usersAllAcoes");
          setUsersActions(res.data)
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getUsersAll();
    }, [setUsersAll]);

    useEffect(() => {
        getUserActions();
    }, [setUsersActions]);

  return (
    <div className={styles.containerTotal}>

        <div className={styles.navbarContainer}>
            <Navbar className={styles.navbar} fixed="top">
                <Navbar.Brand>
                <Navbar.Item>
                    <Image 
                    src="/imagens/logoVisiona.png"
                    width = '120'
                    />
                    <div className={styles.fraseDiv}>
                        |
                    </div>
                    <div className={styles.fraseDiv}>
                        <strong>Operação:</strong>
                    </div>
                    <div className={styles.fraseDiv}>
                        Gerenciamento de usuários
                    </div>
                </Navbar.Item>
                
                <Navbar.Burger />

                </Navbar.Brand>

                <Navbar.Menu>
                <Navbar.Segment align="end">
                    <Navbar.Item dropdown>
                        <Navbar.Link>
                            <Image 
                                src="/imagens/user.png"
                                width = '40'
                            />
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item>Informações</Navbar.Item>
                            <Navbar.Item>Editar</Navbar.Item>
                            <Navbar.Item>Sair</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </div>
        <div className={styles.tableUserContainer}>
            <Table bordered className={styles.posicaoTableUsers}>
                <Table.Head>
                    <Table.Row>
                        <Table.Heading className={styles.headingUsers}> Usuários </Table.Heading>
                        <Table.Heading className={styles.headingUsers}>Ações</Table.Heading>
                        <Table.Heading className={styles.headingUsers}>Data de criação</Table.Heading>
                        <Table.Heading className={styles.headingUsers}>Situação</Table.Heading>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {usersAll && usersAll.map && usersAll.map((item, i) => (
                        <Table.Row key={i}>
                            <Table.Cell className={styles.celImgUsers}>
                                <img className={styles.imgUsers} src="/imagens/situacaoIcon.png"/>
                                <span>{item.usuario_nome}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <img className={styles.img2Users} src="/imagens/excluir.png"/>
                                <img className={styles.img3Users} src="/imagens/edição.png"/>
                            </Table.Cell>
                            <Table.Cell>{item.to_char}</Table.Cell>
                            <Table.Cell className={styles.sitAtivoUsers}>{item.usuario_status_registro}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div> 

        <div className={styles.tableHistoricoContainer}>
            <Table bordered className={styles.posicaoTableHistorico}>
                <Table.Head>
                    <Table.Row>
                        <Table.Heading className={styles.headingHistorico} colSpan={3}>Histórico de atividade dos usuários</Table.Heading>
                    </Table.Row>
                </Table.Head>
                <Table.Head>
                    <Table.Row>
                        <Table.Heading className={styles.heading2Historico}>Usuário</Table.Heading>
                        <Table.Heading className={styles.heading2Historico}>Ação</Table.Heading>
                        <Table.Heading className={styles.heading2Historico}>Data</Table.Heading>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {usersActions && usersActions.map && usersActions.map((item, i) => (
                        <Table.Row key={i}>
                            <Table.Cell>{item.usuario_nome}</Table.Cell>
                            <Table.Cell>{item.tipo_acao}</Table.Cell>
                            <Table.Cell>{item.to_char}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>

        <div className={styles.graficoContainer}>
            <Table bordered className={styles.posicaoTableGrafico}>
                <Table.Head>
                    <Table.Row>
                        <Table.Heading className={styles.headingGrafico} colSpan={3}>Usuários ativos x Usuários inativos</Table.Heading>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell className={styles.graficoCellGrafico}>
                            <Chart className={styles.grafico}
                                chartType="PieChart"
                                data={data}
                                width={"2%"}
                                height={"13rem"}
                            />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>

        <div className={styles.footerContainer}>
                <Footer className={styles.footer}>
            <Content>
                <Column.Group centered>
                <Column size="one-third" mobile={{size: "full"}}>
                    <div className={styles.footerCont}>
                    <div>
                        LITLLE TECH FATEC SÃO JOSÉ DOS CAMPOS
                    </div>
                    <div>
                        2023 TODOS OS DIREITOS RESERVADOS
                    </div>
                    </div>
                </Column>
                <Column size="one-third" mobile={{size: "full"}}>
                    <div className={styles.footerImgs}>
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
            </Footer>
        </div>

    </div>
    )
}