package com.example.quiz;

import com.example.quiz.Repository.AnswerOptionRepository;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.Repository.SurveyRepository;
import com.example.quiz.model.AnswerOption;
import com.example.quiz.model.Question;
import com.example.quiz.model.Survey;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class QuizApplication {


    public static void main(String[] args) {

        SpringApplication.run(QuizApplication.class);
    }

    @Bean
    public CommandLineRunner demo(SurveyRepository surveyRepository, QuestionRepository questionRepository, AnswerOptionRepository answerOptionRepository) {
        return (args) -> {

            Survey survey = new Survey();
            survey.setSurveyDescription("Een nieuwe survey");
            surveyRepository.save(survey);

            Question question = new Question("Denk jij dat er programmeerwerk kijken bij de werking van een stoplicht op de weg?", 1, survey);
            questionRepository.save(question);

            Question question2 = new Question("Question two", 2, survey);
            questionRepository.save(question2);

            Question question3 = new Question("Question three", 3, survey);
            questionRepository.save(question3);

            //save answeroptions
            answerOptionRepository.save(new AnswerOption(1, "answer A", true, question));
            answerOptionRepository.save(new AnswerOption(2, "Answer B", false, question));
            answerOptionRepository.save(new AnswerOption(3, "Answer C", false, question));

            answerOptionRepository.save(new AnswerOption(1, "answer A", false, question2));
            answerOptionRepository.save(new AnswerOption(2, "answer B", false, question2));
            answerOptionRepository.save(new AnswerOption(3, "answer C", true, question2));

            answerOptionRepository.save(new AnswerOption(1, "answer A", false, question3));
            answerOptionRepository.save(new AnswerOption(2, "answer B", true, question3));
            answerOptionRepository.save(new AnswerOption(3, "answer C", false, question3));


        };


    }


}



