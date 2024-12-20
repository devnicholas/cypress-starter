import { click, type, snapshot, imageSnapshot } from "./actions";

export const verifyStandardElements = () => {
  cy.root().should("not.contain.text", /lorem ipsum/i);

  ["main"].forEach((selector) => {
    cy.get(selector).should("be.visible");
  });
};

export const executeSteps = (steps) => {
  steps.forEach(({ element, text, should, action, value, callback }) => {
    if (callback) {
      callback();
      return;
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
