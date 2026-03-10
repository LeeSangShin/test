package com.admin.dbwork.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class User extends BasicDto{
    private String searchId;
    private String id;
    private String name;
    private String age;
    private String sexCd;
}
