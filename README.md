📋# Formulário de Movimentação de Materiais

Este projeto é um formulário web para registrar movimentações de materiais, como entradas, saídas e retornos. Ele permite preencher informações gerais, detalhes dos itens, dados do remetente e destinatário, além de gerar um PDF com os dados preenchidos.

## Funcionalidades

- **Formulário de Movimentação**: Preencha informações sobre o evento, tipo de movimentação, data, itens, remetente, destinatário e observações.
- **Geração de PDF**: Gere um PDF com todos os dados preenchidos no formulário.
- **Responsivo**: Layout adaptável para dispositivos móveis e tablets.
- **Design Moderno**: Interface limpa e intuitiva, com ícones e cores suaves.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do formulário.
- **CSS3**: Estilização do formulário, com layout responsivo e design moderno.
- **JavaScript**: Lógica para gerar o PDF usando a biblioteca `jsPDF`.
- **Bibliotecas Externas**:
  - [Font Awesome](https://fontawesome.com/): Ícones utilizados no formulário.
  - [Google Fonts](https://fonts.google.com/): Fonte Roboto para o design moderno.
  - [jsPDF](https://parall.ax/products/jspdf): Biblioteca para gerar PDFs.

## Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/formulario-movimentacao.git
Abra o projeto:

Navegue até a pasta do projeto:

bash
Copy
cd formulario-movimentacao
Abra o arquivo index.html no seu navegador.

Preencha o formulário:

Insira as informações solicitadas nos campos do formulário.

Clique no botão "Gerar PDF" para gerar um arquivo PDF com os dados preenchidos.

Visualize o PDF:

O PDF será salvo automaticamente no seu computador com o nome formulario_movimentacao.pdf.

Estrutura do Projeto
index.html: Estrutura do formulário.

styles.css: Estilos CSS para o formulário.

scripts.js: Lógica JavaScript para gerar o PDF.

Personalização
Adicionar mais campos: Para adicionar mais campos ao formulário, edite o arquivo index.html e adicione novos elementos dentro das seções existentes.

Alterar o design: Para modificar o design, edite o arquivo styles.css.

Modificar o PDF: Para ajustar o layout do PDF gerado, edite o arquivo scripts.js.

Exemplo de Uso
Preencha o formulário com as informações de movimentação.

Clique em "Gerar PDF".

Um PDF será gerado com o seguinte formato:

Copy
FORMULÁRIO DE MOVIMENTAÇÃO DE MATERIAIS
----------------------------------------
1. INFORMAÇÕES GERAIS
   Nome do Evento: Evento de Tecnologia 2023
   Tipo de Movimentação: Entrada
   Data: 10/10/2023

2. ITENS
   Tipo de Material: IMPRESSORA ELGIN I9
   Quantidade: 2
   Patrimônio: 12345

3. DADOS DO REMETENTE
   Nome: João Silva
   CPF: 123.456.789-00
   RG: 9876543
   Endereço: Rua das Flores, 123
   CEP: 12345-678

4. DADOS DO DESTINATÁRIO
   Nome: Maria Oliveira
   CPF: 987.654.321-00
   RG: 1234567
   Endereço: Avenida Principal, 456
   CEP: 87654-321

5. DADOS DO VOLUME
   Comprimento (cm): 50
   Largura (cm): 30
   Altura (cm): 20
   Peso (kg): 10

6. OBSERVAÇÕES
   Observações: Material frágil, manusear com cuidado.

Gerado em: 10/10/2023 14:30:45
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.