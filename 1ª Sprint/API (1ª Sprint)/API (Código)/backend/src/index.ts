import express from "express"
import cors from "cors"
import { Pool } from "pg"
import { log } from "console"

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "API",
    password: "nicolas123",
    port: 5432
})

const app = express()
app.use(cors())
app.use(express.json())


app.post("/login", (req, res) => {
    const { email } = req.body
    //const { senha } = req.body

    let SQL = ("SELECT * FROM Usuarios WHERE usuario_email = '"+email+"'")

    DB.query(SQL, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/user')
            console.log({msg: "Usuario logado", status: 'OK'});
        }
    })
})
//Cadastrar um usuario no banco
app.post("/registro", (req, res) => {
    const { nome } = req.body
    const { email } = req.body
    const { senha } = req.body
    const { confirmarSenha } = req.body
    
    //let SQL = "INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ($1,$2,$3,$4)"
    let SQL = ("INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ('"+nome+"','"+email+"', '"+senha+"', '"+confirmarSenha+"')")
    
    DB.query(SQL, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send({msg: "Cadastro realizado com sucesso."})
        }
    })
})

app.put("/editar-info", (req, res) => {
    const { nome } = req.body
    const { username } = req.body

    let SQL = ("UPDATE Usuarios SET usuario_nome = '"+nome+"', nome_usuario = '"+username+"' WHERE usuario_ID = 'abff29c8-181a-46c5-8051-e34f604443ed'")

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({msg: "Editado com sucesso."})
        }
    })
})

app.get("/read", (_, res) => {

    let SQL = "SELECT usuario_nome, usuario_email, nome_usuario, usuario_tipo, to_char(usuario_data_criacao, 'DD/MM/YYYY') FROM usuarios WHERE usuario_ID = 'abff29c8-181a-46c5-8051-e34f604443ed'";
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.get("/readAcoes", (_, res) => {

    let SQL = "SELECT tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS')FROM acoes WHERE id_usuario = 'abff29c8-181a-46c5-8051-e34f604443ed'"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.get("/allusers", (_, res) => {

    let SQL = "SELECT usuario_nome, to_char(usuario_data_criacao, 'DD/MM/YYYY'), usuario_status_registro FROM usuarios LIMIT 10"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.get("/usersAllAcoes", (_, res) => {

    let SQL = "SELECT usuario_nome, tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS') FROM usuarios JOIN acoes ON usuarios.usuario_id = acoes.id_usuario;"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando!")
})