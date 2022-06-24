export default function getNewDate(date: string): string {
  
  const split = date.split("/");
  const dia = split[0];
  const mes = split[1];
  const ano = split[2];
  return `${ano}/${mes}/${dia}`;
}
