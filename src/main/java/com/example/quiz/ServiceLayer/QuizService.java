package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.Quiz;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public List<Quiz> findAllSurveys() {
        return quizRepository.findAll();
    }

    public Quiz findSurveyById(Long id) {
        return quizRepository.getOne(id);
    }

    public Quiz saveSurvey(Quiz quiz) {
        return quizRepository.saveAndFlush(quiz);
    }

    public Quiz ResponseToSubmission(Quiz newQuiz) {
        System.out.println("quiz id : " + newQuiz.getId());
        Optional<Quiz> optQuiz = quizRepository.findById(newQuiz.getId());
        System.out.println("optQuiz is present : " + optQuiz.isPresent());
        System.out.println("optQuiz get : " + optQuiz.get().getId());
        if (optQuiz.isPresent()) {
            Quiz quizid = optQuiz.get();
            newQuiz.setId(quizid.getId());
            quizRepository.save(newQuiz);
            return new Quiz();
        } else {
            System.out.println("En hier komen we dus zowiezo?");
            return new Quiz();
        }
        }
}
