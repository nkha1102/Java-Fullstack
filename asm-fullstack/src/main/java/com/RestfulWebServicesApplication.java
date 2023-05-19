package com;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.Config.SpringWebConfig;

@SpringBootApplication
public class RestfulWebServicesApplication extends AbstractAnnotationConfigDispatcherServletInitializer{

    // @Autowired
    // private JdbcTemplate jdbcTemplate;
    public static void main(String[] args) {
        // ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        SpringApplication.run(RestfulWebServicesApplication.class, args);
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {
      return new Class[0];
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
      return new Class[]{SpringWebConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
      return new String[]{"/"};
    }

    // @Override
    // public void run(String... args) throws Exception {
    //     // String sql = "SELECT * FROM staffs";
    //     // List<Staff> staffs = jdbcTemplate.query(sql,
    //     //         BeanPropertyRowMapper.newInstance(Staff.class));
    //     // System.out.println("a"); 
    //     //customers.forEach(System.out :: println);
    // }
}