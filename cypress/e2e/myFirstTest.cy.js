import TestablePages from "../support/core";

const countHomeLinks = () => {
  cy.get(".actions")
    .eq(0)
    .find("a")
    .should("have.length", 1);

  cy.get(".actions")
    .eq(1)
    .find("a")
    .should("have.length", 3);
};

const testablePages = new TestablePages();

testablePages.addPage({
  title: "Home",
  path: "/",
  steps: [
    {
      element: "h1",
      text: "Testable App",
      should: "be.visible",
    },
    {
      element: "h2",
      should: { chainer: "have.text", value: "Application used for E2E tests" },
    },
    {
      callback: countHomeLinks,
    },
    {
      element: "main",
      action: "snapshot",
    },
    {
      element: "main",
      action: "imageSnapshot",
    },
  ],
});

describe("Switch de testes simples", {}, () => {
  beforeEach(() => {
    // cy.login();
  });

  testablePages.runTests();
});
