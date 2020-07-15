package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
