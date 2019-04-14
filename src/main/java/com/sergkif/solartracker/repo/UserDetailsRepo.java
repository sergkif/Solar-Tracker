package com.sergkif.solartracker.repo;

import com.sergkif.solartracker.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepo extends JpaRepository<User, String> {
}
