package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.ScoreService;
import com.example.quiz.model.Score;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/quiz/scores")
public class ScoreRESTController {

    private final ScoreService scoreService;

    public ScoreRESTController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping("/{quizid}")
    public Score submitScore(@RequestBody final Score score, @PathVariable Long quizid) {
        return scoreService.saveScore(score,quizid);
    }

}