import { saveDeck } from "../utils/API";

export const RECEIVE_DECKS = "receive_decks";
export const ADD_DECK = "add_deck";
export const receiveDecks = (decksObject) => ({
  type: RECEIVE_DECKS,
  decks: decksObject,
});
export const addDeck = (deck) => ({ type: ADD_DECK, deck });
export const handleAddDeck = (title) => {
  return async (dispatch) => {
    let deck = await saveDeck(title);
    const action = addDeck(deck);
    dispatch(action); //base dispatch returns nothing, I want to return the action
    return action;
  };
};
