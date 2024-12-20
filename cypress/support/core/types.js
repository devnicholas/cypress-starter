/**
 * Representa uma configuração para asserções em testes do Cypress.
 *
 * @typedef {Object} ShouldObject
 * @property {string} chainer - O comando de asserção a ser utilizado. Consulte a lista completa de comandos em: https://on.cypress.io/assertions
 * @property {*} value - O valor esperado para a asserção, quando aplicável. Pode ser de qualquer tipo dependendo do comando usado.
 */

/**
 * Representa uma etapa de teste a ser executada em uma página.
 *
 * @typedef {Object} Step
 * @property {string} [element] - O seletor do elemento DOM que será alvo do teste. Opcional.
 * @property {string} [text] - Texto esperado no elemento especificado. Se omitido, o teste será ignorado para texto.
 * @property {string|ShouldObject} [should] - Expectativa de asserção do teste. Pode ser uma string com o comando ou um objeto `ShouldObject` para comandos mais complexos. Consulte: https://on.cypress.io/assertions
 * @property {"click"|"type"|"snapshot"|"imageSnapshot"} [action] - Ação a ser realizada no elemento. Valores permitidos:
 * - `"click"`: Simula um clique no elemento.
 * - `"type"`: Simula a digitação de texto no elemento.
 * - `"snapshot"`: Captura um snapshot visual do elemento.
 * - `"imageSnapshot"`: Captura um snapshot de imagem do elemento.
 * @property {string} [value] - Valor a ser inserido em um campo de texto durante a ação `type`. Ignorado para outras ações.
 * @property {Function} [callback] - Função de callback personalizada para executar ações adicionais ou substitutivas.
 */

/**
 * Representa uma página que será testada.
 *
 * @typedef {Object} Page
 * @property {string} title - O título descritivo da página. Utilizado para identificar os testes.
 * @property {string} path - O caminho relativo ou absoluto da página que será testada.
 * @property {Step[]} [steps] - Lista de etapas (`Step`) que serão executadas para testar essa página. Opcional.
 * @property {boolean} [snapshot] - Indica se um snapshot completo da página deve ser capturado durante os testes. Padrão: `false`.
 */
