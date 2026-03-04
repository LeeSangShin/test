package com.admin.test;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/test/**").allowCredentials(true).allowedOrigins("http://localhost:3000");
        WebMvcConfigurer.super.addCorsMappings(registry);
    }
  
}
