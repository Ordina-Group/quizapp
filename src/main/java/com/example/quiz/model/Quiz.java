package com.example.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "quizs")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "quizid")
    private Long id;


    private String quizDescription;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    private Set<Question> questions;

    public Quiz(long id, String quizDescription){
this.id = id;
this.quizDescription = quizDescription;
    }

    public Quiz() {

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
}
