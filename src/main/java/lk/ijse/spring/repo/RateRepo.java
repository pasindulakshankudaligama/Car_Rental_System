package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RateRepo extends JpaRepository<Rates,String> {
 //   Rates findByRate_Id(String rate_Id);
   // Rates findByRate_Id(String id);
}
