package Ecommerce.ecommerceWebsite.Model;


import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime localDateTime = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id")
    Users user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    List<OrderItems> list = new ArrayList<>();

    public Orders() {
    }

    public Orders(Long id, List<OrderItems> list, LocalDateTime localDateTime, Users user) {
        this.id = id;
        this.list = list;
        this.localDateTime = localDateTime;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<OrderItems> getList() {
        return list;
    }

    public void setList(List<OrderItems> list) {
        this.list = list;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
