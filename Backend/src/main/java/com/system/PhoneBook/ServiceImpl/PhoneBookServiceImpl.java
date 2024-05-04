package com.system.PhoneBook.ServiceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.system.PhoneBook.Model.PhoneBook;
import com.system.PhoneBook.Repository.PhoneBookRepo;
import com.system.PhoneBook.Service.PhoneBookService;

@Service
public class PhoneBookServiceImpl implements PhoneBookService {
	@Autowired
	private PhoneBookRepo pbRepo;
	@Override
	public PhoneBook addContact(PhoneBook pb) {
		// TODO Auto-generated method stub
		return pbRepo.save(pb);
	}
	public List<PhoneBook> getAllList() {
   	 List<PhoneBook> users = pbRepo.findAll();
   	    System.out.println("Retrieved customers: " + users);
   	    return users;
   }
	@Override
	public PhoneBook save(PhoneBook pb) {
		// TODO Auto-generated method stub
		return pbRepo.save(pb);
	}
	@Override
	public PhoneBook editList(long id) {
		// TODO Auto-generated method stub
		return pbRepo.findById(id).get();
	}
	public PhoneBook updateList(Long id, PhoneBook pb) {
		Optional<PhoneBook> pbOptional = pbRepo.findById(id);
		if(pbOptional.isPresent()) {
			PhoneBook existingContact = pbOptional.get();
			existingContact.setName(pb.getName());
			existingContact.setMobNo(pb.getMobNo());
			existingContact.setEmail(pb.getEmail());
			return pbRepo.save(existingContact);
		}
		return null;
	}

}
