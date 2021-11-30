import React from "react";

function QuestionItem({ question, onHandleDelete, onHandlePatch }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    function handleDelete(e){
      fetch(`http://localhost:4000/questions/${question.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(r=>console.log(r.json))
      .then(onHandleDelete(question))
    }
    function handleChange(e){
      fetch(`http://localhost:4000/questions/${question.id}`, {
        method: "PATCH",
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correctIndex: e.target.value
        })
      })
      .then(onHandlePatch(question.id, e.target.value))
    }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange = {handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
