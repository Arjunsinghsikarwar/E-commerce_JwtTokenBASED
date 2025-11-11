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
        List<Products> listProduct = productsRepo.getSomeRandomProducts(18);
        return listProduct;
    }


    public List<String> getAllCategory() {
        return productsRepo.getAllCategory();
    }

    public List<Products> getSearchedProducts(String prodName) {
        List<Products> getSameProduct = productsRepo.getSameProducts(prodName);
        if(getSameProduct.isEmpty()) return List.of();
        return getSameProduct;

    }
}
