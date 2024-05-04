package com.system.PhoneBook.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity

public class PhoneBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;
	private String name;
	private String mobNo;
	private String email;
	public PhoneBook(long id, String name, String mobNo, String email) {
		super();
		this.id = id;
		this.name = name;
		this.mobNo = mobNo;
		this.email = email;
	}
	public PhoneBook() {
		super();
	}
	
}
