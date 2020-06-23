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

            Question question = new Question("Slag bij Nieuwpoort?", 1, survey);
            questionRepository.save(question);

            Question question2 = new Question("Slag bij Hastings?", 2, survey);
            questionRepository.save(question2);

            Question question3 = new Question("Slag bij Waterloo?", 3, survey);
            questionRepository.save(question3);

            //save answeroptions
            answerOptionRepository.save(new AnswerOption(1, "1600", true, question,"Juist, het was in 1600"));
            answerOptionRepository.save(new AnswerOption(2, "1601", false, question, "Onjuist, het was 1 jaar eerder, in 1600"));
            answerOptionRepository.save(new AnswerOption(3, "1602", false, question, "Onjuist, het was 2 jaar eerder, in 1600"));

            answerOptionRepository.save(new AnswerOption(1, "1065", false, question2, "Onjuist, het was 1 jaar later, in 1066"));
            answerOptionRepository.save(new AnswerOption(2, "1066", true, question2, "Juist, het was in 1066"));
            answerOptionRepository.save(new AnswerOption(3, "1067", false, question2, "Onjuist, het was 1 jaar eerder, in 1066"));

            answerOptionRepository.save(new AnswerOption(1, "1813", false, question3, "Onjuist, het was 2 jaar later, in 1815" ));
            answerOptionRepository.save(new AnswerOption(2, "1814", false, question3, "Onjuist, het was 1 jaar later, in 1815"));
            answerOptionRepository.save(new AnswerOption(3, "1815", true, question3, "Juist, het was in 1815"));


        };


    }


}



