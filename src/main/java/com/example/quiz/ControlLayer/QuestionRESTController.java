package com.example.quiz.ControlLayer;
import com.example.quiz.ServiceLayer.QuestionService;
import com.example.quiz.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/questions")
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionRESTController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> list(){
        return questionService.findAllQuestions();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Question get(@PathVariable Long id){
        return questionService.findQuestionById(id);
    }

    @PostMapping
    public Question create(@RequestBody final Question question) {
        return questionService.saveQuestion(question);
    }


}

//haal een question (en alle bijbehorende kolommen zoals in de service class gedefinieerd) uit de database door een ID in te geven.
  /*  @GetMapping("/questions/{id}")
    public Questions getQuestionById(@PathVariable("id") Long id) throws NotFoundException {
        return questionsRepository.findById(id).orElseThrow(() -> new NotFoundException(String.format("question %d not found", id)));
    }

    //get answeroptions with questionid
    @GetMapping("/questions/{questionId}/answerOptions")
    public List<AnswerExplanations> getAnswersOptionsByAnswerexId(@PathVariable Long answerexid) {
        return answerExplanationsRepository.findAnswerOptionsByAnswerexid(answerexid);
    }

 /*   @PostMapping("/questions")
    public Questions createQuestions(@RequestBody Questions questions) {
        return questionsRepository.save(questions);
    }
    */




 //   @GetMapping
  //  public String findQuestions(Model model) {


      //  List<Questions> questions = (List<Questions>) questionsService.findAll();

      //  model.addAttribute("questions", questions);

      //  return "showQuestions";
   // }







    /*   @PostMapping("/questions")
       public ResponseEntity<Object> createQuestion(@RequestBody Questions question) {
           Questions savedQuestion = questionsRepository.save(question);

           URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                   .buildAndExpand(savedQuestion.getQuestionid()).toUri();

           return ResponseEntity.created(location).build();

       }


       @GetMapping("/questions/{id}")
       public List <Questions> retrieveQuestion(@PathVariable long id) {
           return questionsRepository.findById(id);
       }
   */

//het toevoegen van een question
/*  @PostMapping
    public Questions addQuestion(@RequestBody Questions question) {
      return questionsRepository.save(question);
    }
    */







