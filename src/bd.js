const {Pool} = require("pg")
async function criarConexao() {
    const pool = new Pool({
        connectionString: 'postgres://fxyozawexqxxmn:b5cfeedbb8fe4b91c403c62f8e8a94fabb20eaedc4f9aaf8e0de3ca6713d692c@ec2-35-174-35-242.compute-1.amazonaws.com:5432/dletfdn37jdpd', 
        ssl: {
            rejectUnauthorized: false
        }
    });
 
    let con = await pool.connect();
   
    await con.query(`create table esporte(
        Id serial,
        EsporteNome vachar;
        constraint Esporte_pk primary key (ID)
    )`);
    await con.query(`create table Evento(
        IdEvento serial,
        DataPratricar date,
        Localizacao vachar,
        times Array,
        Esporte esporte,
        constraint Evento_pk primary key (IdEvento)
    )`);
   
    await con.query(`create table jogador(
        MatriculaId serial,git
        nome vachar,
        Email vachar,
        senha varchar,
        telefone integer,
        constraint jogador_pk primary key (MatriculaId)
    )`);
    await con.query(`create table organizador(
        id serial,
        constraint organizador_pk primary key (id)
    )`);
   
    await con.query(`create table posicao(
        PosicaoId serial,
        nome varchar,
        constraint posicao_pk primary key (PosicaoId)
    )`);
    await con.query(`create table time(
        ID serial,
        nome varchar,
        ListaJogadores array,
        constraint times_pk primary key (ID)
    )`);
   
    
   

    let res = await con.query("create table Posicao (id serial primary key, nome varchar)")
}
 
criarConexao();