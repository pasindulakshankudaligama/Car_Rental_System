package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicle(VehicleDTO dto) {
        if (!repo.existsById(dto.getRegistration_Number())) {

            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("Vehicle Already Exist..!");
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the Vehicle Id.. No Vehicle..!");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (repo.existsById(dto.getRegistration_Number())) {
            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("No Such Vehicle To Update..! Please Check the Registration Number..!");
        }

    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), VehicleDTO.class);
        } else {
            throw new RuntimeException("No Vehicle For " + id + " ..!");
        }
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllVehiclesByStatus(String status) {
        return mapper.map(repo.searchVehiclesByStatus(status), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public long countByStatus(String status) {
        return repo.countVehiclesByStatus(status);
    }

    @Override
    public VehicleDTO vehicleDetails(String regNo) {
        return mapper.map(repo.findById(regNo), VehicleDTO.class);
    }

    @Override
    public void saveVehicleWithImg(String vehicle, MultipartFile file) {

    }
}
