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

            Question question1 = new Question("Slag bij Hastings?", 1);
            //question1.setId(1L);
            Question question2 = new Question("Slag bij Nieuwpoort?", 2);
            //question2.setId(2L);
            Question question3 = new Question("Slag bij Waterloo?", 3);
            //question3.setId(3L);

            //save answeroptions
            Set<AnswerOption> setAnswerOptions1 = new HashSet<AnswerOption>();
            Set<AnswerOption> setAnswerOptions2 = new HashSet<AnswerOption>();
            Set<AnswerOption> setAnswerOptions3 = new HashSet<AnswerOption>();

/*            setAnswerOptions1.add(new AnswerOption("1600", true));
            setAnswerOptions1.add(new AnswerOption("1601", false));
            setAnswerOptions1.add(new AnswerOption("1602", false));
            setAnswerOptions2.add(new AnswerOption("1065", false));
            setAnswerOptions2.add(new AnswerOption("1066", true));
            setAnswerOptions2.add(new AnswerOption("1067", false));
            setAnswerOptions3.add(new AnswerOption("1813", false));
            setAnswerOptions3.add(new AnswerOption("1814", false));
            setAnswerOptions3.add(new AnswerOption("1815", true));*/

            AnswerOption answerOption1 = new AnswerOption("1065",false);
            AnswerOption answerOption2 = new AnswerOption("1066",true);
            AnswerOption answerOption3 = new AnswerOption("1067",false);
            AnswerOption answerOption4 = new AnswerOption("1600",true);
            AnswerOption answerOption5 = new AnswerOption("1601",false);
            AnswerOption answerOption6 = new AnswerOption("1602",false);
            AnswerOption answerOption7 = new AnswerOption("1813",false);
            AnswerOption answerOption8 = new AnswerOption("1814",false);
            AnswerOption answerOption9 = new AnswerOption("1815",true);

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

            Long answerId1 = answerOption1.getId();
            Long answerId2 = answerOption2.getId();
            Long answerId3 = answerOption3.getId();
            Long answerId4 = answerOption4.getId();
            Long answerId5 = answerOption5.getId();
            Long answerId6 = answerOption6.getId();
            Long answerId7 = answerOption7.getId();
            Long answerId8 = answerOption8.getId();
            Long answerId9 = answerOption9.getId();

            AnswerIsCorrect answerIsCorrect1 = new AnswerIsCorrect(answerId1,answerId1,false, "Onjuist, het was 1 jaar later, in 1066");
            AnswerIsCorrect answerIsCorrect2 = new AnswerIsCorrect(answerId2,answerId2,true,  "Juist, het was in 1066");
            AnswerIsCorrect answerIsCorrect3 = new AnswerIsCorrect(answerId3,answerId3,false, "Onjuist, het was 1 jaar eerder, in 1066");
            AnswerIsCorrect answerIsCorrect4 = new AnswerIsCorrect(answerId4,answerId4,true,"Juist, het was in 1600");
            AnswerIsCorrect answerIsCorrect5 = new AnswerIsCorrect(answerId5,answerId5,false, "Onjuist, het was 1 jaar eerder, in 1600");
            AnswerIsCorrect answerIsCorrect6 = new AnswerIsCorrect(answerId6,answerId6,false, "Onjuist, het was 2 jaar eerder, in 1600");
            AnswerIsCorrect answerIsCorrect7 = new AnswerIsCorrect(answerId7,answerId7,false, "Onjuist, het was 2 jaar later, in 1815" );
            AnswerIsCorrect answerIsCorrect8 = new AnswerIsCorrect(answerId8,answerId8,false, "Onjuist, het was 1 jaar later, in 1815");
            AnswerIsCorrect answerIsCorrect9 = new AnswerIsCorrect(answerId9,answerId9,true, "Juist, het was in 1815");

            answerIsCorrectRepository.save(answerIsCorrect1);
            answerIsCorrectRepository.save(answerIsCorrect2);
            answerIsCorrectRepository.save(answerIsCorrect3);
            answerIsCorrectRepository.save(answerIsCorrect4);
            answerIsCorrectRepository.save(answerIsCorrect5);
            answerIsCorrectRepository.save(answerIsCorrect6);
            answerIsCorrectRepository.save(answerIsCorrect7);
            answerIsCorrectRepository.save(answerIsCorrect8);
            answerIsCorrectRepository.save(answerIsCorrect9);

/*            answerIsCorrect1.setId(answerId1);
            answerIsCorrect2.setId(answerId2);
            answerIsCorrect3.setId(answerId3);
            answerIsCorrect4.setId(answerId4);
            answerIsCorrect5.setId(answerId5);
            answerIsCorrect6.setId(answerId6);
            answerIsCorrect7.setId(answerId7);
            answerIsCorrect8.setId(answerId8);
            answerIsCorrect9.setId(answerId9);*/

            Score score1 = new Score("Player 1", 1, new Date(120,6,17,12,34,56),"17/07/2020 12:34:56",returnedQuiz.getId());
            Score score2 = new Score("Player 2", 2, new Date(120,6,18,12,34,56),"18/07/2020 12:34:56",returnedQuiz.getId());
            Score score3 = new Score("Player 3", 3, new Date(120,6,19,12,34,56),"19/07/2020 12:34:56",returnedQuiz.getId());
            scoreRepository.save(score1);
            scoreRepository.save(score2);
            scoreRepository.save(score3);
        };
    }
}



