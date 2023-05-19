package com.DAO;

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

import com.Entity.Staffs;

/**
 * StaffsDAO class using for work with Staffs table from database
 */
@Service
public class StaffsDAO {
  static ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

  public StaffsDAO() {
    super();
    Object bean = ctx.getBean("dataSource");
    jdbcTemplate = new JdbcTemplate((DataSource) bean);
  }

  // private Datasource datasource;

  @Autowired
  private JdbcTemplate jdbcTemplate;

  /**
   * get StaffList get database from table
   * 
   * @return ArrayList<Staff>
   */
  public ArrayList<Staffs> getStaffList() {
    String sql = "SELECT * FROM staffs";
    ArrayList<Staffs> staffs = (ArrayList<Staffs>) jdbcTemplate.query(sql,
        BeanPropertyRowMapper.newInstance(Staffs.class));
    return staffs;
  }

  /**
   * 
   * @return
   */
  // get staff get database from table
  public Staffs getStaff(int id) {

    String sql = "SELECT * FROM staffs where id = ?";

    Staffs staff = jdbcTemplate.queryForObject(sql,
        BeanPropertyRowMapper.newInstance(Staffs.class), id);
    return staff;
  }

  /**
   * addStaffList get database from table
   * 
   * @param staff
   *              {
   *              "name":"Nam",
   *              "birthdate":"1999-10-10",
   *              "role":"2",
   *              "sex":"F",
   *              "password":"Passw0rd"
   *              }
   * @return
   */
  @ResponseBody
  public ResponseEntity<?> addStaff(Staffs staff) {

    String sql = "INSERT INTO staffs (name, birthdate, role, sex, password, image) VALUES (?, ?, ?, ?, ?, ?)";

    int result = jdbcTemplate.update(sql, staff.getName(), staff.getBirthdate(), staff.getRole(), staff.getSex(),
        staff.getPassword(), staff.getImage());
    return ResponseEntity.status(HttpStatus.CREATED).build();

  }

  @ResponseBody
  public ResponseEntity<?> updateStaff(Staffs staff) {

    String sql = "UPDATE staffs SET name = ?, birthdate = ?, role = ?, sex = ?, password = ?, image = ? WHERE id = ?";

    int result = jdbcTemplate.update(sql, staff.getName(), staff.getBirthdate(), staff.getRole(), staff.getSex(),
        staff.getPassword(), staff.getImage(), staff.getId());
    return ResponseEntity.status(HttpStatus.CREATED).build();

  }

  @ResponseBody
  public ResponseEntity<?> deleteStaff(int id) {

    String sql = "DELETE FROM staffs WHERE id = ?";

    int result = jdbcTemplate.update(sql, id);
    return ResponseEntity.status(HttpStatus.OK).build();

  }

}
