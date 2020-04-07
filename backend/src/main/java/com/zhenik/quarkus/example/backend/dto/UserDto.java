package com.zhenik.quarkus.example.backend.dto;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class UserDto {
  private String id;
  private String name;
  private String lastname;
  private Integer age;

  public UserDto() { }

  public UserDto(String id, String name, String lastname, Integer age) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  public String getId() { return id; }
  public void setId(String id) { this.id = id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getLastname() { return lastname; }
  public void setLastname(String lastname) { this.lastname = lastname; }
  public Integer getAge() { return age; }
  public void setAge(Integer age) { this.age = age; }

  @Override public String toString() {
    return "UserDto{" +
        "id='" + id + '\'' +
        ", name='" + name + '\'' +
        ", lastname='" + lastname + '\'' +
        ", age=" + age +
        '}';
  }
}
