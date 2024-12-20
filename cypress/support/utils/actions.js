export const click = (element) => {
  element.click();
};

export const type = (element, text) => {
  element.type(text);
};

export const snapshot = (element) => {
  element.first().toMatchSnapshot();
};

export const imageSnapshot = (element) => {
  element.first().toMatchImageSnapshot();
};
