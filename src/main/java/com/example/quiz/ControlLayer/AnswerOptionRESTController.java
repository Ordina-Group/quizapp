package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.model.AnswerOption;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
//@RequestMapping("/quiz/answeroptions")
public class AnswerOptionRESTController {

    private final AnswerOptionRepository answerOptionRepository;

    public AnswerOptionRESTController(AnswerOptionRepository answerOptionRepository) {
        this.answerOptionRepository = answerOptionRepository;
    }

    @GetMapping
    public List<AnswerOption> list() {
        return answerOptionRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public AnswerOption get(@PathVariable Long id) {
        return answerOptionRepository.getOne(id);
    }

    @PostMapping
    public AnswerOption create(@RequestBody final AnswerOption answerOption) {
        return answerOptionRepository.saveAndFlush(answerOption);
    }


}


