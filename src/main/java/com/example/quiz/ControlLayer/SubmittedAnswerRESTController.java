
package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.ServiceLayer.SubmittedAnswerService;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/quiz/submittedanswers")
public class SubmittedAnswerRESTController {

    @Autowired
    private SubmittedAnswerRepository submittedAnswerRepository;
    @Autowired
    private SubmittedAnswerService submittedAnswerService;

    @GetMapping
    @RequestMapping("{id}")
    public SubmittedAnswer get(@PathVariable Long id) {
        return submittedAnswerRepository.getOne(id);
    }

    //Requestbody laat het antwoord vd gebruiker hier binnenkomen
    @PostMapping()
    public ResponseEntity<AnswerOption> createSubmittedAnswer(@RequestBody SubmittedAnswer submittedAnswer) {
        AnswerOption answerOption = submittedAnswerService.ResponseToSubmission(submittedAnswer);
        return new ResponseEntity<>(answerOption, new HttpHeaders(), HttpStatus.OK);
    }
}


