package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.ServiceLayer.SubmittedAnswerService;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/quiz/submittedanswers")
public class SubmittedAnswerRESTController {

    private final SubmittedAnswerRepository submittedAnswerRepository;
    private final SubmittedAnswerService submittedAnswerService;

    public SubmittedAnswerRESTController(SubmittedAnswerRepository submittedAnswerRepository, SubmittedAnswerService submittedAnswerService) {
        this.submittedAnswerRepository = submittedAnswerRepository;
        this.submittedAnswerService = submittedAnswerService;
    }

    @GetMapping
    @RequestMapping("{id}")
    public SubmittedAnswer get(@PathVariable Long id) {
        return submittedAnswerRepository.getOne(id);
    }

    //Requestbody laat het antwoord vd gebruiker hier binnenkomen
    @PostMapping()
    public ResponseEntity<AnswerIsCorrect> createSubmittedAnswer(@RequestBody SubmittedAnswer submittedAnswer) {
        AnswerIsCorrect answer = submittedAnswerService.ResponseToSubmission(submittedAnswer);
        return new ResponseEntity<>(answer, new HttpHeaders(), HttpStatus.OK);
    }
}


