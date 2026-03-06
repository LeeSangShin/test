package com.admin.test;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

    @GetMapping("/mypage")
    public String hello(){
        return "Call mypage " + new Date();
    }
    @GetMapping("/work_page")
    public String home(){
        return "Call work_page " + new Date();
    }

}
