package com.admin.dbwork.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.admin.dbwork.dto.Test;

@Repository
@Mapper
public interface TestMapper {
    List<Test> selectTestList();
    Test selectTestById(Test param);
}
