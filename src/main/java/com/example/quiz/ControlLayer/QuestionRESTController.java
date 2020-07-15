package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.QuestionService;
import com.example.quiz.model.Question;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@RestController
//@RequestMapping("/quiz/questions")
public class QuestionRESTController {

    private final QuestionService questionService;

    public QuestionRESTController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> list() {
        return questionService.findAllQuestions();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Question get(@PathVariable Long id) {
        return questionService.findQuestionById(id);
    }

    @PostMapping
    public Question create(@RequestBody final Question question) {
        return questionService.saveQuestion(question);
    }

}