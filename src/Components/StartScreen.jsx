function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Wellcoem to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn btn-ui">let's start</button>
    </div>
  );
}

export default StartScreen;
