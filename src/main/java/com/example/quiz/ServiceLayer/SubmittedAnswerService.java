package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.AnswerIsCorrectRepository;
import com.example.quiz.Repository.SubmittedAnswerRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.SubmittedAnswer;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SubmittedAnswerService {

    private final AnswerIsCorrectRepository answerIsCorrectRepository;
    private final SubmittedAnswerRepository submittedAnswerRepository;

    public SubmittedAnswerService(AnswerIsCorrectRepository answerIsCorrectRepository, SubmittedAnswerRepository submittedAnswerRepository) {
        this.answerIsCorrectRepository = answerIsCorrectRepository;
        this.submittedAnswerRepository = submittedAnswerRepository;
    }

    public AnswerIsCorrect ResponseToSubmission(SubmittedAnswer submittedAnswer) {
        System.out.println("submittedAnswer : " + submittedAnswer.getChosenAnswerId());

        Optional<AnswerIsCorrect> optAnswerIsCorrect = answerIsCorrectRepository.findById(submittedAnswer.getChosenAnswerId());
        if (optAnswerIsCorrect.isPresent()) {
            AnswerIsCorrect answerIsCorrect = optAnswerIsCorrect.get();
            submittedAnswer.setAnsweredCorrect(answerIsCorrect.getIsCorrect());
            submittedAnswerRepository.save(submittedAnswer);
            return answerIsCorrect;
        } else {
            System.out.println("En hier komen we dus zowiezo?");
            return new AnswerIsCorrect(1L, false, "hallo");
        }


    }
}


