package com.example.quiz.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="answerIsCorrect")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class AnswerIsCorrect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private int number;
    private String value;
    private Boolean isCorrect;
    private String answerExplanation;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "number", nullable = false)
    @JsonIgnore
    private AnswerOption answer;



    protected AnswerIsCorrect() {

    }

    public AnswerIsCorrect(int number, String value, Boolean isCorrect, Question question, String answerExplanation) {
        this.number= number;
        this.isCorrect = isCorrect;
        this.answerExplanation = answerExplanation;
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

    public String getAnswerExplanation() {
        return answerExplanation;
    }

    public void setAnswerExplanation(String answerExplanation) {
        this.answerExplanation = answerExplanation;
    }
}



