package com.Entity;

import java.io.Serializable;

/**
 * Staffs class document
 */
public class Staffs implements Serializable {

    private int id;
    private String name;
    private String birthdate;
    private String role;
    private String sex;
    private String password;
    private String image;

    public Staffs() {
    }

    public Staffs(int id, String name, String birthdate, String role, String sex, String password, String image) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.role = role;
        this.sex = sex;
        this.password = password;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Staff ID = " + this.id + "Name = " + name + "Birthdate = " + birthdate + "Role = " + role + "Sex = "
                + sex + "Password = " + password;
    }

    public Staffs addStaff(Staffs staff) {
        return null;
    }

}
