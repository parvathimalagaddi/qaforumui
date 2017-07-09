import axios from 'axios';
import { FETCH_QUESTIONS, FETCH_QUESTION} from './types';

export function fetchQuestions() {
  return (dispatch) => {
    return axios.get('/api/v1/question/').then(res => {
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
