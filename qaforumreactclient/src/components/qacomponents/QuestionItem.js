import React from 'react';

class QuestionItem extends React.Component{
			onBugClick(){
				this.props.toggle(this.props.data);
			}
			render(){
				let question = this.props.question;
				let postAnswerUrl = "/post-answer?qid=" + question._id;
				return (
          <div key={"question-summary" + this.props.index} className="well well-sm">
              <h5>
                <a href={postAnswerUrl} className="questionhyperlink">{question.question}</a>
              </h5>

              <p className="text-primary">
								<h5>
									<small>
										<ul className="list-inline">
											<li><a href={postAnswerUrl}  data-toggle="tooltip" data-placement="top" title={question.postTime}>Posted on: {new Date(question.postTime).toString()}</a></li>
											<li><a href={postAnswerUrl} data-toggle="tooltip" data-placement="bottom" title={question.username}>Posted by: {question.username}</a></li>
										</ul>
									</small>
								</h5>
							</p>
          </div>
				)
			}
		}
export default QuestionItem;
