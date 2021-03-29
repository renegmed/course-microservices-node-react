build:
	docker build -t renegmedal/auth .
	
post-signup:
	curl -XPOST ticketing.dev/api/users/signup -H "Content-Type:application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v