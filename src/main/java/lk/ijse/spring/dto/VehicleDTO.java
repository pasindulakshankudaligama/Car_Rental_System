package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Rates;
import lk.ijse.spring.entity.Vehicle_Type;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleDTO {
    private String registration_Number;
    private String colour;
    private int no_Of_Passengers;
    private String transmission_Type;
    private String brand;
    private String status;
    private String fuel_Type;
    private String running_Km;
    private RatesDTO rates;
    private Vehicle_TypeDTO vehicleType;
    private List<Vehicle_IMGDTO> img;
}
