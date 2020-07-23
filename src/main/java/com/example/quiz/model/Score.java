package com.example.quiz.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "scores")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "scoreid")
    private Long id;

    private String userName;
    private int answersCorrect;
    private Date finishTimestamp;
    private String finishTimestampString;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "quizid", nullable = false)
    @JsonIgnore
    private Quiz quiz;
//    private Long quizid;

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getUserName() {return userName;}
    public void setUserName(String userName) {this.userName = userName;}

    public int getAnswersCorrect() {return answersCorrect;}
    public void setAnswersCorrect(int answersCorrect) {this.answersCorrect = answersCorrect;}

    public Date getFinishTimestamp() {return finishTimestamp;}
    public void setFinishTimestamp(Date finishTimestamp) {this.finishTimestamp = finishTimestamp;}

    public String getFinishTimestampString() {return finishTimestampString;}
    public void setFinishTimestampString(String finishTimestampString) {this.finishTimestampString = finishTimestampString;}

    public Long getQuizId() {return quiz.getId();}
    public void setQuizId(Long quizid) {quiz.setId(quizid);}

/*
    public Long getQuizId() {return quizid;}
    public void setQuizId(Long quizid) {this.quizid = quizid;}
*/

    public Score() {}

    public Score(String userName, int answersCorrect, Date finishTimestamp, String finishTimestampString, Quiz quiz) {
        this.userName = userName;
        this.answersCorrect = answersCorrect;
        this.finishTimestamp = finishTimestamp;
        this.finishTimestampString = finishTimestampString;
        this.quiz = quiz;
//        this.quizid = quiz.getId();
    }
}