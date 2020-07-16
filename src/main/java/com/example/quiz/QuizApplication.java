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

}



