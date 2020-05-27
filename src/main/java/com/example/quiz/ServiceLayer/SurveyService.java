package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.SurveyRepository;
import com.example.quiz.model.Question;
import com.example.quiz.model.Survey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

  public List<Survey> findAllSurveys() {

        return surveyRepository.findAll(Sort.by(Sort.Direction.ASC,"id" ));

    }


    public Survey findSurveyById(Long id){
        return surveyRepository.getOne(id);

    }

    public Survey saveSurvey(Survey survey) {
        return surveyRepository.saveAndFlush(survey);
    }
}
