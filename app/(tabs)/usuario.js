import { db } from "../(tabs)/db.js";

export const validaCodigo = (codigo, resultado) => {
  const sql = "SELECT  count(*) as count FROM bdsalao.usuario where senha = ?";
  const params = [codigo];


  db.query(sql, params , (results, fields) => {
        resultado = results;
        return (resultado);
        
  });
};

