package Ecommerce.ecommerceWebsite.Controller.CategoryProduct;


import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Service.HomeService.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ProductCategory {

    @Autowired
    ProductService productService;

    @GetMapping("/getCategoryProduct/{category}")
    public ResponseEntity getCategoryProduct(@PathVariable String category){

        List<Products> productsList = productService.getCategoryProduct(category);

        if (productsList == null || productsList.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of("message", "Not Available"));
        }

        return ResponseEntity.ok().body(Map.of("Products",productsList,
                "message","Successfully Fetched All Products"));


    }



}
