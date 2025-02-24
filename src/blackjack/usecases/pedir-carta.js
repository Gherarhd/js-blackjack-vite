// Esta función me permite tomar una carta de la baraja

/**
 *
 * @param {Array<string>} deck
 * @returns {string} retorna la carta pedida
 */

export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
