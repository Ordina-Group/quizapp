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
    private int number;
    private String value;
    private Boolean isCorrect;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "questionid", nullable = false)
    @JsonIgnore
    private Question question;



    protected AnswerOption() {

    }

    public AnswerOption(int number, String value, Boolean isCorrect, Question question) {
        this.number= number;
        this.value = value;
        this.isCorrect = isCorrect;
        this.question = question;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getCorrect() {
        return isCorrect;
    }

    public void setCorrect(Boolean correct) {
        isCorrect = correct;
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


    public String AnsweroptionsToString() {
        return String.format(
                "AnswerOptions[number=%d, answerOptions='%s', isCorrect='%s' ]",
                number, value, isCorrect);
    }


}



