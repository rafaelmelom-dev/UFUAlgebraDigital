# UFU Álgebra Digital

Uma aplicação web interativa desenvolvida para automatizar cálculos de álgebra linear e operaçẽos complexas com matrizes.

Este projeto foi construído para aliar os conceitos matemáticos à programação, oferecendo uma interface limpa e intuitiva para estudantes e entusiastas de exatas, com ligações ao curso de Sistemas de Informação da Universidade Federal de Uberlândia (UFU).

## Funcionalidades

A partir de duas transformações lineares:

- **Matriz de transformação:** Calcula a matriz de transformação de acordo com a base canônica.
- **Operações:** Calcula as transformações de um vetor, além da adição e composição das transformações.
- **Cálculos avançados:**
  - Cálculo de Autovalores.
  - Cálculo de Autovetores.
  - Cálculo do Núcleo.
    (Para mais detalhes, tudo está em código, em /src/core contendo as operações matemáticas)

Obs.: As operações utilizadas são de transformações do espaço R<sup>3</sup> para o R<sup>3</sup>, sendo assim, para o cálculo de autovetores e autovalores, foi feita a aproximação da primeira raiz por Newton-Raphson, a partir da primeira, a equação (montada a partir de det(A - λI) = 0) foi decomposta para a forma quadrática, sendo necessário apenas Bhaskara. Dadas as informações, o projeto apenas cálcula autovetores/autovalores de matrizes quadradas de ordem 3.

## Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca principal para a construção da interface de utilizador.
- **JavaScript (ES6+):** Lógica matemática e manipulação do DOM.
- **CSS / HTML:** Estruturação e estilização da aplicação.

## Como experimentar

Acesse: https://ufu-algebra-digital.vercel.app/

Ou caso queira explorar em sua própria máquina:

Cerifique-se de que o [Node.js](https://nodejs.org/) esteja instalado.

1. **Clone este repositório:**

   ````bash
   git clone [https://github.com/rafaelmelom-dev/UFUAlgebraDigital](https://github.com/rafaelmelom-dev/UFUAlgebraDigital)   ```

   ````

2. **Mude para a pasta do repositório:**

   ```bash
   cd UFUAlgebraDigital
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie a aplicação**

   ```bash
   npm run dev
   ```

Agora acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

## Autor

Desenvolvido por Rafael Melo

GitHub: @rafaelmelom-dev

LinkedIn: [Rafael Melo](https://www.linkedin.com/in/rafael-melo-a2752a262/)
