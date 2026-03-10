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

import com.admin.dbwork.dto.User;
import com.admin.dbwork.service.UserService;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@RequestMapping("/api")
public class TestController {

@Autowired
private UserService testService;
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
        List<User> users = testService.getAllUser();
        for(User user : users){
            log.debug(user.toString());
        }
        return Map.of("users", users);
    }
    
    @PostMapping("/getUserById")
    public User getUserById(@RequestBody User param) {
        log.debug("getUserById param: {}", param);
        User user = testService.getUserById(param);
        return user;
    }

    @PostMapping("/createUser")
    public void createUser(@RequestBody User param) {
        log.debug("createUser param: {}", param);
        int result = testService.createUser(param);
    }
}
