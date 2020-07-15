package com.example.quiz;

import com.example.quiz.Repository.AnswerIsCorrectRepository;
import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.QuizRepository;
import com.example.quiz.model.AnswerIsCorrect;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.Question;
import com.example.quiz.model.Quiz;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


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
    public CommandLineRunner demo(QuizRepository quizRepository, QuestionRepository questionRepository, AnswerOptionRepository answerOptionRepository, AnswerIsCorrectRepository answerIsCorrectRepository) {
        return (args) -> {

            Quiz quiz = new Quiz();
            quiz.setQuizDescription("Survey DevoxxxKids dag");
            quizRepository.save(quiz);

            Question question = new Question("Slag bij Nieuwpoort?", 1, quiz);
            questionRepository.save(question);

            Question question2 = new Question("Slag bij Hastings?", 2, quiz);
            questionRepository.save(question2);

            Question question3 = new Question("Slag bij Waterloo?", 3, quiz);
            questionRepository.save(question3);

            //save answeroptions
            answerOptionRepository.save(new AnswerOption( "1600", question));
            answerOptionRepository.save(new AnswerOption( "1601", question));
            answerOptionRepository.save(new AnswerOption( "1602", question));

            answerOptionRepository.save(new AnswerOption( "1065", question2));
            answerOptionRepository.save(new AnswerOption( "1066", question2));
            answerOptionRepository.save(new AnswerOption("1067", question2));

            answerOptionRepository.save(new AnswerOption("1813", question3));
            answerOptionRepository.save(new AnswerOption("1814", question3));
            answerOptionRepository.save(new AnswerOption("1815", question3));

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

        };
    }


}



