import styles from "./Usuario.module.css"
import "rbx/index.css"
import { Navbar, Image, Container, Title, Content, Column, Table, Footer} from 'rbx';
import { useState, useEffect } from "react";
import PopupEdicao from "../Popups/PopupEdicao";
import axios from "axios"
import InfoUsuario from "./InfoUsuario";


export default function TabelaInfoAcoes({acoes}) {
    return (
        <Table bordered className={styles.posicaoTabela}>
            <Table.Head>
                <Table.Row>
                    <Table.Heading className={styles.textoTabela} colSpan={2}>Histórico de atividade da conta</Table.Heading>
                </Table.Row>
            </Table.Head>
            <Table.Head>
                <Table.Row>
                    <Table.Heading className={styles.textoAçao}>Ação</Table.Heading>
                    <Table.Heading className={styles.textoAçao}>Data</Table.Heading>
                </Table.Row>
            </Table.Head>
        <Table.Body>
            {acoes && acoes.map && acoes.map((item, i) => (
                <>
                    <Table.Row key={i}>
                        <Table.Cell className={styles.textoAçao}>{item.tipo_acao}</Table.Cell>
                        <Table.Cell className={styles.textoAçao}>{item.to_char}</Table.Cell>
                    </Table.Row>
                </>
            ))}
        </Table.Body>
    </Table>
    )
}