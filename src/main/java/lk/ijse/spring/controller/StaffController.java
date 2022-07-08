package lk.ijse.spring.controller;

import lk.ijse.spring.dto.StaffDTO;
import lk.ijse.spring.service.StaffService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("staff")
@CrossOrigin
public class StaffController {
    @Autowired
    StaffService staffService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveStaff(@ModelAttribute StaffDTO staffDTO){
        staffService.saveStaff(staffDTO);
        return new ResponseUtil(200,"Saved",null);
    }
}
