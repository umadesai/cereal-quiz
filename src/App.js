import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Questions from './Questions';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Result from './components/Result';
import update from 'react-addons-update';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      answers: [],
      ansCount: {
        CapnCrunch: 0,
        Cheerios: 0,
        SpecialK: 0,
        CookieCrisp: 0,
        Wheaties: 0,
        LuckyCharms: 0
      },
      counter: 0,
      questionId: 1,
      question: '',
      result: ''
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.refresh = this.refresh.bind(this);
}

componentWillMount() {
  const shuffled = Questions.map((question) => this.shuffle(question.answers));
  this.setState({
    question: Questions[0].question,
    answers: shuffled[0]
  });
}

shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

handleSelection(event) {
  this.setUserAnswer(event.currentTarget.value);

  if (this.state.questionId < Questions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
  } else {
      setTimeout(() => this.setState({ result: this.getResults()[0] }), 300);
  }
}

setUserAnswer(answer) {
  const newCount = update(this.state.ansCount, {
    [answer]: {$apply: (currentValue) => currentValue + 1}
  });

  this.setState({
      ansCount: newCount,
      answer: answer
  });
}

setNextQuestion() {
  const count = this.state.counter + 1;
  this.setState({
      counter: count,
      questionId: this.state.questionId + 1,
      question: Questions[count].question,
      answers: Questions[count].answers,
      answer: ''
  });
}

refresh() {
  this.setState({
    answer: '',
    answers: [],
    ansCount: {
      CapnCrunch: 0,
      Cheerios: 0,
      SpecialK: 0,
      CookieCrisp: 0,
      Wheaties: 0
    },
    counter: 0,
    questionId: 1,
    question: '',
    result: ''
  });
  this.componentWillMount();
}

getResults() {
  const ansCount = this.state.ansCount;
  const ansCountKeys = Object.keys(ansCount);
  const ansCountValues = ansCountKeys.map((key) => ansCount[key]);
  const maxAnswerCount = Math.max.apply(null, ansCountValues);

  return ansCountKeys.filter((key) => ansCount[key] === maxAnswerCount);
}

renderQuiz() {
  return (
    <Quiz
      answer={this.state.answer}
      answers={this.state.answers}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={Questions.length}
      onAnswerSelected={this.handleSelection}
    />
  );
}

renderResult() {
  return (
    <div className="Result">
      <Result quizResult={this.state.result} />
      <div className="Result-button">
        <Button color="red">
        Retry
        &nbsp;
        <Icon name='repeat' onClick={this.refresh}/>
        </Button>
      </div>
    </div>
  );
}

  render() {
    return (
      <div>
        <Header />
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
