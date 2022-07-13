package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.spring.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentDTO {
    private String rent_Id;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private String status;
    private String reason;
    private CustomerDTO customer;
    private List<Rent_DetailDTO> rent_details;
    private List<Driver_ScheduleDTO> driver_schedules;
}
