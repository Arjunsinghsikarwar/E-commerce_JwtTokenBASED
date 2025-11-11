package Ecommerce.ecommerceWebsite.Model;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.*;

@Entity
public class OrderItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;

    private int quantity;
    private double price; // price at the time of order



    public OrderItems(Orders order, Long orderItemId, double price, Products product, int quantity) {
        this.order = order;
        this.orderItemId = orderItemId;
        this.price = price;
        this.product = product;
        this.quantity = quantity;
    }

    public OrderItems() {
    }

    public Orders getOrder() {
        return order;
    }

    public void setOrder(Orders order) {
        this.order = order;
    }

    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
