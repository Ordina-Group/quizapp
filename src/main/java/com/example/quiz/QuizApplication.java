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
            survey.setSurveyDescription("Survey DevoxxxKids dag");
            surveyRepository.save(survey);

            Question question = new Question("Denk jij dat er programmeerwerk kijken bij de werking van een verkeerslicht?", 1, survey);
            questionRepository.save(question);

            Question question2 = new Question("Hoe werkt een streepjescode op een verpakking uit de supermarkt?", 2, survey);
            questionRepository.save(question2);

            Question question3 = new Question("Question three", 3, survey);
            questionRepository.save(question3);

            //save answeroptions
            answerOptionRepository.save(new AnswerOption(1, "Ja, deels. Door een detectielus op de weg die een auto opmerkt, maar bij meerdere auto's kan dit niet en regelen mensen vanuit een speciale 'bestuurskamer' dit.", false, question,"Dit is helaas niet goed. Meerdere detectielussen kunnen informatie doorgeven over meerder auto's"));
            answerOptionRepository.save(new AnswerOption(2, "Ja, volledig. Alles is computergestuurd; meerdere detectielussen geven een seintje naar de computer die dit regelt.", true, question, "Dit is goed! Zelfs een ambulance kan inbellen naar deze computer om te vertellen dat het verkeerslicht op groen moet in de richting waar deze heen moet."));
            answerOptionRepository.save(new AnswerOption(3, "Nee, dit is te ingewikkeld voor een computer; als er een ambulance aankomt werkt dit systeem immers niet. Vanuit de bestuurskamer regelen mensen dit.", false, question, "Dit is helaas niet goed. De computers kunnen zo geprogrammeerd worden, zodat een ambulance kan inbellen naar de computer om te vertellen dat het verkeerslicht op groen moet in de richting waar deze vandaan komt en heen gaat."));

            answerOptionRepository.save(new AnswerOption(1, "De scanner zet de streepjes om in eenen en nullen zodat de computer dit kan lezen. Een computer kan alleen nullen en enen lezen.", true, question2, "Dit is goed! Computers werken inderdaad alleen met nullen en enen. De lichte streepjes op de barcode worden gelezen door de scanner. Deze stuurt licht naar buiten en het licht weerkaatst op de witte delen. De witte delen worden dan verwerkt als nummer 1.  "));
            answerOptionRepository.save(new AnswerOption(2, "De scanner kijkt naar de dikte van de streepjes en geeft dit door aan de computer. De dikte van het streepje komt overeen met de cijfers zie onder een barcode staan.", false, question2, "Dit is helaas niet goed. Computers werken alleen met nullen en enen. De lichte streepjes op de barcode worden gelezen door de scanner. Deze stuurt licht naar buiten en het licht weerkaatst op de witte delen. De witte delen worden dan verwerkt als nummer 1."));


            answerOptionRepository.save(new AnswerOption(1, "answer A van derde vraag", false, question3, "answerexplanation" ));
            answerOptionRepository.save(new AnswerOption(2, "answer B", true, question3, "answerexplanation"));
            answerOptionRepository.save(new AnswerOption(3, "answer C", false, question3, "answerexplanation"));


        };


    }


}



