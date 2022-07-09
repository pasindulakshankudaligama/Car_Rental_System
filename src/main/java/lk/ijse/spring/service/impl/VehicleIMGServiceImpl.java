package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.Vehicle_IMGDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Vehicle_IMG;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.VehicleIMGRepo;
import lk.ijse.spring.service.VehicleIMGService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class VehicleIMGServiceImpl implements VehicleIMGService {
    @Autowired
    private VehicleIMGRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicleIMG(Vehicle_IMGDTO dto) {
        if (!repo.existsById(dto.getImg_Id())) {
            repo.save(mapper.map(dto, Vehicle_IMG.class));
        } else {
            throw new RuntimeException("Vehicle_IMG Already Exist..!");
        }
    }

    @Override
    public void deleteVehicleIMG(String id) {

    }

    @Override
    public void updateVehicleIMG(Vehicle_IMGDTO dto) {

    }

    @Override
    public List<Vehicle_IMGDTO> getAllVehicleIMGs() {
        return null;
    }
}
