package com.zhenik.quarkus.example.backend.service;

import com.zhenik.quarkus.example.backend.dto.UserDto;
import java.util.Random;
import java.util.UUID;
import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserService {
  private Random random;

  public UserService() { this.random = new Random();}

  public Random getRandom() { return random; }
  public void setRandom(Random random) { this.random = random; }

  public UserDto randomUser() {
    return new UserDto(
        UUID.randomUUID().toString(),
        UUID.randomUUID().toString(),
        UUID.randomUUID().toString(),
        random.nextInt(100)
    );
  }
}
