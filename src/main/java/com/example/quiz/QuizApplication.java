package com.example.quiz;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.ScoreRepository;
import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.Question;
import com.example.quiz.model.Score;
import com.example.quiz.model.Quiz;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class QuizApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizApplication.class);
    }

    @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:8080");
                registry.addMapping("/**").allowedOrigins("http://localhost:4200");
			}
		};
	}

    @Bean
    public CommandLineRunner demo(QuizRepository quizRepository, ScoreRepository scoreRepository, QuestionRepository questionRepository, AnswerOptionRepository answerOptionRepository) {
        return (args) -> {

            Quiz quiz = new Quiz();
            quiz.setQuizDescription("Survey DevoxxxKids dag");

            Question question1 = new Question("Slag bij Hastings?", 1,"FW4RKp23Z4M");
            //question1.setId(1L);
            Question question2 = new Question("Slag bij Nieuwpoort?", 2, "WBk5rR_2b8Q");
            //question2.setId(2L);
            Question question3 = new Question("Slag bij Waterloo?", 3, "nDZGL1xsqzs");
            //question3.setId(3L);

            //save answeroptions
            Set<AnswerOption> setAnswerOptions1 = new HashSet<AnswerOption>();
            Set<AnswerOption> setAnswerOptions2 = new HashSet<AnswerOption>();
            Set<AnswerOption> setAnswerOptions3 = new HashSet<AnswerOption>();

            AnswerOption answerOption1 = new AnswerOption("1065",false, "Onjuist, het was 1 jaar later, in 1066");
            AnswerOption answerOption2 = new AnswerOption("1066",true,  "Juist, het was in 1066");
            AnswerOption answerOption3 = new AnswerOption("1067",false, "Onjuist, het was 1 jaar eerder, in 1066");
            AnswerOption answerOption4 = new AnswerOption("1600",true,"Juist, het was in 1600");
            AnswerOption answerOption5 = new AnswerOption("1601",false, "Onjuist, het was 1 jaar eerder, in 1600");
            AnswerOption answerOption6 = new AnswerOption("1602",false, "Onjuist, het was 2 jaar eerder, in 1600");
            AnswerOption answerOption7 = new AnswerOption("1813",false, "Onjuist, het was 2 jaar later, in 1815" );
            AnswerOption answerOption8 = new AnswerOption("1814",false, "Onjuist, het was 1 jaar later, in 1815");
            AnswerOption answerOption9 = new AnswerOption("1815",true, "Juist, het was in 1815");

            setAnswerOptions1.add(answerOption1);
            setAnswerOptions1.add(answerOption2);
            setAnswerOptions1.add(answerOption3);
            setAnswerOptions2.add(answerOption4);
            setAnswerOptions2.add(answerOption5);
            setAnswerOptions2.add(answerOption6);
            setAnswerOptions3.add(answerOption7);
            setAnswerOptions3.add(answerOption8);
            setAnswerOptions3.add(answerOption9);

            question1.setAnswerOptions(setAnswerOptions1);
            question2.setAnswerOptions(setAnswerOptions2);
            question3.setAnswerOptions(setAnswerOptions3);

            Set<Question> setQuestions = new HashSet<Question>();
            setQuestions.add(question1);
            setQuestions.add(question2);
            setQuestions.add(question3);
            quiz.setQuestions(setQuestions);

            Quiz returnedQuiz = quizRepository.save(quiz);

            Score score1 = new Score("Player 1", 1, new Date(120,6,17,12,34,56),"17/07/2020 12:34:56",returnedQuiz.getId());
            Score score2 = new Score("Player 2", 2, new Date(120,6,18,12,34,56),"18/07/2020 12:34:56",returnedQuiz.getId());
            Score score3 = new Score("Player 3", 3, new Date(120,6,19,12,34,56),"19/07/2020 12:34:56",returnedQuiz.getId());
            scoreRepository.save(score1);
            scoreRepository.save(score2);
            scoreRepository.save(score3);
        };
    }
}



