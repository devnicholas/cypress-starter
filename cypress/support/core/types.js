/**
 * @typedef {Object} ShouldObject
 * @property {string} chainer - O comando de asserção. Veja as opções em https://on.cypress.io/assertions
 * @property {*} value - O valor esperado para a asserção, quando aplicável.
 */

/**
 * @typedef {Object} Step
 * @property {string} [element] - Elemento a ser testado.
 * @property {string} [text] - Texto que deve estar contido no elemento.
 * @property {string|ShouldObject} [should] - Expectativa do teste. Veja as opções em https://on.cypress.io/assertions
 * @property {"click"|"type"|"snapshot"|"imageSnapshot"} [action] - Ação a ser executada.
 * @property {string} [value] - Valor a ser inserido em um campo.
 * @property {Function} [callback] - Função de callback para ações customizadas.
 */

/**
 * @typedef {Object} Page
 * @property {string} title - Título da página.
 * @property {string} path - Caminho da página.
 * @property {Step[]} [steps] - Lista de etapas de teste associadas à página.
 * @property {boolean} [snapshot] - Flag para snapshot da página.
 */
