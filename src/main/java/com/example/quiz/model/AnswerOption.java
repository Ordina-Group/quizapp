package com.example.quiz.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="answerOptions")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class AnswerOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String value;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "questionid", nullable = false)
    @JsonIgnore
    private Question question;

    protected AnswerOption() {

    }

    public AnswerOption(String value, Question question) {
        this.value = value;
        this.question = question;

    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    /*public String getanswerOptions() {

        return answerOptions;
    }

    public Boolean getIsCorrect() {

        return isCorrect;
    }*/


//    public String AnsweroptionsToString() {
//        return String.format(
//                "AnswerOptions[number=%d, answerOptions='%s', isCorrect='%s' ]",
//                number, value, isCorrect);
//    }

}



