package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RatesDTO;
import lk.ijse.spring.repo.RateRepo;
import lk.ijse.spring.service.RateService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RateServiceImpl implements RateService {

    @Autowired
    RateRepo rateRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRates(RatesDTO dto) {

    }

    @Override
    public void deleteRates(String id) {

    }

    @Override
    public void updateRates(RatesDTO dto) {

    }

    @Override
    public List<RatesDTO> getAllRates() {
        return null;
    }
}