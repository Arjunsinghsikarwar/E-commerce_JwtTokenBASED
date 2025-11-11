package Ecommerce.ecommerceWebsite.Service.HomeService;

import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Repo.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductsRepo productsRepo;


    public Optional<Products> getSingleProduct(Long id) {

        Optional<Products> product  = productsRepo.findById(id);

        return product;
    }

    public List<Products> getCategoryProduct(String category) {

     List<Products> categoryProduct  = productsRepo.allCategoryProduct(category);
     return categoryProduct;




    }
}
