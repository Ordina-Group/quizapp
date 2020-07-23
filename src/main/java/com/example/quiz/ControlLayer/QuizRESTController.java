package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.QuizService;
import com.example.quiz.model.Quiz;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz")
public class QuizRESTController {

    private QuizService quizService;

    public QuizRESTController(QuizService quizService) {
        this.quizService = quizService;
    }


    @GetMapping
    public List<Quiz> list() {
        return quizService.findAllQuizs();
    }

    //quiz/1
    @GetMapping
    @RequestMapping("/{id}")
    public Quiz get(@PathVariable Long id) {
        return quizService.findQuizById(id);
    }

    @PostMapping()
    @ResponseStatus(value = HttpStatus.CREATED)
    public Long createQuiz(@RequestBody Quiz newQuiz) {
        System.out.println(newQuiz);
        Long s = quizService.ResponseToSubmission(newQuiz);
        return s;

    }


}









