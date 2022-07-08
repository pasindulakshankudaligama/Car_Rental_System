package lk.ijse.spring.service;

import lk.ijse.spring.dto.RatesDTO;

import java.util.List;

public interface RateService {
    void saveRates(RatesDTO dto);

    void deleteRates(String id);

    void updateRates(RatesDTO dto);

    List<RatesDTO> getAllRates();
}
