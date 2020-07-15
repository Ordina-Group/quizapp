package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.QuestionService;
import com.example.quiz.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/questions")
public class QuestionRESTController {

    @Autowired
    private QuestionService questionService;

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