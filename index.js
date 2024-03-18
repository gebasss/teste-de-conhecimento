const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método que converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "toInt()",
        "parseInt()",
        "parseFloat()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico para 'OU' em JavaScript?",
      respostas: [
        "&",
        "&&",
        "||",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função utilizada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a estrutura de controle utilizada para repetir um bloco de código em JavaScript?",
      respostas: [
        "for",
        "while",
        "if",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o símbolo utilizado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "String, Number, Boolean, Object, Function, Undefined, Symbol",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função que JavaScript utiliza para converter valores para Booleanos?",
      respostas: [
        "toBoolean()",
        "Boolean()",
        "convertToBoolean()",
      ],
      correta: 1
    }
  ];
  
  const template = document.querySelector('template')
  const quiz = document.querySelector('#quiz')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dt').remove()
  
  quiz.appendChild(quizItem)
  }
  