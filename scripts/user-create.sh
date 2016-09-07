  curl --include --request POST http://tic-tac-toe.wdibos.com/sign-up \
     --header "Content-Type: application/json" \
     --data '{
       "credentials": {
         "email": "james@coombs.email",
         "password": "12",
         "password_confirmation": "12"
       }
     }'
     
