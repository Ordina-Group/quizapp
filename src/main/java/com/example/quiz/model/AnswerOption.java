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

    @JsonIgnore
    private boolean isCorrect;

    protected AnswerOption() {
    }

    public AnswerOption(String value, boolean isCorrect) {
        this.value = value;
        this.isCorrect = isCorrect;
    }

    public AnswerOption(AnswerOption answerOption){
        this(answerOption.getValue(), answerOption.isCorrect());
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

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



