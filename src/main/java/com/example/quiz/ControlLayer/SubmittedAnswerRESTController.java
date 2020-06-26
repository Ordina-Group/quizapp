
package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.ServiceLayer.SubmittedAnswerService;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz/submittedanswers")
@CrossOrigin(origins = "*")
public class SubmittedAnswerRESTController {

    @Autowired
    private SubmittedAnswerRepository submittedAnswerRepository;
    @Autowired
    private SubmittedAnswerService submittedAnswerService;

    @GetMapping
    @RequestMapping("{id}")
    public SubmittedAnswer get(@PathVariable Long id){
        return submittedAnswerRepository.getOne(id);
    }

    //Requestbody laat het antwoord vd gebruiker hier binnenkomen
    @PostMapping("/submittedAnswer")
    public ResponseEntity<AnswerIsCorrect> createSubmittedAnswer(@RequestBody SubmittedAnswer submittedAnswer) {
        AnswerIsCorrect answer = submittedAnswerService.ResponseToSubmission(submittedAnswer);
        return  new ResponseEntity<>(answer, new HttpHeaders(), HttpStatus.OK);
    }
}


