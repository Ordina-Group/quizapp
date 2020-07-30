package com.example.quiz.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "answerOptions")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AnswerOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String value;
    private Boolean isCorrect;
    private String answerExplanation;

    protected AnswerOption() {}
    public AnswerOption(String value, Boolean isCorrect, String answerExplanation) {
        this.value = value;
        this.isCorrect = isCorrect;
        this.answerExplanation = answerExplanation;
    }
    public AnswerOption(AnswerOption answerOption) {
        this(answerOption.getValue(), answerOption.getIsCorrect(), answerOption.answerExplanation);
    }
    public AnswerOption(Long id, String s, boolean b) {
        this.id = id;
        this.value = s;
        this.isCorrect = b;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }
    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public String getAnswerExplanation() { return answerExplanation; }
    public void setAnswerExplanation(String answerExplanation) { this.answerExplanation = answerExplanation; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AnswerOption that = (AnswerOption) o;
        return isCorrect == that.isCorrect &&
                id.equals(that.id) &&
                value.equals(that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, value, isCorrect);
    }


    @Override
    public String toString() {
        return "AnswerOption{" +
                "id=" + id +
                ", value='" + value + '\'' +
                ", isCorrect=" + isCorrect +
                '}';
    }
}



