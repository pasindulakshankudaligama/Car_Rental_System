package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Rent_Detail {
    @Id
    private String rent_Id;
    @Id
    private String registration_Number;
    private LocalDate rent_Date;
    private LocalDate return_Date;
    private int kilometers;
    private double rental_Cost;
    private double damage_Cost;
    private String status;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "rent_Id",referencedColumnName = "rent_Id",nullable = false)
    private Rent rent;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "registration_Number",referencedColumnName = "registration_Number",nullable = false)
    private Vehicle vehicle;
}
