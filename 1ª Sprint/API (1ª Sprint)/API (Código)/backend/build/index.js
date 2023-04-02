"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var pg_1 = require("pg");
var DB = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "API_Visiona",
    password: "thygas020",
    port: 5432
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/login", function (req, res) {
    var email = req.body.email;
    //const { senha } = req.body
    var SQL = ("SELECT * FROM Usuarios WHERE usuario_email = '" + email + "'");
    DB.query(SQL, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/user');
            console.log({ msg: "Usuario logado", status: 'OK' });
        }
    });
});
//Cadastrar um usuario no banco
app.post("/registro", function (req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var confirmarSenha = req.body.confirmarSenha;
    //let SQL = "INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ($1,$2,$3,$4)"
    var SQL = ("INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ('" + nome + "','" + email + "', '" + senha + "', '" + confirmarSenha + "')");
    DB.query(SQL, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ msg: "Cadastro realizado com sucesso." });
        }
    });
});
app.put("/editar-info", function (req, res) {
    var nome = req.body.nome;
    var username = req.body.username;
    var SQL = ("UPDATE Usuarios SET usuario_nome = '" + nome + "', nome_usuario = '" + username + "' WHERE usuario_ID = 'd1bede99-ed6c-42d6-a710-2ec20753ccb0'");
    DB.query(SQL, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ msg: "Editado com sucesso." });
        }
    });
});
app.get("/read", function (_, res) {
    var SQL = "SELECT usuario_nome, usuario_email, nome_usuario, usuario_tipo, to_char(usuario_data_criacao, 'DD/MM/YYYY') FROM usuarios WHERE usuario_ID = 'd1bede99-ed6c-42d6-a710-2ec20753ccb0'";
    DB.query(SQL, function (err, data) {
        if (err)
            return res.json(err);
        return res.status(200).json(data.rows);
    });
});
app.get("/readAcoes", function (_, res) {
    var SQL = "SELECT tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS')FROM acoes WHERE id_usuario = 'd1bede99-ed6c-42d6-a710-2ec20753ccb0'";
    DB.query(SQL, function (err, data) {
        if (err)
            return res.json(err);
        return res.status(200).json(data.rows);
    });
});
app.get("/allusers", function (_, res) {
    var SQL = "SELECT usuario_nome, to_char(usuario_data_criacao, 'DD/MM/YYYY'), usuario_status_registro FROM usuarios LIMIT 10";
    DB.query(SQL, function (err, data) {
        if (err)
            return res.json(err);
        return res.status(200).json(data.rows);
    });
});
app.get("/usersAllAcoes", function (_, res) {
    var SQL = "SELECT usuario_nome, tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS') FROM usuarios JOIN acoes ON usuarios.usuario_id = acoes.id_usuario;";
    DB.query(SQL, function (err, data) {
        if (err)
            return res.json(err);
        return res.status(200).json(data.rows);
    });
});
app.listen(3001, function () {
    console.log("Servidor rodando!");
});
