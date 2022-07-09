package lk.ijse.spring.service;

import lk.ijse.spring.dto.Vehicle_IMGDTO;

import java.util.List;

public interface VehicleIMGService {
    void saveVehicleIMG(Vehicle_IMGDTO dto);

    void deleteVehicleIMG(String id);

    void updateVehicleIMG(Vehicle_IMGDTO dto);

    List<Vehicle_IMGDTO> getAllVehicleIMGs();
}
