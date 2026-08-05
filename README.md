Descrição Geral
Este projeto consiste em uma aplicação web interativa para exibição de contagem regressiva, desenvolvida em HTML5, CSS3 e JavaScript (Vanilla JS). A solução permite a seleção de datas específicas e a customização em tempo real da interface visual por meio de um painel de configurações.

Principais Funcionalidades
Cálculo de Tempo em Tempo Real: Atualização contínua do tempo restante, distribuído em dias, horas, minutos e segundos.

Definição de Data-Alvo Padrão: Na ausência de uma data selecionada pelo usuário, o sistema estabelece automaticamente como objetivo o primeiro dia do ano subsequente.

Seleção de Data Personalizada: Interface para definição de datas futuras via componente input[type="date"].

Painel de Configurações do Usuário:

Tipografia: Seleção entre as famílias de fontes Montserrat, Arial, Courier New e Times New Roman.

Dimensionamento: Ajuste do tamanho da fonte por meio de um controle deslizante (slider).

Orientação de Layout: Alternância entre os modos de exibição horizontal e vertical.

Interface Gráfica: Estilização com gradiente animado e aplicação de efeitos de transparência (Glassmorphism).

Tecnologias Empregadas
HTML5: Estruturação semântica dos componentes da página.

CSS3: Animações baseadas em @keyframes, variáveis CSS (custom properties), leiaute flexível (Flexbox) e filtros de renderização gráfica.

JavaScript (ES6): Manipulação de elementos do DOM, controle de temporizadores (setInterval / clearInterval) e tratamento de eventos.

Estrutura do Repositório
Plaintext
.
├── index.html     # Estruturação da interface e controles
├── style.css      # Definções de estilo, layouts e animações
└── sitema.js      # Regras de negócio, contagem regressiva e eventos
Instruções de Instalação e Execução
Realize o download ou a clonagem do repositório no ambiente local.

Certifique-se de que os arquivos index.html, style.css e sitema.js estejam no mesmo diretório.

Execute o arquivo index.html utilizando qualquer navegador web moderno.

Modo de Uso
Definição de Data: Acesse o campo "Selecione a data" no painel superior e defina o dia desejado. O sistema recalculará a contagem instantaneamente.

Acesso às Configurações: Clique no botão com o ícone de engrenagem no canto superior direito para expandir o painel.

Ajustes Visuais:

Altere a fonte por meio do menu de seleção.

Modifique o tamanho do texto deslocando a barra de ajuste.

Alterne a disposição dos elementos selecionando a opção de layout desejada (Horizontal ou Vertical).
