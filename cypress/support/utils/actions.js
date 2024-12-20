/**
 * Simula um clique no elemento fornecido.
 *
 * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - O elemento no qual o clique será simulado.
 */
export const click = (element) => {
  element.click();
};

/**
 * Simula a digitação de texto em um elemento.
 *
 * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - O elemento onde o texto será digitado.
 * @param {string} text - O texto que será digitado no elemento.
 */
export const type = (element, text) => {
  element.type(text);
};

/**
 * Captura e compara o snapshot visual do primeiro elemento encontrado.
 *
 * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - O elemento cujo snapshot será capturado.
 */
export const snapshot = (element) => {
  element.first().toMatchSnapshot();
};

/**
 * Captura e compara o snapshot de imagem do primeiro elemento encontrado.
 *
 * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - O elemento cujo snapshot de imagem será capturado.
 */
export const imageSnapshot = (element) => {
  element.first().toMatchImageSnapshot();
};
