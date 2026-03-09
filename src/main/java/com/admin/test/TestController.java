package com.admin.test;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.dbwork.dto.Test;
import com.admin.dbwork.service.TestService;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@RequestMapping("/api")
public class TestController {

@Autowired
private TestService testService;
    private Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/mypage")
    public String hello(){
        return "Call mypage " + new Date();
    }
    @GetMapping("/work_page")
    public String home(){
        return "Call work_page " + new Date();
    }

    @GetMapping("/getAllUser")
    public Map getAllUser() {
        List<Test> tests = testService.getAllUser();
        for(Test test : tests){
            log.debug(test.toString());
        }
        return Map.of("tests", tests);
    }
    
    @PostMapping("/getUserById")
    public Test getUserById(@RequestBody Test param) {
        log.debug("getUserById param: {}", param);
        Test test = testService.getUserById(param);
        return test;
    }
}
