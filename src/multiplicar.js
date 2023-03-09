const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${colors.yellow("x")} ${i} ${colors.magenta("=")} ${
        base * i
      }\n`;
    }

    if (listar === true) {
      console.log("=============================".green);
      console.log("        Tabla del:", base);
      console.log("=============================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
