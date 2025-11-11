package Ecommerce.ecommerceWebsite.Service.HomeService;

import Ecommerce.ecommerceWebsite.Model.OrderItems;
import Ecommerce.ecommerceWebsite.Model.Orders;
import Ecommerce.ecommerceWebsite.Model.Products;
import Ecommerce.ecommerceWebsite.Model.Users;
import Ecommerce.ecommerceWebsite.Repo.OrderItemsRepo;
import Ecommerce.ecommerceWebsite.Repo.OrdersRepo;
import Ecommerce.ecommerceWebsite.Repo.ProductsRepo;
import Ecommerce.ecommerceWebsite.Repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BuyProductService {

    @Autowired
    private UsersRepo usersRepository;

    @Autowired
    private ProductsRepo productsRepository;

    @Autowired
    private OrderItemsRepo orderItemsRepo;

    @Autowired
    OrdersRepo ordersRepo;

    public boolean buyProduct(String userName, String prodName) {
        Users user = usersRepository.findByUserName(userName);
        if (user == null) {
            return false;
        }

        Products product = productsRepository.findByName(prodName);
        if (product == null) {
            return false;
        }

        Orders order = new Orders();
        order.setUser(user);
        order.setLocalDateTime(LocalDateTime.now());
        ordersRepo.save(order);

        OrderItems orderItem = new OrderItems();
        orderItem.setOrder(order);
        orderItem.setProduct(product);
        orderItem.setQuantity(1);
        orderItemsRepo.save(orderItem);

        return true;
    }

    public List<Products> getBuyedProduct(String userName) {

        Users user = usersRepository.findByUserName(userName);

        return productsRepository.getOrderProducts(user.getId());
    }
}
