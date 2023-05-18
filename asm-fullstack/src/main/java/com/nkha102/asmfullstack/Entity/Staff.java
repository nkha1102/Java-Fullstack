package com.nkha102.asmfullstack.Entity;

import java.io.Serializable;
import java.sql.Date;

public class Staff implements Serializable {
    private int id;
    private String name;
    private Date birthDate;
    private String role;
    private String sex;
    private String password;

    public Staff() {
    }

    public Staff(int id, String name, Date birthDate, String role, String sex, String password) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.role = role;
        this.sex = sex;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
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

    @Override
    public String toString() {
        return "Staff [id=" + id + ", name=" + name + ", birthDate=" + birthDate + ", role=" + role + ", sex=" + sex
                + ", password=" + password + "]";
    }

}
