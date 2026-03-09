package com.admin.dbwork.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dbwork.dto.Test;
import com.admin.dbwork.mapper.TestMapper;

import java.util.List;

@Service
public class TestService {

@Autowired
private TestMapper testMapper;

public List<Test> getAllUser(){
    return testMapper.selectTestList();
}

public Test getUserById(Test param){
    return testMapper.selectTestById(param);
}

}
