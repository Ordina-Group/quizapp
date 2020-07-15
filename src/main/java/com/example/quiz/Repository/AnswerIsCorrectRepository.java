package com.example.quiz.Repository;

import com.example.quiz.model.AnswerIsCorrect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AnswerIsCorrectRepository extends JpaRepository<AnswerIsCorrect, Long> {
}

