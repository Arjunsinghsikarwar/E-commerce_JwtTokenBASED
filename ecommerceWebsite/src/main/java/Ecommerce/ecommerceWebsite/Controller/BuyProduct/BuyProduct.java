package Ecommerce.ecommerceWebsite.Controller.BuyProduct;

import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Service.HomeService.BuyProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class BuyProduct {

    @Autowired
    BuyProductService buyProductService;

    @PostMapping("/product/buyProduct/{prodName}")
    public ResponseEntity<?> buyingProduct(@PathVariable String prodName , @AuthenticationPrincipal UserDetails userDetails){

        String userName = userDetails.getUsername();
       boolean getResponse  = buyProductService.buyProduct(userName , prodName);
       if(getResponse) return ResponseEntity.ok().body(Map.of("message" , "Successfully Order"));
       return ResponseEntity.status(404).body(Map.of("message" , "Failed"));
    }


    @GetMapping("product/getAllBuyedProducts")
    public ResponseEntity<?> getAllBuyProducts(@AuthenticationPrincipal UserDetails userDetails){
        String userName = userDetails.getUsername();
        List<Products> allProduct = buyProductService.getBuyedProduct(userName);

        if(!allProduct.isEmpty()){
            return ResponseEntity.ok().body(Map.of("products",allProduct,
                    "message" , "Successfully"));
        }

        return ResponseEntity.status(404).body(Map.of("message" , "You buy nothing"));

    }

}
