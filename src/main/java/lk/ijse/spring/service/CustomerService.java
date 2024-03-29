package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    void deleteCustomer(String id);

    void updateCustomer(CustomerDTO dto);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomers();

    long countCustomers();

    void saveCustomerWithImg(String customer, MultipartFile file);
}
