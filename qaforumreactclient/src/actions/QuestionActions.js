import axios from 'axios';
import { ADD_ANSWER, SEARCH_QUESTION, FETCH_QUESTIONS, FETCH_QUESTION} from './types';

export function fetchQuestions(searchCriteria) {
  let url = '/api/v1/question/';
  if(searchCriteria && searchCriteria != "") {
    url = '/api/v1/question/filter/by/?question=' + searchCriteria;
  }
  return (dispatch) => {
    return axios.get(url).then(res => {
      console.log("FETCH Questions");
      console.log(res);
      const questions = res.data;
      dispatch({
					type: FETCH_QUESTIONS,
					payload: questions
				});
    });
  }
}

export function fetchQuestionDetail(qid) {
  return (dispatch) => {
    return axios.get('/api/v1/question/' + qid +"/").then(res => {
      console.log("FETCH Question");
      console.log(res);
      const question = res.data[0];
      dispatch({
					type: FETCH_QUESTION,
					payload: question
				});
    });
  }
}

export function searchQuestion(searchCriteria) {
  return (dispatch) => {
    return axios.get('/api/v1/question/' + searchCriteria +"/").then(res => {
      console.log("FETCH Question based on searchCriteria");
      console.log(res);
      const questions = res.data[0];
      dispatch({
					type: SEARCH_QUESTION,
					payload: questions
				});
    });
  }
}

export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer
  };
}
