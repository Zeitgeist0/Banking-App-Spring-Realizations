package com.bankingappfinal.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "customers")
@Getter
@Setter
@NamedEntityGraph(
  name = "customersFull",
  attributeNodes = {
    @NamedAttributeNode(value = "employers"),
    @NamedAttributeNode(value = "accounts"),
  }
)
public class Customer extends AbstractEntity {

  @Column(name = "name")
 private String name;
  @Column(name = "password")
  private String password;
  @Column(name = "email")
 private String email;
  @Column(name = "age")
 private Integer age;
@Column(name = "phone_number")
private String phoneNumber;
  @ManyToMany(fetch = FetchType.LAZY)
  private Set<Employer> employers;

  @OneToMany(mappedBy = "customer" ,  orphanRemoval = true ,fetch = FetchType.LAZY , cascade = CascadeType.ALL)
  private Set<Account> accounts = new LinkedHashSet<>();


 @Override
 public String toString() {
  return "Customer{" +
    "name='" + name + '\'' +
    ", email='" + email + '\'' +
    ", age=" + age +
    ", phoneNumber='" + phoneNumber + '\'' +
    '}';
 }
}
