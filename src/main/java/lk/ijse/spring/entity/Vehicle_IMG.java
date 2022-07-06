package lk.ijse.spring.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Vehicle_IMG {
    @Id
    private String img_Id;
   // @Id
    private String registration_Number;
    private String description;

  /*  @ManyToOne
    @JoinColumn(name = "registration_Number",referencedColumnName = "registration_Number",insertable = false,updatable = false)
    private Vehicle vehicle;*/

}
