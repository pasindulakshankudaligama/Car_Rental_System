package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.Slip_IMGDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Slip_IMG;
import lk.ijse.spring.repo.SlipIMGRepo;
import lk.ijse.spring.service.SlipIMGService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SlipIMGServiceImpl implements SlipIMGService {

    @Autowired
    SlipIMGRepo slipIMGRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveSlipIMG(Slip_IMGDTO dto) {
        if (!slipIMGRepo.existsById(dto.getSlip_IMG_Id())) {
            slipIMGRepo.save(mapper.map(dto, Slip_IMG.class));
        } else {
            throw new RuntimeException("Slip_IMG Already Exist..!");
        }
    }

    @Override
    public void deleteSlipIMG(String id) {

    }

    @Override
    public void updateSlipIMG(Slip_IMGDTO dto) {

    }

    @Override
    public List<Slip_IMGDTO> getAllSlipIMGs() {
        return null;
    }
}
