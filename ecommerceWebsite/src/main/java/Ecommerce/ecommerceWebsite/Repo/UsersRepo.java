package Ecommerce.ecommerceWebsite.Repo;

import Ecommerce.ecommerceWebsite.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<Users,Long> {

    Users findByUserName(String username);

    @Query("SELECT u.id FROM Users u WHERE u.userName = :userName")
    Long getUserId(@Param("userName") String userName);

}
