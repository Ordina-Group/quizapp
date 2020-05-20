package com.example.quiz.ControlLayer;

import com.example.quiz.QuizApplication;
import com.example.quiz.Repository.QuestionRepository;
import com.example.quiz.ServiceLayer.QuestionService;

import org.junit.Before;

import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(MockitoJUnitRunner.class)
public class QuestionRESTControllerTest {

    @InjectMocks
    private QuestionRESTController questionRESTController;

    @Mock
    QuizApplication quizapplication;

    private MockMvc mockMvc;

    private QuestionRepository questionRepository;
    private QuestionService questionservice;

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(this.questionRESTController).build();
    }

 //   @Test
  //  public void testFindQuestionByid() throws Exception {
        // build your expected results here

   //     MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:8080//questionbyid/1")).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();


     //   assertEquals((Object) "response does not match", mvcResult.getResponse().getContentAsString(), );

        // verify the calls
    //}
    }


