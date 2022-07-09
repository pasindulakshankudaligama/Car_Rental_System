package lk.ijse.spring.service;

import lk.ijse.spring.dto.Slip_IMGDTO;

import java.util.List;

public interface SlipIMGService {
    void saveSlipIMG(Slip_IMGDTO dto);

    void deleteSlipIMG(String id);

    void updateSlipIMG(Slip_IMGDTO dto);

    List<Slip_IMGDTO> getAllSlipIMGs();
}
