package com.admin.dbwork.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dbwork.dto.User;
import com.admin.dbwork.mapper.UserMapper;

import java.util.List;

@Service
public class UserService {

@Autowired
private UserMapper userMapper;

public List<User> getAllUser(){
    return userMapper.selectUserList();
}

public User getUserById(User param){
    return userMapper.selectUserById(param);
}

public int createUser(User param){
    return userMapper.createUser(param);
}

}
