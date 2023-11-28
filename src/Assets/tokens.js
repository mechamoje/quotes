export const fonts = {
  // usado para conteúdo dos cards e texto de aviso da página ex.: Adicione textos aos favoritos para exibi-los aqui.
  Content: () => `
        font-weight: 400;
        font-size: 14px;
    `,
  // usado para o título do card grande e dentro das paginas ex.: Outros textos, Para você hoje:
  BigCardandPageTitle: () => `
        font-weight: 600;
        font-size: 18px; 
    `,
  // usado para os autores do card grande
  Authors: () => `
        font-weight: 550;
        font-size: 14px;   
        text-transform: uppercase; 
    `,
  // usado para o título do card pequeno
  SmallCardTitle: () => `
        font-weight: 600;
        font-size: 14px;
    `,
  // usado para título dos avisos nas paginas ex.: Você ainda não tem favoritos.
  PageAdvicesTitle: () => `
    font-weight: 700;
    font-size: 22px;
`,
};

export const colors = {
  BackgroundColor: () => `
    background-color: #EDE9E9;
`,
};
