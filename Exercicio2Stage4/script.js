/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso
 e mostre uma mensagem na tela.


*/


let students = [{
  name: 'Tiago',
  PrimeiraProva: 5,
  SegundaProva: 7,

},
{
  name: 'Josué',
  PrimeiraProva: 7,
  SegundaProva: 9,


},


{
  name: 'Rubens',
  PrimeiraProva: 8,
  SegundaProva: 6,


},
]

function CalcMedia(PrimeiraProva, SegundaProva){
  let media = (PrimeiraProva + SegundaProva)/2
  return media
}

function ExibirMedia(students){

  for (let student of students){
    let media = CalcMedia(student.PrimeiraProva,student.SegundaProva)
    
    if (media >= 7){
      alert(`Parabéns ${student.name} você passou no concurso \n A sua média é de: ${media}`)
    }else{
      alert(`Que pena ${student.name} Infelizmente você não passou no concurso \n A sua media é de: ${media}`)
    }
   
  }
}

ExibirMedia(students)



