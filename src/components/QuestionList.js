import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onHandleDelete, onHandlePatch }) {
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question=>{
        return <QuestionItem question = {question} key = {question.id} onHandleDelete = {onHandleDelete} onHandlePatch = {onHandlePatch}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
