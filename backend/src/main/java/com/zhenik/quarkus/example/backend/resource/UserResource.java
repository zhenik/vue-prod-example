package com.zhenik.quarkus.example.backend.resource;

import com.zhenik.quarkus.example.backend.dto.UserDto;
import com.zhenik.quarkus.example.backend.service.UserService;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/users")
@Produces(value = MediaType.APPLICATION_JSON)
@Consumes(value = MediaType.APPLICATION_JSON)
public class UserResource {

  private UserService userService;

  public UserResource(UserService userService) { this.userService = userService; }

  @GET
  public UserDto randomUser() { return userService.randomUser(); }
}
