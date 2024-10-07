Portfólio Pessoal Dinâmico e Futurista
<!-- (Substitua por uma imagem real do seu projeto) -->

Índice
Descrição
Funcionalidades
Tecnologias Utilizadas
Como Executar o Projeto
Seções do Portfólio
Validação do Formulário de Contato
Estilo Futurista
Integração com EmailJS
Contribuição
Licença
Contato
Descrição
Este é um projeto de portfólio pessoal com um design dinâmico e futurista. O layout utiliza uma combinação de cores escuras e efeitos neon para transmitir modernidade, com animações suaves e uma interface interativa. O portfólio é totalmente responsivo, garantindo uma experiência agradável em dispositivos móveis e desktops.

Funcionalidades
Apresentação pessoal e de habilidades.
Exibição de projetos com links diretos para repositórios ou sites externos.
Formulário de contato integrado com EmailJS para envio de mensagens.
Design moderno com animações e transições.
Estilo futurista com efeitos neon e gradientes.
Tecnologias Utilizadas
HTML5: Estrutura do projeto.
CSS3: Estilização, incluindo transições, animações e design responsivo.
JavaScript: Interatividade e validação de formulários.
EmailJS: Integração para envio de mensagens por email.
Como Executar o Projeto
Requisitos:
Um navegador web (Chrome, Firefox, etc.).
Conexão com a internet para testar a integração com EmailJS.
Passos para executar:
Faça o download ou clone o repositório do projeto:

bash
Copiar código
git clone https://github.com/bitencourtdoug/Portfolio.git
Abra o arquivo index.html no seu navegador.

Explore as seções do portfólio e teste o envio de mensagens pela seção de contato.

Nota: Para configurar o envio de emails, você precisará criar uma conta no EmailJS. As instruções completas estão mais abaixo.

Seções do Portfólio
Cabeçalho: Inclui a logo, o título do portfólio e um menu de navegação.
Apresentação: Contém uma introdução pessoal com foto e uma breve descrição.
Habilidades: Mostra as principais habilidades técnicas com ícones.
Projetos: Galeria com links para projetos desenvolvidos.
Contato: Formulário para envio de mensagens diretamente ao seu email.
Validação do Formulário de Contato
O formulário de contato tem os seguintes campos:

Nome: Campo obrigatório, deve ser preenchido.
Email: Validação de email para garantir que o endereço inserido seja válido.
Assunto: Campo obrigatório.
Mensagem: Campo obrigatório para a mensagem do usuário.
A validação é feita via JavaScript antes do envio da mensagem, garantindo que todos os campos estejam corretamente preenchidos.

Estilo Futurista
O estilo visual deste portfólio é inspirado em interfaces de ficção científica, com os seguintes elementos principais:

Cores escuras com texto em tons de neon (verde, azul, rosa).
Animações suaves em elementos interativos como botões e links.
Gradientes e sombras neon em botões e bordas.
Transições para suavizar interações com o usuário.
Integração com EmailJS
Este portfólio usa o EmailJS para enviar mensagens diretamente a partir do formulário de contato. Siga os passos abaixo para configurar o EmailJS:

Passos para Configurar:
Crie uma conta no EmailJS.
Adicione um novo serviço de email no painel do EmailJS.
Substitua o SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY nos parâmetros do script no arquivo app.js:
javascript
Copiar código
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
Atualize o formulário com o ID correto e ajuste os campos conforme necessário.
Mais detalhes podem ser encontrados na documentação do EmailJS.

Contribuição
Contribuições são bem-vindas! Se você deseja contribuir com este projeto:

Faça um fork do repositório.
Crie uma nova branch:
bash
Copiar código
git checkout -b minha-nova-funcionalidade
Commit suas alterações:
bash
Copiar código
git commit -m 'Adiciona nova funcionalidade'
Faça o push para a branch:
bash
Copiar código
git push origin minha-nova-funcionalidade
Abra um Pull Request.
Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Contato
Douglas Bitencourt Cardoso
Email: douglasbitencourtadm@gmail.com
LinkedIn: Douglas Bitencourt