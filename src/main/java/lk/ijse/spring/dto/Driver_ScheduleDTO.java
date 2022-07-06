package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Driver_ScheduleDTO {
    private String staff_Id;
    private String registration_Number;
    private String rent_Id;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate rent_Date;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate return_Date;
}
