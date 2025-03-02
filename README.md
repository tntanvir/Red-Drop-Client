# Blood Donation Platform

## Overview
This is a **Blood Donation Platform** built with **Django (Backend)** and **React (Frontend)**. The platform connects **blood donors** and **receivers** efficiently, allowing users to request blood donations and donors to confirm requests. The system also includes user authentication and profile management.

## Features
### User Authentication
- Users can **register**, **login**, and **logout**.
- Profile management: Users can update their **name, phone number, location, profile image, and blood group**.

### Receiver Functionality
- Can **create blood request posts**.
- Can **update and delete** their posts.
- Can view **donors who confirmed their request**.

### Donor Functionality
- Can **browse blood donation requests**.
- Can **filter requests by location**.
- Can **confirm donation requests**, which will reflect on both the **receiver's** and **donor's dashboards**.

### Dashboard
- **Receiver Dashboard**: Displays **active blood requests** and **confirmed donors**.
- **Donor Dashboard**: Displays **confirmed requests** and donation history.

## Tech Stack
### Backend:
- Django (Django Rest Framework)
- PostgreSQL (or SQLite for development)

### Frontend:
- React
- Tailwind CSS
- React Router
- Material Tailwind (for UI components)
- React Toastify (for notifications)


## Contribution
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

---
**Made with ❤️ for saving lives!**

