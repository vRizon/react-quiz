import Options from "./Options";

function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {/* <div className="options">
        {question.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div> */}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
