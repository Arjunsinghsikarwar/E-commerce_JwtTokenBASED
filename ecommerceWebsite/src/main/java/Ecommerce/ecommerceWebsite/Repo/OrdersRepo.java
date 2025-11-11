package Ecommerce.ecommerceWebsite.Repo;

import Ecommerce.ecommerceWebsite.Model.Orders;
import Ecommerce.ecommerceWebsite.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdersRepo extends JpaRepository<Orders,Long> {

    @Query(value = "Select id from orders where user_id = :id" , nativeQuery = true)
    List<Long> getOrdersId(@Param("id") Long id);

    List<Orders> findByUser(Users user);

    Orders findByUserId(Long userId);

}
