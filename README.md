# NMM Web 



Installation
------------

Dependencies 

`sudo gem install bundler`

`bundle install --path vendor/bundle`

`bundle update`


Jekyll

`sudo gem install jekyll`


Running the Server
------------------


`bundle exec jekyll serve`


Start start (dev environment)

`bundle exec jekyll serve --config _config.yml,_config.dev.yml`


Generate stylesheets
--------------------

`npm run scss`


---

## Main Navigation

```
.
├── Products
├── Newsroom
├── Company
── Contact

```


## Footer Navigation

```
.
├── Products
|   ├── Success Stories
|   ├── FAQs
|   └── How it works
├── Newsroom
|   ├── Media
|   ├── Events
|   └── Publications
├── Company
|   ├── Leadership Team
|   ├── Advisory Board
|   └── Academic Advisors
├── Legal
|   ├── Terms of Use
|   └── Privacy Policy
├── Contact
|   ├── 1800 JFK Blvd. Suite 300
|   |   Philadelphia, PA 19103
|   ├── 267-603-2378
|   ├── info@nearmissmgmt.com
|   ├── twitter.com/nearmissmgmt
└───└── linkedin.com/company/near-miss-management

```

## Tips

### Update the copyright year on January 1st

The site is built into static HTML, so it needs to be rebuilt every year to
update the copyright footers.

```
git checkout master
git pull
git commit --allow-empty -m 'chore: update yearly dates :)'
git push
```
