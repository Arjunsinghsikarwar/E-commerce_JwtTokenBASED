package Ecommerce.ecommerceWebsite.Controller.SingUpSetup;

import Ecommerce.ecommerceWebsite.Model.Users;
import Ecommerce.ecommerceWebsite.Service.HomeService.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class Login {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;


    @PostMapping("/login/user")
    public ResponseEntity<Map<String, String>> login(@RequestBody Users user) {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
            );

            // If we reach here, authentication succeeded
            String token = jwtService.generateToken(user.getUserName());
            return ResponseEntity.ok(Map.of("token", token));
        } catch (Exception e) {
            // If User Not Found then we are going to send this message.
            return ResponseEntity.status(401).body(Map.of("message", "Invalid username or password"));
        }
    }
}
