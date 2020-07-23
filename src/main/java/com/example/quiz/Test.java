/*
package com.example.quiz;

import com.example.quiz.Repository.*;
import com.example.quiz.model.Quiz;
import com.example.quiz.model.Score;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;


public class Test {

    public static void main(String[] args) {

        @Autowired
        QuizRepository quizRepository = new QuizRepository() {};

        ScoreRepository scoreRepository = null;

        String string1 = "Hello World!";

        System.out.println(string1);

        Quiz quiz = new Quiz();
        quiz.setQuizDescription("Survey DevoxxxKids dag");
        quizRepository.save(quiz);

        Score score1 = new Score("Player 1", 1, new Date(120,6,17,12,34,56),"17/07/2020 12:34:56",quiz);
        scoreRepository.save(score1);

        Score score2 = new Score("Player 2", 2, new Date(120,6,18,12,34,56),"18/07/2020 12:34:56",quiz);
        scoreRepository.save(score2);

        Score score3 = new Score("Player 3", 3, new Date(120,6,19,12,34,56),"19/07/2020 12:34:56",quiz);
        scoreRepository.save(score3);

    };
}
*/
