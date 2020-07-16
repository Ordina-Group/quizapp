package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.Question;
import com.example.quiz.model.Quiz;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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

    public String ResponseToSubmission(Quiz newQuiz) {
    //    System.out.println("quiz id : " + newQuiz.getId());

   //     Optional<Quiz> optQuiz = quizRepository.findById(newQuiz.getId());
   //     System.out.println("optQuiz is present : " + optQuiz.isPresent());
     //   System.out.println("optQuiz get : " + optQuiz.get().getId());
   //     if (optQuiz.isPresent()) {
        System.out.println(newQuiz.getId());
        Question quest = new Question();
        Set<Question> q = new HashSet<Question>();
        q.add(quest);
            quizRepository.save(newQuiz);
            System.out.println(newQuiz.getId());
            return "test" ;
        }

        }


