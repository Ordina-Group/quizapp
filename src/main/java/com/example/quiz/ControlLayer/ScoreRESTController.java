package com.example.quiz.ControlLayer;

import com.example.quiz.ServiceLayer.ScoreService;
import com.example.quiz.model.Quiz;
import com.example.quiz.model.Score;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/scores")
public class ScoreRESTController {

    private final ScoreService scoreService;

    public ScoreRESTController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @GetMapping("/{id}")
    public List<Score> get(@PathVariable Long id) {
        return scoreService.findScoresByQuizId(id);
    }

    @PostMapping("/{id}")
    public Score submitScore(@RequestBody final Score score, @PathVariable Long id) {
        return scoreService.saveScore(score,id);
    }

}