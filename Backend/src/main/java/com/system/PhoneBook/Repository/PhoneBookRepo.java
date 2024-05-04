package com.system.PhoneBook.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.system.PhoneBook.Model.PhoneBook;

@Repository

public interface PhoneBookRepo extends JpaRepository<PhoneBook, Long>{
	

}
