import { executeSteps, verifyStandardElements } from "../utils/validations";
import "./types";

export default class TestablePages {
  /** @type {Page[]} */
  pages = [];

  /**
   * Add a new page to test list
   * @param {Page} page
   */
  addPage(page) {
    this.pages.push(page);
  }

  /**
   * Executa os testes de todas as páginas adicionadas.
   * @param {boolean} enableStandardVerification - Habilita a verificação padrão de elementos.
   */
  runTests(enableStandardVerification = true) {
    this.pages.forEach(({ title, path, steps = [], snapshot = false }) => {
      it(`Página ${title}`, () => {
        cy.visit(path);

        if (enableStandardVerification) verifyStandardElements();

        if (steps.length) {
          executeSteps(steps);
        }

        if (snapshot) {
          cy.get("main")
            .first()
            .toMatchSnapshot();
        }
      });
    });
  }
}
