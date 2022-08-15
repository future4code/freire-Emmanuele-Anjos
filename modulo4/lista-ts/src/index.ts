//exercício 1

const printDate = (name: string, date: string) => {
  const logDate = date.split("/");
  const day: string = logDate[0];
  const month: string = logDate[1];
  const year: string = logDate[2];
  console.log(
    `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`
  );
};

printDate("Sofia", "30/04/2000");

//exercício 2

function randomType(data: any): void {
  console.log(typeof data);
}

const type1 = "actias luna";
const type2 = false;
const type3 = 333;

randomType(type1);
randomType(type2);
randomType(type3);

//exercício 3

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type setMovies = {
  name: string;
  year: number;
  gender: string;
};

const printCatalogue = (
  name: string,
  releaseYear: number,
  movieGender: string
): object => {
  return { name: name, releaseYear: releaseYear, movieGender: movieGender };
};
console.log(printCatalogue("A Brighter Summer Day", 1991, GENERO.DRAMA));

/* ex Entradas: "Duna", 2021, GENERO.ACAO
Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação"}*/

//exercício 3
