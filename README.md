# CS-Go Bot

### Requirements

You need to install these **tools globally**:

 * [NodeJS](https://nodejs.org) v8.0 or newer
 * [Yarn](https://yarnpkg.com) v1.0 or newer
 * [Git](https://git-scm.com/)
 * [Protractor](https://www.protractortest.org)
 * $ npm install chai
 * $ npm install chai-things   
 * $ npm install chai-as-promised
 
You need to have these **configs set**:

 * have a `~/.npmrc` configured with credentials for Nexus 
   * ask your colleagues OR
   * see [Local Development Environment](https://collaboration.msi.audi.com/confluence/x/U5tbC) confluence page

&nbsp;

-----

### Checkout and run


```
# CLONE
git clone https://collaboration.msi.audi.com/stash/scm/msipric/audi-mobility-dashboard-protractor.git
cd audi-mobility-dashboard-protractor

```

Now go to: [http://localhost:8080/](http://localhost:8080/)

&nbsp;
------------


-----

### Run tests

To run the tests once do the following

```

protractor config/protractor.conf.js

```


### Useful links

 * AMD Angular Component Lib: 
   * https://amd-docs-sandbox.eu-west-1.apps.msi.audi.com/
 * Coupon Rest Api Doc
   * https://coupon-service-swagger-ui-sandbox.eu-west-1.apps.msi.audi.com/
  

