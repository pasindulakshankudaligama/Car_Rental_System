package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.StaffDTO;
import lk.ijse.spring.entity.Staff;
import lk.ijse.spring.repo.StaffRepo;
import lk.ijse.spring.service.StaffService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StaffServiceImpl implements StaffService {
    @Autowired
    private StaffRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveStaff(StaffDTO dto) {
        if (!repo.existsById(dto.getStaff_Id())) {
            repo.save(mapper.map(dto, Staff.class));
        }else{
            throw new RuntimeException("Staff Already Exist..!");
        }

    }

    @Override
    public void deleteStaff(String id) {

    }

    @Override
    public void updateStaff(StaffDTO dto) {

    }

    @Override
    public StaffDTO searchStaff(String id) {
        return null;
    }

    @Override
    public List<CustomerDTO> getAllStaff() {
        return null;
    }
}
