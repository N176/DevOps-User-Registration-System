Sure, here's the updated `README.md` without the GitHub workflow section:

* * * * *

DevOps User Registration System
===============================

A containerized Node.js application demonstrating modern DevOps practices including CI/CD, containerization, monitoring, and logging.

🚀 Features
-----------

### Containerization

-   Docker and Docker Compose setup
-   Multi-stage builds
-   Volume management for data persistence

### Monitoring & Logging

-   Structured logging with Winston
-   Request/Response logging
-   Performance monitoring

### Database

-   MySQL with Docker
-   Data persistence
-   Migration support

🛠️ Tech Stack
--------------

-   Node.js & Express
-   MySQL
-   Docker & Docker Compose
-   Winston Logger
-   EJS Templates

📋 Prerequisites
----------------

-   Node.js 18+
-   Docker & Docker Compose
-   Git

🚀 Quick Start
--------------

1.  Clone the repository:

    ```
    git clone https://github.com/yourusername/devops-user-registration.git
    cd devops-user-registration

    ```

2.  Environment Setup:

    ```
    cp .env.example .env
    # Update environment variables as needed

    ```

3.  Run with Docker:

    ```
    npm run docker:run

    ```

    Or run locally:

    ```
    npm install
    npm run dev

    ```

🐳 Docker Commands
------------------

-   **Build and run containers**:

    ```
    npm run docker:run

    ```

-   **Stop containers**:

    ```
    npm run docker:stop

    ```

-   **Build image only**:

    ```
    npm run docker:build

    ```

📊 Monitoring & Logs
--------------------

-   Access logs in `combined.log` and `error.log`
-   Request metrics logged for each API call
-   Performance monitoring through request duration tracking

🧪 Testing
----------

-   **Run tests**:

    ```
    npm test

    ```

📁 Project Structure
--------------------

```
.
├── src/
│   ├── config/           # App configuration
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Express middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── views/            # EJS templates
├── tests/                # Test files
├── Dockerfile            # Container configuration
├── docker-compose.yml    # Multi-container setup
└── package.json          # Project dependencies

```

🔐 Security
-----------

-   Environment variable management
-   Docker security best practices
-   Request logging for audit trails

🤝 Contributing
---------------

1.  Fork the repository
2.  Create a feature branch
3.  Commit changes
4.  Push to the branch
5.  Open a Pull Request

📝 License
----------

This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
---------
Your Name
- GitHub: [@My-Github](https://github.com/N176)
- LinkedIn: [My-LinkedIn](https://linkedin.com/in/nazish-ali-7b09a0257)

* * * * *

