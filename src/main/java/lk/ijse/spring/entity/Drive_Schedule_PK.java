package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Drive_Schedule_PK implements Serializable {
    private String driver_Id;
    private String registration_Number;
    private String rent_Id;
}
