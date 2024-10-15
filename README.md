# Task 1 
# XenonStack property
This XenonStack property based project is a  basically property listing platform that allows users to browse, search, and list properties. It includes secure user authentication for managing accounts and listings, enabling users to add, edit, and view properties seamlessly.

# Features
- User Authentication: Secure sign-up, login, and logout using JWT for authentication.
- Property Listings: Users can add, edit, and delete their property listings.
- Search Functionality: Allows users to search for properties based on location, price, and other filters.
- Property Details Page: View detailed information about each property, including images, price, and contact details.
- Responsive Design: Ensures the website works smoothly on both desktop and mobile devices.
  

# Tech Stack
Frontend:-React.js,TailwindCSS,CSS3
Backend:-Node js,Express Js
Database:-MongoDb

```bash
# Initialize a package.json file for the backend
npm init -y

# Install necessary backend packages
npm install express mongoose cors bcryptjs jsonwebtoken dotenv

# Install development dependencies (optional for linting, nodemon for live reloading)
npm install --save-dev nodemon

# Create React frontend in the same folder
npx create-react-app frontend

# To run the backend with live reloading
npx nodemon server.js

# Install dependencies for React frontend
npm install axios react-router-dom

# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# To run the React frontend
npm start

# To run the backend and frontend simultaneously (from the root folder)
npm run dev
```

# Database Schema

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
```

# project Live
[Click Here](https://xenontask.vercel.app/login)

# Screenshots
# Signup page
<img width="1680" alt="Screenshot 2024-10-16 at 12 35 49 AM" src="https://github.com/user-attachments/assets/51e129b2-1273-495d-a1f6-5603da707748">
# Login page
<img width="1680" alt="Screenshot 2024-10-16 at 12 35 58 AM" src="https://github.com/user-attachments/assets/55235853-cb55-4cf2-bc1d-892deb880576">
# Home page
<img width="1680" alt="Screenshot 2024-10-16 at 12 36 06 AM" src="https://github.com/user-attachments/assets/9abfdaed-a548-425b-8906-d44d8ce9b751">
# List of properties
<img width="1680" alt="Screenshot 2024-10-16 at 12 36 14 AM" src="https://github.com/user-attachments/assets/d5dff49b-47e2-4841-8a28-edf902892373">
# Details of properties
<img width="1680" alt="Screenshot 2024-10-16 at 1 33 24 AM" src="https://github.com/user-attachments/assets/84bc2e71-da4d-4248-b0b6-a1adcb5f3604">
# Searchbar
<img width="1680" alt="Screenshot 2024-10-16 at 12 36 36 AM" src="https://github.com/user-attachments/assets/f8690f13-c2b7-4c76-8b72-364931f4ed46">
# Responsiveness
<img width="1680" alt="Screenshot 2024-10-16 at 1 19 50 AM" src="https://github.com/user-attachments/assets/8ad0e9ad-dc80-4605-9364-9e13e719c1f5">





# task 2:-

# sysopctl - System Operations Control Tool

## Project Overview

`sysopctl` is a custom Bash command-line tool designed to manage system services, processes, and backups. It provides basic functionalities such as starting services, managing system processes, and backing up important directories on your Linux system.

### Features

- Start and manage system services.
- Backup directories efficiently using `rsync`.
- Manage system processes and monitor health (future versions).

## Installation

To install `sysopctl`, follow these steps:

1. Clone this repository or download the script files.
2. Make the script executable by running:

   ```bash
   chmod +x sysopctl
   ```

3. Optionally, move it to a directory included in your `$PATH` for easier access:

   ```bash
   sudo mv sysopctl /usr/local/bin/
   ```

## Usage

The `sysopctl` command supports various subcommands to manage your system. Below are the available commands and their usage:

### 1. Starting a System Service

Use the `service_start` function to start a system service:

```bash
sysopctl service_start <service_name>
```

- **Example:**

  ```bash
  sysopctl service_start apache2
  ```

This command starts the `apache2` service. If the service name is not provided, an error message will be shown.

### 2. Backing Up a Directory

Use the `backup_system` function to create a backup of a specified directory. This function uses `rsync` to ensure that files are copied efficiently while preserving file attributes.

```bash
sysopctl backup_system <directory_path>
```

- **Example:**

  ```bash
  sysopctl backup_system /home/user/documents
  ```

This command creates a timestamped backup of the `documents` directory at the `/backup` location. It will display a progress bar during the backup.

### 3. Other Features (Under Development)

- **Process Management:** Future versions of `sysopctl` will include commands to manage system processes.
- **System Health Monitoring:** Commands for monitoring CPU, memory usage, and system health are planned for upcoming releases.

## Example

Here's an example of how to start the Apache service and create a backup of the `/var/www/html` directory:

```bash
# Start the Apache service
sysopctl service_start apache2

# Backup the website files
sysopctl backup_system /var/www/html
```

## Error Handling

- If no service name or directory path is provided, the tool will prompt the user with a specific error message.
- For the backup function, if the directory path does not exist, the tool will show an error and stop execution.

## Dependencies

This script relies on `systemctl` and `rsync`, which are available on most Linux distributions. Ensure you have these installed before using the tool.

- **Systemctl:** Used to start system services.
- **Rsync:** Used for efficient file backups.

  ### Given below are the usage examples/
  
  ![Screenshot 2024-10-15 201008](https://github.com/user-attachments/assets/0ce57aff-80bf-4e4b-a933-3dddf6405c27)

  
 ![Screenshot 2024-10-15 195414](https://github.com/user-attachments/assets/5511c7fc-b9b9-469a-a2d9-ba166c355d64)

 
![Screenshot 2024-10-15 195638](https://github.com/user-attachments/assets/4149301c-af25-4477-af77-139827f3b815)


![Screenshot 2024-10-15 195753](https://github.com/user-attachments/assets/90eb92d1-8bfd-4517-9066-d53b63d69464)


![Screenshot 2024-10-15 195926](https://github.com/user-attachments/assets/e05a4d18-c2e8-4b94-9210-5f79474c7dab)


![Screenshot 2024-10-15 200124](https://github.com/user-attachments/assets/183aea63-3812-4300-b886-7c23dd477cb3)


![Screenshot 2024-10-15 200220](https://github.com/user-attachments/assets/7c19e632-8fce-43ef-a87f-fe9c9ba75733)


![Screenshot 2024-10-15 200358](https://github.com/user-attachments/assets/b949e68b-960f-4ea3-b56c-18252ffb3468)



```











