package Ecommerce.ecommerceWebsite.Controller.SingUpSetup;

import Ecommerce.ecommerceWebsite.Model.Users;
import Ecommerce.ecommerceWebsite.Service.HomeService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class Register {
    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public ResponseEntity<Map<String , String>> register(@RequestBody Users users){

        if(userService.isExist(users)){
            return ResponseEntity.status(409).body(Map.of("message","This UserName is Already Exist Please Enter New UserName"));
        }

        userService.createNewUser(users);

        return ResponseEntity.status(200).body(Map.of("message", "User Successfully Added"));

    }
}
