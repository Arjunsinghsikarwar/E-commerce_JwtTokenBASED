package Ecommerce.ecommerceWebsite.Repo;

import Ecommerce.ecommerceWebsite.Model.OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemsRepo extends JpaRepository<OrderItems,Long> {
    @Query(value = "SELECT * FROM order_items WHERE order_id = :orderId AND product_id = :productId", nativeQuery = true)
    OrderItems findByOrderIdAndProductId(@Param("orderId") Long orderId, @Param("productId") Long productId);

}
