package Ecommerce.ecommerceWebsite.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Products {

    @Id
    private Long product_id;
    @NotBlank(message = "Product Name is Require")
    private String productName;


    private double price;
    private int quantity;
    private String category;
    private String imageUrl;

    public Products() {
    }

    public Products(String category, String imageUrl, double price, Long product_id, String productName, int quantity) {
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
        this.product_id = product_id;
        this.productName = productName;
        this.quantity = quantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


}
