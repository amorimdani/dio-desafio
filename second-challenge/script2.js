let vitorias = 500;
let derrotas = 300;

function getRankeadas(vitorias, derrotas) {
  let rankeadas = vitorias - derrotas;
  let nivel = "";

  if (rankeadas < 10) {
    nivel = "Ferro";
  } else if (rankeadas <= 20) {
    nivel = "Bronze";
  } else if (rankeadas <= 50) {
    nivel = "Prata";
  } else if (rankeadas <= 80) {
    nivel = "Ouro";
  } else if (rankeadas <= 90) {
    nivel = "Diamante";
  } else if (rankeadas <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(
    `O Herói tem de saldo de ${rankeadas} e está no nível de ${nivel}`
  );

  return rankeadas;
}
getRankeadas(vitorias, derrotas);
