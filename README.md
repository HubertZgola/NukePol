Link to the website: https://nukepol.azurewebsites.net/

# NukePol
A nuclear explosion detection and simulation application providing interactive visualization of detonation effects and report generation. It features a navigation bar allowing access to detonation settings and report downloads. Users can configure basic and advanced simulation parameters, then observe results on an interactive map. The reporting function delivers detailed analyses and charts for better understanding of potential hazards. Additionally, the application offers information on prevention and risks related to detonation effects, based on current scientific and legal data.

![NukePol1](https://github.com/HubertZgola/NukePol/assets/99662754/2fc9ab19-0aca-4ac0-a1a5-adf9ba6beb4d)
![NukePol2](https://github.com/HubertZgola/NukePol/assets/99662754/ff2396cc-b5ec-4d4d-82f3-558cd0b54a2c)
![NukePol3](https://github.com/HubertZgola/NukePol/assets/99662754/63aff087-d77b-4f52-a4df-a4247960a5c1)
![NukePol4](https://github.com/HubertZgola/NukePol/assets/99662754/1171433a-a13c-42b8-8515-4c371d00054a)
![NukePol5](https://github.com/HubertZgola/NukePol/assets/99662754/964176ad-dfe5-4c9c-bdb7-d5d378218351)

## How to run the application on your local machine

To run the application, follow these steps:

### 1. Install Docker and Ansible

Make sure you have Docker and Ansible installed on your system. If not, follow the instructions on the following pages:

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

### 2. Run the Ansible Playbook

Go to the nukepol application directory.
Run the Ansible playbook located in the repository by executing CLI command:
ansible-playbook playbook.yml

This playbook will create a directory, clone the repository, build a Docker image, and run a Docker container with the NukePol application, which will be accessible on port 9123 on your localhost.

### 3. Open the Application in your Browser

After the playbook execution is finished, open your web browser and navigate to:

http://localhost:9123/

Works! Have fun!

### 4. Additional information:

If the interface seems too large, the percentage of the website size should be reduced.
