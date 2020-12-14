# ATS - Notification Service

Author: Gustavo Peixoto de Azevedo

Creates "public" queue with address MailQueue-{stage} to receive messages commanding the sending of emails.

Each message should obey to this:

```
{      subject,      # subject for the email
       body,         # message body
       source,       # the originating email address
       recipient     # the destination email addresses
}
```

### Develop

Install

```bash
$ npm install -g serverless
$ npm i
```

Deploy

```bash
$ sls deploy
```

### Run

```bash
$ curl --location 'https://ld77i48ar9.execute-api.us-east-1.amazonaws.com/dev/notification' \
       --request GET \
       --data-raw ''
```

