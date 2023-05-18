package com.nkha102.asmfullstack.DAO;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nkha102.asmfullstack.Entity.Staff;

@Service
public class StaffDAO {
    static ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

    public StaffDAO() {
        super();
        Object bean = ctx.getBean("dataSource");
        jdbcTemplate = new JdbcTemplate((DataSource) bean);
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public ArrayList<Staff> getStaffList() {
        String sql = "SELECT * FROM staff";
        ArrayList<Staff> staffs = (ArrayList<Staff>) jdbcTemplate.query(sql,
                BeanPropertyRowMapper.newInstance(Staff.class));
        return staffs;
    }

    public Staff getStaff(int id) {
        String sql = "SELECT * FROM staff where id = ?";
        Staff staff = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Staff.class), id);
        return staff;
    }

    @ResponseBody
    public ResponseEntity<?> addStaff(Staff staff) {
        String sql = "INSERT INTO staff (name, birthdate, role, sex, password) VALUES (?, ?, ?, ?, ?)";
        int result = jdbcTemplate.update(sql, staff.getName(), staff.getBirthDate(), staff.getRole(), staff.getSex(),
                staff.getPassword());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
