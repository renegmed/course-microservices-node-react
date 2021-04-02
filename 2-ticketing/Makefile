skaffold:
	skaffold dev

build:
	docker build -t renegmedal/auth .
	
error:
	curl https://ticketing.dev/api/users/sadfdsaf --insecure -H "Content-Type:application/json" -H "Accept: application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v

post-signup:
	curl -XPOST https://ticketing.dev/api/users/signup --insecure -H "Content-Type:application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v

post-signup2:
	curl -XPOST https://ticketing.dev/api/users/signup --insecure -H "Content-Type:application/json" -d '{"email":"johndoet@tesstest.com","password":"pass56789"}' -v
 
