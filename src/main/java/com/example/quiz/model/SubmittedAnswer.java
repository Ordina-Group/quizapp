package com.example.quiz.model;

import javax.persistence.*;

@Entity
@Table(name = "submittedAnswers")
public class SubmittedAnswer {

    Long surveyid;
    Long questionid;
    Long chosenAnswerId;
    Boolean answeredCorrect;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    protected SubmittedAnswer() {
    }

    public SubmittedAnswer(Long surveyid, Long questionid, Long chosenAnswerId, boolean answeredCorrect) {
        this.surveyid = surveyid;
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

    public Long getSurveyid() {
        return surveyid;
    }

    public void setSurveyid(Long surveyid) {
        this.surveyid = surveyid;
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
