package com.example.quiz.Repository;
import java.util.Optional;
import com.example.quiz.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {


// deze methode kan een vraagomschrijving 'getten' bij het invoegen/meegeven van een ID
//Optional<Question> findById(Long id);


}