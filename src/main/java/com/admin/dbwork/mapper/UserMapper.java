package com.admin.dbwork.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.admin.dbwork.dto.User;

@Repository
@Mapper
public interface UserMapper {
    List<User> selectUserList();
    User selectUserById(User param);
    int createUser(User param);
}
