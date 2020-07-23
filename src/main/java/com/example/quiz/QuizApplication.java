package com.example.quiz;

import com.example.quiz.Repository.AnswerIsCorrectRepository;
import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.ScoreRepository;
import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.AnswerIsCorrect;
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
    public CommandLineRunner demo(QuizRepository quizRepository, ScoreRepository scoreRepository, QuestionRepository questionRepository, AnswerOptionRepository answerOptionRepository, AnswerIsCorrectRepository answerIsCorrectRepository) {
        return (args) -> {

            Quiz quiz = new Quiz();
            quiz.setQuizDescription("Survey DevoxxxKids dag");

            Question question = new Question("Slag bij Nieuwpoort?", 1);
            Question question2 = new Question("Slag bij Hastings?", 2);
            Question question3 = new Question("Slag bij Waterloo?", 3);

            //save answeroptions
            Set<AnswerOption> setAnswerOptions = new HashSet<AnswerOption>();
            setAnswerOptions.add(new AnswerOption( "1600", true));
            setAnswerOptions.add(new AnswerOption( "1601", false));
            setAnswerOptions.add(new AnswerOption( "1602", false));
            Set<AnswerOption> setAnswerOptions2 = new HashSet<AnswerOption>();
            setAnswerOptions2.add(new AnswerOption( "1065", false));
            setAnswerOptions2.add(new AnswerOption( "1066", true));
            setAnswerOptions2.add(new AnswerOption( "1067", false));
            Set<AnswerOption> setAnswerOptions3 = new HashSet<AnswerOption>();
            setAnswerOptions3.add(new AnswerOption( "1813", false));
            setAnswerOptions3.add(new AnswerOption( "1814", false));
            setAnswerOptions3.add(new AnswerOption( "1815", true));
            question.setAnswerOptions(setAnswerOptions);
            question2.setAnswerOptions(setAnswerOptions2);
            question3.setAnswerOptions(setAnswerOptions3);

            Set<Question> setQuestions = new HashSet<Question>();
            setQuestions.add(question);
            setQuestions.add(question2);
            setQuestions.add(question3);
            quiz.setQuestions(setQuestions);

            AnswerIsCorrect answerIsCorrect1 = new AnswerIsCorrect(1L,true,"Juist, het was in 1600");
            answerIsCorrectRepository.save(answerIsCorrect1);
            AnswerIsCorrect answerIsCorrect2 = new AnswerIsCorrect(2L,false, "Onjuist, het was 1 jaar eerder, in 1600");
            answerIsCorrectRepository.save(answerIsCorrect2);
            AnswerIsCorrect answerIsCorrect3 = new AnswerIsCorrect(3L,false, "Onjuist, het was 2 jaar eerder, in 1600");
            answerIsCorrectRepository.save(answerIsCorrect3);

            AnswerIsCorrect answerIsCorrect4 = new AnswerIsCorrect(4L,false, "Onjuist, het was 1 jaar later, in 1066");
            answerIsCorrectRepository.save(answerIsCorrect4);
            AnswerIsCorrect answerIsCorrect5 = new AnswerIsCorrect(5L,true,  "Juist, het was in 1066");
            answerIsCorrectRepository.save(answerIsCorrect5);
            AnswerIsCorrect answerIsCorrect6 = new AnswerIsCorrect(6L,false, "Onjuist, het was 1 jaar eerder, in 1066");
            answerIsCorrectRepository.save(answerIsCorrect6);

            AnswerIsCorrect answerIsCorrect7 = new AnswerIsCorrect(7L,false, "Onjuist, het was 2 jaar later, in 1815" );
            answerIsCorrectRepository.save(answerIsCorrect7);
            AnswerIsCorrect answerIsCorrect8 = new AnswerIsCorrect(8L,false, "Onjuist, het was 1 jaar later, in 1815");
            answerIsCorrectRepository.save(answerIsCorrect8);
            AnswerIsCorrect answerIsCorrect9 = new AnswerIsCorrect(9L,true, "Juist, het was in 1815");
            answerIsCorrectRepository.save(answerIsCorrect9);

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



