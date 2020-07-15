package com.example.quiz.Repository;

import com.example.quiz.model.SubmittedAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SubmittedAnswerRepository extends JpaRepository<SubmittedAnswer, Long> {

}

