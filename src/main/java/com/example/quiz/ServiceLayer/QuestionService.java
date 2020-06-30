package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> findAllQuestions() {
        return questionRepository.findAll(Sort.by(Sort.Direction.ASC, "number"));


    }


    public Question findQuestionById(Long id){
        return questionRepository.getOne(id);

    }

    public Question saveQuestion(Question question) {
        return questionRepository.saveAndFlush(question);
    }


}


