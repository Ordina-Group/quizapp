package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.Quiz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> findAllQuizs() {
        return quizRepository.findAll();
    }

    public Quiz findQuizById(Long id) {
        return quizRepository.getOne(id);
    }

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.saveAndFlush(quiz);
    }

    public Long ResponseToSubmission(Quiz newQuiz) {
        this.saveQuiz(newQuiz);
        return newQuiz.getId();
    }

}


