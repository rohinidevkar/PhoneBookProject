package com.system.PhoneBook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.system.PhoneBook.EventDTO.PhoneBookDTO;
import com.system.PhoneBook.Model.PhoneBook;
import com.system.PhoneBook.Service.PhoneBookService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@CrossOrigin("*")

public class PhoneBookController {
    @Autowired
    private PhoneBookService pbs;
 
    @GetMapping("/main")
    public String PhoneBookController(){
		return "Welcome";
	}
    
    @PostMapping("/addnew")
    public PhoneBook addContact(@RequestBody PhoneBook pb) {
    	return pbs.save(pb);
    }
    @GetMapping("/allList")
    public List<PhoneBook> getAllList(){
    	return pbs.getAllList();
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<PhoneBook> editList(@PathVariable Long id) {
    	PhoneBook pb = pbs.editList(id);
    	if(pb == null)
    		return ResponseEntity.notFound().build();
    	return ResponseEntity.ok(pb);
    }
    @PutMapping("users/{id}")
    public ResponseEntity<PhoneBook> updateContact(@PathVariable Long id, @RequestBody PhoneBook pb){
    	PhoneBook updatedContact = pbs.updateList(id, pb);
    	if(updatedContact == null)
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    	return ResponseEntity.ok(updatedContact);
    }

}
