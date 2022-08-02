package lk.ijse.spring.service;

import lk.ijse.spring.dto.VehicleDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO dto);

    void deleteVehicle(String id);

    void updateVehicle(VehicleDTO dto);

    VehicleDTO searchVehicle(String id);

    List<VehicleDTO> getAllVehicles();

    List<VehicleDTO> getAllVehiclesByStatus(String status);

    long countByStatus(String status);

    VehicleDTO vehicleDetails(String regNo);

    void saveVehicleWithImg(String vehicle, MultipartFile file);
}
