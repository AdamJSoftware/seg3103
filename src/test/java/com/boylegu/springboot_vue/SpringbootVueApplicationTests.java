package com.boylegu.springboot_vue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.Before;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.boylegu.springboot_vue.controller.MainController;
import com.boylegu.springboot_vue.entities.Persons;
import com.boylegu.springboot_vue.dao.PersonsRepository;

import java.util.Date;


/**
 * @author Boyle Gu
 * @version 0.0.1
 * @GitHub https://github.com/boylegu
 */

@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = MockServletContext.class)
@SpringBootTest(classes = { App.class })
@WebAppConfiguration
@AutoConfigureMockMvc
public class SpringbootVueApplicationTests {

    @Autowired
    private MockMvc mvc;

    int maxPerPage = 10;


    @Mock
    PersonsRepository personsRepository;

    @InjectMocks
    MainController personsController;


    @Before
    public void setUp() throws Exception {
        mvc = MockMvcBuilders.standaloneSetup(personsController).build();
//
        Persons persons = new Persons();
        persons.setZone("t1 zone");
        persons.setPhone("11111");
        persons.setEmail("t1@qq.com");
        persons.setUsername("t1");
        persons.setSex("male");
        persons.setId(1);
        persons.setCreate_datetime((new Date()).toString());
        personsRepository.save(persons);




    }

    @Test
    public void testUserController() throws Exception {
//  	Test MainController
        RequestBuilder request = null;

        System.out.println(this.personsRepository);



        request = get("/api/persons?sex=&email=t1@qq2.com");
        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo("{\"data\":{\"count\":10,\"page\":1,\"results\":[],\"total\":0}}")));

        RequestBuilder request2 = get("/api/persons/sex");
        mvc.perform(request2)
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo("[]")));

        RequestBuilder request3 = get("/api/persons?sex=male&email=t1@qq.com");
        mvc.perform(request3)
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo("{\"data\":{\"count\":10,\"page\":1,\"results\":[],\"total\":0}}")));



    }


}
