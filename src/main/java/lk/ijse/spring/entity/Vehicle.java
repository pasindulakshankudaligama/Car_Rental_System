package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Vehicle {
    @Id
    private String registration_Number;
    private String colour;
    private int no_Of_Passengers;
    private String transmission_Type;
    private String brand;
    private String status;
    private String fuel_Type;
    private String running_Km;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "rate_Id",referencedColumnName = "rate_Id",nullable = false)
    private Rates rates;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "vehicle_Type_Id",referencedColumnName = "vehicle_Type_Id",nullable = false)
    private Vehicle_Type vehicleType;

    @OneToMany(targetEntity = Vehicle_IMG.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "carId", referencedColumnName = "registration_Number")
    private List<Vehicle_IMG> img;
}
