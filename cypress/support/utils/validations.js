import { click, type, snapshot, imageSnapshot } from "./actions";
import "../core/types";

/**
 * Verifica elementos padrão na página.
 *
 * - Garante que o conteúdo da página não contém o texto "lorem ipsum".
 * - Verifica que os elementos especificados (ex.: "main") estão visíveis na página.
 */
export const verifyStandardElements = () => {
  cy.root().should("not.contain.text", /lorem ipsum/i);

  ["main"].forEach((selector) => {
    cy.get(selector).should("be.visible");
  });
};

/**
 * Executa uma sequência de passos em elementos da página.
 *
 * @param {Step[]} steps - Lista de passos a serem executados.
 */
export const executeSteps = (steps) => {
  steps.forEach(({ element, text, should, action, value, viewport, callback }) => {
    if (callback) {
      callback();
      return;
    }

    if (viewport) {
      if (typeof viewport === "object") {
        cy.viewport(viewport.width, viewport.height);
      } else {
        cy.viewport(viewport);
      }
    }

    let selector = false;

    if (element) {
      selector = cy.get(element);
    }

    if (should && selector) {
      if (typeof should === "object") {
        selector.should(should.chainer, should.value);
      } else {
        selector.should(should);
      }
    }

    if (text) {
      selector
        ? selector.contains(text, { matchCase: false })
        : cy.contains(text, { matchCase: false });
    }

    if (action) {
      switch (action) {
        case "click":
          click(selector);
          break;
        case "type":
          type(selector, value);
          break;
        case "snapshot":
          snapshot(selector);
          break;
        case "imageSnapshot":
          imageSnapshot(selector);
          break;

        default:
          break;
      }
    }
  });
};
