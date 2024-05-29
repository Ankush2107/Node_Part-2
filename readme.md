# NodeJs

### So, Now we are here to create our first Node project🚀...

#### step 1: Use the following command on your terminal

```
    npm -v
``` 
you will get some version of npm getting printed. But, if you are not aware about `npm`, it is `node package manager` which contains a lot packages for different use cases.

### step 2:

```
    npm init
```

when you do npm init, it will open a prompt in front of you, this prompt will ask you very basic details.
By this simple few steps you will `package.json` file in project directory.

#### Your basic project setup is ready.

### step 3: install axios from npm

```
    npm install axios
```

Once you installed your first package, third party, you can see there is a property dependencies is added in your `package.json` file automally after installing the required package. Apart from that you got two new things `node_modules` and `package-lock-json` in your project directory.

#### What is `node_modules`?
As you saw, this folder was not there earlier, and you also didn't created it explicitly. So node automatically created it.

#### What is `package-lock-json`?
In package-lock-json file all of the detailed dedicated dependencies are going to be present.

## Note: Once you start building your project your going to install a lot of dependencies, and if you install a lot of dependencies a lot thing will get downloaded in your node modules folder, So this node module folder will become very heavy, So when we upload our project on github we don't upload the node modules folder.  