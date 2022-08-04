package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customer){
        customerService.saveCustomer(customer);
        return new ResponseUtil(200,"Saved",null);
    }
    @DeleteMapping(params={"id"},produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String id){
        customerService.deleteCustomer(id);
        return new ResponseUtil(200,"Deleted",null);
    }
    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.updateCustomer(customerDTO);
        return new ResponseUtil(200,"Updated",null);
    }
    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id){
        return new ResponseUtil(200,"OK",customerService.searchCustomer(id));
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers(){
        return new ResponseUtil(200,"OK",customerService.getAllCustomers());
    }

    @GetMapping(path = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil customerCount() {
        return new ResponseUtil(200, "Ok", customerService.countCustomers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFile(@RequestParam("file") MultipartFile myFile, @RequestParam("customer") String customer){
        System.out.println("Hey");
        System.out.println(customer);
        System.out.println(myFile.getName());

        customerService.saveCustomerWithImg(customer,myFile);
        return new ResponseUtil(200, "New User Create Successfully", null);
    }
}
