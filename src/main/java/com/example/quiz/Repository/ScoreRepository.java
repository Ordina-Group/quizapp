package com.example.quiz.Repository;

import com.example.quiz.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {
    //@Query("SELECT s FROM Score s WHERE s.quiz.id = ?1")
    //public List<Score> findAllByQuizId(Long quizId);
}