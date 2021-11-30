import React, { useState } from "react";
import { useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function onHandleDelete(question){
    setQuestions(questions.filter(que=>{
      if(que.id === question.id){
        return false;
      }
      else{
        return true;
      }
    }))
  }

  function onHandlePatch(id, index){
    console.log(id)
    setQuestions(questions.map(question=>{
      if(question.id === id){
        const newquestion = question;
        newquestion.correctIndex = index;
        return newquestion;
      }
      else{
        return question;
      }
    }))
  }

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(r=>setQuestions(r))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestions = {setQuestions} questions = {questions}/> : <QuestionList questions = {questions} onHandleDelete = {onHandleDelete} onHandlePatch = {onHandlePatch}/>}
    </main>
  );
}

export default App;
