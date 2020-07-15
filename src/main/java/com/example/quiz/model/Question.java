package com.example.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "questions")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questionid")
    private Long id;

    private String questionDescription;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private Set<AnswerOption> answerOptions;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "surveyid", nullable = false)
    @JsonIgnore
    private Quiz quiz;

    private int questionNumber;


    public Question() {
    }


    public Question(String questionDescription, int questionNumber, Quiz quiz) {
        this.quiz = quiz;
        this.questionDescription = questionDescription;
        this.questionNumber = questionNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public int getNumber() {
        return questionNumber;
    }

    public void setNumber(int questionNumber) {
        this.questionNumber = questionNumber;
    }

    public String questionToString() {
        return String.format(
                "Question[id=%d, questiondescription='%s']",
                id, questionDescription, answerOptions);
    }


}
