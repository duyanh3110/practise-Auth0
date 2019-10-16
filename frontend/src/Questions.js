import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  async componentDidMount() {
    const questions = (await axios.get("http://localhost:8081/")).data;
    this.setState({
      questions
    });
  }

  render() {
    return (
      <div classNam="container">
        {this.state.questions === null && <p>Loading questions...</p>}
        {this.state.questions &&
          this.state.questions.map(question => (
            <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
              <Link to={`/question/${question.id}`}>
                <div class="card text-white bg-success mb-3">
                  <div className="card-header">Answers: {question.answers}</div>
                  <div className="card-body">
                    <div className="card-title">{question.title}</div>
                    <div className="card-text">{question.description}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Questions;
