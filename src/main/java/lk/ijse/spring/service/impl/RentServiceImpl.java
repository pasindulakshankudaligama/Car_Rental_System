package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentDTO;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo rentRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRent(RentDTO dto) {

    }

    @Override
    public void deleteRent(String id) {

    }

    @Override
    public void updateRent(RentDTO dto) {

    }

    @Override
    public RentDTO searchRent(String id) {
        return null;
    }

    @Override
    public List<RentDTO> getAllRents() {
        return null;
    }
}
