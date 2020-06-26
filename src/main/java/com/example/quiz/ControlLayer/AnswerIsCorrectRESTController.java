
package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.AnswerIsCorrectRepository;
import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.AnswerOption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz/answeriscorrect")
@CrossOrigin(origins = "*")
public class AnswerIsCorrectRESTController {

    @Autowired
    private AnswerIsCorrectRepository answerIsCorrectRepository;

    @GetMapping
    public List<AnswerIsCorrect> list(){
        return answerIsCorrectRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public AnswerIsCorrect get(@PathVariable Long id){

        return answerIsCorrectRepository.getOne(id);
    }

    @PostMapping
    public AnswerIsCorrect create(@RequestBody final AnswerIsCorrect answerIsCorrect) {
        return answerIsCorrectRepository.saveAndFlush(answerIsCorrect);
    }

}


