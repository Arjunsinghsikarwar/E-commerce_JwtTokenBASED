package Ecommerce.ecommerceWebsite.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username is required")
    private String userName;

    @NotBlank(message = "Valid Password is Required")
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Orders> order = new ArrayList<>();

    private String role;



    public Users() {
    }

    public Users(long id, String password, String userName , String role) {
        this.id = id;
        this.password = password;
        this.userName = userName;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public String getRole(){
        return role;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setRole(String roleUser) {
        role = roleUser;
    }
}