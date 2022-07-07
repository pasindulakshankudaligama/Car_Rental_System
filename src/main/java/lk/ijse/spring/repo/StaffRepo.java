package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepo extends JpaRepository<Staff,String> {
}
