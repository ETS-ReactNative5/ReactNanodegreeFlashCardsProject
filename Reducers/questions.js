import { RECEIVE_QUESTIONS } from "../Actions/questions";
import { ADD_QUESTION } from "../Actions/shared";

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    default:
      return state;
  }
}
