package Ecommerce.ecommerceWebsite.Repo;

import Ecommerce.ecommerceWebsite.Model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepo extends JpaRepository<Products,Long> {

    @Query(value = "Select * from products Order By Random() Limit :i" , nativeQuery = true)
    List<Products> getSomeRandomProducts(@Param("i") int i);

    @Query(value = "Select DISTINCT category from products",nativeQuery = true)
    List<String> getAllCategory();

     @Query(value = "Select * from products where category = :category" , nativeQuery = true)
    List<Products> allCategoryProduct(@Param("category") String category);


     @Query(value = "Select * from Products where product_name = :prodName" , nativeQuery = true)
    Products findByName(@Param("prodName") String prodName);

    @Query(value = "SELECT p.product_id, p.price, p.image_url, p.category, p.product_name , p.quantity " +
            "FROM products p " +
            "INNER JOIN order_items oi ON p.product_id = oi.product_id " +
            "INNER JOIN orders o ON o.id = oi.order_id " +
            "WHERE o.user_id = :id",
            nativeQuery = true)
    List<Products> getOrderProducts(@Param("id") Long id);

    @Query(value = "Select * from products where product_name LIKE %:prodName%",nativeQuery = true)
    List<Products> getSameProducts(@Param("prodName") String prodName);
}
