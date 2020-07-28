package com.example.quiz.ServiceLayer;

import com.example.quiz.Repository.ScoreRepository;
import com.example.quiz.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> findAllScores() {return scoreRepository.findAll(); }

    public List<Score> findScoresByQuizId(Long id) {
        List<Score> listScores;
        List<Score> listScores2 = new ArrayList<>();
        listScores = scoreRepository.findAll();
        for (Score currentScore : listScores){
            if(currentScore.getQuizid() == id){
                listScores2.add(currentScore);
            }
        }
        return listScores2;
    }

/*    public Question findQuestionById(Long id) {
        return questionRepository.getOne(id);
    }*/

    public Score saveScore(Score score, long quizid) {
        System.out.println(score.getId() + "" + quizid);
        score.setQuizid(quizid);
        return scoreRepository.save(score);
    }
}