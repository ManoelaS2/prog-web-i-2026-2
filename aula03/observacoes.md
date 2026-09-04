# h1, h2, h3
Block, ao inspensionar é possivel ver que ele ocupa uma linha inteira

# p
Block, ao inspensionar é possivel ver que ele ocupa uma linha inteira

# ul, ol
Block, ao inspensionar é possivel ver que ele ocupa uma linha inteira

# a (link no menu)
Inline ao inspensionar é possivel ver que ele fica na mesma linha que outros elementos

# strong dentro de p
Inline ao inspensionar é possivel ver que ele fica na mesma linha que outros elementos

# img
Inline ao inspensionar é possivel ver que ele fica na mesma linha que outros elementos

# Experimento
A diferença que notei foi que dois <strongs> um do lado do outro cada um é um elemento separado em uma linha apesar de estarem juntos e o <p> temos como dois blocos ocupando toda uma linha e embaixo outro bloco ocupando outra linha inteira

# observacoes.md

## Diferença Semântica: `<figure>` + `<figcaption>` vs. `<img>` + `<p>`

A escolha entre essas duas estruturas altera completamente a forma como navegadores, motores de busca (SEO) e tecnologias assistivas (leitores de tela) interpretam a página.

### 1. Associação Estrutural e Acessibilidade (Acessible Name)
*   **Com `<figure>` e `<figcaption>`**: O elemento `<figure>` funciona como uma unidade isolada. O leitor de tela entende que o `<figcaption>` é o *nome acessível* ou a legenda oficial daquela imagem específica. Eles estão programaticamente vinculados.
*   **Com `<img>` e `<p>`**: O parágrafo `<p>` é semanticamente apenas mais um bloco de texto comum no fluxo do documento. Não há nenhum vínculo explícito dizendo que aquele texto descreve a imagem anterior. Para um leitor de tela, são duas informações soltas.

### 2. Autossuficiência e Fluxo do Documento (Self-contained)
*   **Segundo o MDN**, o elemento `<figure>` representa um conteúdo **autocontido** (ilustração, diagrama, código ou foto). Isso significa que ele pode ser movido para outra parte do documento (como um apêndice ou lateral da página) sem prejudicar o significado do fluxo principal.
*   Um parágrafo comum `<p>` após uma imagem geralmente depende estritamente do contexto linear do texto ao seu redor.

### 3. Capacidade de Agrupamento Multi-mídia
*   O `<figure>` permite agrupar **várias imagens** (ou gráficos/tabelas) sob uma **única legenda coletiva**. Fazer isso utilizando apenas `<p>` quebraria qualquer lógica estrutural para sistemas automatizados de indexação.

# Observação figure e figcaption

A combinação img e p reside apenas em uma imagem com um paragrafo comum, enquanto o figure e figcaption gera uma relação semântica entre a imagem e a legenda

# Observação caption na tabela

A combinação de h3 + table resulta apenas em elementos comuns posicionados lado a lado, enquanto as estrutura table + caption gera uma relação semântica entre o conteúdo e o seu respectivo titulo/descrição da tabela