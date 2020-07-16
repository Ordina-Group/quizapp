package com.example.quiz.model;

import javax.persistence.*;

@Entity
@Table(name = "submittedAnswers")
public class SubmittedAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Long quizid;
    Long questionid;
    Long chosenAnswerId;
    Boolean answeredCorrect;

    protected SubmittedAnswer() {
    }

    public SubmittedAnswer(Long quizid, Long questionid, Long chosenAnswerId, boolean answeredCorrect) {
        this.quizid = quizid;
        this.questionid = questionid;
        this.chosenAnswerId = chosenAnswerId;
        this.answeredCorrect = answeredCorrect;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuizid() {
        return quizid;
    }

    public void setQuizid(Long quizid) {
        this.quizid = quizid;
    }

    public Long getQuestionid() {
        return questionid;
    }

    public void setQuestionid(Long questionid) {
        this.questionid = questionid;
    }

    public Long getChosenAnswerId() {
        return chosenAnswerId;
    }

    public void setChosenAnswerId(Long chosenAnswerId) {
        this.chosenAnswerId = chosenAnswerId;
    }

    public Boolean getAnsweredCorrect() {
        return answeredCorrect;
    }

    public void setAnsweredCorrect(Boolean answeredCorrect) {
        this.answeredCorrect = answeredCorrect;
    }

}
