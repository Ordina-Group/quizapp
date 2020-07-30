package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.Quiz;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SubmittedAnswerService {

    @Autowired
    private AnswerOptionRepository answerOptionRepository;
    @Autowired
    private SubmittedAnswerRepository submittedAnswerRepository;

    public AnswerOption ResponseToSubmission(SubmittedAnswer submittedAnswer) {

        Optional<AnswerOption> optAnswerOption = answerOptionRepository.findById(submittedAnswer.getChosenAnswerId());

        if (optAnswerOption.isPresent()) {
            AnswerOption answerOption = optAnswerOption.get();
            submittedAnswer.setAnsweredCorrect(answerOption.getIsCorrect());
            submittedAnswerRepository.save(submittedAnswer);
            return answerOption;
        } else {
            System.out.println("En hier komen we dus zowiezo?");
            return new AnswerOption(1L, "hallo", false);
        }

        // check of antwoord goed is
        //haal AnswerIsCorrect object op dmv repository met answerID
        //

        //set isCorrect op submittedAnswer

        //sla submittedAnswer op in repository (en daarmee database)

        //return response naar controller
    }

//    public List<SubmittedAnswer> findAllSubmittedAnswers() {
//        return SubmittedAnswerRepository.findAll();
//    }


}


