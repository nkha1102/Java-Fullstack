package com.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.StaffsDAO;
import com.Entity.Staffs;

/**
 * Restful API about Staffs
 */
@RestController
public class StaffsController {
  @Autowired
  private StaffsDAO dao;

  @GetMapping("/staffs")
  public List<Staffs> getStaffList() {
    return dao.getStaffList();
  }

  // retrieves a specific user detail
  @GetMapping("/staffs/{id}")
  public Staffs getStaff(@PathVariable int id) {
    return dao.getStaff(id);
  }

  // method that posts a new user detail
  @PostMapping("/staffs")
  public void createUser(@RequestBody Staffs staff) {
    dao.addStaff(staff);
  }

  @PatchMapping("/staffs")
  public void updateUser(@RequestBody Staffs staff) {
    dao.updateStaff(staff);
  }

  @DeleteMapping("/staffs/{id}")
  public void deleteUser(@PathVariable int id) {
    dao.deleteStaff(id);
  }
}