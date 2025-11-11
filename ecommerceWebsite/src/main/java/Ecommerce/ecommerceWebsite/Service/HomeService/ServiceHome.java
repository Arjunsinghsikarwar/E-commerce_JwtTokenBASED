package Ecommerce.ecommerceWebsite.Service.HomeService;

import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Repo.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceHome {

    @Autowired
    ProductsRepo productsRepo;


    public List<Products> getSomeProducts(){
        List<Products> productsList = productsRepo.getSomeRandomProducts(18);
        return productsList;
    }


    public List<String> getAllCategory() {

        return productsRepo.getAllCategory();

    }
}
