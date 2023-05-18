package com.nkha102.asmfullstack.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nkha102.asmfullstack.DAO.StaffDAO;
import com.nkha102.asmfullstack.Entity.Staff;

@RestController
public class StaffController {

    @Autowired
    private StaffDAO dao;

    @GetMapping("/staff")
    public List<Staff> getStaffList() {
        return dao.getStaffList();
    }

    @GetMapping("/staff/{id}")
    public Staff getStaff(@PathVariable int id) {
        return dao.getStaff(id);
    }

    @PostMapping("/staff")
    public void createStaff(@RequestBody Staff staff) {
        dao.addStaff(staff);
    }

}
