# Ubuntu Virtual Machine #

This is a very flexible virtual machine that allows you to create a simple Ubuntu Server 20.04 LTS (Focal Fossa) for LAMP stack developers which also includes many related modern development tools.

Please read all the document before start using the project.

### Overview ###

A lot of PHP websites and applications don’t require much server configuration or overhead at first. This virtual machine should have all your needs for doing basic development so you don’t have to worry about configuring the virtual environment and you can simply focus on your code.

The virtual machine will be provisioned with the following software:

* Ubuntu Linux.
* Apache Web Server.
* MySQL database.
* PHP scripting language.
* PHPMyAdmin.
* NodeJS open source server environment.
* Composer, Yarn packages managers.

### Setup ###

The project has the following pre-requisites:

* Git [http://git-scm.com/](http://git-scm.com/)
* Vagrant [http://www.vagrantup.com/](http://www.vagrantup.com/)
* VirtualBox [http://www.virtualbox.org/](http://www.virtualbox.org/)

Now execute the following command:
```
$ vagrant up
```

Once ready, you can test it by opening following URL on your browser:
```
http://192.168.80.80/
https://192.168.80.80/ (secure)
```

If you want to manage the MySQL database:
```
http://192.168.80.80/phpmyadmin/
https://192.168.80.80/phpmyadmin/ (secure)

Database Name : development
User : root
Password : pass
```

That's all, as you can see, very simple.

If you need more information related to Vagrant, go to the official [Vagrant documentation](https://www.vagrantup.com/docs/).

### Fixing known issues ###

##### Failed to open/create the internal network #####

If you are on Windows, then you may get the following error:
```
There was an error while executing `VBoxManage`, a CLI used by Vagrant
for controlling VirtualBox. The command and stderr is shown below.
Command: ["startvm", "23fa136e-013c-40f4-bcd1-76f195eb863a", "--type", "headless"]
Stderr: VBoxManage.exe: error: Failed to open/create the internal network 'HostInterfaceNetworking-
VirtualBox Host-Only Ethernet Adapter #2' (VERR_INTNET_FLT_IF_NOT_FOUND).
VBoxManage.exe: error: Failed to attach the network LUN (VERR_INTNET_FLT_IF_NOT_FOUND)
VBoxManage.exe: error: Details: code E_FAIL (0x80004005), component ConsoleWrap, interface IConsole
```
Open Control Panel >> Network and Sharing Center. Now click on Change Adapter Settings. Right click on the adapter whose Name or the Device Name matches with VirtualBox Host-Only Ethernet Adapter #2 and click on Properties. Click on the Configure button.

Now click on the Driver tab. Click on Update Driver. Select Browse my computer for drivers. Now choose Let me pick from a list of available drivers on my computer. Select the choice you get and click on Next. Click Close to finish the update. Now go back to your command window and repeat the vagrant up command. It should work fine this time.

### Why Vagrant and not Docker ###

Vagrant is a tool focused on providing a consistent development environment workflow across multiple operation systems. Docker is a container management that can consistently run software as long as a containerization system exists.

Containers are generally more lightweight than virtual machines, so starting and stopping containers is extremely fast. Most common development machines don't have a containerization system built-in, and Docker uses a virtual machine with Linux installed to provide that.

Currently, Docker lacks support for certain operating systems (such as BSD). If your target deployment is one of these operating systems, Docker will not provide the same production parity as a tool like Vagrant. Vagrant will allow you to run a Windows development environment on Mac or Linux, as well.

For microservice heavy environments, Docker can be attractive because you can easily start a single Docker VM and start many containers above that very quickly. This is a good use case for Docker. Vagrant can do this as well with the Docker provider. A primary benefit for Vagrant is a consistent workflow but there are many cases where a pure-Docker workflow does make sense.

Both Vagrant and Docker have a vast library of community-contributed "images" or "boxes" to choose from.

### License ###

##### Creative Commons Attribution 4.0 International #####

Except where otherwise noted, content on this Github repository is licensed under a [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.
