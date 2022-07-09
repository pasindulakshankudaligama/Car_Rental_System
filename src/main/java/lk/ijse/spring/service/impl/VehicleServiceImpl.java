package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    }

    @Override
    public void deleteVehicle(String id) {

    }

    @Override
    public void updateVehicle(VehicleDTO dto) {

    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        return null;
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return null;
    }
}
