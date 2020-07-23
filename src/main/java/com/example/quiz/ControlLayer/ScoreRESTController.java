package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.ScoreService;
import com.example.quiz.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/scores")
public class ScoreRESTController {

    @Autowired
    private ScoreService scoreService;

    @GetMapping
    public List<Score> getAllScores() {
        return scoreService.findAllScores();
    }

    @GetMapping("/{quizid}")
    public List<Score> getScoresByQuizId(@PathVariable Long quizid) {
        return scoreService.findScoresByQuizId(quizid);
    }

    @PostMapping("/{quizid}")
    public Score submitScore(@RequestBody final Score score, @PathVariable Long quizid) {
        return scoreService.saveScore(score);
    }

}