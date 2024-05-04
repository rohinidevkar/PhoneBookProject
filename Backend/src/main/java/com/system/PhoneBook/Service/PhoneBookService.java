package com.system.PhoneBook.Service;

import java.util.List;

import com.system.PhoneBook.EventDTO.PhoneBookDTO;
import com.system.PhoneBook.Model.PhoneBook;


public interface PhoneBookService {
	PhoneBook addContact(PhoneBook pb);
	List<PhoneBook> getAllList();
	PhoneBook save(PhoneBook pb);
	PhoneBook editList(long id);
	PhoneBook updateList(Long id, PhoneBook pb);
}
