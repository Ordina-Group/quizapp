package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.QuizService;
import com.example.quiz.model.Quiz;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/surveys")
public class QuizRESTController {

    private final QuizService quizService;

    public QuizRESTController(QuizService quizService) {
        this.quizService = quizService;
    }

    //surveys
    @GetMapping
    public List<Quiz> list() {
        return quizService.findAllSurveys();
    }

    //surveys/1
    @GetMapping
    @RequestMapping("{id}")
    public Quiz get(@PathVariable Long id) {
        return quizService.findSurveyById(id);
    }

    @PostMapping
    public Quiz create(@RequestBody final Quiz quiz) {
        return quizService.saveSurvey(quiz);
    }


}









