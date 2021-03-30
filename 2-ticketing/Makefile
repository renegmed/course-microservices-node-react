build:
	docker build -t renegmedal/auth .
	
error:
	curl ticketing.dev/api/users/sadfdsaf -H "Content-Type:application/json" -H "Accept: application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v

post-signup:
	curl -XPOST ticketing.dev/api/users/signup -H "Content-Type:application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v

post-signup2:
	curl -XPOST ticketing.dev/api/users/signup -H "Content-Type:application/json" -d '{"email":"johndoet@tesstest.com","password":"pass56789"}' -v
 