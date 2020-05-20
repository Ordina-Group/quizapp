package com.example.quiz.ControlLayer;

import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.SurveyAnswerRepository;
import com.example.quiz.model.QuestionAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SurveyAnswerRESTController {


    @Autowired
    private SurveyAnswerRepository surveyAnswerRepository;


    @Autowired
    private QuestionRepository questionRepository;


    //het ingeven van een antwoord (choosenAnswer) naar de database
    @PostMapping("/chosenanswer")
    public QuestionAnswer addAnswer(@RequestBody QuestionAnswer surveyanswer) {
      surveyanswer.addQuestions(surveyanswer.getQuestion());
        return surveyAnswerRepository.save(surveyanswer);

    }

}

 /*   //bij het ingeven van een questionid, geeft deze het antwoord dat gekozen is door de user mee terug
    @GetMapping("/questions/{questionid}/choosenanswer")
    public Optional<SurveyAnswers> getChoosenAnswerByQuestionsId(@PathVariable(value = "questionid") Long questionid){
        return surveyAnswersRepository.findChoosenAnswerByQuestionId(questionid);
    }

  */

