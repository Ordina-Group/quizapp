package com.example.quiz.model;

import javax.persistence.*;

@Entity
@Table(name="questionAnswers")
public class QuestionAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "answeroptionid", nullable = false, updatable = false)
    private AnswerOption chosenAnswer;
    private int userId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "questionid", nullable = false, updatable = false)
    private Question question = new Question();


    protected QuestionAnswer() {
    }


    public QuestionAnswer(int userId, AnswerOption chosenAnswer, Question question) {
        this.userId = userId;
        this.chosenAnswer = chosenAnswer;
        this.question = question;

    }


    public String surveyAnswersToString() {
        return String.format(
                "SurveyAnswers[id=%d,userId=%d, choosenAnswer='%s']",
                id, userId, chosenAnswer);
    }

    public Question getQuestion() {
        return question;
    }

    public Question addQuestions(Question question) {
        this.question = question;
        return question;
    }

    public Question getQuestion(Question question) {
        return question;
    }

    public Long getQuestionid() {

        return question.getId();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AnswerOption getChosenAnswer() {
        return chosenAnswer;
    }

    public void setChosenAnswer(AnswerOption chosenAnswer) {
        this.chosenAnswer = chosenAnswer;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Long getId() {

        return id;
    }

    public int setUserId() {

        return userId;
    }

    public int getUserId() {

        return userId;
    }


}
