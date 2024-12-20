import { executeSteps, verifyStandardElements } from "../utils/validations";
import "./types";

export default class TestablePages {
  /**
   * Lista de páginas a serem testadas.
   * Cada página deve seguir a estrutura definida pelo tipo `Page`.
   * 
   * @type {Page[]}
   */
  pages = [];

  /**
   * Adiciona uma nova página à lista de testes.
   *
   * @param {Page} page - Objeto representando a página a ser adicionada.
   */
  addPage(page) {
    this.pages.push(page);
  }

  /**
   * Executa os testes de todas as páginas adicionadas à lista.
   *
   * Para cada página:
   * - Visita a URL especificada.
   * - Opcionalmente realiza uma verificação padrão de elementos.
   * - Executa os passos definidos na propriedade `steps`.
   * - Captura um snapshot, se habilitado.
   *
   * @param {boolean} [enableStandardVerification=true] - Indica se a verificação padrão de elementos deve ser realizada.
   */
  runTests(enableStandardVerification = true) {
    this.pages.forEach(({ title, path, steps = [], snapshot = false }) => {
      it(`Página ${title}`, () => {
        cy.visit(path);

        if (enableStandardVerification) {
          verifyStandardElements();
        }

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
