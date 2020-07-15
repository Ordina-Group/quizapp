package com.example.quiz.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "answerIsCorrect")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AnswerIsCorrect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long answerOptionId;
    private Boolean isCorrect;
    private String answerExplanation;

    public AnswerIsCorrect(Long answerOptionId, Boolean isCorrect, String answerExplanation) {
        this.answerOptionId = answerOptionId;
        this.isCorrect = isCorrect;
        this.answerExplanation = answerExplanation;
    }

    public AnswerIsCorrect() {
    }

    public Long getAnswerOptionId() {
        return answerOptionId;
    }

    public void setAnswerOptionId(Long answerOptionId) {
        this.answerOptionId = answerOptionId;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public String getAnswerExplanation() {
        return answerExplanation;
    }

    public void setAnswerExplanation(String answerExplanation) {
        this.answerExplanation = answerExplanation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}



