package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    List<Vehicle> searchVehiclesByStatus(String status);

    long countVehiclesByStatus(String status);

}
