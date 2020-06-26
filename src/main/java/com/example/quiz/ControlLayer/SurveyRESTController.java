package com.example.quiz.ControlLayer;
import com.example.quiz.ServiceLayer.SurveyService;
import com.example.quiz.model.Question;
import com.example.quiz.model.Survey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/surveys")        //Alle requests die worden behandeld in deze folder gaan hiernaartoe
@CrossOrigin(origins = "*")
public class SurveyRESTController {

    @Autowired
    private SurveyService surveyService;

    @GetMapping
    public List<Survey> list(){
        return surveyService.findAllSurveys();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Survey get(@PathVariable Long id){

        return surveyService.findSurveyById(id);
    }

    @PostMapping
    public Survey create(@RequestBody final Survey survey) {

        return surveyService.saveSurvey(survey);
    }


}









