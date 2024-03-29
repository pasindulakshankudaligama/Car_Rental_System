package lk.ijse.spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.dto.RatesDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.dto.Vehicle_IMGDTO;
import lk.ijse.spring.dto.Vehicle_TypeDTO;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.RateRepo;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.repo.VehicleTypeRepo;
import lk.ijse.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private RateRepo ratesRepo;

    @Autowired
    private VehicleTypeRepo vehicleTypeRepo;

    @Override
    public void saveVehicle(VehicleDTO dto) {
        if (!repo.existsById(dto.getRegistration_Number())) {

          /*  if (vehicleTypeRepo.existsById(dto.getVehicleType().getVehicle_Type_Id())) {
                Vehicle_TypeDTO type = mapper.map(vehicleTypeRepo.findByVehicle_Type_Id(dto.getVehicleType().getVehicle_Type_Id()), Vehicle_TypeDTO.class);
                dto.setVehicleType(type);
            } else {
                throw new RuntimeException("Please Check the Vehicle Type ID");
            }

            if (ratesRepo.existsById(dto.getRates().getRate_Id())) {
                RatesDTO rates = mapper.map(ratesRepo.findByRate_Id(dto.getRates().getRate_Id()), RatesDTO.class);
                dto.setRates(rates);
            } else {
                throw new RuntimeException("Please Check the RateID");
            }
*/
            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("Vehicle Already Exist");
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

          /*  if (vehicleTypeRepo.existsById(dto.getVehicleType().getVehicle_Type_Id())) {
                Vehicle_TypeDTO type = mapper.map(vehicleTypeRepo.findByVehicle_Type_Id(dto.getVehicleType().getVehicle_Type_Id()), Vehicle_TypeDTO.class);
                dto.setVehicleType(type);
            } else {
                throw new RuntimeException("Please Check the Vehicle Type ID");
            }

            if (ratesRepo.existsById(dto.getRates().getRate_Id())) {
                RatesDTO rates = mapper.map(ratesRepo.findByRate_Id(dto.getRates().getRate_Id()), RatesDTO.class);
                dto.setRates(rates);
            } else {
                throw new RuntimeException("Please Check the RateID");
            }
*/
            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("Please check the Registration Number... No Such Vehicle to Update!");
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
        VehicleDTO vehicleDTO = null;
        String path = null;
        try {
            vehicleDTO = objectMapper.readValue(vehicle, VehicleDTO.class);

            System.out.println(vehicleDTO);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        if (!repo.existsById(vehicleDTO.getRegistration_Number())) {

            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadDir = new File(projectPath + "/uploads");
                uploadDir.mkdir();
                file.transferTo(new File(uploadDir.getAbsolutePath() + "/" + file.getOriginalFilename()));
                path = "uploads/" + file.getOriginalFilename();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            Vehicle_IMGDTO imgDTO = new Vehicle_IMGDTO();
            imgDTO.setPath(path);
            ArrayList<Vehicle_IMGDTO> carImgDTO = new ArrayList<Vehicle_IMGDTO>();
            carImgDTO.add(imgDTO);
            System.out.println(imgDTO.getPath());
            vehicleDTO.setImg(carImgDTO);
            repo.save(mapper.map(vehicleDTO, Vehicle.class));

        } else {
            throw new RuntimeException("Vehicle Already Exist");
        }
    }


}

