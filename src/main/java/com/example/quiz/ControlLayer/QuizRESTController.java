package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.QuizService;
import com.example.quiz.model.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/surveys")
public class QuizRESTController {

    @Autowired
    private QuizService quizService;

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

   @PostMapping()
 public ResponseEntity<Quiz> create(@RequestBody final Quiz newquiz) {
     Quiz quiz = quizService.ResponseToSubmission(newquiz);
       return new ResponseEntity<>(quiz, new HttpHeaders(), HttpStatus.OK);
   }



}









