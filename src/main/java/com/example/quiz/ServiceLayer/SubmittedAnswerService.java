package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.AnswerIsCorrectRepository;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.Question;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.Console;
import java.util.List;
import java.util.Optional;

@Service
public class SubmittedAnswerService {

    @Autowired
    private AnswerIsCorrectRepository answerIsCorrectRepository;
    @Autowired
    private SubmittedAnswerRepository submittedAnswerRepository;

    public AnswerIsCorrect ResponseToSubmission(SubmittedAnswer submittedAnswer) {
        System.out.println("submittedAnswer : " + submittedAnswer.getChosenAnswerId());

        Optional<AnswerIsCorrect> optAnswerIsCorrect = answerIsCorrectRepository.findById(submittedAnswer.getChosenAnswerId());
        System.out.println("optAnswerIsCorrect is present : " + optAnswerIsCorrect.isPresent());
        System.out.println("optAnswerIsCorrect get : " + optAnswerIsCorrect.get().getCorrect());
        if (optAnswerIsCorrect.isPresent()) {
            AnswerIsCorrect answerIsCorrect = optAnswerIsCorrect.get();
            submittedAnswer.setAnsweredCorrect(answerIsCorrect.getCorrect());
            submittedAnswerRepository.save(submittedAnswer);
            return answerIsCorrect;
        } else {
            System.out.println("En hier komen we dus zowiezo?");
            return new AnswerIsCorrect(1L,false, "hallo");
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


