enable_ingress:
	minikube addons enable ingress
	minikube addons list

set_ingress:
	kubectl expose deployment ingress-nginx-controller --target-port=80 --type=NodePort -n kube-system
	kubectl get all -n kube-system 
	# http://ticketing.dev 

create_secret:
	kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
	kubectl get secrets

skaffold:
	skaffold dev

build:
	docker build -t renegmedal/auth .

error:
	curl https://ticketing.dev/api/users/sadfdsaf --insecure -H "Content-Type:application/json" -H "Accept: application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v
	 
post-signup:
	curl -XPOST https://ticketing.dev/api/users/signup --insecure -H "Content-Type:application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v -c cookie.txt

post-signup2:
	curl -XPOST https://ticketing.dev/api/users/signup --insecure -H "Content-Type:application/json" -d '{"email":"johndoet@tesstest.com","password":"pass56789"}' -v -c cookie.txt
 

post-signin:
	curl -XPOST https://ticketing.dev/api/users/signin --insecure -H "Content-Type:application/json" -d '{"email":"janedoer@tesstest.com","password":"pass123456"}' -v -c cookie.txt

get-signin:
	curl https://ticketing.dev/api/users/currentuser --insecure -b cookie.txt 

post-signout:
	curl -XPOST https://ticketing.dev/api/users/signout --insecure -c cookie.txt # empty out cookie

# signup-signin:
# 	curl -XPOST https://ticketing.dev/api/users/signup --insecure -H "Content-Type:application/json" -d '{"email":"robertplant@tesstest.com","password":"pass123}' -v
# 	curl -XPOST https://ticketing.dev/api/users/signin --insecure -H "Content-Type:application/json" -d '{"email":"robertplant@tesstest.com","password":"pass123"}' -v