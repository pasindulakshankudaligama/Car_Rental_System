package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RatesDTO;
import lk.ijse.spring.service.RateService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rates")
@CrossOrigin
public class RateSController {

    @Autowired
    RateService rateService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRates(@ModelAttribute RatesDTO ratesDTO){
        rateService.saveRates(ratesDTO);
        return new ResponseUtil(200,"Saved",null);
    }

}
