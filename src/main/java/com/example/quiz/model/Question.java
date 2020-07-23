package com.example.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "questions")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Question implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String questionDescription;
    private int questionNumber;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<AnswerOption> answerOptions;

    public Question() {
    }

    public Question(String questionDescription, int questionNumber) {
        this.questionDescription = questionDescription;
        this.questionNumber = questionNumber;
        this.answerOptions = new HashSet<>();
    }

    public Question(Question question){
        this(question.getQuestionDescription(), question.getQuestionNumber());
        this.answerOptions = question.getAnswerOptions();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuestionNumber() {
        return questionNumber;
    }

    public void setQuestionNumber(int questionNumber) {
        this.questionNumber = questionNumber;
    }

    public String getQuestionDescription() {
        return questionDescription;
    }

    public void setQuestionDescription(String questionDescription) {
        this.questionDescription = questionDescription;
    }

    public Set<AnswerOption> getAnswerOptions() {
        return answerOptions;
    }

    public void setAnswerOptions(Set<AnswerOption> answerOptions) {
        this.answerOptions = answerOptions;
    }


    public int getNumber() {
        return questionNumber;
    }

    public void setNumber(int questionNumber) {
        this.questionNumber = questionNumber;
    }


    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", questionDescription='" + questionDescription + '\'' +
                ", questionNumber=" + questionNumber +
                ", answerOptions=" + answerOptions +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Question question = (Question) o;
        return questionNumber == question.questionNumber &&
                id.equals(question.id) &&
                questionDescription.equals(question.questionDescription) &&
                answerOptions.equals(question.answerOptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, questionDescription, questionNumber, answerOptions);
    }


}
