package Ecommerce.ecommerceWebsite.Controller.Product;

import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Service.HomeService.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class SingleProduct {

    @Autowired
    ProductService productService;


    @GetMapping("/product/{id}")
    public ResponseEntity<Map<String,Object>> getSingleProduct(@PathVariable Long id){

        Optional<Products> product = productService.getSingleProduct(id);

        if(product.isEmpty()) return ResponseEntity.status(404).body(Map.of("message" , "There is Not SUch project"));

        return ResponseEntity.ok().body(Map.of("Product" , product ,
                "message" , "Successfully fetch the Product"));
    }

}
