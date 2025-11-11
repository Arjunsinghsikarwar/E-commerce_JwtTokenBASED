package Ecommerce.ecommerceWebsite.Controller.HomeController;

import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Service.HomeService.ServiceHome;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController


public class Home {

    @Autowired
    private ServiceHome serviceHome;

    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> home(){
        try {
            List<Products> getSomeProducts = serviceHome.getSomeProducts();
            List<?> getAllCategory = serviceHome.getAllCategory();
             Map<String,Object> response = Map.of("products",getSomeProducts,
                     "categories" , getAllCategory,
                     "message" ,"Successfully fetch");
             return ResponseEntity.ok(response);
        } catch (Exception e) {
          Map<String , Object> response = Map.of("message", "Some thing went Wrong");
            return ResponseEntity.status(500).body(response);
        }
    }

}

