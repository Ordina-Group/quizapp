package com.example.quiz.Repository;

import com.example.quiz.model.QuestionAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyAnswerRepository extends JpaRepository<QuestionAnswer, Long> {

 //   Optional<SurveyAnswers> findById(Long id);

// Optional<SurveyAnswers> findChoosenAnswerByQuestionId(Long questionid);

}


