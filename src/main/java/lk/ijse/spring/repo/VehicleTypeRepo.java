package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle_Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleTypeRepo extends JpaRepository<Vehicle_Type,String> {
   /* Vehicle_Type findByVehicle_Type_Id(String id);*/
}
