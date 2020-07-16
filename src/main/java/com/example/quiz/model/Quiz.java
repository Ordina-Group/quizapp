package com.example.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "quizs")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Quiz implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String quizDescription;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "quiz_id")
    private Set<Question> questions;

    public Quiz() {
    }

    public Quiz( String quizDescription) {
        this.quizDescription = quizDescription;
        this.questions = new HashSet<>();
    }

    public Quiz(Quiz quiz){
        this(quiz.quizDescription);
        this.questions = quiz.getQuestions();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuizDescription() {
        return quizDescription;
    }

    public void setQuizDescription(String quizDescription) {
        this.quizDescription = quizDescription;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Quiz quiz = (Quiz) o;
        return id.equals(quiz.id) &&
                Objects.equals(quizDescription, quiz.quizDescription) &&
                questions.equals(quiz.questions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quizDescription, questions);
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", quizDescription='" + quizDescription + '\'' +
                ", questions=" + questions +
                '}';
    }
}
