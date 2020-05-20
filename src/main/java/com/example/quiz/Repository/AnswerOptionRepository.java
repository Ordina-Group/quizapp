package com.example.quiz.Repository;

import com.example.quiz.model.AnswerOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
    public interface AnswerOptionRepository extends JpaRepository<AnswerOption, Long> {
        //List<AnswerExplanations> findAnswerOptionsByAnswerexid(Long answerexid);


  //  List<Answeroptions> findByQuestions(Questions questions, Sort sort);
    //Vindt de antwoordmogelijkheden door het id in te geven van de bijbehorende tabel (dus answeroptions id).
    //Optional<AnswerOption> findById(Long id);

    //Vindt de antwoordmogelijkheden door de vraag id mee op te geven die erbij hoort.
    //List<AnswerOption> findByQuestionId(Long questionid);

    }

