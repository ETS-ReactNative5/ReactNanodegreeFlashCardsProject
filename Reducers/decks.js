import { RECEIVE_DECKS, ADD_DECK } from "../Actions/decks";
import { ADD_QUESTION } from "../Actions/shared";

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case ADD_DECK:
      return { ...state, [action.deck.id]: { ...action.deck } };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.deckID]: {
          ...state[action.question.deckID],
          questions: state[action.question.deckID].questions.concat([
            action.question.deckID,
          ]),
        },
      };
    default:
      return state;
  }
}
