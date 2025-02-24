import _ from "underscore";
// Esta función crea un nuevo deck

/**
 *
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} TiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @param {Array<string>} deck Ejemplo: []
 * @returns {Array<string>} retorna un deck de cartas barajeadas
 */

export const crearDeck = (tiposDeCarta, TiposEspeciales, deck) => {
  if (!tiposDeCarta || !TiposEspeciales || !deck) {
    throw new Error("tiposDeCarta, TiposEspeciales y deck son requeridos");
  }

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of TiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);

  return deck;
};
