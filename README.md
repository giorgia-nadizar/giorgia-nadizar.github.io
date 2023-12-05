# Personal Website
Proudly developed using VueJs.
Visible on giorgia-nadizar.github.io

## Project setup
Install all Vue dependencies
```
npm install
```
Install GSheet API client (to deal with publications and CV updates)
```
npm install googleapis@39 --save
```

## Website deployment
```
npm run deploy
```

## Notes
The first time on a new laptop:
1.  Generate a new ssh key
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

```
eval "$(ssh-agent -s)"
```

```
ssh-add ~/.ssh/id_ed25519
```

2. Add the ssh key to the github account
```
cat ~/.ssh/id_ed25519.pub
```
Settings > SSH and CGP keys > SSH keys > New SSH key
