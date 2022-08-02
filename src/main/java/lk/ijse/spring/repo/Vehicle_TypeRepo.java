package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle_Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Vehicle_TypeRepo extends JpaRepository<Vehicle_Type,String> {
    Vehicle_Type findByvehicle_Type_Id(String vehicle_Type_Id);
}
