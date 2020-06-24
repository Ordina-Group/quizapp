
package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.ServiceLayer.SubmittedAnswerService;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz/submittedanswers")
@CrossOrigin(origins = "http://localhost:8080")
public class SubmittedAnswerRESTController {

    @Autowired
    private SubmittedAnswerRepository submittedAnswerRepository;
    private SubmittedAnswerService submittedAnswerService;

    @GetMapping
    @RequestMapping("{id}")
    public SubmittedAnswer get(@PathVariable Long id){
        return submittedAnswerRepository.getOne(id);
    }
    //Requestbody laat het antwoord vd gebruiker hier binnenkomen
    @PostMapping("/submittedAnswer")
    public Optional<AnswerIsCorrect> createSubmittedAnswer(@RequestBody SubmittedAnswer submittedAnswer) {
        return submittedAnswerService.ResponseToSubmission(submittedAnswer);
    }
}


