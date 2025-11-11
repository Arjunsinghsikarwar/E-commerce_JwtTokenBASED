package Ecommerce.ecommerceWebsite.Service.HomeService;

import Ecommerce.ecommerceWebsite.Model.Users;
import Ecommerce.ecommerceWebsite.Repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UsersRepo usersRepo;


    public boolean isExist(Users users) {
        Users user = usersRepo.findByUserName(users.getUserName());

        if(user!=null) return  true;

        return false;
    }

    public void createNewUser(Users users) {
        if(users.getUserName()!=null && users.getPassword()!=null) {
            users.setPassword(passwordEncoder.encode(users.getPassword()));
            if(users.getRole()==null) users.setRole("ROLE_USER");

            usersRepo.save(users);
        }
    }
}
